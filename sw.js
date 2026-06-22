/* Service worker de Japanese N1 Path
   Estrategia: "primero la red" (network-first).
   - Con internet: trae siempre la última versión y la guarda.
   - Sin internet: usa la copia guardada.
   Esto hace que las actualizaciones lleguen solas y que la app funcione offline. */

var CACHE = "n1path-v3";
var SHELL = ["./", "./index.html", "./content.js", "./manifest.json", "./icon.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){ if(k!==CACHE) return caches.delete(k); }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);
  if(url.origin !== location.origin) return; // recursos externos: que los gestione el navegador

  e.respondWith(
    fetch(req).then(function(res){
      var copy = res.clone();
      caches.open(CACHE).then(function(c){ c.put(req, copy); });
      return res;
    }).catch(function(){
      return caches.match(req).then(function(r){ return r || caches.match("./index.html"); });
    })
  );
});
