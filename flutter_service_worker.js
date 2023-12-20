'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "bd83b976b2c901b70b87fafd77947f33",
"index.html": "9988df73dee1995073a8beb4d1c9d55f",
"/": "9988df73dee1995073a8beb4d1c9d55f",
"main.dart.js": "f8dc8ac969e869d246a4917414a81d07",
"flutter.js": "0b19a3d1d54c58174c41cd35acdd9388",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9f3cbdd93fb930377a43db92a0181560",
"assets/AssetManifest.json": "8429ae8c66d0eb0717aec4e77f7a528a",
"assets/NOTICES": "c53c0892d7115ee79db22239136c4544",
"assets/FontManifest.json": "efb5286c2eb5420eafaf3683c1bfb3e5",
"assets/packages/storybook_flutter/assets/README.md": "fbaed1ae60d80596d99545ef45d72803",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "04e6679d68ef56aa5934677c4c228b2f",
"assets/fonts/MaterialIcons-Regular.otf": "b382de3227815b217c2e7f2c50f4fa7e",
"assets/fonts/GST-trimmed.ttf": "e1ae0e6bcea4ef7cf77c3277397f02c2",
"assets/fonts/GS-trimmed.ttf": "1f3cdd390f22009113cbf21d80c29ce2",
"assets/assets/images/thumb/3_thumb.webp": "4b2184b47766307a9030caae9abfcade",
"assets/assets/images/thumb/3_thumb.png": "6a3d914baefc2d80da9ec7dba4a36c0b",
"assets/assets/images/thumb/4_thumb.png": "160f9c20599da937f588933bfb7e8504",
"assets/assets/images/thumb/1_thumb.webp": "90d509b6f2acb16519527a1b35853072",
"assets/assets/images/thumb/2_thumb.png": "a3682cdb5a43a3f937d36b09157c65a5",
"assets/assets/images/thumb/4_thumb.webp": "6e4b999e3b8e2b6df03fb4dc14aecb3d",
"assets/assets/images/thumb/1_thumb.png": "a01ce2901c33090efd5aafec5b62738f",
"assets/assets/images/thumb/2_thumb.webp": "bc3d37ef158a447e9a102a6aedf4aa6e",
"assets/assets/images/thumb/5_thumb.webp": "cb9eebc6c48fee6ea95069c2a1262b39",
"assets/assets/images/wallpaper/3_wallpaper.png": "871aabf8d79c69df644c142070c88522",
"assets/assets/images/wallpaper/4_wallpaper.png": "6f7d6861f0bc79522a10a91bdb4b79c0",
"assets/assets/images/wallpaper/2_wallpaper.webp": "6155d4852b90854ab97a0f0a1236a3a4",
"assets/assets/images/wallpaper/1_wallpaper.png": "da1f10b8c5e2468310b996f6c279afe2",
"assets/assets/images/wallpaper/5_wallpaper.webp": "00878b55ca5a47adecf4dc833464894c",
"assets/assets/images/wallpaper/2_wallpaper.png": "f2f4bd2c22ac04161d67947440e1fa79",
"assets/assets/images/wallpaper/4_wallpaper.webp": "6ab2f77e24c35ca77ac93f1568bdc526",
"assets/assets/images/wallpaper/3_wallpaper.webp": "9e3449a7c3cd24f4a9dc2067f84fd019",
"assets/assets/images/wallpaper/1_wallpaper.webp": "f8f1f13203cd3c84e61184f9fe148c5a",
"assets/assets/info_image.png": "b646541ed38ae4c71c1de02cedfec6c5",
"assets/assets/plant_hero.png": "67d43d5a6ccfc1cdd33589d918a15bf9",
"assets/assets/plant_hero.webp": "ca82404e79dcb45150b566c73e638545",
"assets/assets/bg@2x.png": "d02164ac3d511918eefee1de4d5431f7",
"assets/assets/bg_dark_2x.png": "97fbb9cecb9b38bd29414c861c6b6b13",
"assets/assets/plant_1.png": "80e44314509b28a66719202ece155d38",
"assets/assets/plant_2.png": "57d4f3c61266d4d293cc64914cc2abb8",
"assets/assets/plant_3.png": "d4e3c596f8e7a813f645ac973bfe7ea1",
"favicon.svg": "ff419bfb5d00f2bded585e4e61f11c6d",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "a322146b4d0434433c4d940c07880c11",
"canvaskit/chromium/canvaskit.js": "2236901a15edcdf16e2eaf18ea7a7415",
"canvaskit/chromium/canvaskit.wasm": "6550eb40605fab24bcf8ad6a8ed978c3",
"canvaskit/canvaskit.js": "7c4a2df28f03b428a63fb10250463cf5",
"canvaskit/canvaskit.wasm": "ac36bb4545a2ca50d18168d7dac969bd",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
