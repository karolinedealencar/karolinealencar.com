const CACHE_NAME = 'static-cache';
const FILES_TO_CACHE = [
    '/',
    'img/intro-illustration.png',
    'img/logo-codepen.svg',
    'img/logo-github.svg',
    'img/logo-linkedin.svg',
    'img/logo-twitter.svg',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
          console.log('[ServiceWorker] Pre-caching offline page');
          return cache.addAll(FILES_TO_CACHE);
        })
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then((keyList) => {
          return Promise.all(keyList.map((key) => {
            if (key !== CACHE_NAME) {
              console.log('[ServiceWorker] Removing old cache', key);
              return caches.delete(key);
            }
          }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    if (event.request.mode !== 'navigate') {
        return;
    }
    event.respondWith(
        fetch(event.request)
            .catch(() => {
            return caches.open(CACHE_NAME)
                .then((cache) => {
                    return cache.match('/');
                });
            })
    );

});