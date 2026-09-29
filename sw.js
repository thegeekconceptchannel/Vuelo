// Vuelo · service worker
// Guarda la app en el iPhone para que abra aunque no haya señal
// o aunque el sitio donde la publicaste esté caído.
// Los datos del clima NO pasan por aquí: van directo de Open-Meteo y NOAA.
const CACHE = 'vuelo-v2';
const APP = [
  './',
  './index.html',
  './manifest.webmanifest',
  './apple-touch-icon.png',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (e) => {
  // cache: 'reload' = baja los archivos frescos del servidor, sin usar copias viejas
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(APP.map((u) => new Request(u, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // APIs de clima: directo a internet

  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const esPagina = req.mode === 'navigate';
    const guardado = esPagina
      ? (await cache.match('./index.html')) || (await cache.match('./'))
      : await cache.match(req, { ignoreSearch: true });

    // Primero lo guardado (abre al instante y sin señal); por detrás, busca la versión nueva.
    const red = fetch(esPagina ? './index.html' : req.url, { cache: 'no-cache' }).then((res) => {
      if (res && res.ok) {
        const copia = res.clone();
        cache.put(esPagina ? './index.html' : req, copia);
      }
      return res;
    }).catch(() => null);

    if (guardado) {
      e.waitUntil(red);
      return guardado;
    }
    const res = await red;
    return res || new Response('Sin conexión', { status: 503, headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
  })());
});
