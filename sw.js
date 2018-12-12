importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0fd5933c358227e080c0.js",
    "revision": "90bccca5735d0b9e62a10cc7d4fcafb9"
  },
  {
    "url": "/_nuxt/29cae9f34814e2473709.js",
    "revision": "d4761ec4b9acc9dfc97c128b7bd317ce"
  },
  {
    "url": "/_nuxt/32ee6c9aa69671e9585e.js",
    "revision": "5815c95f782c1fc517513ac9927eab79"
  },
  {
    "url": "/_nuxt/4b62b3789ba352647cb5.js",
    "revision": "530dd663d51aa8ffbe70f21551ce0d97"
  },
  {
    "url": "/_nuxt/89f60f2adbe5f1c78a59.js",
    "revision": "b39ce04cbdd28ad5e3a5816a802bd420"
  },
  {
    "url": "/_nuxt/8c37485f17c5390e6cf3.js",
    "revision": "e51d61dc3e8dbab61c638b87d1d2075c"
  },
  {
    "url": "/_nuxt/9184a962b5cff5488822.js",
    "revision": "273d751c9830cd040cf0618370b54e5f"
  },
  {
    "url": "/_nuxt/b03633e6800156f67351.js",
    "revision": "965e2d4b37b09f1009a11869e2df7132"
  },
  {
    "url": "/_nuxt/ca47c592333958b4c705.js",
    "revision": "57f208626f3deca74256cca50efc3829"
  },
  {
    "url": "/_nuxt/cb3d1a041e74fdb61221.js",
    "revision": "830d62eba5f60f61d851b792036400c9"
  },
  {
    "url": "/_nuxt/db46d3d19de964f052b6.js",
    "revision": "5cda4e3a4ab0577a2d392c1fca6c180b"
  },
  {
    "url": "/_nuxt/df35f7b29019a11ced3f.js",
    "revision": "c58dfb0c3713f389eec846da0cf21de4"
  }
], {
  "cacheId": "quran-offline",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.precaching.precacheAndRoute(['/favicon.ico', '/favicon-16x16.png', '/favicon-32x32.png', '/favicon-96x96.png', '/icon-192x192.png', '/icon-nosquare.png', '/icon-nosquare50.png', '/icon.png', '/data/surah-info.json', '/data/surah/1.json', '/data/surah/2.json', '/data/surah/3.json', '/data/surah/4.json', '/data/surah/5.json', '/data/surah/6.json', '/data/surah/7.json', '/data/surah/8.json', '/data/surah/9.json', '/data/surah/10.json', '/data/surah/11.json', '/data/surah/12.json', '/data/surah/13.json', '/data/surah/14.json', '/data/surah/15.json', '/data/surah/16.json', '/data/surah/17.json', '/data/surah/18.json', '/data/surah/19.json', '/data/surah/20.json', '/data/surah/21.json', '/data/surah/22.json', '/data/surah/23.json', '/data/surah/24.json', '/data/surah/25.json', '/data/surah/26.json', '/data/surah/27.json', '/data/surah/28.json', '/data/surah/29.json', '/data/surah/30.json', '/data/surah/31.json', '/data/surah/32.json', '/data/surah/33.json', '/data/surah/34.json', '/data/surah/35.json', '/data/surah/36.json', '/data/surah/37.json', '/data/surah/38.json', '/data/surah/39.json', '/data/surah/40.json', '/data/surah/41.json', '/data/surah/42.json', '/data/surah/43.json', '/data/surah/44.json', '/data/surah/45.json', '/data/surah/46.json', '/data/surah/47.json', '/data/surah/48.json', '/data/surah/49.json', '/data/surah/50.json', '/data/surah/51.json', '/data/surah/52.json', '/data/surah/53.json', '/data/surah/54.json', '/data/surah/55.json', '/data/surah/56.json', '/data/surah/57.json', '/data/surah/58.json', '/data/surah/59.json', '/data/surah/60.json', '/data/surah/61.json', '/data/surah/62.json', '/data/surah/63.json', '/data/surah/64.json', '/data/surah/65.json', '/data/surah/66.json', '/data/surah/67.json', '/data/surah/68.json', '/data/surah/69.json', '/data/surah/70.json', '/data/surah/71.json', '/data/surah/72.json', '/data/surah/73.json', '/data/surah/74.json', '/data/surah/75.json', '/data/surah/76.json', '/data/surah/77.json', '/data/surah/78.json', '/data/surah/79.json', '/data/surah/80.json', '/data/surah/81.json', '/data/surah/82.json', '/data/surah/83.json', '/data/surah/84.json', '/data/surah/85.json', '/data/surah/86.json', '/data/surah/87.json', '/data/surah/88.json', '/data/surah/89.json', '/data/surah/90.json', '/data/surah/91.json', '/data/surah/92.json', '/data/surah/93.json', '/data/surah/94.json', '/data/surah/95.json', '/data/surah/96.json', '/data/surah/97.json', '/data/surah/98.json', '/data/surah/99.json', '/data/surah/100.json', '/data/surah/101.json', '/data/surah/102.json', '/data/surah/103.json', '/data/surah/104.json', '/data/surah/105.json', '/data/surah/106.json', '/data/surah/107.json', '/data/surah/108.json', '/data/surah/109.json', '/data/surah/110.json', '/data/surah/111.json', '/data/surah/112.json', '/data/surah/113.json', '/data/surah/114.json'])

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
