const CACHE_NAME = 'xiaoxin-med-v1';
const ASSETS = [
    './',
    './index.html',
    './style.css',
    './data.js',
    './app.js',
    './manifest.json',
    './金毛.svg',
    './icon-192.png',
    './icon-512.png'
];

// 安装时缓存所有资源
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
    );
});

// 优先从缓存读取（离线可用）
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});

// 更新时清除旧缓存
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
});
