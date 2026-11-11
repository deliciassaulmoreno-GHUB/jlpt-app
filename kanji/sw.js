const CACHE='kanji-app-v4';
const FILES=['./','index.html','data.js','manifest.json','icon.png'];
const fresh=u=>fetch(u,{cache:'no-cache'});
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>Promise.all(FILES.map(f=>fresh(f).then(r=>{if(r.ok)return c.put(f,r)})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith('kanji-app-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
// Red primero (siempre la última versión); si no hay conexión o tarda más de 3 s, la copia guardada.
self.addEventListener('fetch',e=>{const u=new URL(e.request.url);if(e.request.method!=='GET'||u.origin!==location.origin)return;
  e.respondWith(caches.open(CACHE).then(c=>c.match(e.request,{ignoreSearch:true}).then(hit=>{
    const net=fresh(e.request.url).then(r=>{if(r.ok)c.put(e.request,r.clone());return r});
    if(!hit)return net;
    return Promise.race([net,new Promise(res=>setTimeout(()=>res(hit),3000))]).catch(()=>hit)})))});
