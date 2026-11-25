"""Nieuwsradar: elke ochtend het nieuws nalopen op de onderwerpen van de vraagpagina's.

Draait vanzelf via .github/workflows/nieuwsradar.yml (GitHub Actions). Zoekt in Google Nieuws (RSS) per land
op een paar woorden per onderwerp en telt hoeveel verschillende media er de afgelopen twee dagen over schreven.
Schrijven er duidelijk meer media over dan gewoonlijk, dan maakt het een issue in de repository aan.
GitHub stuurt daarvan een mail en een melding in de GitHub-app. In het issue staan de koppen, de vraagpagina
die erbij past, een kant-en-klaar berichtje voor de redactie en een korte post.

Gebruik:
  python3 tools/nieuwsradar.py                 # echt draaien (in GitHub Actions)
  python3 tools/nieuwsradar.py --droog         # niets aanmaken, alleen laten zien wat er gemeld zou worden
  python3 tools/nieuwsradar.py --rss map/      # RSS uit bestanden lezen (map/<onderwerp>.xml), voor de test

Leest en schrijft de stand in NIEUWSRADAR_STAND (standaard .nieuwsradar/stand.json; in Actions bewaard als cache).
Alleen de standaardbibliotheek van Python, zodat er niets geïnstalleerd hoeft te worden.
"""
import email.utils
import json
import os
import statistics
import sys
import time
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET
from datetime import datetime, timedelta, timezone

SITE = 'https://countingbuttons.com'
EIGENAAR = 'spooropschool-sketch'

# Land en taal van Google Nieuws
EDITIES = {
    'NL': ('nl', 'NL', 'NL:nl'), 'BE': ('fr', 'BE', 'BE:fr'), 'FR': ('fr', 'FR', 'FR:fr'), 'DE': ('de', 'DE', 'DE:de'),
    'ES': ('es', 'ES', 'ES:es'), 'US': ('en-US', 'US', 'US:en'), 'GB': ('en-GB', 'GB', 'GB:en'),
}

# Onderwerp: land, zoekopdracht, vraagpagina, korte naam voor in de post, minimum aantal media
ONDERWERPEN = [
    ('nl-aow', 'NL', '"AOW-leeftijd" OR "AOW" pensioen', '/nl/gat-tot-de-aow-overbruggen/', 'de AOW', 4),
    ('nl-vervroegd', 'NL', '"vervroegd pensioen" OR "eerder stoppen met werken" OR "eerder met pensioen"', '/nl/een-jaar-eerder-stoppen/', 'eerder stoppen met werken', 3),
    ('nl-opbouw', 'NL', '"pensioenopbouw" OR "pensioen opbouwen" OR "pensioengat" OR "nieuwe pensioenstelsel"', '/nl/laat-beginnen-met-sparen/', 'je pensioen', 4),
    ('nl-sparen', 'NL', '"sparen of beleggen" OR "spaarrente" OR "box 3"', '/nl/sparen-of-beleggen-per-maand/', 'sparen en beleggen', 4),
    ('nl-fire', 'NL', '"financieel onafhankelijk" OR "FIRE-beweging" OR "4%-regel"', '/nl/pensioen-meetellen-in-fire/', 'financieel onafhankelijk worden', 2),
    ('be-pension', 'BE', '"pension légale" OR "pension minimum" OR "âge de la pension" OR "réforme des pensions"', '/fr/pension-legale-suffisante/', 'la pension', 3),
    ('fr-anticipee', 'FR', '"retraite anticipée" OR "âge de départ à la retraite" OR "réforme des retraites"', '/fr/partir-a-la-retraite-a-60-ans/', 'la retraite anticipée', 5),
    ('fr-epargne', 'FR', '"épargne retraite" OR "plan d\'épargne retraite" OR "PER retraite"', '/fr/combien-epargner-pour-la-retraite/', 'l\'épargne retraite', 3),
    ('fr-fire', 'FR', '"vivre de ses rentes" OR "indépendance financière" OR "mouvement FIRE"', '/fr/vivre-de-ses-rentes/', 'vivre de ses rentes', 2),
    ('de-63', 'DE', '"Rente mit 63" OR "Frührente" OR "früher in Rente"', '/de/mit-63-in-rente/', 'die Rente mit 63', 4),
    ('de-luecke', 'DE', '"Rentenlücke" OR "Rentenniveau" OR "Rentenpaket"', '/de/rentenluecke-berechnen/', 'die Rentenlücke', 4),
    ('de-vorsorge', 'DE', '"Altersvorsorge" OR "Frühstart-Rente" OR "Altersvorsorgedepot"', '/de/altersvorsorge-mit-50/', 'die Altersvorsorge', 5),
    ('de-etf', 'DE', '"ETF-Sparplan" OR "Tagesgeld" Zinsen', '/de/etf-sparplan-oder-tagesgeld/', 'ETF-Sparplan oder Tagesgeld', 5),
    ('es-anticipada', 'ES', '"jubilación anticipada" OR "edad de jubilación"', '/es/jubilarme-antes-de-los-67/', 'la jubilación anticipada', 4),
    ('es-ahorro', 'ES', '"plan de pensiones" OR "ahorro para la jubilación"', '/es/cuanto-ahorrar-al-mes-para-la-jubilacion/', 'el ahorro para la jubilación', 4),
    ('es-rentas', 'ES', '"vivir de rentas" OR "independencia financiera"', '/es/vivir-de-las-rentas/', 'vivir de rentas', 2),
    ('us-ss', 'US', '"Social Security" benefits OR COLA', '/can-i-live-on-social-security-alone/', 'Social Security', 8),
    ('us-early', 'US', '"early retirement" OR "retire at 62" OR "retirement age"', '/can-i-retire-at-62/', 'early retirement', 6),
    ('us-savings', 'US', '"retirement savings" OR "4% rule" OR "how much do I need to retire"', '/how-much-do-i-need-to-retire/', 'retirement savings', 6),
    ('gb-state', 'GB', '"state pension" age OR triple lock', '/is-the-state-pension-enough/', 'the State Pension', 5),
]

# Berichtjes per taal: {onderwerp}, {kop}, {bron}, {link}
TEKST = {
    'nl': ('Bij uw artikel “{kop}”: lezers die willen weten wat dit voor hen betekent, kunnen het in een paar minuten narekenen op {link}. Het is een onafhankelijke rekenhulp zonder account; de cijfers blijven op het eigen toestel.',
           '{Onderwerp} is weer in het nieuws ({bron}). Wat betekent het voor jou? Reken het in een paar minuten na: {link}'),
    'fr': ('À propos de votre article « {kop} » : vos lecteurs qui veulent savoir ce que cela change pour eux peuvent le calculer en quelques minutes sur {link}. Un outil indépendant, sans compte ; les chiffres restent sur leur appareil.',
           '{Onderwerp} fait l’actualité ({bron}). Qu’est-ce que cela change pour vous ? Faites le calcul en quelques minutes : {link}'),
    'de': ('Zu Ihrem Artikel „{kop}“: Leserinnen und Leser, die wissen möchten, was das für sie bedeutet, können es in wenigen Minuten nachrechnen unter {link}. Ein unabhängiger Rechner ohne Konto; die Zahlen bleiben auf dem eigenen Gerät.',
           '{Onderwerp} ist wieder in den Nachrichten ({bron}). Was heißt das für dich? In wenigen Minuten nachgerechnet: {link}'),
    'es': ('Sobre su artículo «{kop}»: los lectores que quieran saber qué significa para ellos pueden calcularlo en unos minutos en {link}. Una herramienta independiente, sin cuenta; las cifras se quedan en su propio dispositivo.',
           '{Onderwerp} vuelve a ser noticia ({bron}). ¿Qué significa para ti? Haz la cuenta en unos minutos: {link}'),
    'en': ('Regarding your article “{kop}”: readers who want to know what it means for them can work it out in a few minutes at {link}. It is an independent calculator with no account; the numbers stay on their own device.',
           '{Onderwerp} is in the news again ({bron}). What does it mean for you? Work it out in a few minutes: {link}'),
}
LANDNAAM = {'NL': 'Nederland', 'BE': 'België', 'FR': 'Frankrijk', 'DE': 'Duitsland', 'ES': 'Spanje', 'US': 'VS', 'GB': 'VK'}


def taal(land):
    return {'NL': 'nl', 'BE': 'fr', 'FR': 'fr', 'DE': 'de', 'ES': 'es', 'US': 'en', 'GB': 'en'}[land]


def rss_url(land, q):
    hl, gl, ceid = EDITIES[land]
    return 'https://news.google.com/rss/search?' + urllib.parse.urlencode({'q': q + ' when:2d', 'hl': hl, 'gl': gl, 'ceid': ceid})


def haal(url):
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (nieuwsradar countingbuttons.com)'})
    with urllib.request.urlopen(req, timeout=30) as r:
        return r.read()


def lees_rss(data, nu):
    """Artikelen uit Google Nieuws-RSS van de afgelopen 48 uur: kop, link, bron, tijd."""
    out = []
    root = ET.fromstring(data)
    for it in root.iter('item'):
        kop = (it.findtext('title') or '').strip()
        bron_el = it.find('source')
        bron = (bron_el.text or '').strip() if bron_el is not None else ''
        if bron and kop.endswith(' - ' + bron):
            kop = kop[: -len(' - ' + bron)]
        try:
            t = email.utils.parsedate_to_datetime(it.findtext('pubDate') or '')
        except (TypeError, ValueError):
            continue
        if t.tzinfo is None:
            t = t.replace(tzinfo=timezone.utc)
        if nu - t > timedelta(hours=48):
            continue
        out.append({'kop': kop, 'link': (it.findtext('link') or '').strip(), 'bron': bron or '?', 't': t.isoformat()})
    return out


def is_heet(oid, aantal, minimum, stand, vandaag):
    """Heet: genoeg media, minstens twee keer zoveel als gewoonlijk (mediaan van de laatste 14 dagen, na minstens 5 dagen meten), en niet al gemeld in de afgelopen 3 dagen
    (tenzij het aantal sindsdien verdubbeld is)."""
    hist = [v for d, v in sorted(stand.get('hist', {}).get(oid, {}).items()) if d < vandaag][-14:]
    if aantal < minimum or len(hist) < 5:   # eerst vijf dagen de gewone drukte leren
        return False
    if aantal < 2 * max(1, statistics.median(hist)):
        return False
    laatst = stand.get('gemeld', {}).get(oid)
    if laatst:
        dagen = (datetime.fromisoformat(vandaag) - datetime.fromisoformat(laatst['dag'])).days
        if dagen < 3 and aantal < 2 * laatst['aantal']:
            return False
    return True


def blok(o, arts):
    oid, land, q, pad, naam, minimum = o
    t = taal(land)
    link = SITE + pad
    bronnen = sorted({a['bron'] for a in arts})
    top = sorted(arts, key=lambda a: a['t'], reverse=True)
    eerste = top[0]
    pitch, post = TEKST[t]
    v = {'kop': eerste['kop'], 'bron': ', '.join(bronnen[:3]), 'link': link, 'Onderwerp': naam[:1].upper() + naam[1:]}
    regels = ['## %s · %s (%d media)' % (naam, LANDNAAM[land], len(bronnen)), '',
              'Vraagpagina: ' + link, '']
    for a in top[:6]:
        regels.append('- [%s](%s) · %s' % (a['kop'].replace('[', '(').replace(']', ')'), a['link'], a['bron']))
    regels += ['', '**Berichtje voor de redactie** (adres staat meestal onder Contact of Redactie op de site van het medium):', '',
               '> ' + pitch.format(**v), '', '**Korte post** (LinkedIn of elders):', '', '> ' + post.format(**v), '']
    return '\n'.join(regels)


def maak_issue(titel, body, droog):
    if droog:
        print('--- ISSUE: ' + titel + '\n' + body)
        return
    token, repo = os.environ.get('GITHUB_TOKEN'), os.environ.get('GITHUB_REPOSITORY')
    if not token or not repo:
        print('Geen GITHUB_TOKEN of GITHUB_REPOSITORY; issue niet aangemaakt.\n' + titel + '\n' + body)
        return
    req = urllib.request.Request('https://api.github.com/repos/%s/issues' % repo, method='POST',
                                 data=json.dumps({'title': titel, 'body': body}).encode('utf-8'),
                                 headers={'Authorization': 'Bearer ' + token, 'Accept': 'application/vnd.github+json',
                                          'User-Agent': 'nieuwsradar'})
    with urllib.request.urlopen(req, timeout=30) as r:
        print('Issue aangemaakt: ' + json.loads(r.read()).get('html_url', '?'))


def main(argv):
    droog = '--droog' in argv
    rssmap = argv[argv.index('--rss') + 1] if '--rss' in argv else None
    pad = os.environ.get('NIEUWSRADAR_STAND', '.nieuwsradar/stand.json')
    nu = datetime.fromisoformat(os.environ['NIEUWSRADAR_NU']) if os.environ.get('NIEUWSRADAR_NU') else datetime.now(timezone.utc)
    vandaag = nu.date().isoformat()
    try:
        stand = json.load(open(pad, encoding='utf-8'))
    except (OSError, ValueError):
        stand = {}
    eerste_keer = not stand.get('hist')
    heet, overzicht, fouten = [], [], []
    for o in ONDERWERPEN:
        oid, land, q = o[0], o[1], o[2]
        try:
            data = open(os.path.join(rssmap, oid + '.xml'), 'rb').read() if rssmap else haal(rss_url(land, q))
            arts = lees_rss(data, nu)
        except Exception as e:  # noqa: BLE001  (één onderwerp mag mislukken, de rest gaat door)
            fouten.append('%s: %s' % (oid, e))
            continue
        aantal = len({a['bron'] for a in arts})
        overzicht.append((o, aantal))
        if not eerste_keer and is_heet(oid, aantal, o[5], stand, vandaag):
            heet.append((o, arts))
        stand.setdefault('hist', {}).setdefault(oid, {})[vandaag] = aantal
        if not rssmap:
            time.sleep(2)
    # alleen de laatste 30 dagen bewaren
    grens = (nu.date() - timedelta(days=30)).isoformat()
    for oid in stand.get('hist', {}):
        stand['hist'][oid] = {d: v for d, v in stand['hist'][oid].items() if d >= grens}
    for o, arts in heet:
        stand.setdefault('gemeld', {})[o[0]] = {'dag': vandaag, 'aantal': len({a['bron'] for a in arts})}

    if eerste_keer and overzicht:
        regels = ['@%s De nieuwsradar staat aan. De eerste vijf dagen leert hij hoe druk het normaal is. Daarna krijg je alleen een melding als duidelijk meer media dan gewoonlijk over een onderwerp schrijven.' % EIGENAAR, '',
                  'Stand van vandaag (aantal media in de afgelopen twee dagen):', '', '| Onderwerp | Land | Media | Vraagpagina |', '|---|---|---|---|']
        regels += ['| %s | %s | %d | %s |' % (o[4], LANDNAAM[o[1]], n, SITE + o[3]) for o, n in overzicht]
        maak_issue('Nieuwsradar staat aan (%s)' % vandaag, '\n'.join(regels), droog)
    elif heet:
        titel = 'Nieuwsradar %s: %s' % (vandaag, ', '.join('%s (%s)' % (o[4], o[1]) for o, _ in heet))
        body = '@%s Er is nieuws waar een vraagpagina bij past.\n\n' % EIGENAAR + '\n'.join(blok(o, arts) for o, arts in heet)
        maak_issue(titel, body, droog)
    else:
        print('Geen opvallend nieuws vandaag.')
    if fouten:
        print('Niet gelukt: ' + '; '.join(fouten))
    if not droog:
        os.makedirs(os.path.dirname(pad) or '.', exist_ok=True)
        json.dump(stand, open(pad, 'w', encoding='utf-8'), ensure_ascii=False, indent=0)
    return 1 if fouten and len(fouten) == len(ONDERWERPEN) else 0


if __name__ == '__main__':
    sys.exit(main(sys.argv[1:]))
