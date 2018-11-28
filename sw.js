importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03f6a6bddaf1c74cb664.js",
    "revision": "2c134cf77cb788d6cdc3c90271010061"
  },
  {
    "url": "/_nuxt/8be87fa0623622412690.js",
    "revision": "f4c55cea41a6cd4ce2ea236f606718fc"
  },
  {
    "url": "/_nuxt/91289d7885823e2c971c.js",
    "revision": "3d1e440531ebfdab7fed6ffaca430c31"
  },
  {
    "url": "/_nuxt/b2a0ce57fd40cf902206.js",
    "revision": "fb2858ceca179b2d82708a43d6a47c08"
  },
  {
    "url": "/_nuxt/d84c729e7f87ecbb7d77.js",
    "revision": "f2f23348c2c3ae84f260ac1b413599e6"
  },
  {
    "url": "/_nuxt/e4d3c4a48cb03136ee85.js",
    "revision": "4da0c74db4e51b48adeca4dbaf9e7b5c"
  },
  {
    "url": "/_nuxt/f1266d0250b7100cd3b0.js",
    "revision": "bb872aeddf4b2e0ef981836954e93f8f"
  }
], {
  "cacheId": "quran-offline",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/favicon.ico', '/favicon-32x32.png', '/favicon-96x96.png', '/icon-192x192.png', '/data/surah-info.json', '/data/surah/1.json', '/data/surah/2.json', '/data/surah/3.json', '/data/surah/4.json', '/data/surah/5.json', '/data/surah/6.json', '/data/surah/7.json', '/data/surah/8.json', '/data/surah/9.json', '/data/surah/10.json', '/data/surah/11.json', '/data/surah/12.json', '/data/surah/13.json', '/data/surah/14.json', '/data/surah/15.json', '/data/surah/16.json', '/data/surah/17.json', '/data/surah/18.json', '/data/surah/19.json', '/data/surah/20.json', '/data/surah/21.json', '/data/surah/22.json', '/data/surah/23.json', '/data/surah/24.json', '/data/surah/25.json', '/data/surah/26.json', '/data/surah/27.json', '/data/surah/28.json', '/data/surah/29.json', '/data/surah/30.json', '/data/surah/31.json', '/data/surah/32.json', '/data/surah/33.json', '/data/surah/34.json', '/data/surah/35.json', '/data/surah/36.json', '/data/surah/37.json', '/data/surah/38.json', '/data/surah/39.json', '/data/surah/40.json', '/data/surah/41.json', '/data/surah/42.json', '/data/surah/43.json', '/data/surah/44.json', '/data/surah/45.json', '/data/surah/46.json', '/data/surah/47.json', '/data/surah/48.json', '/data/surah/49.json', '/data/surah/50.json', '/data/surah/51.json', '/data/surah/52.json', '/data/surah/53.json', '/data/surah/54.json', '/data/surah/55.json', '/data/surah/56.json', '/data/surah/57.json', '/data/surah/58.json', '/data/surah/59.json', '/data/surah/60.json', '/data/surah/61.json', '/data/surah/62.json', '/data/surah/63.json', '/data/surah/64.json', '/data/surah/65.json', '/data/surah/66.json', '/data/surah/67.json', '/data/surah/68.json', '/data/surah/69.json', '/data/surah/70.json', '/data/surah/71.json', '/data/surah/72.json', '/data/surah/73.json', '/data/surah/74.json', '/data/surah/75.json', '/data/surah/76.json', '/data/surah/77.json', '/data/surah/78.json', '/data/surah/79.json', '/data/surah/80.json', '/data/surah/81.json', '/data/surah/82.json', '/data/surah/83.json', '/data/surah/84.json', '/data/surah/85.json', '/data/surah/86.json', '/data/surah/87.json', '/data/surah/88.json', '/data/surah/89.json', '/data/surah/90.json', '/data/surah/91.json', '/data/surah/92.json', '/data/surah/93.json', '/data/surah/94.json', '/data/surah/95.json', '/data/surah/96.json', '/data/surah/97.json', '/data/surah/98.json', '/data/surah/99.json', '/data/surah/100.json', '/data/surah/101.json', '/data/surah/102.json', '/data/surah/103.json', '/data/surah/104.json', '/data/surah/105.json', '/data/surah/106.json', '/data/surah/107.json', '/data/surah/108.json', '/data/surah/109.json', '/data/surah/110.json', '/data/surah/111.json', '/data/surah/112.json', '/data/surah/113.json', '/data/surah/114.json'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
