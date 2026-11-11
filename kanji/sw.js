const CACHE='kanji-app-v1';
const FILES=['./','index.html','data.js','manifest.json','icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('kanji-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Sirve de caché al instante y actualiza en segundo plano (funciona sin conexión).
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin)c.put(e.request,r.clone());return r}).catch(()=>hit);
    return hit||net})))});
