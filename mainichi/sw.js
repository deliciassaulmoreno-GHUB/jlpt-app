/* Service worker de 毎日 · Mainichi
   - Misma estrategia que N1 Path: primero la red, pero si tarda más de 3 s se sirve
     la copia guardada. Solo se guardan respuestas correctas (200).
   - El contenido es el de la app principal (../content.js): se guarda aquí también
     para que 毎日 funcione sin conexión.
   - Audio del Worker TTS: primero la caché, en una caché que no se borra al subir de versión.
   - Avisos push: los envía el Worker jlpt-cuenta (rutas /m/push/*). Al llegar uno, se
     pone en el icono el número de minutos que faltan; al tocarlo se abre la sesión. */

var CACHE = "mainichi-v4";                /* ← v4: pretest y aprendizaje en 3 pasos espaciados, respuesta escrita */
var AUDIO_CACHE = "mainichi-audio-v1";
var SHELL = ["./", "./index.html", "./manifest.json", "./icon.png", "../content.js"];
var NET_TIMEOUT = 3000;

self.addEventListener("install", function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){ return c.addAll(SHELL); }));
  self.skipWaiting();
});

self.addEventListener("activate", function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if(k.indexOf("mainichi-") === 0 && k !== CACHE && k !== AUDIO_CACHE) return caches.delete(k);   /* no toca las cachés de N1 Path */
      }));
    }).then(function(){ return self.clients.claim(); })
  );
});

function cacheOk(res){ return res && res.status === 200 && res.type !== "opaque"; }

self.addEventListener("fetch", function(e){
  var req = e.request;
  if(req.method !== "GET") return;
  var url = new URL(req.url);

  if(/\/tts(\?|$)/i.test(url.pathname)){
    if(req.headers.get("range")) return;
    e.respondWith(
      caches.match(req).then(function(cached){
        if(cached) return cached;
        return fetch(req).then(function(res){
          if(cacheOk(res)){ var copy = res.clone(); caches.open(AUDIO_CACHE).then(function(c){ c.put(req, copy); }); }
          return res;
        });
      })
    );
    return;
  }
  if(url.origin !== location.origin) return;     /* Worker de cuenta: lo gestiona el navegador */

  e.respondWith(new Promise(function(resolve){
    var settled = false;
    function done(r){ if(!settled && r){ settled = true; resolve(r); } }
    function fromCache(){
      return caches.match(req, {ignoreSearch: req.mode === "navigate"}).then(function(r){
        return r || (req.mode === "navigate" ? caches.match("./index.html") : null);
      });
    }
    var timer = setTimeout(function(){ fromCache().then(done); }, NET_TIMEOUT);
    fetch(req).then(function(res){
      clearTimeout(timer);
      if(cacheOk(res)){ var copy = res.clone(); caches.open(CACHE).then(function(c){ c.put(req, copy); }); done(res); }
      else fromCache().then(function(r){ done(r || res); });
    }).catch(function(){
      clearTimeout(timer);
      fromCache().then(function(r){ done(r || Response.error()); });
    });
  }));
});

self.addEventListener("push", function(e){
  var d = {};
  try{ d = e.data ? e.data.json() : {}; }catch(err){ d = { body: e.data ? e.data.text() : "" }; }
  var jobs = [ self.registration.showNotification(d.title || "毎日 · Mainichi", {
    body: d.body || "Tus 15 minutos de hoy te esperan.",
    icon: "icon.png", badge: "icon.png", tag: "mainichi", renotify: true,
    data: { url: d.url || "./?go=1" }
  }) ];
  if(d.badge && self.navigator && self.navigator.setAppBadge) jobs.push(self.navigator.setAppBadge(d.badge).catch(function(){}));
  e.waitUntil(Promise.all(jobs));
});

self.addEventListener("notificationclick", function(e){
  e.notification.close();
  var target = new URL((e.notification.data && e.notification.data.url) || "./?go=1", self.registration.scope).href;
  e.waitUntil(
    self.clients.matchAll({ type: "window", includeUncontrolled: true }).then(function(list){
      for(var i = 0; i < list.length; i++){
        var c = list[i];
        if(c.url.indexOf(self.registration.scope) === 0 && "focus" in c){
          return c.focus().then(function(w){ return w && w.navigate ? w.navigate(target) : w; });
        }
      }
      return self.clients.openWindow(target);
    })
  );
});
