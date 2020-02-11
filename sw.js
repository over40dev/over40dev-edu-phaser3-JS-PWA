var cacheName = 'phaser-game-v01';
var filesToCache = [
  '/',
  '/index.html',
  '/img/logo.png',
  '/img/icon-192.png',
  '/img/icon-256.png',
  '/img/icon-512.png',
  '/js/game.js',
  '/css/game.css',
  '/js/phaser.min.js',
];

self.addEventListener('install', (event) => {
  console.log('sw install');
  event.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(filesToCache))
      .catch((err) => console.error(err))
  );
});

self.addEventListener('fetch', (event) => {
  console.log('sw fetch');
  console.log(event.request.url);
  event.respondWith(
    caches
      .match(event.request)
      .then((res) => res || fetch(event.request))
      .catch((err) => console.error(err))
  );
});