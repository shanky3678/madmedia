'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7b5088027e9209563fb557eea0e73354",
".git/config": "26dc4caf26036a3bca46be96bd4f6ffb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e197c6a6169dc2a17d9571b03cda0c0b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e5489639fc5180ff61333bd59e4c4375",
".git/logs/refs/heads/main": "cb1440ac801f9bdeb0ab6a00f1832e4c",
".git/logs/refs/remotes/origin/main": "39c35665e389a61aad5a394b0b64b717",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0c/ae4163d2f179a5332f3d2cbf47f6cc2b6c5ba7": "2b356ae55158af79184dd51302d4e0dd",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/12/c449f311ab6fe382b95d2e921397df1d32d28c": "9da97fec143e6fccc2866f7f06105c2e",
".git/objects/13/ba715571abdea5c9b9b7e9166826e519db4750": "7546ead429fd23881b9dbc3c196f1f90",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/28/93734e6c4086d36909a227e4098c812f1af69c": "7630f839cd9e0681f557ec4a56c7094d",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/35/d83b7e975c4241877b2fc90901c29a8ce365e9": "e262c41b5c5e2b0e03af6f4d2cf2191c",
".git/objects/3e/be4bd992aaf3b95bce9f2441aa0e70aa0d0f54": "987ec08ca7ff2f304d80ee4dada55f58",
".git/objects/40/60484c72d636365a4c9801c3c2838c368ff87c": "2d4871efc22cf07b548b0f6a6ff998be",
".git/objects/43/361b419a2e137424a84b40bc03bad8d467c3b4": "49717f93a0cc9b0112cde1f206a641d2",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/b53d0bef26251da75718414467d3715f78ec4f": "c0cff6c98681036d054f33895e741507",
".git/objects/50/29931cb9a4c2db854ed2e57de6cd0a64b6c806": "72dbeeae8bd474ffa9eb17ca70b8de2b",
".git/objects/5f/732ac18076360f2873c9cc81a3a3a898f3de88": "a384d60d94f5854e2f117e951877e454",
".git/objects/61/52f5b09dff03c63798d737f39910becf539a54": "fab9c6eb3084cec0f4f1d6bffa08ae5c",
".git/objects/63/61eb1ff783b0c4f8e806902353c4cdcc80535d": "0c634cb351dc732e70d8fd5ef22c440c",
".git/objects/6f/6e4b308429bd822780c0d32803d511264701bf": "5ee8c2cf802ff1d0095196c26287379c",
".git/objects/74/9049d21b27820b22cda446b7cb8cfbab782476": "478fbccba15bc299da116c2a07b37e91",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/dee881e4ddad733b8a36cd4f6b52e3fdfc263f": "98bc07e1db0f2b914a1cdc827ffb8631",
".git/objects/81/7d1b58f6d89ebec9dacb220ded56c8c8236d0a": "d99db306d19cacb97cc5477b23519034",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/9c/4b3aadff6b1940858e9961602ba268f047b980": "78f2c439c9c61263c0891004b15dc664",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/7f0de24870f4898ac2f7520c56fbc77cefef08": "8fd51cc3b555b1870557f5226838bcfc",
".git/objects/a6/f9bfb368fde4797bc41c4e268274172bee0510": "0266245d62852dfb016872fc861b6d83",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b0/783cfe3cfbfccf812283b211e03762f70cad09": "290b90704504acba0843ee98b3051684",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c2/d13692b4666769008ca5e409c222745260e2d7": "e3212839347f6662c6d6ad41b9bed83e",
".git/objects/c3/40e260304abf8aa206491d0dafeab5dc415530": "dbda414de345737869abdae499f9c3cc",
".git/objects/c6/dfedfe17cc17a36aed80b841603c7d98484454": "b9339cfefe24737c23831a56a0075178",
".git/objects/c9/5f4280f4cf9177609bbc4ddb571fb9ad08f734": "c920e183687589410792c10a4e909391",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d2/88fc12ad79c35b06d597070931b2081dd137e3": "677547fd229b31ab0d3430cab5d3ec67",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/1dafbe40a1e153ffc85c1ee941bf83448b9cd6": "04285fd57d83be9734fc66511d9f90fa",
".git/objects/e5/12ad00fe2f8e287b8c23636366b70b4610da0b": "8af09555c1bd8a044be1a4f482fc25e7",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/15b336a2fbe74cdefec1e421ebc53c59e1f94d": "b7287790ade168658100cee1f9c536c8",
".git/objects/eb/524b14fbaa96159de496d082d09e3f8905027f": "4ddab868ddc844983b82465457ef1ec6",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/refs/heads/main": "a32501c916fd69cb5ecee5c8ef915641",
".git/refs/remotes/origin/main": "a32501c916fd69cb5ecee5c8ef915641",
"assets/AssetManifest.json": "45a089edaac566ff73b9c7d38a14ee11",
"assets/assets/images/banner.png": "2b6ca77a1a03ccee8af3562203b5b176",
"assets/assets/images/banner2.png": "e20ad4d4cb365958e36cccf025cb935d",
"assets/assets/images/banner_big.png": "1cba0f97538d5e8e77d9609819fbf0ee",
"assets/assets/images/banner_big.svg": "522a76717ddc51a15caf2cd4ad9c41d0",
"assets/assets/images/banner_gif.gif": "f5633688a620c5f794eb4418a14f6a37",
"assets/assets/images/big_image2.png": "a0ec2359449f3d3dfdf7fb5019b3b59c",
"assets/assets/images/coffee.png": "815c1eef52ef49e7007db49e3e7e91e9",
"assets/assets/images/coffee_styles.png": "0d39e31aade9789584583f6777d850eb",
"assets/assets/images/dot_design.png": "cfc959a20c67a80eaf8086714e2e549a",
"assets/assets/images/dot_design2.png": "fd07435eeacec758135c1f59368d2b60",
"assets/assets/images/image1.png": "c4b87e9ba67c3547c5931b834dc6a405",
"assets/assets/images/image2.png": "7b99091578c0381e541a6f49b81e10a3",
"assets/assets/images/image3.png": "61ae6c17d317a0be24a29a0de143c6f0",
"assets/assets/images/image4.png": "c57b970ac457b2c445e6b5da942d9998",
"assets/assets/images/logo.png": "b6f8bc2ae14826122ba2b472893c6bcd",
"assets/assets/images/testimonial1.png": "5c462697ad314c5f9521156db4a709b6",
"assets/assets/images/testimonial1.svg": "7ecb4ba39440f35fb79e68829d23e772",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "8d520341237b2a364d184b64718073f1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e67eafde3a39c38207f8e5e9cd446a7a",
"/": "e67eafde3a39c38207f8e5e9cd446a7a",
"main.dart.js": "2d789651f45b5f69b8a91a2d2cb997ce",
"manifest.json": "dbc5f8d0f3b6fdb58aacd25864e9deea",
"version.json": "7c632a21303770fcfdbc2ba7308856a5"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
