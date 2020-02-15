var cacheName = 'phaser-game-v01';
var filesToCache = [
  '/',
  '/index.html',
  '/css/game.css',
  '/assets/logo.png',
  '/assets/icon-192.png',
  '/assets/icon-256.png',
  '/assets/icon-512.png',
  '/js/phaser.min.js',
  '/js/scenes/boot-scene.js',
  '/js/scenes/play-scene.js',
  '/js/game.js',
];

self.addEventListener('install', (event) => {
  console.log('sw install');
  event.waitUntil(
    caches
      .open(cacheName)
      .then(cache => cache.addAll(filesToCache))
      .catch(err => console.error(err))
  );
});

self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  console.log(event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then(res => res || fetch(event.request))
      .catch(err => console.error(err))
  );
});

self.addEventListener('activate', (event) => {
  console.log('sw activate');
  event.waitUntil(
    caches
      .keys()
      .then(function (keylist) {
        return Promise.all(
          keylist.map(function (key) {
            if (key !== cacheName) {
              console.log('sw removing old cache', key);
              return caches.delete(key);
            }
          })
        );
      })
  );
});
