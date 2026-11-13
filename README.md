# Buttons / Knopen tellen

Free retirement calculator at https://countingbuttons.com. One page, runs in the browser.

## Making changes

1. Edit `src/index.html` (the app: markup, styles, texts in five languages and the model).
2. Run `python3 tools/build.py`. This writes the pages that are served:
   `index.html` (English), `nl/`, `de/`, `fr/`, `es/`, plus `sitemap.xml`, `robots.txt`, `llms.txt` and `404.html`.
3. Commit and push. GitHub Pages serves the result.

Do not edit the generated pages by hand; the next build overwrites them.
The build needs Python with Playwright (Chromium). It opens the app once per language and writes
the texts into the static markup, so search engines and AI crawlers that do not run JavaScript can read the page.
