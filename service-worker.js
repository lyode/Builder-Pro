// EMERGENCY SERVICE WORKER - This will unregister itself and clear all caches

self.addEventListener('install', (event) => {
  console.log('Emergency cleanup service worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('Emergency cleanup: Clearing all caches');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          console.log('Deleting cache:', cacheName);
          return caches.delete(cacheName);
        })
      );
    }).then(() => {
      console.log('All caches cleared. Unregistering service worker...');
      return self.registration.unregister();
    }).then(() => {
      console.log('Service worker unregistered. Please refresh the page.');
      return self.clients.matchAll();
    }).then((clients) => {
      clients.forEach(client => client.navigate(client.url));
    })
  );
});

// Don't intercept any fetches
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
