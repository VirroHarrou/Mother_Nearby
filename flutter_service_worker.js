'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "27f7a8a835ece0a44721c09a75ad5302",
"version.json": "705019dbb2fff0a4df7ff1d6fc4dbc58",
"index.html": "0f45d96cb48d4a969d183ab0cd2e664d",
"/": "0f45d96cb48d4a969d183ab0cd2e664d",
"main.dart.js": "8f026600a8a3be86670229c0ef55631b",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"README.md": "1ad850fafb694fae0fea80d6f0186642",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "fcd9179b5589ad0b9ae6e3c0c9acfb3c",
".git/config": "b2d4f21bee368151b0fea9f0cb2e8bc2",
".git/objects/69/be0b7c7bb62d5ec6a37f283bf590c50a6bbfeb": "932322c9a8c957e2ae57b3ff388ea66d",
".git/objects/3d/a29de3229c174cac026a3cc3831f60800a0051": "4f26f6508a5b57582444754c80df900f",
".git/objects/0e/0809a4f43d9dbfc21e977679dbe3ddab5c1f12": "b9f910d8ed0b6a2122a4a0fb3f03816a",
".git/objects/33/747d1107573f629dc4b8679e43136b1f3b5ef6": "84d320895295d562a25696bcdb9df0bf",
".git/objects/05/0861946992fa2bb1e83c68f7f9bb594ce96602": "75cbb3dbcc4bdba218e8338e52bf41c8",
".git/objects/a4/51a2e70fc252375e657ed9f3b35eaa5e37e060": "1c34b725600cb7f7605f62f7a8e9dba9",
".git/objects/a3/58cae5e4e9ce78e7c23bb86b753883c1504d2e": "f976275450e1931f4c2d9eb4fb42e5aa",
".git/objects/b5/c6ca710c937527ca8d2d344214243d6db33832": "1e6ca9406fc3150067eabb10040766e1",
".git/objects/d9/6cc34fc1f096058c60cfa3e749ba6e357ae132": "87eb7774d3acb0315b6efebaf56a07af",
".git/objects/b4/db7c8e9cc064c30599d111faf5cf579225412b": "c03224fcbbb8134b11e2288cf7b9e354",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/6365efc0c249ca2cab02054769cf22dfbd5958": "8282ce9e445fefb6980fdf634056f985",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fe/a7abb92fd4a93a4fbf7b1ee2d47104c500266d": "9abcebe1a1143499cbb151791489fbef",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/16/3327ea7f8d4ea73306f3d25a1af47f43fa01d8": "0552adac56bb66e80e148de777decb97",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/74/d293b8126d6a1052f18c85fd1737f552d25f02": "bf45a3cc81d743243710fb821c63929f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4d/171548be99c46e165652e9ad7a51973500ba89": "27dd68588234b0def793ca95e006af60",
".git/objects/81/b7b08fde80f0d3a93b4d2f87184070b782d302": "fb6450e40220ce7027b2b7380ab4d86a",
".git/objects/2f/335165007e9302f77bc20db25b40c8f3c69455": "40a1a0006e2debd361a661e701ff4720",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/259e51a9b0add25590e3dec85f3428e49d2841": "e525aa286262314a0f2a52431e63deba",
".git/objects/5d/7f96cd4556c54268bff2fc51e6370ee6ed4e21": "516f59423716e8073b7cf51236c3622b",
".git/objects/3a/52541344c83f07fe06569dfb9ce2f70bb7524a": "3474e0eee933ea0fa68007d9aca284d6",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/06/cd2273ae4a620e6707cb9c505a71d703bf330c": "b0bc71c2088d3b9ee95a1730a3647429",
".git/objects/39/217f7303f6701991377303da6e6369096a91d1": "82ee2a745d2afd2a09042bd1348f8acc",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/af/c3a3bec625408ef3e6703c79cc59206c737fe6": "cfdca16b5f67250c474de08640e82585",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/bba73a23c82b7b8b5f1749c5e571eb661ab0d4": "dbc75183dbc253d53e8049fbb10df1cc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/f7/9415fcf837bb0a71fd1aa4ede71e9559e9d762": "750408726eec688da20c630773b8381f",
".git/objects/e7/44bdfb64999c5ad24c41a1b8b5232287a563ba": "e64c82537d970a3ac05ed600f7e2983f",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/5c47129b9076cfe79293617dece01179e4b219": "11f20c4cd11933b66d37ae032cab8a79",
".git/objects/1b/97359e4b606cfff940461c57e3cc2871bad099": "6290aed24ca76d32257116e4213d0104",
".git/objects/77/ff99ac5eca27901f41b6d56d4dde1e6f3a2f10": "fc1d2df07101fa360c15d5afa4ce7c2b",
".git/objects/48/35c00299bce1c03b9defa47df97e0df477b457": "259392a809f2b1842640a68fd297ae78",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/4f/fe415de1bbc8b60af474466da7f60b8397a0a6": "89c614eb8c2ffc69ec811500c6be5245",
".git/objects/12/b5b5f56702f5c81c079be37543fc1b35905bdd": "c3d44460cf355d5440c786404b4697f7",
".git/objects/76/12a6077c86304b84010056ad17f77da1bbcc63": "e09a5f072e49d043504879c4184d22e0",
".git/objects/2b/601cd373406ec3b63c3f6f3f67456b9a056888": "d3205aefaa36262917b75149105116ef",
".git/objects/8b/2bc4bea409a602be05861a655b50c9af705501": "45aedafebb6e74bba0af9224e85a35a2",
".git/objects/8b/137891791fe96927ad78e64b0aad7bded08bdc": "9abb042e8c58ed4d703beb8e66b37150",
".git/objects/13/ac6bcc01e2ee0abd9d8da6b3c299a3b6ce25f3": "12a91cd162020113475fbb7719cbe3cc",
".git/objects/25/f19527993403451f4b0a2044131d1fbcec4947": "89c5f220013e36bf796f13ace91fd048",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "11f177946406e88d89af41b729530979",
".git/logs/refs/heads/main": "976768e0daad79e8b21bb89984a9d0c2",
".git/logs/refs/remotes/origin/main": "5694af5ceecb055261391bdb621dfc0b",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "a8de6c213cb0aa3f6611173d46f2f00c",
".git/refs/remotes/origin/main": "430536ffdcaab3b30c6e6e768f529f04",
".git/index": "4578804a7f583eefdbde7489aaa8953a",
".git/COMMIT_EDITMSG": "2cef62a17bb92bcd811c5c57caba94f5",
".git/FETCH_HEAD": "a11ada02906ddcdbb32df8a4dd629c86",
"assets/AssetManifest.json": "31fd42653de988cc51f5a587862b2c95",
"assets/NOTICES": "263754970d716042e720c7d6a1bc1c0c",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "124ee589582ed613829434aba5a21ac5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "13112a762be50b032d57398c59205ec5",
"assets/fonts/MaterialIcons-Regular.otf": "5f2e6c8aaa0ecce52d8264367f0854b0",
"assets/assets/images/flutter_logo.png": "478970b138ad955405d4efda115125bf",
"assets/assets/images/person.svg": "cf733d9b511eb59f77a709cfe9cfeb70",
"assets/assets/images/favorite.svg": "853da0481decd8dce03fdd698f175f01",
"assets/assets/images/main_logo.svg": "8014406239219501422e7199ed5195cd",
"assets/assets/card_layouts/layout_4.jpg": "fdf482d6e0c53e296b90eb79a08ded0b",
"assets/assets/card_layouts/layout_16.jpg": "5e3aad27add4e6aaf7d29ef5bdf5199b",
"assets/assets/card_layouts/layout_17.jpg": "95fa11bbc5e4473d993620b9bc7e6d0d",
"assets/assets/card_layouts/layout_5.jpg": "d78a4ae9c478f23f45e878ab82fea6a8",
"assets/assets/card_layouts/layout_7.jpg": "9b459f85a1cae3baf07aeddeabc7b019",
"assets/assets/card_layouts/layout_14.jpg": "b7f46c577f327e8418d97a5dde4284bf",
"assets/assets/card_layouts/layout_6.jpg": "32733aff645ef07fa4a69f842a3244ca",
"assets/assets/card_layouts/layout_2.jpg": "6ab29b4a8cfdd2408ced1a609232d81b",
"assets/assets/card_layouts/layout_3.jpg": "acb293b528fa62ecb0ac7b7649955bd2",
"assets/assets/card_layouts/layout_11.jpg": "68ae8d8826faa3c4efa3d3586b07847f",
"assets/assets/card_layouts/layout_13.jpg": "13c746a926733539970d8a8d8cb1c900",
"assets/assets/card_layouts/layout_1.jpg": "a05d15e2f3f831f7bba8b555cf2ab446",
"assets/assets/card_layouts/layout_12.jpg": "9144ae400b99ba827d1fa03f355fe65f",
"assets/assets/card_layouts/layout_18.jpg": "043e9194155d9f5dae6d4a95337a5276",
"assets/assets/card_layouts/layout_8.jpg": "9946eefff48e06374f50159027fcc183",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
