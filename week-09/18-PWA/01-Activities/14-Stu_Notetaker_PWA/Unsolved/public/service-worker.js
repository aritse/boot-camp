const FILES_TO_CACHE = ["/", "/index.html", "/app.js"];

const CACHE_NAME = "static-cache";
const DATA_CACHE_NAME = "data-cache";

self.addEventListener("install", event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log("Your files were pre-cached successfully");
        return cache.addAll(FILES_TO_CACHE);
      })
      .catch(err => console.log(err))
  );

  self.skipWaiting();
});

self.addEventListener("activate", function(evt) {
  evt.waitUntil(
    caches.keys().then(keyList => {
      return Promise.all(
        keyList.map(key => {
          if (key !== CACHE_NAME && key !== DATA_CACHE_NAME) {
            console.log("Removing old cache data", key);
            return caches.delete(key);
          }
        })
      );
    })
  );

  self.clients.claim();
});

self.addEventListener("fetch", function(evt) {
  evt.respondWith(
    caches.open(CACHE_NAME).then(cache => {
      return cache.match(evt.request).then(response => {
        return response || fetch(evt.request);
      });
    })
  );
});
