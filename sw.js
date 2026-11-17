const C="forma-v1";self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","index.html","manifest.webmanifest","icon-192.png"])))});
self.addEventListener("activate",e=>e.waitUntil(clients.claim()));
self.addEventListener("fetch",e=>{if(e.request.method!="GET")return;e.respondWith(caches.match(e.request).then(r=>{const f=fetch(e.request).then(n=>{if(n.ok||n.type=="opaque")caches.open(C).then(c=>c.put(e.request,n.clone()));return n}).catch(()=>r);return r||f}))});
