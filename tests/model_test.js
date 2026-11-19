/* Modeltest voor Knopenteller: het rekenmodel (runModel) los van de pagina.
   Gebruik: node tests/model_test.js   (geen extra pakketten nodig)
   8 gevallen x 10 eigenschappen. Het model rekent zonder toeval (de Monte-Carlo-simulatie zit in de pagina),
   dus elke uitkomst is herhaalbaar. Opnieuw opgebouwd op 18 november 2026: de eerste versie (17 november)
   ging verloren met de sessie waarin hij was gemaakt. */
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const SNAP = path.join(__dirname, 'model_snapshot.json');
/* Het model staat in src/model.js. Staat dat bestand er (nog) niet, dan wordt het uit src/index.html gehaald,
   zoals voor de opsplitsing van versie 23; zo is dezelfde test voor en na de opsplitsing te draaien. */
function loadModel() {
  const mp = path.join(ROOT, 'src', 'model.js');
  let code;
  if (fs.existsSync(mp)) code = fs.readFileSync(mp, 'utf8');
  else {
    const html = fs.readFileSync(path.join(ROOT, 'src', 'index.html'), 'utf8');
    const start = html.lastIndexOf('<script>', html.indexOf('function runModel('));
    const endMark = "if (typeof module !== 'undefined') module.exports = runModel;";
    const end = html.indexOf(endMark, start);
    if (start < 0 || end < 0) { console.error('Rekenmodel niet gevonden'); process.exit(2); }
    const fn = name => { const i = html.indexOf('\n  function ' + name + '('); if (i < 0) throw new Error(name + ' niet gevonden'); const nl = html.indexOf('\n', i + 1); const one = html.slice(i, nl); if (/\}\s*$/.test(one) && !/\{\s*$/.test(one)) return one; return html.slice(i, html.indexOf('\n  }\n', i) + 4); };
    const line = re => { const m = re.exec(html); if (!m) throw new Error('constante niet gevonden'); return m[0]; };
    code = html.slice(start + '<script>'.length, end + endMark.length) + '\n' + line(/var RHO = [^\n]+/) + '\n' + line(/var ASSET = \[[^\n]+/) + '\nvar zc = {};' +
      ['c90For', 'normalsFor', 'simCore', 'simQuick', 'hvRun'].map(fn).join('\n');
  }
  const sandbox = { module: { exports: {} } };
  vm.runInNewContext(code + '\n;this.__m = { runModel: runModel, debtCalc: debtCalc, simQuick: simQuick, c90For: c90For, hvRun: hvRun, ASSET: ASSET, RHO: RHO, SIMN: SIMN };', sandbox);
  if (sandbox.module.exports !== sandbox.__m.runModel) { console.error('module.exports is niet runModel'); process.exit(2); }
  return sandbox.__m;
}
const M = loadModel();
const runModel = M.runModel;

/* standaardinvoer zoals de pagina die meegeeft (Nederland, box 3, vlak uitgavenverloop) */
const BASE = {
  personen: 1, leeftijdPaul: 67, leeftijdDiana: 67, budget: 3000, startkapitaal: 600000,
  aowPaul: 67, aowDiana: 67, spP: 1582, spD: 0, aowAanP: 1, aowAanD: 1,
  pensioenPaul: 0, pensioenDiana: 0, pensioenLeeftijd: 67, pensioenLeeftijdDiana: 67, pensAanP: 1, pensAanD: 1,
  werkP: 0, werkTotP: 67, werkD: 0, werkTotD: 67, perP: [], perD: [], pots: [], debts: [],
  inflatie: 2.4, kosten: 0.4, bruto: 5.5, spaarDeel: 10, box3: 1, taxMode: 'nlbox3', taxRate: 0, taxAllow: 0,
  eindleeftijd: 90, eindDiana: 1, restkapitaal: 0, uitgaveDaling: 0, opbouw: 0, inleg: 0, skipMax: false
};
const CASES = [
  { n: '1 alleenstaand, 67, leeft van vermogen', p: {} },
  { n: '2 stel 60/58 met pensioen', p: { personen: 2, leeftijdPaul: 60, leeftijdDiana: 58, budget: 3800, startkapitaal: 500000, spP: 1084, spD: 1084, pensioenPaul: 1500 } },
  { n: '3 opbouw, 27, legt 600 opzij', p: { leeftijdPaul: 27, budget: 2500, startkapitaal: 20000, opbouw: 1, inleg: 600, pensioenLeeftijd: 67 } },
  { n: '4 opbouw, stel 42/40', p: { personen: 2, leeftijdPaul: 42, leeftijdDiana: 40, budget: 3500, startkapitaal: 150000, opbouw: 1, inleg: 1200, spP: 1084, spD: 1084, pensioenLeeftijd: 67 } },
  { n: '5 ander land, belasting op rendement', p: { leeftijdPaul: 65, budget: 2500, startkapitaal: 400000, spP: 1200, taxMode: 'returns', taxRate: 26.375, taxAllow: 1000, box3: 0 } },
  { n: '6 potten: bedrag ineens en per maand', p: { leeftijdPaul: 62, startkapitaal: 300000, pots: [{ n: 'Lijfrente', w: 0, k: 'l', a: 50000, f: 67, u: 0, x: 30 }, { n: 'Huur', w: 0, k: 'm', a: 400, f: 62, u: 80, x: 0 }] } },
  { n: '7 schuld buiten het budget', p: { leeftijdPaul: 60, startkapitaal: 700000, debts: [{ n: 'Huis', m: 900, y: 12, v: 100000, b: 0 }] } },
  { n: '8 dalende uitgaven (typisch)', p: { leeftijdPaul: 66, startkapitaal: 550000, uitgaveDaling: 1 } }
];
const P = c => Object.assign({}, BASE, c.p);
const run = (c, extra) => runModel(Object.assign(P(c), extra || {}));
const fin = x => typeof x === 'number' && isFinite(x);

let fails = 0, checks = 0;
function check(prop, c, ok, detail) {
  checks++;
  if (!ok) { fails++; console.log('  FOUT  [' + prop + '] geval ' + c.n + (detail ? ' — ' + detail : '')); }
}

const PROPS = [
  ['1 alle getallen eindig', c => {
    const m = run(c), arrays = ['draws', 'K', 'R', 'spend', 'incomes', 'taxes'];
    const bad = arrays.filter(k => !m[k].every(fin));
    check('1', c, fin(m.req0) && fin(m.maxBudget) && bad.length === 0, 'req0=' + m.req0 + ' ' + bad.join(','));
  }],
  ['2 lengtes kloppen met de horizon', c => {
    const m = run(c);
    check('2', c, m.N >= 1 && m.draws.length === m.N && m.K.length === m.N + 1 && m.R.length === m.N + 1 && m.spend.length === m.N);
  }],
  ['3 met het benodigde vermogen raakt het geld niet op, met 2% minder wel', c => {
    const m = run(c); if (!(m.req0 > 1000)) { check('3', c, m.req0 >= 0); return; }
    const genoeg = run(c, { startkapitaal: m.req0 * 1.001, skipMax: true }), tekort = run(c, { startkapitaal: m.req0 * 0.98, skipMax: true });
    const eindTekort = tekort.K[tekort.K.length - 1];
    check('3', c, genoeg.emptyAt === null && (tekort.emptyAt !== null || eindTekort < 0), 'req0=' + Math.round(m.req0));
  }],
  ['4 meer uitgeven kost nooit minder vermogen, en meer zodra er vermogen nodig is', c => {
    const m = run(c), b = P(c).budget, steps = [0, 250, 1000, 3000].map(d => m.requiredFor(b + d));
    const up = steps.every((v, k) => k === 0 || v >= steps[k - 1] - 1e-6);
    /* het model geeft 'niets nodig' terug als een heel klein getal (zoeken door halveren), dus alles onder 1 euro telt als 0 */
    const strict = steps.every((v, k) => k === 0 || steps[k - 1] < 1 || v > steps[k - 1]);
    /* wie nog spaart kan genoeg hebben aan de inleg (nodig = 0); bij 3000 meer per maand moet er dan wel vermogen bij */
    check('4', c, up && strict && steps[3] > 0, steps.map(Math.round).join(' / '));
  }],
  ['5 meer startvermogen geeft geen lager maximaal budget', c => {
    const a = run(c), b = run(c, { startkapitaal: P(c).startkapitaal * 1.2 });
    check('5', c, b.maxBudget >= a.maxBudget - 0.5, Math.round(b.maxBudget) + ' vs ' + Math.round(a.maxBudget));
  }],
  ['6 meer staatspensioen vraagt niet meer vermogen', c => {
    const a = run(c), b = run(c, { spP: P(c).spP + 200 });
    check('6', c, b.req0 <= a.req0 + 1e-6, Math.round(b.req0) + ' vs ' + Math.round(a.req0));
  }],
  ['7 opbouw: tot de stopleeftijd wordt er gespaard, daarna opgenomen', c => {
    const p = P(c); if (!p.opbouw) { check('7', c, run(c).tStop === 0); return; }
    const m = run(c), stop = m.tStop;
    check('7', c, stop > 0 && Math.abs(m.draws[0] + 12 * p.inleg) < 1e-6 && m.draws[stop] > 0, 'draws[0]=' + m.draws[0] + ' draws[stop]=' + m.draws[stop]);
  }],
  ['8 een lege schuld verandert niets; een echte schuld kost geld zodra hij meetelt', c => {
    const p = P(c), sum = a => a.reduce((x, y) => x + y, 0);
    const geen = run(c, { debts: [] }), leeg = run(c, { debts: [{ n: '', m: 0, y: 0, v: 0, b: 1 }] });
    const same = JSON.stringify(geen.draws) === JSON.stringify(leeg.draws) && geen.req0 === leeg.req0;
    if (!p.opbouw) {
      const echt = run(c, { debts: [{ n: 'Lening', m: 300, y: 10, v: 0, b: 0 }] });
      check('8', c, same && echt.req0 > geen.req0, Math.round(echt.req0) + ' vs ' + Math.round(geen.req0));
      return;
    }
    /* in opbouw betaal je de maandlast uit je loon: een schuld die voor de stopleeftijd afloopt verandert niets,
       een schuld die daarna doorloopt telt vanaf de stopleeftijd mee */
    const kort = run(c, { debts: [{ n: 'Kort', m: 300, y: 10, v: 0, b: 0 }] });
    const lang = run(c, { debts: [{ n: 'Lang', m: 300, y: (p.pensioenLeeftijd - p.leeftijdPaul) + 5, v: 0, b: 0 }] });
    check('8', c, same && JSON.stringify(kort.draws) === JSON.stringify(geen.draws) && sum(lang.draws) > sum(geen.draws));
  }],
  ['9 dalende uitgaven: lager budget na 65 en niet meer vermogen nodig', c => {
    const p = P(c), vlak = run(c, { uitgaveDaling: 0 }), daal = run(c, { uitgaveDaling: 1 });
    const ref = Math.max(p.leeftijdPaul, p.personen !== 1 ? p.leeftijdDiana : 0);
    /* het dalen begint op 65, of het jaar na nu voor wie al ouder is; daarvoor is het budget gelijk */
    const from = Math.max(65, ref);
    const later = vlak.spend.map((v, t) => ref + t - from >= 1 ? daal.spend[t] < v : Math.abs(daal.spend[t] - v) < 1e-6);
    const req = vlak.req0 >= 1 ? daal.req0 < vlak.req0 : daal.req0 < 1;
    check('9', c, later.every(Boolean) && req, Math.round(daal.req0) + ' vs ' + Math.round(vlak.req0));
  }],
  ['10 dezelfde invoer geeft dezelfde uitkomst', c => {
    const a = run(c), b = run(c);
    const pick = m => JSON.stringify([m.req0, m.maxBudget, m.draws, m.K, m.taxes]);
    check('10', c, pick(a) === pick(b));
  }],
  ['11 stopleeftijd los van pensioenleeftijd: leeg = zoals voorheen, eerder stoppen = minder haalbaar, pensioen gaat niet eerder in', c => {
    const p = P(c); if (!p.opbouw) { check('11', c, true); return; }
    const basis = run(c), zelfde = run(c, { stopLeeftijd: 0 }), eerder = run(c, { stopLeeftijd: Math.ceil(p.leeftijdPaul) + 5 });
    const zelfdeOk = JSON.stringify(basis.draws) === JSON.stringify(zelfde.draws);
    check('11', c, zelfdeOk && eerder.tStop === 5 && eerder.maxBudget <= basis.maxBudget + 0.5 && JSON.stringify(eerder.incPen) === JSON.stringify(basis.incPen) && JSON.stringify(eerder.incSp) === JSON.stringify(basis.incSp), Math.round(eerder.maxBudget) + ' vs ' + Math.round(basis.maxBudget));
  }],
  ['12 beleggingskosten alleen over het belegde deel: bij alleen sparen maken kosten niets uit', c => {
    const a = run(c, { spaarDeel: 100, bruto: 2.5, kosten: 0 }), b = run(c, { spaarDeel: 100, bruto: 2.5, kosten: 1.5 });
    const belegd = run(c, { kosten: 0 }), duur = run(c, { kosten: 1.5 });
    check('12', c, Math.abs(a.maxBudget - b.maxBudget) < 1e-6 && duur.maxBudget < belegd.maxBudget, Math.round(a.maxBudget) + ' vs ' + Math.round(b.maxBudget));
  }],
  ['13 grote uitgave later: verlaagt het haalbare budget; een leeftijd in het verleden telt niet mee', c => {
    const p = P(c), basis = run(c), met = run(c, { big: [{ a: 50000, f: Math.ceil(p.leeftijdPaul) + 3 }] }), oud = run(c, { big: [{ a: 50000, f: Math.floor(p.leeftijdPaul) - 2 }] });
    check('13', c, met.maxBudget < basis.maxBudget && met.req0 >= basis.req0 && JSON.stringify(oud.draws) === JSON.stringify(basis.draws), Math.round(met.maxBudget) + ' vs ' + Math.round(basis.maxBudget));
  }]
];

console.log('Modeltest Knopenteller: ' + CASES.length + ' gevallen x ' + PROPS.length + ' eigenschappen');
PROPS.forEach(([name, fn]) => {
  const before = fails;
  CASES.forEach(c => { try { fn(c); } catch (e) { checks++; fails++; console.log('  FOUT  [' + name + '] geval ' + c.n + ' — ' + e.message); } });
  console.log((fails === before ? 'ok    ' : 'FOUT  ') + name);
});
/* ---------- momentopname: de uitkomsten zelf, tot op de laatste decimaal ----------
   Het model en de simulatie (vaste toevalsreeks) geven bij dezelfde invoer altijd dezelfde getallen. De momentopname
   legt die vast; elke afwijking laat de test falen. Alleen bewust vernieuwen: node tests/model_test.js --update-snapshot */
function snapshot() {
  const PORT = { 1: [0.20, 0.60, 0.20], 2: [0.50, 0.40, 0.10], 3: [0.80, 0.15, 0.05], 4: [0, 0, 1] }, ports = {};
  Object.keys(PORT).forEach(i => {
    const w = PORT[i]; let mu = 0, v = 0;
    for (let a = 0; a < 3; a++) mu += w[a] * M.ASSET[a].mu / 100;
    for (let a = 0; a < 3; a++) for (let b = 0; b < 3; b++) { const c = a === b ? 1 : ((a === 0 && b === 1) || (a === 1 && b === 0) ? M.RHO : 0); v += w[a] * w[b] * (M.ASSET[a].sd / 100) * (M.ASSET[b].sd / 100) * c; }
    ports[i] = { w: w, mu: mu, sd: Math.sqrt(v) };
  });
  const out = {};
  CASES.forEach(c => {
    const p = P(c), m = runModel(p), sum = a => a.reduce((x, y) => x + y, 0);
    const X = { st: p, cap: p.startkapitaal, nl: p.taxMode === 'nlbox3', pfUser: 0, autoIdx: 2, ports: ports, alts: [0, 1, 2].filter(k => k !== p.uitgaveDaling) };
    const pf = ports[2], pq = Object.assign({}, p, { bruto: pf.mu * 100, spaarDeel: pf.w[2] * 100, skipMax: true });
    out[c.n] = {
      model: { N: m.N, req0: m.req0, maxBudget: m.maxBudget, emptyAt: m.emptyAt, sumDraws: sum(m.draws), sumTaxes: sum(m.taxes), endK: m.K[m.K.length - 1], R0: m.R[0], spend0: m.spend[0], spendLast: m.spend[m.N - 1] },
      sim: M.simQuick(runModel(pq), pf, pq),
      heavy: M.hvRun(X)
    };
  });
  return JSON.parse(JSON.stringify(out));
}
(function () {
  const now = JSON.stringify(snapshot(), null, 1) + '\n';
  if (process.argv.indexOf('--update-snapshot') >= 0 || !fs.existsSync(SNAP)) { fs.writeFileSync(SNAP, now); console.log('momentopname geschreven: tests/model_snapshot.json'); return; }
  checks++;
  if (fs.readFileSync(SNAP, 'utf8') === now) console.log('ok    momentopname: uitkomsten gelijk aan tests/model_snapshot.json');
  else { fails++; console.log('FOUT  momentopname: uitkomsten wijken af van tests/model_snapshot.json'); }
})();
console.log(fails ? fails + ' van ' + checks + ' controles mislukt' : 'Alle ' + checks + ' controles geslaagd');
process.exit(fails ? 1 : 0);
