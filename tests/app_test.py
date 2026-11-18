"""Apptest voor Knopenteller: de gebouwde pagina's in een echte browser (Chromium via Playwright).

Gebruik:  python3 tools/build.py      (eerst bouwen; de test gebruikt index.html, nl/, de/, fr/, es/)
          python3 tests/app_test.py

Controleert:
- 5 talen x 3 leeftijdsgroepen (18-34 en 35-49 sparen nog, 50+ leeft van vermogen), geopend via een deellink:
  geen scriptfouten, land en valuta uit de link, een uitkomst, het doorstuurkaartje, geen te brede pagina op 390 px,
  en de privacytekst (zonder de zin over 'zonder winstoogmerk', de rest staat er nog).
- de deellink heen en terug: link maken in de app, openen in een browser met een andere taal, zelfde uitkomst.
- de worker: het zware rekenwerk, ook de eerste berekening bij het opstarten, draait in een worker die model.js laadt.
- de welkomst: zonder leeftijdsgroep kun je niet verder; met een groep wel.
- de werkvraag in stap 1: zichtbaar voor 50+, verborgen voor wie nog spaart, en wat je invult wordt bewaard.
- het doorstuurkaartje: weg na doorsturen, ook na herladen.

Opnieuw opgebouwd op 18 november 2026: de eerste versie (17 november) ging verloren met de sessie waarin hij
was gemaakt. Schrijft niets weg en verstuurt niets: het meten (GoatCounter) wordt in de test opgevangen.
"""
import base64
import functools
import http.server
import json
import os
import re
import sys
import threading

from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
KEY = 'buttons-v4-01'
LANG = {  # pad, land, browsertaal, valuta, valutateken
    'en': ('/', 'GB', 'en-GB', 'GBP', '£'),
    'nl': ('/nl/', 'NL', 'nl-NL', 'EUR', '€'),
    'de': ('/de/', 'DE', 'de-DE', 'EUR', '€'),
    'fr': ('/fr/', 'FR', 'fr-FR', 'EUR', '€'),
    'es': ('/es/', 'ES', 'es-ES', 'EUR', '€'),
}
GROUPS = {
    '18-34': {'personen': 1, 'leeftijdPaul': 27, 'opbouw': 1, 'startkapitaal': 20000, 'budget': 2500, 'inleg': 600},
    '35-49': {'personen': 2, 'leeftijdPaul': 42, 'leeftijdDiana': 40, 'opbouw': 1, 'startkapitaal': 150000, 'budget': 3500, 'inleg': 1200},
    '50+': {'personen': 2, 'leeftijdPaul': 60, 'leeftijdDiana': 58, 'startkapitaal': 600000, 'budget': 3800},
}
# privacytekst: deze zin is weg (Pro wordt betaald), de zin erna moet er nog staan
PRIV_GONE = {'en': 'non-commercial', 'nl': 'winstoogmerk', 'de': 'nicht kommerziell', 'fr': 'sans but lucratif', 'es': 'sin ánimo de lucro'}
PRIV_KEPT = {'en': 'What you send through', 'nl': 'Wat je via', 'de': 'Was Sie über', 'fr': 'Ce que vous envoyez via', 'es': 'Lo que envíes mediante'}
PRIV_HEAD = {'en': 'Contact.', 'nl': 'Contact.', 'de': 'Kontakt.', 'fr': 'Contact.', 'es': 'Contacto.'}

results = []


def check(name, ok, detail=''):
    results.append((name, bool(ok), detail))
    print(('ok    ' if ok else 'FOUT  ') + name + ('' if ok or not detail else ' — ' + str(detail)))


def plan_hash(state, country, cur, lists=None):
    o = {'s': state, 'c': country, 'u': cur}
    if lists is not None:
        o['l'] = lists
    raw = base64.urlsafe_b64encode(json.dumps(o).encode('utf-8')).decode('ascii').rstrip('=')
    return raw


def built_up_to_date():
    src = os.path.getmtime(os.path.join(ROOT, 'src', 'index.html'))
    return all(os.path.getmtime(os.path.join(ROOT, p, 'index.html')) >= src for p in ['', 'nl', 'de', 'fr', 'es'])


def main():
    if not built_up_to_date():
        print('De gebouwde pagina\'s zijn ouder dan src/index.html. Bouw eerst: python3 tools/build.py')
        return 2

    # zonder browser: de verwijderde zin staat nergens meer in de gebouwde pagina's
    for lang in LANG:
        f = os.path.join(ROOT, LANG[lang][0].strip('/'), 'index.html')
        txt = open(f, encoding='utf-8').read()
        hits = [w for w in PRIV_GONE.values() if w in txt]
        check('privacy (bestand) %s: geen "zonder winstoogmerk"-zin' % lang, not hits, hits)

    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a, **k):
            pass
    handler = functools.partial(Quiet, directory=ROOT)
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = 'http://127.0.0.1:%d' % srv.server_address[1]

    with sync_playwright() as pw:
        br = pw.chromium.launch()

        def open_page(path, locale, viewport=None, perms=None):
            ctx = br.new_context(locale=locale, viewport=viewport or {'width': 390, 'height': 844})
            if perms:
                ctx.grant_permissions(perms, origin=base)
            ctx.add_init_script('window.__trkTest = [];')
            pg = ctx.new_page()
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.goto(base + path)
            pg.wait_for_timeout(3500)
            return ctx, pg, errs

        # ---------- 5 talen x 3 groepen ----------
        for lang, (path, ctry, loc, cur, sym) in LANG.items():
            for g, st in GROUPS.items():
                ctx, pg, errs = open_page(path + '#plan=' + plan_hash(st, ctry, cur), loc)
                r = pg.evaluate("""(a) => {
                  const vis = id => { const e = document.getElementById(id); return !!e && !e.hidden && getComputedStyle(e).display !== 'none'; };
                  const pb = document.querySelector('[data-t="priv.body"]');
                  return {
                    ctry: document.getElementById('q-country').value, cur: document.getElementById('s-cur').value,
                    empty: document.documentElement.classList.contains('is-empty'),
                    opb: vis('opb-card'), opbText: (document.getElementById('opb-card') || {}).innerText || '',
                    status: vis('status-card'), verdict: ((document.getElementById('verdict') || {}).innerText || '').trim(),
                    tip: vis('tip-card'), intro: !document.getElementById('intro').hidden,
                    sw: document.documentElement.scrollWidth, vw: innerWidth,
                    priv: pb ? pb.innerHTML : '', trk: window.__trkTest.slice()
                  };
                }""", None)
                name = '%s %s' % (lang, g)
                opbouw = 'opbouw' in st
                check(name + ': geen scriptfouten', not errs, errs[:2])
                check(name + ': rekenwerk in de worker (model.js)', len(pg.workers) == 1 and 'model.js' in pg.workers[0].url, [w.url for w in pg.workers])
                check(name + ': land en valuta uit de link', r['ctry'] == ctry and r['cur'] == cur, '%s %s' % (r['ctry'], r['cur']))
                check(name + ': link geladen zonder welkomstvenster', not r['intro'] and 'reach-shared-link' in r['trk'], r['trk'])
                if opbouw:
                    check(name + ': uitkomstkaart met bedrag', r['opb'] and sym in r['opbText'] and re.search(r'\d', r['opbText']), r['opbText'][:80])
                else:
                    check(name + ': oordeel met tekst', r['status'] and len(r['verdict']) > 10, r['verdict'][:80])
                check(name + ': doorstuurkaartje zichtbaar', r['tip'] and not r['empty'])
                check(name + ': niet breder dan 390 px', r['sw'] <= r['vw'], '%s > %s' % (r['sw'], r['vw']))
                p = r['priv']
                check(name + ': privacytekst aangepast, rest staat er', PRIV_GONE[lang] not in p and PRIV_KEPT[lang] in p and PRIV_HEAD[lang] in p)
                ctx.close()

        # ---------- deellink heen en terug ----------
        lists = {'perP': [], 'perD': [], 'pots': [{'n': 'Pot', 'w': 0, 'k': 'l', 'a': 25000, 'f': 67, 'u': 0, 'x': 0}],
                 'debts': [], 'stud': [], 'oth': [], 'inl': []}
        ctx, pg, errs = open_page('/nl/#plan=' + plan_hash(GROUPS['35-49'], 'NL', 'EUR', lists), 'nl-NL', perms=['clipboard-read', 'clipboard-write'])
        first = pg.evaluate("() => document.getElementById('opb-card').innerText")
        pg.click('.share-open')
        pg.wait_for_timeout(300)
        pg.click('#sh-link')
        pg.wait_for_timeout(300)
        link = pg.evaluate('navigator.clipboard.readText()')
        ctx.close()
        check('deellink: gemaakt met #plan= (cijfers achter het hekje)', '#plan=' in link and '?plan=' not in link, link[:60])
        try:
            o = json.loads(base64.urlsafe_b64decode(link.split('#plan=')[1] + '=' * (-len(link.split('#plan=')[1]) % 4)))
        except Exception as e:  # noqa: BLE001
            o = {}
        check('deellink: bevat land, valuta en de pot', o.get('c') == 'NL' and o.get('u') == 'EUR' and len((o.get('l') or {}).get('pots', [])) == 1, o.get('c'))
        rel = link[link.index('/', link.index('//') + 2):]
        ctx, pg, errs = open_page(rel, 'en-US')
        again = pg.evaluate("() => ({ txt: document.getElementById('opb-card').innerText, ctry: document.getElementById('q-country').value, cur: document.getElementById('s-cur').value })")
        check('deellink: Amerikaanse browser krijgt Nederland en euro', again['ctry'] == 'NL' and again['cur'] == 'EUR', again['ctry'] + ' ' + again['cur'])
        check('deellink: dezelfde uitkomst na openen', again['txt'] == first and not errs, errs[:1])
        ctx.close()
        # oude vorm (?plan=) zonder lijsten, in een andere taal dan de link
        ctx, pg, errs = open_page('/nl/?plan=' + plan_hash(GROUPS['50+'], 'NL', 'EUR') + '#overview', 'en-US')
        r = pg.evaluate("() => ({ ctry: document.getElementById('q-country').value, cur: document.getElementById('s-cur').value, url: location.pathname + location.search + location.hash })")
        check('oude deellink (?plan=, zonder lijsten): Nederland en euro, adres opgeschoond', r['ctry'] == 'NL' and r['cur'] == 'EUR' and r['url'] == '/nl/#overview' and not errs, r)
        ctx.close()

        # ---------- welkomst ----------
        for band, want_opb in [('0', True), ('2', False)]:
            ctx, pg, errs = open_page('/nl/', 'nl-NL')
            ok_open = pg.evaluate("() => !document.getElementById('intro').hidden")
            pg.click('#intro-next')
            pg.wait_for_timeout(300)
            pg.click('#slot-ok')
            pg.wait_for_timeout(300)
            blocked = pg.evaluate("() => !document.getElementById('intro').hidden && !document.getElementById('age-need').hidden")
            pg.check('input[name="age-band"][value="%s"]' % band)
            pg.click('#slot-ok')
            pg.wait_for_timeout(1500)
            r = pg.evaluate("() => ({ closed: document.getElementById('intro').hidden, opb: document.documentElement.classList.contains('is-opb') })")
            check('welkomst (groep %s): eerst groep kiezen, daarna verder' % band, ok_open and blocked and r['closed'] and r['opb'] == want_opb and not errs, (ok_open, blocked, r, errs[:1]))
            ctx.close()

        # ---------- werkvraag in stap 1 ----------
        ctx, pg, errs = open_page('/nl/#plan=' + plan_hash(GROUPS['50+'], 'NL', 'EUR'), 'nl-NL')
        pg.evaluate("() => { location.hash = '#input'; }")
        pg.wait_for_timeout(800)
        shown = pg.evaluate("() => !document.getElementById('wk1-box').hidden")
        pg.fill('#wk1-amt', '2500')
        try:  # het leeftijdsveld verschijnt na de herberekening
            pg.wait_for_function("() => !document.getElementById('wk1-till').hidden", timeout=8000)
            till = True
        except Exception:  # noqa: BLE001
            till = False
        pg.fill('#wk1-age', '64')
        pg.wait_for_timeout(600)
        saved = pg.evaluate("() => { try { return JSON.parse(localStorage.getItem('%s')).state; } catch (e) { return {}; } }" % KEY)
        check('werkvraag 50+: zichtbaar, leeftijd verschijnt, invoer bewaard',
              shown and till and saved.get('werkP') == 2500 and saved.get('werkTotP') == 64 and not errs,
              (shown, till, saved.get('werkP'), saved.get('werkTotP'), errs[:1]))
        ctx.close()
        ctx, pg, errs = open_page('/nl/#plan=' + plan_hash(GROUPS['18-34'], 'NL', 'EUR'), 'nl-NL')
        pg.evaluate("() => { location.hash = '#input'; }")
        pg.wait_for_timeout(800)
        check('werkvraag 18-34: verborgen (wie spaart, werkt al)', pg.evaluate("() => document.getElementById('wk1-box').hidden") and not errs)
        ctx.close()

        # ---------- uitleg achter een i en derde keuze bij man/vrouw ----------
        ctx, pg, errs = open_page('/nl/#plan=' + plan_hash(dict(GROUPS['50+'], pensioenPaul=1200), 'NL', 'EUR'), 'nl-NL')
        pg.evaluate("() => { location.hash = '#input'; }")
        pg.wait_for_timeout(800)
        pg.evaluate("() => { document.querySelector('input[name=\"in-mode\"][value=\"all\"]').click(); document.querySelectorAll('details').forEach(d => d.open = true); }")
        pg.wait_for_timeout(2000)
        r = pg.evaluate("""() => {
          const vis = [...document.querySelectorAll('.ib')].filter(b => b.offsetParent).map(b => b.dataset.ib);
          const loose = [...document.querySelectorAll('.page:not([hidden]) .hint')].filter(e => e.offsetParent && !e.closest('.ipop') && /Nibud|forfait|ingangsleeftijd|levensverwachting bij je leeftijd/.test(e.innerText)).length;
          return { vis, loose, closed: [...document.querySelectorAll('.ipop')].every(p => p.hidden) };
        }""")
        need = ['sex', 'spAge', 'spAmt', 'penAmt', 'penAge', 'pf', 'box3', 'eind', 'rest', 'infl', 'cost', 'cur']
        check('uitleg: een i bij elk achtergrondveld, kaders dicht, geen losse achtergrondtekst',
              all(k in r['vis'] for k in need) and r['closed'] and r['loose'] == 0 and not errs, (sorted(set(need) - set(r['vis'])), r['loose']))
        b = pg.locator('.ib[data-ib="box3"]').first
        b.click()
        pg.wait_for_timeout(300)
        o = pg.evaluate("""() => { const b = document.querySelector('.ib[data-ib="box3"]'), p = document.getElementById(b.getAttribute('aria-controls'));
          return { open: !p.hidden, exp: b.getAttribute('aria-expanded'), txt: p.innerText.length, others: [...document.querySelectorAll('.ipop')].filter(x => !x.hidden).length, trk: window.__trkTest.slice() }; }""")
        pg.keyboard.press('Escape')
        pg.wait_for_timeout(200)
        shut = pg.evaluate("() => [...document.querySelectorAll('.ipop')].every(p => p.hidden)")
        check('uitleg: i opent het kader (een tegelijk), Escape sluit, geteld',
              o['open'] and o['exp'] == 'true' and o['txt'] > 40 and o['others'] == 1 and shut and 'extra-info-box3' in o['trk'], o)
        vals = []
        for v in ['0', '1', '-1']:
            pg.check('input[name="q-geslD"][value="%s"]' % v, force=True)
            pg.wait_for_timeout(1500)
            vals.append(pg.evaluate("() => JSON.parse(localStorage.getItem('%s')).state.geslD" % KEY))
        check('man/vrouw: derde keuze "Liever niet" bewaart -1 (gemiddelde)', vals == [0, 1, -1] and not errs, vals)
        ctx.close()

        # ---------- doorstuurkaartje ----------
        ctx, pg, errs = open_page('/nl/#plan=' + plan_hash(GROUPS['18-34'], 'NL', 'EUR'), 'nl-NL')
        pg.click('#tc-go')
        pg.wait_for_timeout(500)
        gone = pg.evaluate("() => document.getElementById('tip-card').hidden")
        trk = pg.evaluate('() => window.__trkTest.slice()')
        pg.reload()
        pg.wait_for_timeout(2500)
        still = pg.evaluate("() => document.getElementById('tip-card').hidden")
        check('doorstuurkaartje: weg na doorsturen, ook na herladen, en geteld',
              gone and still and 'reach-tip-card' in trk and not errs, (gone, still, trk))
        ctx.close()
        br.close()
    srv.shutdown()

    bad = [r for r in results if not r[1]]
    print()
    print('%d van %d controles mislukt' % (len(bad), len(results)) if bad else 'Alle %d controles geslaagd' % len(results))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
