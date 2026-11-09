const V="tc-v5",SHELL=["./","index.html","manifest.webmanifest","icon-192.png","icon-512.png","apple-touch-icon.png"];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(SHELL)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;
 const same=new URL(r.url).origin===location.origin;
 if(same){e.respondWith(fetch(r,{cache:"no-cache"}).then(x=>{if(x.ok){const cp=x.clone();caches.open(V).then(c=>c.put(r,cp))}return x}).catch(()=>caches.match(r).then(h=>h||caches.match("index.html"))));return}
 e.respondWith(caches.match(r).then(hit=>{const net=fetch(r).then(x=>{if(x&&(x.ok||x.type==="opaque")){const cp=x.clone();caches.open(V).then(c=>c.put(r,cp))}return x}).catch(()=>hit);return hit||net}))});
