importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0ff02bcab2ed9c2347e5.js",
    "revision": "da0cc695224afd48e883c45cbbfb6eee"
  },
  {
    "url": "/_nuxt/827a53617380f2c52d0c.js",
    "revision": "996ce8f57b4ee68bcb81e5f83e6617e7"
  },
  {
    "url": "/_nuxt/8e9cf92e2a0e7c5eab6c.js",
    "revision": "9aa07f2ccd3c420e1654426fcb4e335e"
  },
  {
    "url": "/_nuxt/9ee6c2ad8c2730edf336.js",
    "revision": "219863d2f26715118dddd8220457c636"
  },
  {
    "url": "/_nuxt/bd01663ec522a2f432e6.js",
    "revision": "1a369239ad3fcb76d1f1b6a021b6ea67"
  },
  {
    "url": "/_nuxt/c8f61bb5227e6d1fb192.js",
    "revision": "d3a8597847186aa8007c1a708130db9d"
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
