const cacheName = 'cache-v1';

const resourcesToPrecache = [
    '/',
    'index.html',
    'css/style.css',
    'images/shoe-1.png',
    'images/shoe-2.png',
    'images/shoe-3.png',
    'images/shoe-4.png',
    'images/shoe-5.png',
    'images/shoe-6.png'
]

self.addEventListener('install', event => {
    console.log('Service worker install event! ');
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {
            return cache.addAll(resourcesToPrecache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
        return cachedResponse || fetch(event.request);
    })
    );
});