/* Buttons: offline support. Network first, so updates arrive; cache as fallback. */
var V = 'buttons-v18';
var CORE = ['/fonts/fraunces-600.woff2', '/fonts/inter-400.woff', '/fonts/inter-500.woff', '/fonts/inter-600.woff', '/fonts/inter-700.woff', '/', '/nl/', '/de/', '/fr/', '/es/', '/manifest.webmanifest', '/icon-192.png', '/icon-512.png', '/img/hero-overzicht.webp', '/img/hero-inzicht.webp', '/img/hero-over.webp', '/img/uitkomst-ruim.webp', '/img/uitkomst-krap.webp', '/img/uitkomst-tekort.webp', '/img/knoop-sage.webp', '/img/knoop-rose.webp', '/img/knoop-cream.webp', '/img/knoop-terra.webp', '/img/knoop-slate.webp', '/img/knoop-butter.webp', '/img/knoop-lilac.webp', '/img/knoop-caramel.webp'];
self.addEventListener('install', function (e) { e.waitUntil(caches.open(V).then(function (c) { return c.addAll(CORE); }).then(function () { return self.skipWaiting(); })); });
self.addEventListener('activate', function (e) {
  e.waitUntil(caches.keys().then(function (ks) { return Promise.all(ks.filter(function (k) { return k !== V; }).map(function (k) { return caches.delete(k); })); }).then(function () { return self.clients.claim(); }));
});
self.addEventListener('fetch', function (e) {
  var r = e.request;
  if (r.method !== 'GET') return;
  var u = new URL(r.url);
  var fonts = u.hostname === 'fonts.googleapis.com' || u.hostname === 'fonts.gstatic.com';
  if (u.origin !== location.origin && !fonts) return;
  e.respondWith(fetch(r).then(function (res) {
    if (res && (res.ok || res.type === 'opaque')) { var cp = res.clone(); caches.open(V).then(function (c) { c.put(r, cp); }); }
    return res;
  }).catch(function () { return caches.match(r, { ignoreSearch: true }).then(function (m) { return m || (r.mode === 'navigate' ? caches.match('/') : Response.error()); }); }));
});
