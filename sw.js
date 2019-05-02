importScripts('https://cdn.jsdelivr.net/npm/workbox-cdn@4.3.0/workbox/workbox-sw.js')

// --------------------------------------------------
// Configure
// --------------------------------------------------

// Set workbox config
workbox.setConfig({
  "debug": false
})

// Start controlling any existing clients as soon as it activates
workbox.core.clientsClaim()

// Skip over the SW waiting lifecycle stage
workbox.core.skipWaiting()

workbox.precaching.cleanupOutdatedCaches()

// --------------------------------------------------
// Precaches
// --------------------------------------------------

// Precache assets

workbox.precaching.precacheAndRoute([
  "/favicon.ico",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon-96x96.png",
  "/icon-192x192.png",
  "/icon-nosquare.png",
  "/icon-nosquare50.png",
  "/icon.png",
  "/data/surah-info.json",
  "/data/surah/1.json",
  "/data/surah/2.json",
  "/data/surah/3.json",
  "/data/surah/4.json",
  "/data/surah/5.json",
  "/data/surah/6.json",
  "/data/surah/7.json",
  "/data/surah/8.json",
  "/data/surah/9.json",
  "/data/surah/10.json",
  "/data/surah/11.json",
  "/data/surah/12.json",
  "/data/surah/13.json",
  "/data/surah/14.json",
  "/data/surah/15.json",
  "/data/surah/16.json",
  "/data/surah/17.json",
  "/data/surah/18.json",
  "/data/surah/19.json",
  "/data/surah/20.json",
  "/data/surah/21.json",
  "/data/surah/22.json",
  "/data/surah/23.json",
  "/data/surah/24.json",
  "/data/surah/25.json",
  "/data/surah/26.json",
  "/data/surah/27.json",
  "/data/surah/28.json",
  "/data/surah/29.json",
  "/data/surah/30.json",
  "/data/surah/31.json",
  "/data/surah/32.json",
  "/data/surah/33.json",
  "/data/surah/34.json",
  "/data/surah/35.json",
  "/data/surah/36.json",
  "/data/surah/37.json",
  "/data/surah/38.json",
  "/data/surah/39.json",
  "/data/surah/40.json",
  "/data/surah/41.json",
  "/data/surah/42.json",
  "/data/surah/43.json",
  "/data/surah/44.json",
  "/data/surah/45.json",
  "/data/surah/46.json",
  "/data/surah/47.json",
  "/data/surah/48.json",
  "/data/surah/49.json",
  "/data/surah/50.json",
  "/data/surah/51.json",
  "/data/surah/52.json",
  "/data/surah/53.json",
  "/data/surah/54.json",
  "/data/surah/55.json",
  "/data/surah/56.json",
  "/data/surah/57.json",
  "/data/surah/58.json",
  "/data/surah/59.json",
  "/data/surah/60.json",
  "/data/surah/61.json",
  "/data/surah/62.json",
  "/data/surah/63.json",
  "/data/surah/64.json",
  "/data/surah/65.json",
  "/data/surah/66.json",
  "/data/surah/67.json",
  "/data/surah/68.json",
  "/data/surah/69.json",
  "/data/surah/70.json",
  "/data/surah/71.json",
  "/data/surah/72.json",
  "/data/surah/73.json",
  "/data/surah/74.json",
  "/data/surah/75.json",
  "/data/surah/76.json",
  "/data/surah/77.json",
  "/data/surah/78.json",
  "/data/surah/79.json",
  "/data/surah/80.json",
  "/data/surah/81.json",
  "/data/surah/82.json",
  "/data/surah/83.json",
  "/data/surah/84.json",
  "/data/surah/85.json",
  "/data/surah/86.json",
  "/data/surah/87.json",
  "/data/surah/88.json",
  "/data/surah/89.json",
  "/data/surah/90.json",
  "/data/surah/91.json",
  "/data/surah/92.json",
  "/data/surah/93.json",
  "/data/surah/94.json",
  "/data/surah/95.json",
  "/data/surah/96.json",
  "/data/surah/97.json",
  "/data/surah/98.json",
  "/data/surah/99.json",
  "/data/surah/100.json",
  "/data/surah/101.json",
  "/data/surah/102.json",
  "/data/surah/103.json",
  "/data/surah/104.json",
  "/data/surah/105.json",
  "/data/surah/106.json",
  "/data/surah/107.json",
  "/data/surah/108.json",
  "/data/surah/109.json",
  "/data/surah/110.json",
  "/data/surah/111.json",
  "/data/surah/112.json",
  "/data/surah/113.json",
  "/data/surah/114.json"
], {
  "cacheId": "quran-offline-prod",
  "directoryIndex": "/"
})

// --------------------------------------------------
// Runtime Caching
// --------------------------------------------------

// Register route handlers for runtimeCaching
workbox.routing.registerRoute(new RegExp('/_nuxt/(?!.*(__webpack_hmr|hot-update))'), new workbox.strategies.CacheFirst ({}), 'GET')
workbox.routing.registerRoute(new RegExp('/(?!.*(__webpack_hmr|hot-update))'), new workbox.strategies.NetworkFirst ({}), 'GET')
