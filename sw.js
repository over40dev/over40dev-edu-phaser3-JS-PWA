var cacheName = 'phaser-game-v01';
var filesToCache = [
  '/',
  '/index.html',
  '/assets/logo.png',
  '/assets/icon-192.png',
  '/assets/icon-256.png',
  '/assets/icon-512.png',
  '/js/scenes/boot-scene.js',
  '/js/scenes/play-scene.js',
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