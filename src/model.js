/* Knopenteller: het rekenmodel en de simulatie, los van de pagina.
   Dit bestand wordt drie keer gebruikt: door de pagina (<script src>), door de worker die het zware rekenwerk doet
   (new Worker met dit bestand) en door de tests (node tests/model_test.js). Er staat daarom niets in dat een pagina nodig heeft. */
/* Schuld (hypotheek, lening): wat je per maand kwijt bent (m), de resterende looptijd in jaren (y) en eventueel een
   aflossingsvrij bedrag (v): die schuld blijft aan het einde van de looptijd staan en telt als één betaling. Geen rente
   nodig: de leningdelen van een hypotheek zitten samen in de maandlast. n = aantal maanden. */
function debtCalc(d) {
  var pm = d && d.m > 0 ? d.m : 0, n = Math.round((d && d.y > 0 ? d.y : 0) * 12), v = d && d.v > 0 ? d.v : 0;
  if (!((pm > 0 || v > 0) && n >= 1)) return { ok: false, pm: 0, n: 0, v: 0, total: 0 };
  return { ok: true, pm: pm, n: n, v: v, total: pm * n };
}

/* Take Stock rekenmodel (V4, internationaal). Alles in geld van vandaag (reeel).
   Belasting: 'nlbox3' (Nederland, forfaitair over vermogen) of 'returns' (percentage over rendement boven een vrijstelling). */
function runModel(p) {
  var B3SET = { 1: { vrij: 78825, beleg: 0.0731 }, 2: { vrij: 118714, beleg: 0.06 }, 3: { vrij: 61692, beleg: 0.0787 } };
  var b3s = B3SET[p.box3] || B3SET[1];
  var two = p.personen !== 1;
  var mode = p.taxMode || 'nlbox3';
  var BOX3 = { tarief: 0.36, vrij: two ? b3s.vrij : b3s.vrij / 2, spaar: 0.0128, beleg: b3s.beleg };
  var spP = p.spP || 0, spD = p.spD || 0;
  var aowOnP = p.aowAanP !== 0, aowOnD = two && p.aowAanD !== 0, penOnP = p.pensAanP !== 0, penOnD = two && p.pensAanD !== 0;
  var b = p.bruto / 100, c = p.kosten / 100, i = p.inflatie / 100;
  var ageP = p.leeftijdPaul, ageD = p.leeftijdDiana;
  var youngest = (p.eindDiana === 0 || !two) ? ageP : ageD;
  var N = Math.max(1, Math.round(p.eindleeftijd - youngest));
  var grow = (1 + b - c) / (1 + i);
  var tRate = (p.taxRate || 0) / 100, tAllow = (p.taxAllow || 0) * (two ? 2 : 1);
  /* uitgavenverloop: reële daling van de uitgaven per jaar (in %) vanaf 65 jaar, of vanaf nu als iemand al ouder is
     (het ingevulde budget is wat je nu uitgeeft); bij twee personen telt de oudste. 0 = vlak (zoals voor versie 11).
     'fac' is de factor op het maandbudget per jaar, 'spend' het maandbudget per jaar. */
  var uRaw = parseFloat(p.uitgaveDaling), uDec = (isFinite(uRaw) ? Math.max(0, Math.min(5, uRaw)) : 0) / 100, uRef = two ? Math.max(ageP, ageD) : ageP, uStart = Math.max(p.uitgaveVan || 65, uRef);
  /* schulden: een vaste maandlast in euro's tot het einde van de looptijd, plus eventueel een aflossingsvrij bedrag dat aan het
     einde in één keer uit het vermogen gaat. In geld van vandaag wordt de maandlast elk jaar iets lichter.
     'debtM' = kosten per jaar; 'debtL' = eenmalig bedrag per jaar (aflossingsvrij); 'debtIn' = het deel van de maandlasten
     dat al in het ingevulde maandbudget zit, dat deel valt na de looptijd weg. Het maandbudget zonder die lasten daalt
     volgens het uitgavenverloop. */
  var debtM = [], debtL = [], debtIn = 0, dtI;
  for (dtI = 0; dtI < N; dtI++) { debtM.push(0); debtL.push(0); }
  (p.debts || []).forEach(function (dd) {
    var dc = debtCalc(dd); if (!dc.ok) return;
    if (dd.b !== 0) debtIn += dc.pm;
    for (var dtT = 0; dtT < N; dtT++) { var act = Math.max(0, Math.min(12, dc.n - 12 * dtT)); if (act > 0) debtM[dtT] += act * dc.pm / Math.pow(1 + i, dtT); }
    var tb = Math.round(dc.n / 12);
    if (dc.v > 0 && tb < N) debtL[tb] += dc.v / Math.pow(1 + i, dc.n / 12);
  });
  function baseOf(bud) { return Math.max(0, bud - debtIn); }
  var fac = [], spend = [];
  for (var uy = 0; uy < N; uy++) { fac.push(Math.pow(1 - uDec, Math.max(0, uRef + uy - uStart))); spend.push(baseOf(p.budget) * fac[uy] + debtM[uy] / 12); }

  function clamp01(x) { return Math.max(0, Math.min(1, x)); }
  /* deel van het levensjaar [age, age+1) dat binnen [a, b) valt */
  function ovl(age, a, b) { return Math.max(0, Math.min(age + 1, b) - Math.max(age, a)); }
  /* inkomen uit werk per maand (netto) in het jaar dat iemand 'age' is: perioden als die er zijn, anders één bedrag tot de eindleeftijd */
  function work(age, amt, tot, rows) {
    var s = 0, j;
    if (rows && rows.length) { for (j = 0; j < rows.length; j++) if (rows[j].m > 0) s += rows[j].m * ovl(age, rows[j].a, rows[j].b); return s; }
    return amt > 0 ? amt * ovl(age, -1e9, tot) : 0;
  }

  /* jaarbedragen per soort inkomen; 'lump' is eenmalig geld dat dat jaar bij het vermogen komt */
  var inc = [], incSp = [], incPen = [], incWk = [], incPot = [], lump = [];
  for (var t = 0; t < N; t++) {
    var xs = 0, xp = 0, xw = 0;
    if (aowOnP) xs += 12 * spP * clamp01(ageP + t + 1 - p.aowPaul);
    if (aowOnD) xs += 12 * spD * clamp01(ageD + t + 1 - p.aowDiana);
    if (penOnP) xp += 12 * p.pensioenPaul * clamp01(ageP + t + 1 - p.pensioenLeeftijd);
    if (penOnD) xp += 12 * p.pensioenDiana * clamp01(ageD + t + 1 - (p.pensioenLeeftijdDiana !== undefined ? p.pensioenLeeftijdDiana : p.pensioenLeeftijd));
    xw += 12 * work(ageP + t, p.werkP || 0, p.werkTotP || 67, p.perP);
    if (two) xw += 12 * work(ageD + t, p.werkD || 0, p.werkTotD || 67, p.perD);
    incSp.push(xs); incPen.push(xp); incWk.push(xw); incPot.push(0); lump.push(0);
  }
  (p.pots || []).forEach(function (q) {
    if (!q || !(q.a > 0) || (q.w === 1 && !two)) return;
    var own = q.w === 1 ? ageD : ageP, net = q.a * (1 - Math.max(0, Math.min(100, q.x || 0)) / 100);
    if (q.k === 'l') { var tl = Math.max(0, Math.floor((q.f || 0) - own + 1e-9)); if (tl < N) lump[tl] += net; return; }
    var end = q.u > 0 ? q.u : 1e9;
    for (var t1 = 0; t1 < N; t1++) incPot[t1] += 12 * net * ovl(own + t1, q.f || 0, end);
  });
  for (var t0 = 0; t0 < N; t0++) inc.push(incSp[t0] + incPen[t0] + incWk[t0] + incPot[t0] + lump[t0]);

  function box3Of(K) {
    if (p.box3 === 0) return 0;
    var rate = p.spaarDeel / 100 * BOX3.spaar + (1 - p.spaarDeel / 100) * BOX3.beleg;
    return BOX3.tarief * rate * Math.max(0, K - BOX3.vrij);
  }
  /* belasting in geld van vandaag. K = vermogen aan het begin van het jaar, B = na de opname, r = bruto rendement dat jaar */
  function taxAt(K, B, r) {
    if (mode === 'nlbox3') return box3Of(K);
    if (B <= 0 || tRate <= 0) return 0;
    var gain = B * (r - c);
    return Math.max(0, gain - tAllow) * tRate / (1 + i);
  }
  function stepInfo(K, d) {
    var B = K - d;
    if (B < 0) return { B: B, next: B * grow, tax: 0 };
    var tx = taxAt(K, B, b);
    return { B: B, next: B * grow - tx, tax: tx };
  }
  /* opbouw: tot de pensioenleeftijd gaat de maandelijkse inleg in het vermogen (geld van vandaag); daarna geldt het gewone budget */
  var stopAge = p.opbouw ? (p.pensioenLeeftijd || 67) : 0, saveM = p.opbouw ? Math.max(0, p.inleg || 0) : 0;
  /* sparen per periode: vanaf een leeftijd een ander maandbedrag; 'inlBase' is de ingevulde inleg, het verschil met p.inleg is een wat-als-extra */
  var inlRows = p.opbouw && p.inlRows && p.inlRows.length ? p.inlRows.slice().sort(function (x, y) { return x.a - y.a; }) : [], inlExtra = saveM - Math.max(0, p.inlBase !== undefined ? p.inlBase : saveM);
  function saveAt(age) {
    var v = saveM;
    for (var r = 0; r < inlRows.length; r++) if (age + 1e-9 >= inlRows[r].a) v = Math.max(0, inlRows[r].m + inlExtra);
    return v;
  }
  /* tijdens het sparen (opbouw) betaal je de maandlast uit je inkomen; die telt pas mee vanaf de pensioenleeftijd */
  function drawAt(t, budget) {
    if (!p.opbouw) return 12 * baseOf(budget) * fac[t] + debtM[t] + debtL[t] - inc[t];
    var f = ovl(ageP + t, -1e9, stopAge);
    return f * (-12 * saveAt(ageP + t)) + (1 - f) * (12 * baseOf(budget) * fac[t] + debtM[t] - inc[t]) + debtL[t];
  }

  function feasible(K0, budget) {
    var K = K0;
    for (var t = 0; t < N; t++) {
      var inf = stepInfo(K, drawAt(t, budget));
      if (inf.B < 0) return false;
      K = inf.next;
    }
    return K >= p.restkapitaal - 1e-6;
  }
  function required(budget) {
    if (!feasible(1e8, budget)) return Infinity;
    var lo = 0, hi = 1e8;
    for (var k = 0; k < 50; k++) {
      var mid = (lo + hi) / 2;
      if (feasible(mid, budget)) hi = mid; else lo = mid;
    }
    return hi;
  }

  var R = new Array(N + 1);
  R[N] = p.restkapitaal;
  for (var tt = N - 1; tt >= 0; tt--) {
    var d2 = drawAt(tt, p.budget), lo2 = 0, hi2 = 1e8;
    for (var k2 = 0; k2 < 50; k2++) {
      var m2 = (lo2 + hi2) / 2;
      var inf2 = stepInfo(m2, d2);
      if (inf2.B >= 0 && inf2.next >= R[tt + 1]) hi2 = m2; else lo2 = m2;
    }
    R[tt] = hi2;
  }

  var K = [p.startkapitaal], draws = [], taxes = [], emptyAt = null;
  var sumTax = 0;
  for (var t3 = 0; t3 < N; t3++) {
    var d3 = drawAt(t3, p.budget);
    var inf3 = stepInfo(K[t3], d3);
    draws.push(d3);
    taxes.push(inf3.B >= 0 ? inf3.tax : 0);
    sumTax += inf3.B >= 0 ? inf3.tax : 0;
    if (emptyAt === null && inf3.B < 0) emptyAt = t3;
    K.push(inf3.next);
  }

  var req0 = required(p.budget);
  var lo3 = 0, hi3 = 20000 * (p.scale || 1);
  if (!p.skipMax) {
    var iters = p.maxIter || 45;
    for (var k3 = 0; k3 < iters; k3++) {
      var m3 = (lo3 + hi3) / 2;
      if (required(m3) <= p.startkapitaal) lo3 = m3; else hi3 = m3;
    }
  }

  return {
    g: grow - 1, N: N, youngest: youngest, tStop: p.opbouw ? Math.max(0, Math.min(N, Math.round(stopAge - ageP))) : 0, fac: fac, spend: spend, debtM: debtM, debtL: debtL,
    req0: req0, R: R, K: K, draws: draws, incomes: inc, taxes: taxes, incSp: incSp, incPen: incPen, incWk: incWk, incPot: incPot, lump: lump,
    emptyAt: emptyAt, marge: p.startkapitaal - req0,
    buffer: req0 > 0 ? p.startkapitaal / req0 - 1 : Infinity,
    maxBudget: lo3, eersteJaarOpname: p.startkapitaal > 0 ? draws[0] / p.startkapitaal : 0,
    belastingJaar1: taxes[0], belastingGemiddeld: sumTax / N,
    requiredFor: required, box3Of: box3Of, taxAt: taxAt
  };
}

/* ================= simulatie ================= */
var RHO = 0.2, SIMN = 4000;
var ASSET = [{ k: 'a.eq', mu: 6.5, sd: 16 }, { k: 'a.bond', mu: 3.6, sd: 5.5 }, { k: 'a.cash', mu: 2.5, sd: 0.5 }];
var zc = {};
function normalsFor(N) {
  if (zc[N]) return zc[N];
  var a = 20261029 | 0;
  function rnd() { a = (a + 0x6D2B79F5) | 0; var t2 = Math.imul(a ^ (a >>> 15), 1 | a); t2 = (t2 + Math.imul(t2 ^ (t2 >>> 7), 61 | t2)) ^ t2; return ((t2 ^ (t2 >>> 14)) >>> 0) / 4294967296; }
  var n = SIMN * N * 3, z = new Float32Array(n), i = 0, u1, u2, r, th;
  while (i < n) { u1 = rnd() || 1e-12; u2 = rnd(); r = Math.sqrt(-2 * Math.log(u1)); th = 2 * Math.PI * u2; z[i++] = r * Math.cos(th); if (i < n) z[i++] = r * Math.sin(th); }
  zc[N] = z; return z;
}
function simCore(m, pf, p, keep, nSim) {
  var NS = nSim || SIMN;
  var N = m.N, z = normalsFor(N), c = p.kosten / 100, inf = p.inflatie / 100, rr = Math.sqrt(1 - RHO * RHO);
  var w0 = pf.w[0], w1 = pf.w[1], w2 = pf.w[2];
  var mu0 = ASSET[0].mu / 100, mu1 = ASSET[1].mu / 100, mu2 = ASSET[2].mu / 100;
  var sd0 = ASSET[0].sd / 100, sd1 = ASSET[1].sd / 100, sd2 = ASSET[2].sd / 100;
  var vals = keep ? [] : null; if (keep) for (var ti = 0; ti <= N; ti++) vals.push(new Float64Array(SIMN));
  var fin = new Float64Array(SIMN), ok = 0, s, t2, K, failed;
  for (s = 0; s < NS; s++) {
    K = p.startkapitaal; failed = false;
    var base = s * N * 3;
    for (t2 = 0; t2 < N; t2++) {
      if (keep) vals[t2][s] = K;
      var B = K - m.draws[t2];
      if (B < 0) { failed = true; K = 0; break; }
      var z0 = z[base + t2 * 3], z1 = z[base + t2 * 3 + 1], z2 = z[base + t2 * 3 + 2];
      var r = w0 * (mu0 + sd0 * z0) + w1 * (mu1 + sd1 * (RHO * z0 + rr * z1)) + w2 * (mu2 + sd2 * z2);
      K = B * ((1 + r - c) / (1 + inf)) - m.taxAt(K, B, r);
    }
    fin[s] = K;
    if (keep && !failed) vals[N][s] = K;
    if (!failed && K >= p.restkapitaal - 1e-6) ok++;
  }
  return { ok: ok, fin: fin, vals: vals, N: N, n: NS };
}
function simulate(m, pf, p) {
  var r = simCore(m, pf, p, true), vals = r.vals, ts = [];
  for (var i = 0; i <= m.N; i++) ts.push(i);
  vals.forEach(function (v) { v.sort(); });
  function q(v, f) { return v[Math.min(SIMN - 1, Math.max(0, Math.round(f * (SIMN - 1))))]; }
  function zero(k) { var v = vals[k], c = 0; while (c < SIMN && v[c] <= 0) c++; return c / SIMN; }
  return { succ: r.ok / SIMN, ts: ts, q: function (k, f) { return q(vals[k], f); }, zero: zero, last: ts.length - 1 };
}
/* nSim: reken met minder simulaties voor een grove eerste schatting (dan is alleen de kans bruikbaar) */
function simQuick(m, pf, p, nSim) { var r = simCore(m, pf, p, false, nSim); if (nSim) return { succ: r.ok / r.n, med: 0 }; r.fin.sort(); return { succ: r.ok / SIMN, med: r.fin[Math.round(SIMN / 2)] }; }
function c90For(m, pf, p) {
  function q(c) { p.startkapitaal = c; return simQuick(m, pf, p).succ; }
  if (q(0) >= 0.9) return 0;
  var lo = 0, hi = Math.max(m.req0 * 2, 50000), g = 0;
  while (q(hi) < 0.9 && g++ < 8) { lo = hi; hi *= 2; }
  for (var i = 0; i < 13; i++) { var mid = (lo + hi) / 2; if (q(mid) >= 0.9) hi = mid; else lo = mid; }
  return hi;
}
/* het zware rekenwerk voor de hoofduitslag: advies, automatische mix, kans op slagen en maximaal budget (X komt van hvCtx in de pagina) */
function hvRun(X) {
  var adv = null, autoIdx = X.autoIdx, autoInfo = null;
  function eff() { return X.pfUser || autoIdx; }
  function prm(over) {
    var p = {}, k;
    for (k in X.st) p[k] = X.st[k];
    p.startkapitaal = X.cap > 0 ? X.cap : (adv ? adv.c90 : 0);
    p.taxMode = X.nl ? 'nlbox3' : 'returns';
    var ps = X.ports[eff()];
    p.bruto = ps.mu * 100; p.spaarDeel = ps.w[2] * 100;
    if (over) for (k in over) p[k] = over[k];
    return p;
  }
  function advice(extra, only, dec) {
    var best = null;
    (only ? [only] : [1, 2, 3]).forEach(function (i) {
      var pf = X.ports[i], ov = { startkapitaal: 0, bruto: pf.mu * 100, spaarDeel: pf.w[2] * 100, skipMax: true, eindleeftijd: X.st.eindleeftijd + (extra || 0) };
      if (typeof dec === 'number') ov.uitgaveDaling = dec;
      var m = runModel(prm(ov)), c = c90For(m, pf, prm(ov));
      if (!best || c < best.c90) best = { c90: Math.ceil(c / 1000) * 1000, req0: m.req0, pf: i, eind: X.st.eindleeftijd + (extra || 0) };
    });
    return best;
  }
  function maxBud(m0) {
    var best = 0;
    [1, 2, 3].forEach(function (i) {
      var pf = X.ports[i];
      function q(b) { var p = prm({ budget: b, skipMax: true, bruto: pf.mu * 100, spaarDeel: pf.w[2] * 100 }); return simQuick(runModel(p), pf, p).succ; }
      if (best > 0 && q(best + 1) < 0.9) return;
      var lo = best > 0 ? best + 1 : 0, hi = Math.max(m0.maxBudget, lo * 1.5, 100), g = 0;
      while (q(hi) >= 0.9 && g++ < 6) { lo = hi; hi *= 1.5; }
      for (var k = 0; k < 12; k++) { var mid = (lo + hi) / 2; if (q(mid) >= 0.9) lo = mid; else hi = mid; }
      best = Math.max(best, Math.floor(lo));
    });
    return best;
  }
  function pick() {
    var p = prm(), res = [];
    [1, 2, 3].forEach(function (i) {
      var pf = X.ports[i], m = runModel(prm({ bruto: pf.mu * 100, spaarDeel: pf.w[2] * 100, skipMax: true }));
      var q = simQuick(m, pf, p); res.push({ i: i, succ: q.succ, med: q.med });
    });
    var b = res.reduce(function (a, c) { return c.succ > a.succ ? c : a; });
    var near = res.filter(function (x) { return x.succ >= b.succ - 0.01; });
    var pk = near.reduce(function (a, c) { return c.med > a.med ? c : a; });
    return { idx: pk.i, succ: pk.succ };
  }
  if (X.st.budget > 0) { adv = advice(0); adv.long = advice(5, adv.pf); }
  var altC90 = null;
  if (X.st.budget > 0 && X.alts && X.alts.length) { altC90 = {}; X.alts.forEach(function (k) { altC90[k] = advice(0, null, k).c90; }); }
  if (!X.pfUser) { autoInfo = pick(); autoIdx = autoInfo.idx; }
  var m = runModel(prm());
  var succ = simQuick(m, X.ports[eff()], prm()).succ;
  return { adv: adv, altC90: altC90, autoInfo: autoInfo, autoIdx: autoIdx, curSucc: succ, max90: X.st.budget > 0 ? maxBud(m) : 0 };
}

if (typeof module !== 'undefined') module.exports = runModel;
/* als worker geladen: reken op verzoek en stuur het antwoord terug */
if (typeof document === 'undefined' && typeof importScripts === 'function') {
  onmessage = function (e) { var r = null; try { r = hvRun(e.data.X); } catch (x) {} postMessage({ id: e.data.id, r: r }); };
}
