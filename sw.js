importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/a6f113c6904d66a1c8ce.js",
    "revision": "929a38f52f2d81897f778493345f0f94"
  },
  {
    "url": "/_nuxt/c564c8bbfd7218d01d9e.js",
    "revision": "38cdeea4e25a8bda105cd49c054727ae"
  },
  {
    "url": "/_nuxt/e0d279ad06642dfd8c40.js",
    "revision": "8679220423bcabcc780d16d51c0297eb"
  },
  {
    "url": "/_nuxt/eb6e0ca5076201dc9387.js",
    "revision": "a15932cb3dfacfe1df6ffb599612c45c"
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
