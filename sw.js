/* Service worker de Japanese N1 Path
   - Guarda la app en el teléfono para usarla SIN conexión.
   - Cuando HAY internet, trae siempre la última versión que subiste a GitHub.
   No necesitas tocar este archivo para actualizar la app: basta con que
   subas un index.html nuevo y abras la app una vez con conexión. */

var CACHE = "n1path-v1";
var SHELL = ["./", "./index.html", "./manifest.json", "./icon.png"];

self.addEventListener("install", function (e) {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }));
});

self.addEventListener("activate", function (e) {
  e.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== CACHE) return caches.delete(k);
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET") return;

  var accept = req.headers.get("accept") || "";
  var isPage = req.mode === "navigate" || accept.indexOf("text/html") !== -1;

  if (isPage) {
    // Red primero: si hay internet, usa lo más nuevo y actualiza la copia.
    e.respondWith(
      fetch(req).then(function (res) {
        var copy = res.clone();
        caches.open(CACHE).then(function (c) { c.put("./", copy); });
        return res;
      }).catch(function () {
        return caches.match("./").then(function (r) {
          return r || caches.match("./index.html");
        });
      })
    );
  } else {
    // Copia primero: para icono y manifest.
    e.respondWith(
      caches.match(req).then(function (r) { return r || fetch(req); })
    );
  }
});
