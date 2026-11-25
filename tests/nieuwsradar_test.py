"""Test voor tools/nieuwsradar.py, zonder internet: nagemaakte Google Nieuws-RSS over een reeks dagen.

Gebruik: python3 tests/nieuwsradar_test.py
"""
import contextlib
import email.utils
import io
import json
import os
import sys
import tempfile
from datetime import datetime, timedelta, timezone

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, 'tools'))
import nieuwsradar as R  # noqa: E402

results = []


def check(name, ok, detail=''):
    results.append(ok)
    print(('ok    ' if ok else 'FOUT  ') + name + ('' if ok else ' — ' + str(detail)[:400]))


def rss(items):
    x = ['<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>t</title>']
    for kop, bron, t in items:
        x.append('<item><title>%s - %s</title><link>https://news.example/%d</link><pubDate>%s</pubDate><source url="https://%s.example">%s</source></item>'
                 % (kop, bron, abs(hash((kop, bron))), email.utils.format_datetime(t), bron.lower().replace(' ', ''), bron))
    x.append('</channel></rss>')
    return ''.join(x).encode('utf-8')


def dag(tmp, stand, nu, media):
    """Eén dag draaien; media = {onderwerp: aantal verschillende media}."""
    d = os.path.join(tmp, nu.date().isoformat())
    os.makedirs(d, exist_ok=True)
    for o in R.ONDERWERPEN:
        n = media.get(o[0], 1)
        items = [('Nieuws over %s nummer %d' % (o[4], i), 'Krant %d' % i, nu - timedelta(hours=3 + i)) for i in range(n)]
        items.append(('Oud bericht', 'Oude Krant', nu - timedelta(days=4)))   # valt buiten de 48 uur
        open(os.path.join(d, o[0] + '.xml'), 'wb').write(rss(items))
    os.environ['NIEUWSRADAR_STAND'] = stand
    os.environ['NIEUWSRADAR_NU'] = nu.isoformat()
    os.environ.pop('GITHUB_TOKEN', None)
    buf = io.StringIO()
    with contextlib.redirect_stdout(buf):
        code = R.main(['--rss', d])
    return code, buf.getvalue()


def main():
    nu0 = datetime(2026, 11, 26, 5, 17, tzinfo=timezone.utc)
    arts = R.lees_rss(rss([('Kop één', 'NOS', nu0 - timedelta(hours=2)), ('Kop twee', 'RTL Nieuws', nu0 - timedelta(days=3))]), nu0)
    check('RSS: bron van de kop af, oud bericht weg', [a['kop'] for a in arts] == ['Kop één'] and arts[0]['bron'] == 'NOS', arts)
    u = R.rss_url('DE', '"Rente mit 63"')
    check('zoekadres: Duits Google Nieuws, laatste twee dagen', 'hl=de' in u and 'ceid=DE%3Ade' in u and 'when%3A2d' in u, u)
    check('elke vraagpagina in de lijst bestaat', all(os.path.exists(os.path.join(ROOT, o[3].strip('/'), 'index.html')) for o in R.ONDERWERPEN),
          [o[3] for o in R.ONDERWERPEN if not os.path.exists(os.path.join(ROOT, o[3].strip('/'), 'index.html'))])
    check('elk land heeft een editie en een taal met teksten', all(o[1] in R.EDITIES and R.taal(o[1]) in R.TEKST for o in R.ONDERWERPEN))
    pub = ' '.join(a + b for a, b in R.TEKST.values()).lower()
    check('teksten: geen "gratis"/"free" als verkoopargument', not any(w in pub for w in ('gratis', 'free', 'gratuit', 'kostenlos')))

    with tempfile.TemporaryDirectory() as tmp:
        stand = os.path.join(tmp, 'stand', 'stand.json')
        code, out = dag(tmp, stand, nu0, {'nl-aow': 6})
        check('dag 1: melding "staat aan" met de stand, nog geen nieuwsalarm', code == 0 and 'ISSUE' not in out and 'Nieuwsradar staat aan' in out and '| de AOW | Nederland | 6 |' in out, out[:300])
        for i in range(1, 7):
            code, out = dag(tmp, stand, nu0 + timedelta(days=i), {'nl-aow': 3, 'us-ss': 9})
            if 'Nieuwsradar 20' in out:
                break
        check('dag 2-7: gewone drukte geeft geen melding (ook niet bij veel Social Security-nieuws)', 'Nieuwsradar 20' not in out, out[:300])
        code, out = dag(tmp, stand, nu0 + timedelta(days=7), {'nl-aow': 9, 'us-ss': 9, 'de-63': 6})
        check('dag 8: piek AOW en Rente mit 63 geeft één melding met beide', 'Nieuwsradar 2026-12-03: de AOW (NL), die Rente mit 63 (DE)' in out and 'Social Security' not in out.split('\n')[0], out[:300])
        check('dag 8: melding met vraagpagina, koppen, berichtje en post in de taal van het land',
              'https://countingbuttons.com/nl/gat-tot-de-aow-overbruggen/' in out and 'Bij uw artikel “Nieuws over de AOW' in out
              and 'Zu Ihrem Artikel „Nieuws over die Rente mit 63' in out and '(9 media)' in out and '@spooropschool-sketch' in out, out[:600])
        check('dag 8: oud bericht (4 dagen) telt niet mee', 'Oude Krant' not in out)
        code, out = dag(tmp, stand, nu0 + timedelta(days=8), {'nl-aow': 10, 'us-ss': 9, 'de-63': 6})
        check('dag 9: dezelfde drukte binnen 3 dagen geeft geen nieuwe melding', 'Nieuwsradar 20' not in out, out[:200])
        s = json.load(open(stand, encoding='utf-8'))
        check('stand: telling per dag en laatste melding bewaard', s['hist']['nl-aow']['2026-12-04'] == 10 and s['gemeld']['nl-aow']['aantal'] == 9, s.get('gemeld'))

    bad = results.count(False)
    print('%s' % ('%d van %d controles mislukt' % (bad, len(results)) if bad else 'Alle %d controles geslaagd' % len(results)))
    return 1 if bad else 0


if __name__ == '__main__':
    sys.exit(main())
