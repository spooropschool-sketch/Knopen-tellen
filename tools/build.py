#!/usr/bin/env python3
"""Build the site from src/index.html.

Writes one static, pre-filled page per language (/, /nl/, /de/, /fr/, /es/),
plus sitemap.xml, robots.txt, llms.txt and 404.html. The app itself is one
file; this script only fills in the texts and the head so that search engines
and AI crawlers that do not run JavaScript can read the page.

Usage:  python3 tools/build.py [--artifact OUT.html]
Needs:  playwright for Python (Chromium).
"""
import functools, html, http.server, json, os, re, sys, threading, datetime

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, 'src', 'index.html')
SITE = 'https://countingbuttons.com'
LANGS = ['en', 'nl', 'de', 'fr', 'es']
NAMES = {'en': 'English', 'nl': 'Nederlands', 'de': 'Deutsch', 'fr': 'Français', 'es': 'Español'}
LOCALE = {'en': 'en_GB', 'nl': 'nl_NL', 'de': 'de_DE', 'fr': 'fr_FR', 'es': 'es_ES'}
COUNTRY = {'en': 'GB', 'nl': 'NL', 'de': 'DE', 'fr': 'FR', 'es': 'ES'}
TODAY = datetime.date.today().isoformat()


def url(lang):
    return SITE + ('/' if lang == 'en' else '/%s/' % lang)


def extract():
    """Open the template in Chromium once per language and read the texts."""
    from playwright.sync_api import sync_playwright
    handler = functools.partial(http.server.SimpleHTTPRequestHandler, directory=ROOT)
    handler.log_message = lambda *a, **k: None
    srv = http.server.ThreadingHTTPServer(('127.0.0.1', 0), handler)
    threading.Thread(target=srv.serve_forever, daemon=True).start()
    base = 'http://127.0.0.1:%d/src/index.html' % srv.server_address[1]
    out = {}
    with sync_playwright() as pw:
        br = pw.chromium.launch()
        for lang in LANGS:
            ctx = br.new_context()
            ctx.add_init_script(
                "try{localStorage.setItem('buttons-v4-01-prefs',JSON.stringify({lang:%s,country:%s}));"
                "localStorage.setItem('buttons-v4-01-ui',JSON.stringify({introSeen:true}));}catch(e){}"
                % (json.dumps(lang), json.dumps(COUNTRY[lang])))
            pg = ctx.new_page()
            errs = []
            pg.on('pageerror', lambda e: errs.append(str(e)))
            pg.goto(base)
            pg.wait_for_timeout(700)
            data = pg.evaluate("""() => {
              const t = {}, alt = {}, aria = {};
              document.querySelectorAll('[data-t]').forEach(e => { const k = e.getAttribute('data-t'); if (!(k in t)) t[k] = e.innerHTML; });
              document.querySelectorAll('[data-t-alt]').forEach(e => { alt[e.getAttribute('data-t-alt')] = e.getAttribute('alt') || ''; });
              document.querySelectorAll('[data-t-aria]').forEach(e => { aria[e.getAttribute('data-t-aria')] = e.getAttribute('aria-label') || ''; });
              const faq = [...document.querySelectorAll('.faq-i')].map(d => [d.querySelector('summary').textContent.trim(), d.querySelector('.faq-a').textContent.trim()]);
              return { t, alt, aria, faq, title: document.documentElement.getAttribute('data-seo-title'), desc: document.querySelector('meta[name="description"]').content, lang: document.documentElement.lang };
            }""")
            assert not errs, errs
            assert data['lang'] == lang, (lang, data['lang'])
            out[lang] = data
            ctx.close()
        br.close()
    srv.shutdown()
    return out


def fill_body(body, d):
    """Put the texts into the empty data-t elements of the static markup."""
    def text(m):
        key = m.group(3)
        return m.group(1) + d['t'].get(key, '') + m.group(4)
    body = re.sub(r'(<([a-z0-9]+)\b[^>]*\bdata-t="([^"]+)"[^>]*>)(</\2>)', text, body)

    def alt(m):
        return m.group(0).replace('alt=""', 'alt="%s"' % html.escape(d['alt'].get(m.group(1), ''), quote=True))
    body = re.sub(r'<img\b[^>]*\bdata-t-alt="([^"]+)"[^>]*>', alt, body)

    def aria(m):
        if 'aria-label=' in m.group(0):
            return m.group(0)
        label = html.escape(d['aria'].get(m.group(2), ''), quote=True)
        return m.group(1) + ' aria-label="%s"' % label + m.group(3)
    body = re.sub(r'(<[a-z0-9]+\b[^>]*\bdata-t-aria="([^"]+)"[^>]*?)(/?>)', aria, body)
    return body


def head_block(lang, d):
    e = lambda s: html.escape(s, quote=True)
    brand = 'Knopen tellen' if lang == 'nl' else 'Buttons'
    lines = [
        '<title>%s</title>' % e(d['title']),
        '<meta name="description" content="%s">' % e(d['desc']),
        '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1">',
        '<link rel="canonical" href="%s">' % url(lang),
    ]
    for l in LANGS:
        lines.append('<link rel="alternate" hreflang="%s" href="%s">' % (l, url(l)))
    lines.append('<link rel="alternate" hreflang="x-default" href="%s">' % url('en'))
    lines += [
        '<meta property="og:type" content="website">',
        '<meta property="og:url" content="%s">' % url(lang),
        '<meta property="og:site_name" content="%s">' % e(brand),
        '<meta property="og:locale" content="%s">' % LOCALE[lang],
        '<meta property="og:title" content="%s">' % e(d['title']),
        '<meta property="og:description" content="%s">' % e(d['desc']),
        '<meta property="og:image" content="%s/og.jpg">' % SITE,
        '<meta property="og:image:width" content="1200">',
        '<meta property="og:image:height" content="630">',
        '<meta name="twitter:card" content="summary_large_image">',
        '<meta name="twitter:title" content="%s">' % e(d['title']),
        '<meta name="twitter:description" content="%s">' % e(d['desc']),
        '<meta name="twitter:image" content="%s/og.jpg">' % SITE,
    ]
    graph = [
        {'@type': 'WebSite', '@id': SITE + '/#site', 'url': SITE + '/', 'name': 'Buttons',
         'alternateName': ['Knopen tellen', 'Counting Buttons'], 'inLanguage': LANGS},
        {'@type': 'WebApplication', '@id': url(lang) + '#app', 'name': brand, 'url': url(lang),
         'description': d['desc'], 'applicationCategory': 'FinanceApplication',
         'operatingSystem': 'Any (web browser)', 'browserRequirements': 'Requires JavaScript',
         'inLanguage': lang, 'isAccessibleForFree': True,
         'offers': {'@type': 'Offer', 'price': '0', 'priceCurrency': 'EUR'},
         'image': SITE + '/og.jpg', 'isPartOf': {'@id': SITE + '/#site'},
         'featureList': ['Retirement calculator', 'Monte Carlo simulation with 4,000 runs',
                         'Chance that savings last until the end age', 'Capital needed for a 90% chance',
                         'State pension and investment tax rules for 10 countries',
                         'Purchasing power comparison for 31 European countries',
                         'Five languages', 'No account, data stays in the browser']},
        {'@type': 'FAQPage', '@id': url(lang) + '#faq', 'inLanguage': lang,
         'mainEntity': [{'@type': 'Question', 'name': q,
                         'acceptedAnswer': {'@type': 'Answer', 'text': a}} for q, a in d['faq']]},
    ]
    ld = json.dumps({'@context': 'https://schema.org', '@graph': graph}, ensure_ascii=False)
    lines.append('<script type="application/ld+json">%s</script>' % ld.replace('</', '<\\/'))
    return '\n'.join(lines)


def lang_links(lang):
    a = ['<a href="%s" hreflang="%s" lang="%s"%s>%s</a>' % (
        '/' if l == 'en' else '/%s/' % l, l, l, ' aria-current="true"' if l == lang else '', NAMES[l]) for l in LANGS]
    return '<nav class="site-langs" aria-label="Language">' + ''.join(a) + '</nav>'


def split(src):
    i = src.index('<body>')
    j = src.index('<script>', i)
    return src[:i], src[i:j], src[j:]


def build_page(src, lang, d):
    head, body, script = split(src)
    # head: replace the old social/meta lines with the generated block
    head = re.sub(r'<link rel="canonical"[^>]*>\n', '', head)
    head = re.sub(r'<meta (?:property="og:|name="twitter:)[^>]*>\n', '', head)
    head = re.sub(r'<meta name="description"[^>]*>\n', '', head)
    head = re.sub(r'<meta name="robots"[^>]*><!--TEMPLATE-ONLY-->\n', '', head)
    head = re.sub(r'<title>[^<]*</title>', lambda m: head_block(lang, d), head, count=1)
    # the root page follows the visitor's own language (and sends them on to /nl/ etc.); language pages are fixed
    head = head.replace('<html lang="en">', '<html lang="%s" data-path-lang="%s" data-site="1">' % (lang, '' if lang == 'en' else lang))
    head = head.replace('href="manifest.webmanifest"', 'href="/manifest.webmanifest"')
    head = head.replace('href="icon-192.png"', 'href="/icon-192.png"').replace('href="apple-touch-icon.png"', 'href="/apple-touch-icon.png"')
    head = head.replace('</style>', '</style>\n<link rel="preload" as="image" href="/img/buidel.jpg" fetchpriority="high">', 1)
    body = fill_body(body, d)
    body = body.replace('src="img/', 'src="/img/')
    body = body.replace('<!--LANGLINKS-->', lang_links(lang))
    # images: only the first one is above the fold
    first = [True]
    def img(m):
        tag = m.group(0)
        if first[0]:
            first[0] = False
            return tag.replace('<img ', '<img fetchpriority="high" decoding="async" ')
        return tag.replace('<img ', '<img loading="lazy" decoding="async" ')
    body = re.sub(r'<img [^>]*>', img, body)
    script = script.replace("register('sw.js')", "register('/sw.js')")
    return head + body + script


def build_artifact(src, d):
    """A copy for the Claude preview: no site head, relative paths."""
    head, body, script = split(src)
    i = head.index('<title>')
    j = head.index('</style>') + len('</style>')
    keep = head[i:j]
    keep = re.sub(r'<meta name="robots"[^>]*><!--TEMPLATE-ONLY-->\n', '', keep)
    keep = re.sub(r'<meta name="description"[^>]*>\n', '<meta name="description" content="">\n', keep)
    body = fill_body(body, d).replace('<body>', '', 1).replace('<!--LANGLINKS-->', '')
    script = script.replace('</body>', '').replace('</html>', '')
    return keep + '\n' + body + script


def write(path, text):
    full = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(full) or ROOT, exist_ok=True)
    with open(full, 'w', encoding='utf-8') as f:
        f.write(text)
    print('wrote', path, len(text))


def main():
    src = open(SRC, encoding='utf-8').read()
    data = extract()
    for lang in LANGS:
        write('index.html' if lang == 'en' else '%s/index.html' % lang, build_page(src, lang, data[lang]))

    alts = ''.join('    <xhtml:link rel="alternate" hreflang="%s" href="%s"/>\n' % (l, url(l)) for l in LANGS)
    alts += '    <xhtml:link rel="alternate" hreflang="x-default" href="%s"/>\n' % url('en')
    sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n'
    for l in LANGS:
        sm += '  <url>\n    <loc>%s</loc>\n    <lastmod>%s</lastmod>\n%s  </url>\n' % (url(l), TODAY, alts)
    sm += '</urlset>\n'
    write('sitemap.xml', sm)

    bots = ['GPTBot', 'OAI-SearchBot', 'ChatGPT-User', 'ClaudeBot', 'Claude-SearchBot', 'Claude-User',
            'PerplexityBot', 'Perplexity-User', 'Google-Extended', 'Applebot-Extended', 'CCBot', 'Bingbot', 'Googlebot']
    rb = 'User-agent: *\nAllow: /\nDisallow: /src/\nDisallow: /tools/\n\n'
    rb += ''.join('User-agent: %s\nAllow: /\nDisallow: /src/\nDisallow: /tools/\n\n' % b for b in bots)
    rb += 'Sitemap: %s/sitemap.xml\n' % SITE
    write('robots.txt', rb)

    en = data['en']
    ll = '# Buttons (Counting Buttons / Knopen tellen)\n\n> %s\n\n' % en['desc']
    ll += ('Buttons is a free, single-page retirement calculator at %s. It runs entirely in the browser, '
           'needs no account and stores what you enter only on your own device. It is a general calculation '
           'tool and does not give financial advice.\n\n' % SITE)
    ll += '## Pages\n\n' + ''.join('- [%s (%s)](%s): %s\n' % (data[l]['title'], NAMES[l], url(l), data[l]['desc']) for l in LANGS)
    ll += '\n## Questions and answers\n\n' + ''.join('### %s\n\n%s\n\n' % (q, a) for q, a in en['faq'])
    ll += ('## Facts\n\n- Method: Monte Carlo simulation, 4,000 runs, three portfolios (defensive, balanced, aggressive), '
           'after costs, tax and inflation; all amounts in today\'s money.\n'
           '- Headline result: the chance that savings last until the end age, and the capital needed for a 90% chance.\n'
           '- Countries with their own rules: Netherlands, Belgium, Germany, France, Spain, Italy, Portugal, Ireland, '
           'United Kingdom, United States; plus a general setting.\n'
           '- Purchasing power comparison: 31 European countries, Eurostat price levels.\n'
           '- Languages: English, Dutch, German, French, Spanish.\n- Price: free. No advertising. No account.\n')
    write('llms.txt', ll)

    nf = ('<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n'
          '<title>Page not found | Buttons</title>\n<meta name="robots" content="noindex">\n'
          '<style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#F3F7FB;color:#1D2B3A;font:17px/1.5 system-ui,-apple-system,"Segoe UI",sans-serif}'
          'main{max-width:520px;padding:24px}h1{font-size:28px;margin:0 0 8px}a{color:#2F6DAE;font-weight:600}ul{padding-left:20px}</style>\n</head>\n<body>\n<main>\n'
          '<h1>This page does not exist</h1>\n<p>Buttons is a single page. Pick your language to continue:</p>\n<ul>\n'
          + ''.join('<li><a href="%s" hreflang="%s" lang="%s">%s</a></li>\n' % ('/' if l == 'en' else '/%s/' % l, l, l, NAMES[l]) for l in LANGS)
          + '</ul>\n</main>\n</body>\n</html>\n')
    write('404.html', nf)

    if '--artifact' in sys.argv:
        out = sys.argv[sys.argv.index('--artifact') + 1]
        with open(out, 'w', encoding='utf-8') as f:
            f.write(build_artifact(src, data['en']))
        print('wrote artifact copy', out)


if __name__ == '__main__':
    main()
