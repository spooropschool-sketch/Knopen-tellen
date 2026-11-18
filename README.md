# Button Counter / Knopenteller

Free retirement calculator at https://countingbuttons.com. One page, runs in the browser.

## How the source is organised

| File | What is in it |
|---|---|
| `src/index.html` | The markup of the four screens and the app script (screens, input, charts). |
| `src/app.css` | All styles, light and dark theme. |
| `src/model.js` | The calculation model (`debtCalc`, `runModel`) and the simulation (`simCore`, `simQuick`, `c90For`, `hvRun`). Nothing in it needs a page: the page loads it with a script tag, the worker loads the same file, and the tests load it in Node. |
| `src/i18n/en.js`, `nl.js`, `de.js`, `fr.js`, `es.js` | All texts, one file per language, same keys in every file. |
| `tools/build.py` | Builds the site from `src/`. |
| `tests/` | `model_test.js`, `model_snapshot.json`, `app_test.py`. |

The heavy calculations run in a worker (`new Worker` on `model.js`), including the first one when the page opens.
Without worker support the page calculates itself.

## Making changes

1. Edit the file that holds what you want to change (see the table above).
2. Run `python3 tools/build.py`. This writes what is served:
   the pages `index.html` (English), `nl/`, `de/`, `fr/`, `es/` and the question pages,
   `app.css`, `model.js` and `i18n/<lang>.js` in the site root,
   plus `sitemap.xml`, `robots.txt`, `llms.txt` and `404.html`.
3. Run the tests (below).
4. Commit and push. GitHub Pages serves the result.

A language page loads only its own language: the build writes `i18n/nl.js` with the Dutch texts plus the few
English texts the app always needs (the feedback report is in English). The build stops if a text has no
translation, or if the app script starts reading English texts in a new place (`EN_USES` in `tools/build.py`).
Pages refer to `app.css`, `model.js` and the language file with a short content hash (`?v=...`), so a changed
file is fetched again. When you change what the service worker should keep offline, raise `V` in `sw.js`.

## Tests

```
node tests/model_test.js      # model and simulation: 8 cases x 10 properties, plus the snapshot
python3 tools/build.py        # the app test uses the built pages
python3 tests/app_test.py     # the built pages in Chromium: 5 languages x 3 age groups, share link, welcome, work question, worker
```

`tests/model_snapshot.json` holds the exact outcomes of the model and the simulation (the simulation uses a fixed
random sequence, so outcomes repeat). The model test fails when an outcome differs. Only renew the snapshot when a
change in outcomes is intended: `node tests/model_test.js --update-snapshot`.

Do not edit the generated pages by hand; the next build overwrites them.
The build needs Python with Playwright (Chromium). It opens the app once per language and writes
the texts into the static markup, so search engines and AI crawlers that do not run JavaScript can read the page.
