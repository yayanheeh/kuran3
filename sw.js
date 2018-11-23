importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1c6b81827687c7626aa8.js",
    "revision": "03f7ccc05041fc45f61cf7f1c5d4e02d"
  },
  {
    "url": "/_nuxt/2c96320503279f57380f.js",
    "revision": "5eb4b5fade624480c5d39a3f631e112f"
  },
  {
    "url": "/_nuxt/64bbc612109e49d7b886.js",
    "revision": "bb3871d8565fafe0b45230c6dc8dd30d"
  },
  {
    "url": "/_nuxt/96866691b8c8cd18c9cb.js",
    "revision": "e52a1e373de5419be189bdc4e95fc3ae"
  },
  {
    "url": "/_nuxt/fdb86c01e6291a1ce5ec.js",
    "revision": "25fd53e305c3276d091bafd77f7b8c41"
  }
], {
  "cacheId": "quran-offline",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
