importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1f72a8f36df55301ffc8.js",
    "revision": "7ed7985433afae71409b8552d97773f6"
  },
  {
    "url": "/_nuxt/23621e12d33da9f98a16.js",
    "revision": "781684d0da04ae1394d428104a16afe5"
  },
  {
    "url": "/_nuxt/4bfc64363e0c12153a5f.js",
    "revision": "8d1b5aee97e677cc31b5c156e73c9315"
  },
  {
    "url": "/_nuxt/63b0b04fc02bbc938667.js",
    "revision": "16ee3cd28269b4d57e5af41763b0ab6f"
  },
  {
    "url": "/_nuxt/83eaf9814475d6249a24.js",
    "revision": "b951dad67455e187c29c4643aa464aad"
  },
  {
    "url": "/_nuxt/b3911b550049418eb63b.js",
    "revision": "99659927fa1929af290fc6a32ac91580"
  },
  {
    "url": "/_nuxt/f0646d1f27c1d2d3dffc.js",
    "revision": "ad7f4ca121921b11a900b49f4b56a60d"
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
