/* Service worker de Japanese N1 Path
   Estrategia general: "primero la red" (network-first).
   - Con internet: trae siempre la última versión y la guarda.
   - Sin internet: usa la copia guardada.
   Esto hace que las actualizaciones lleguen solas y que la app funcione offline.

   Audio de lectura (audio/*.mp3): "primero la caché".
   - Se descarga UNA vez al reproducirlo y luego suena desde local (ahorra datos
     y funciona offline). No se precarga al instalar, así la PWA sigue ligera.
   - Vive en una caché aparte que NO se borra al subir de versión, para no tener
     que volver a descargar los audios tras cada actualización de contenido. */

var CACHE = "n1path-v10";                 /* ← subido: fuerza recargar el menú/HTML nuevo y descartar caché vieja */
var AUDIO_CACHE = "n1path-audio-v2";     /* ← persistente: MP3 locales y audio del Worker TTS */
var CDN_CACHE = "n1path-cdn-v1";         /* ← persistente: librería y datos de trazos (jsDelivr) */
var SHELL = ["./", "./index.html", "./content.js", "./reading.js", "./manifest.json", "./icon.png"];

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k !== CACHE && k !== AUDIO_CACHE && k !== CDN_CACHE) return caches.delete(k);  /* conserva audio y CDN */
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);

  /* --- Audio: primero la caché (descarga una vez, luego local).
     Cubre MP3 locales (audio/*.mp3) y el audio del Worker TTS (.../tts?text=...),
     aunque el Worker esté en otro dominio. Persistente entre versiones. --- */
  var isAudio = /\.mp3($|\?)/i.test(url.pathname) || /\/tts(\?|$)/i.test(url.pathname);
  if(isAudio){
    /* Peticiones por rango (iOS streaming): directas al Worker, no las interceptamos */
    if(req.headers.get("range")){ return; }
    e.respondWith(
      caches.match(req).then(function(cached){
        if(cached) return cached;
        return fetch(req).then(function(res){
          /* cachear SOLO audio válido y legible (200). Nunca opacas ni errores (502, etc.) */
          if(res && res.status === 200 && res.type !== "opaque"){
            var copy = res.clone();
            caches.open(AUDIO_CACHE).then(function(c){ c.put(req, copy); });
          }
          return res;
        });
      })
    );
    return;
  }

  if(url.origin !== location.origin){
    /* Librería y datos de trazos desde jsDelivr: primero la caché (offline tras 1ª carga) */
    if(url.host === "cdn.jsdelivr.net"){
      e.respondWith(
        caches.match(req).then(function(cached){
          if(cached) return cached;
          return fetch(req).then(function(res){
            if(res && res.status === 200){ var copy=res.clone(); caches.open(CDN_CACHE).then(function(c){ c.put(req, copy); }); }
            return res;
          });
        })
      );
      return;
    }
    return; // otros recursos externos: que los gestione el navegador
  }

  /* --- Resto: primero la red --- */
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
