"""Test voor de vraagpagina's die in één taal bestaan (qp.<naam>.* in src/i18n/<taal>.js).

Gebruik:  python3 tools/build.py      (eerst bouwen)
          python3 tests/vraagpaginas_test.py [naam ...]

Leest de pagina's uit sitemap.xml (alles met data-page) en controleert per pagina, op 390 en 320 px:
- het bestand zelf (zonder script): één h1 met de vraag, het korte antwoord, de knop en de veelgestelde vraag;
  titel, omschrijving, canonical en hreflang alleen naar zichzelf;
- in de browser: geen scriptfouten, geen ruwe tekstsleutels of {namen}, geen horizontaal scrollen, het blok staat er
  en de cockpit nog niet;
- het meetpunt reach-landing-<naam> gaat af (één keer), de wielvraag staat klaar in de stand die erbij hoort
  (free en invest: 18-34, retire: 35-49, de rest 50-plus) en een pagina over één land opent in dat land;
- de knop opent de eerste vraag van de route; na sluiten staat de cockpit met de wielvraag als kop;
- na herladen is de pagina gewoon de app (het blok is weg);
- de taalkeuze gaat naar de startpagina van de gekozen taal;
- de lijst onderaan bevat alleen pagina's van deze taal, en de FAQ van de app heeft de vraag van elke pagina van die taal.

Schrijft niets weg en verstuurt niets: het meten (GoatCounter) wordt in de test opgevangen.
"""
import functools
import html as H
import http.server
import os
import re
import sys
import threading

from playwright.sync_api import sync_playwright

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SITE = 'https://countingbuttons.com'
LOC = {'nl': 'nl-NL', 'en': 'en-GB', 'de': 'de-DE', 'fr': 'fr-FR', 'es': 'es-ES'}
BAND = {'free': 0, 'invest': 0, 'retire': 1}
GT = {'enough': 'goal.1.t', 'spend': 'goal.2.t', 'earlier': 'goal.3.t', 'free': 'goalY.6.t', 'invest': 'goalY.4.t', 'retire': 'goalY.2.t'}
RAW = re.compile(r'\b(qp|lp|tv|faq|goal|goalY|site|rel|tax|spTip)\.[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*\b(?=[^a-z]|$)|\{[A-Za-z]+\}')

results = []


def check(name, ok, detail=''):
    results.append((name, bool(ok)))
    if not ok or '-v' in sys.argv:
        print(('ok    ' if ok else 'FOUT  ') + name + ('' if ok or not detail else ' — ' + str(detail)[:300]))


def norm(s):
    return re.sub(r'\s+', ' ', (s or '').replace(' ', ' ').replace(' ', ' ')).strip()


def pages_from_sitemap():
    sm = open(os.path.join(ROOT, 'sitemap.xml'), encoding='utf-8').read()
    out = []
    for loc in re.findall(r'<loc>([^<]+)</loc>', sm):
        path = loc.replace(SITE, '')
        f = os.path.join(ROOT, path.strip('/'), 'index.html')
        if not os.path.exists(f):
            continue
        head = open(f, encoding='utf-8').read(4000)
        m = re.search(r'<html lang="([a-z]+)"[^>]*data-goal="([a-z]+)" data-page="([a-z0-9-]+)"([^>]*)>', head)
        if m:
            c = re.search(r'data-page-country="([A-Z]+)"', m.group(4))
            out.append({'path': path, 'lang': m.group(1), 'goal': m.group(2), 'id': m.group(3), 'country': c.group(1) if c else '', 'file': f})
    return out


STATE = """(() => { const g = k => { try { return JSON.parse(localStorage.getItem(k) || 'null'); } catch (e) { return null; } };
  const st = (g('buttons-v4-01') || {}).state || {}, q = document.getElementById('qp'), vis = e => !!(e && e.offsetParent !== null);
  return { lang: document.documentElement.lang, blockVis: vis(q), h1s: [...document.querySelectorAll('h1')].filter(vis).map(h => h.textContent),
    cockpit: vis(document.getElementById('tvh-q')), cq: (document.getElementById('tvh-q') || {}).textContent || '',
    text: document.body.innerText, ov: document.documentElement.scrollWidth > innerWidth + 1, route: !document.getElementById('tvr').hidden,
    ui: g('buttons-v4-01-ui') || {}, tv: g('buttons-v4-01-tv6') || {}, opb: st.opbouw || 0, age: st.leeftijdPaul, prefs: g('buttons-v4-01-prefs') || {},
    trk: window.__trkTest || [], modals: [...document.querySelectorAll('.modal')].filter(m => !m.hidden).map(m => m.id),
    faq: [...document.querySelectorAll('#faq .faq-i summary')].map(s => s.textContent), qs: [...document.querySelectorAll('.site-qs a')].map(a => a.getAttribute('href')) }; })()"""


def main():
    only = [a for a in sys.argv[1:] if not a.startswith('-')]
    pages = [p for p in pages_from_sitemap() if not only or p['id'] in only or p['lang'] in only]
    if not pages:
        print('Geen vraagpagina\'s in één taal gevonden. Bouw eerst: python3 tools/build.py')
        return 2
    class Quiet(http.server.SimpleHTTPRequestHandler):
        def log_message(self, *a):
            pass
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), functools.partial(Quiet, directory=ROOT))
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = 'http://127.0.0.1:%d' % srv.server_address[1]
    by_lang = {}
    for p in pages_from_sitemap():
        by_lang.setdefault(p['lang'], []).append(p)
    with sync_playwright() as pw:
        br = pw.chromium.launch()
        for p in pages:
            lang, tag = p['lang'], '%s (%s)' % (p['id'], p['path'])
            # het bestand zelf, zoals een zoekmachine het zonder script leest
            src = open(p['file'], encoding='utf-8').read()
            body = src[src.find('<body>'):src.find('<script>', src.find('<body>'))]
            h1 = re.findall(r'<h1\b[^>]*>([^<]+)</h1>', body)
            check(tag + ': één h1 in het bestand', len(h1) == 1, h1)
            block = re.search(r'<section class="qp" id="qp"[^>]*>(.*?)</section>\s*<div class="tvh"', body, re.S)
            check(tag + ': vraag, antwoord, knop en veelgestelde vraag staan in het bestand', block and all(x in block.group(1) for x in ('qp-a', 'data-qp-go', 'qp-faq')), '')
            title = H.unescape(re.search(r'<title>([^<]*)</title>', src).group(1))
            check(tag + ': titel is de vraag', h1 and title.startswith(H.unescape(h1[0])), title)
            check(tag + ': canonical en hreflang alleen naar zichzelf',
                  re.findall(r'<link rel="canonical" href="([^"]+)">', src) == [SITE + p['path']]
                  and re.findall(r'<link rel="alternate" hreflang="([^"]+)" href="([^"]+)">', src) == [(lang, SITE + p['path'])], '')
            check(tag + ': staat in llms.txt', (SITE + p['path']) in open(os.path.join(ROOT, 'llms.txt'), encoding='utf-8').read())
            for w in (390, 320):
                ctx = br.new_context(viewport={'width': w, 'height': 844 if w == 390 else 640}, locale=LOC[lang])
                ctx.add_init_script('window.__trkTest = [];')
                pg = ctx.new_page()
                pg.route('**/gc.zgo.at/**', lambda r: r.abort())
                errs = []
                pg.on('pageerror', lambda e: errs.append(str(e)))
                t2 = '%s %d px' % (tag, w)
                r = pg.goto(base + p['path'])
                pg.wait_for_timeout(1500)
                s = pg.evaluate(STATE)
                raw = RAW.search(s['text'])
                check(t2 + ': laadt', r.status == 200, r.status)
                check(t2 + ': geen horizontaal scrollen', not s['ov'])
                check(t2 + ': geen ruwe tekstsleutels', not raw, raw and raw.group(0))
                check(t2 + ': blok in beeld, cockpit en vensters niet', s['blockVis'] and not s['cockpit'] and not s['modals'] and not s['route'], (s['blockVis'], s['cockpit'], s['modals']))
                check(t2 + ': één zichtbare h1, gelijk aan het bestand', len(s['h1s']) == 1 and h1 and norm(s['h1s'][0]) == norm(H.unescape(h1[0])), s['h1s'])
                if w == 390:
                    b = BAND.get(p['goal'], 2)
                    check(t2 + ': taal van de pagina', s['lang'] == lang, s['lang'])
                    check(t2 + ': meetpunt reach-landing-%s (één keer)' % p['id'], [x for x in s['trk'] if x.startswith('reach-landing-')] == ['reach-landing-' + p['id']], s['trk'])
                    check(t2 + ': wielvraag %s en de stand die erbij hoort' % p['goal'],
                          s['ui'].get('goal') == p['goal'] and s['opb'] == (1 if b < 2 else 0) and s['ui'].get('band') == b
                          and (b == 2 or (18 if b == 0 else 35) <= s['age'] <= (34 if b == 0 else 49)), (s['ui'].get('goal'), s['opb'], s['ui'].get('band'), s['age']))
                    if p['country']:
                        check(t2 + ': opent in ' + p['country'], s['prefs'].get('country') == p['country'], s['prefs'])
                    mine = [x['path'] for x in by_lang[lang]]
                    check(t2 + ': lijst onderaan: deze pagina, alleen deze taal', p['path'] in s['qs'] and all(x in s['qs'] for x in mine)
                          and all((q.startswith('/%s/' % lang) if lang != 'en' else not re.match(r'^/(nl|de|fr|es)/', q)) for q in s['qs']), s['qs'][:4])
                    check(t2 + ': FAQ van de app heeft de vragen van deze taal', len(s['faq']) == 8 + len(by_lang[lang]), len(s['faq']))
                pg.click('#qp [data-qp-go]')
                pg.wait_for_timeout(900)
                s2 = pg.evaluate(STATE)
                check(t2 + ': knop opent de eerste vraag, blok weg', s2['route'] and not s2['blockVis'] and s2['tv'].get('on') == 1 and not s2['ov'], (s2['route'], s2['blockVis']))
                if w == 390:
                    pg.click('#tvr-x')
                    pg.wait_for_timeout(700)
                    s3 = pg.evaluate(STATE)
                    want = pg.evaluate("(k) => { const L = I18N[document.documentElement.lang] || {}; return L[k] || (I18N.en || {})[k] || ''; }", GT[p['goal']])
                    check(t2 + ': na sluiten de cockpit met de wielvraag als kop', s3['cockpit'] and want and want in s3['cq'] and not RAW.search(s3['text']), (s3['cq'], want))
                    pg.reload()
                    pg.wait_for_timeout(1300)
                    s4 = pg.evaluate(STATE)
                    check(t2 + ': na herladen de app, blok weg', not s4['blockVis'] and s4['cockpit'], (s4['blockVis'], s4['cockpit']))
                    for sel in ('#tvr-x', '#rel-ok'):
                        if pg.is_visible(sel):
                            pg.click(sel)
                            pg.wait_for_timeout(300)
                    other = 'de' if lang != 'de' else 'nl'
                    pg.select_option('#lang-top', other)
                    pg.wait_for_timeout(1500)
                    check(t2 + ': taalkeuze gaat naar de startpagina van ' + other, pg.url.replace(base, '').split('#')[0] == '/%s/' % other, pg.url)
                check(t2 + ': geen scriptfouten', not errs, errs[:2])
                ctx.close()
        br.close()
    srv.shutdown()
    bad = [r for r in results if not r[1]]
    print('%d pagina\'s, %s' % (len(pages), ('%d van %d controles mislukt' % (len(bad), len(results))) if bad else 'alle %d controles geslaagd' % len(results)))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
