'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "33a6d75957ea47ffc40ced1d6afac522",
"index.html": "1490ba9866b9bd1d2419eb5a2ebdef37",
"/": "1490ba9866b9bd1d2419eb5a2ebdef37",
"main.dart.js": "eac3f34ad4218ae8401ce2fdc4d88c16",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"logo.png": "52e7b4d6bf71d811793085527111d8ce",
"icons/appleTouchIcon.png": "b98db21dd0e73846faac29b232babf84",
"icons/android-chrome-192x192.png": "52e7b4d6bf71d811793085527111d8ce",
"icons/android-chrome-512x512.png": "a3ea0c34129050fe7ace7f4d1e0c7e39",
"manifest.json": "edc80abd40a9f679f4040b2c5a215a4c",
"assets/AssetManifest.json": "4e0457a6b5d33ef32b13997986b3da10",
"assets/NOTICES": "469ae708e309f2c09f9e004ed78bf24b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "9d1efb45cb111ef73b0196f8c51fd5dc",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/truck-fast.png": "5ab573fc20ee3aacb856da9beafb140a",
"assets/assets/limeStone/kota%2520honey%2520lime%2520stone.jpg": "11eed8c92dc39c680c315b6ad954e116",
"assets/assets/limeStone/kota%2520blue%2520lime%2520stone.jpg": "a9561380c3716cac1f31291490fc2b3f",
"assets/assets/limeStone/tandoorgrey%2520lime%2520stone.jpg": "ed17f7c68d879c6b95c1027fdc42e175",
"assets/assets/limeStone/kuddapah%2520black%2520lime%2520stone.jpg": "776d4a86e865d73907a931c934eb0494",
"assets/assets/limeStone/tandooryellow%2520lime%2520stone.jpg": "91f9b6c026e64ff9debf3d839b1983cb",
"assets/assets/location.jpeg": "54fdb06d702a3ca081da27fc263273c0",
"assets/assets/gmail.svg": "4582a3522fdb9013ab35a02c58888306",
"assets/assets/note.png": "fa203b58aa8728a1f4abdd83fe1fb023",
"assets/assets/instagram.svg": "98762113a6b923c188926f9a3542a595",
"assets/assets/fieo.svg": "87dc1350b17c72622a5bddd68aaacb99",
"assets/assets/sandStone/Ebony%2520sandstone.jpeg": "5b9f165b67e3a31be52d65be8c112f6a",
"assets/assets/sandStone/Mint%2520yellow%2520sandstone.jpeg": "8ee5503ce401ddb0597221c7b6e951fc",
"assets/assets/sandStone/Sagar%2520black%2520sandstone.jpeg": "55d78e844ae0e9a99b5b59599215a77a",
"assets/assets/sandStone/Kandla%2520grey%2520sandstone.jpeg": "b27ddcaca9adc0bc7467444ac74168ca",
"assets/assets/sandStone/Agra%2520red%2520sandstone.jpeg": "ea3dd274557ea4ecbad3cbe20ffde207",
"assets/assets/sandStone/Desert%2520yellow%2520sandstone.jpeg": "4333a95652e71a80e8f700199fb25a1d",
"assets/assets/sandStone/Dholapur%2520sandstone.jpeg": "0e2872aaff0fecb2fce1ce9d6d02ca27",
"assets/assets/sandStone/Katni%2520yellow.jpeg": "0be4e9103fa05181d011db973af0fa4e",
"assets/assets/sandStone/Automn%2520brown%2520sandstone.jpeg": "e7eaec5c3b26a0ed515a86464bb04b89",
"assets/assets/sandStone/Mint%2520white%2520sandstone.jpeg": "2205d376c7a544f82d9a3fb35eb3f3c1",
"assets/assets/sandStone/Rainbow%2520sandstone.jpeg": "e23f6ffb3d3be9189b24deaf158dd4fe",
"assets/assets/sandStone/Mint%2520fossil%2520sandstone%2520.jpeg": "154ffb4a04ad7a4c05f6b8337f1fdd8d",
"assets/assets/sandStone/Chocolate%2520sandstone.jpeg": "158844f098f1fffc9143d9edec215d69",
"assets/assets/sandStone/Lalitpur%2520grey%2520standstone.jpeg": "d4889f9d9e7839431a25bd542f78ca6a",
"assets/assets/sandStone/Lalitpur%2520yello%2520sandstone.jpeg": "c6635367c99472e9e861faab799c6433",
"assets/assets/sandStone/Mandana%2520red.jpeg": "dba35587dea9f00893367bdcd0ce2ac6",
"assets/assets/sandStone/Modak%2520sandstone.jpeg": "b799bc998ecea7b5845240aba95c1c0a",
"assets/assets/sandStone/Teakwood%2520sandstone.jpeg": "0771e0bd4cc52d11a682728c8373b5b1",
"assets/assets/sandStone/Buff%2520sandstone.jpeg": "b45d97ebfc89313ea370cccf8522dfbe",
"assets/assets/sandStone/Mint%2520sandstone.jpeg": "c3979498b52a97c2ccff31dc117c83a9",
"assets/assets/sandStone/Woodland%2520sandstone.jpeg": "07cc5efb885512a942bd8072b0873537",
"assets/assets/sandStone/Basalt%2520sandstone.jpeg": "595559f1b778f49303a45fc6943b43a9",
"assets/assets/sandStone/Raj%2520green%2520sandstone.jpeg": "135658b6bccc3d015d1609dceafbe109",
"assets/assets/home.jpg": "65abbe3a18c9fb012cb882d818796d1d",
"assets/assets/marbles/dark%2520green%2520marble.jpg": "a97fd16bf159935b02f0cb2e1c5f608e",
"assets/assets/marbles/magic%2520black%2520marbel.jpg": "15dfd7f626131334a549b1213a158070",
"assets/assets/marbles/forest%2520green.jpg": "0991689ee91396407538875888af4a74",
"assets/assets/marbles/peacock%2520feather%2520marble.jpg": "6235637f79251d1883b7c7598192ba3f",
"assets/assets/marbles/Rain%2520Forest%2520Green.jpg": "42ca317ab4cc309257ec9e821f248ef1",
"assets/assets/marbles/indian%2520satwario%2520marble.jpg": "8a9bd8682f733ca124fa5ae7c5141d45",
"assets/assets/marbles/fantasy%2520brown%2520marble.jpg": "54281a41a987411197468bf5781575f9",
"assets/assets/marbles/flower%2520gold%2520marble.jpg": "255b7acbf6752182eb9ef368aa271744",
"assets/assets/marbles/onyx%2520white%2520marble.jpg": "9df3609897cc8954ab43a08956447bf2",
"assets/assets/marbles/rain%2520forest%2520brown%2520marbel.jpg": "f43a594fe2e900a55aa6196b75d38a8c",
"assets/assets/marbles/River%2520Blue%2520Marble.jpg": "afbf238dc69e923b566c9f7618c5b30e",
"assets/assets/marbles/fusion%2520black%2520marbel.jpg": "3aa499fdd43838184e399fa33b1211ed",
"assets/assets/marbles/rainforest%2520gold%2520marble.jpg": "458f75301d8f877809050360d5fda26c",
"assets/assets/marbles/ice%2520onyx%2520marbel.jpg": "f5cbfcfa1868f87de37cd66c6b33c50a",
"assets/assets/marbles/ICE%2520WHITE%2520marbel.jpg": "b71e37f8d298b9dd76068e90b97f56df",
"assets/assets/marbles/Ita%2520Gold%2520Marble.jpg": "660734f393cc7f5f909ec34dde6847cf",
"assets/assets/marbles/polar%2520white%2520marble.jpeg": "704d00226747c0463b8382dbeaf422d2",
"assets/assets/marbles/fantasy%2520ocean.jpg": "499f22ee0b5dec4e8e25e2c9657df9e0",
"assets/assets/marbles/fantasy%2520silver%2520marble.jpg": "093806558a46ce7f7381f7cc20a7f5ea",
"assets/assets/marbles/lava%2520oro%2520marbel.jpg": "9ca5a780279680b2467b2d59bcb573b1",
"assets/assets/northIndiaGranite/Black%2520Forest.jpg": "f6ca80fdd66fbfe2300eff06bc3b58e3",
"assets/assets/northIndiaGranite/french%2520green%2520granites.jpg": "4ae1bd7bff148a3ff8d834f1eabb029d",
"assets/assets/northIndiaGranite/copper%2520silk%2520granite.jpeg": "8cfd94ecd433280fe81f50fd031bc507",
"assets/assets/northIndiaGranite/rosy%2520pink.jpg": "e3cf73765cfc365c19da8a5504fb8f07",
"assets/assets/northIndiaGranite/rajasthan%2520black.jpeg": "7e77cdb38aea82e2c6938846dfc92a99",
"assets/assets/northIndiaGranite/bruno%2520red%2520granite.jpeg": "44fb05f7ed957e9c3c02bac69de5e170",
"assets/assets/northIndiaGranite/platinum%2520white%2520granite.jpg": "936279981570a6d8de30938c1f1632f3",
"assets/assets/northIndiaGranite/chima%2520pink%2520graniete.jpg": "9ffb6c7541fceef2cab65c6de5c87b7d",
"assets/assets/northIndiaGranite/crystal%2520yellow%2520granite.jpeg": "9eabd3cc00951d932ec3de1339784486",
"assets/assets/northIndiaGranite/new%2520imperial%2520red.jpg": "78c09fa4ba5901bfc5f5c1d1f532cb05",
"assets/assets/northIndiaGranite/blue%2520flower%2520marbel.jpg": "cab14f81d0d25f5ca66e877ba6557571",
"assets/assets/northIndiaGranite/black_forest.jpeg": "129163d3309b09b4b8f7cb0f29266168",
"assets/assets/northIndiaGranite/chima%2520white.jpg": "bc503a056b13b2c873c8d5051a40671a",
"assets/assets/northIndiaGranite/new%2520imperial%2520red%2520granite.jpg": "d9d6aeab48ef1ecd1ca612524d0cb39d",
"assets/assets/northIndiaGranite/desert%2520brown%2520granites.jpg": "d2afb27a95326de49570503e0bf8f914",
"assets/assets/northIndiaGranite/alaska_red_granite.jpeg": "9e77b28685a014fcc1d6a53b9320fdd0",
"assets/assets/northIndiaGranite/z%2520brown%2520granite.jpeg": "e055647c89f0118b6c9eb7a97e25eb8b",
"assets/assets/northIndiaGranite/alaska%2520white%2520marbel.jpg": "7fe110d9a304d5e7a2f9352994ff3c5d",
"assets/assets/northIndiaGranite/alaska_gold_granite.png": "15b04b158085feac9f278b7ec563d528",
"assets/assets/northIndiaGranite/blue%2520dunes.jpg": "205eceb0df5c2c59b7e5298d1ff02398",
"assets/assets/icon.svg": "5d1fc2e9d3d72d27d5326f105d05a92f",
"assets/assets/southIndiaGranite/India%2520juparna%2520granite.jpeg": "a59e022d568495c492fd5a3ec011a3a7",
"assets/assets/southIndiaGranite/Kuppam%2520green%2520granite.jpeg": "9319050bb5ec69bb75ac77da948c0a79",
"assets/assets/southIndiaGranite/Crystal%2520blue%2520granite.jpeg": "23fc16fe2ad9569dbe6b1e5b9a5bfe15",
"assets/assets/southIndiaGranite/Premium%2520black%2520granite.jpeg": "d6544f72b985fe69329e04465482448c",
"assets/assets/southIndiaGranite/Paradiso%2520classic%2520granite.jpeg": "c4210851d14b797994ee916bc283db1f",
"assets/assets/southIndiaGranite/Viscount%2520white%2520granite.jpeg": "9c0ef99c6b1e3bf9f6f07958a573d7e3",
"assets/assets/southIndiaGranite/Black%2520galaxy%2520granite.jpeg": "28e48c29d0a1ffa34a9f756a4c26ad52",
"assets/assets/southIndiaGranite/Absolute%2520black%2520granite.jpeg": "1629ee7403a6f50ee0d04bfe77d57bf4",
"assets/assets/southIndiaGranite/Titanium%2520black%2520granite.jpeg": "927ed6b42f75f20db32a1bb2a945a223",
"assets/assets/southIndiaGranite/Steel%2520grey%2520granite.jpeg": "da7a81ecd51745d6d5a20cf215d2f9e3",
"assets/assets/southIndiaGranite/Shiva%2520gold%2520granite.jpeg": "3e21340cc749a76f815fa26b0ba67d12",
"assets/assets/southIndiaGranite/Colonial%2520white%2520granite.jpeg": "c1a64a23594b7771c42dcbec3aeac6e9",
"assets/assets/southIndiaGranite/Red%2520multi%2520granite.jpeg": "7447d73cbe09d683cc67cba592b84419",
"assets/assets/southIndiaGranite/Tan%2520brown%2520granite.jpeg": "bddd30602b49b65647e666e4abee9da3",
"assets/assets/southIndiaGranite/Surf%2520green%2520granite.jpeg": "ff82dc5486710aa77e7a4b33924dafff",
"assets/assets/southIndiaGranite/S.k%2520blue%2520granite.jpeg": "e99b74f96b9b1d062740e0fa0703cac8",
"assets/assets/southIndiaGranite/Impala%2520black%2520granite.jpeg": "c5769d5b842e896ed9951f64cb376647",
"assets/assets/southIndiaGranite/Moon%2520white%2520granite.jpeg": "0d525562e14986c5460c0d359fd9bfea",
"assets/assets/slate/Himachal%2520gold%2520slate.jpeg": "cd60d781c807743cdda17ae2755cd5e1",
"assets/assets/slate/Silver%2520grey%2520slate.jpeg": "cd4ea99af43ad88252eef2ca767bb27a",
"assets/assets/slate/Himachal%2520black%2520slate.jpeg": "5b5979f7d5a852abf16990b91125150e",
"assets/assets/slate/Ocean%2520green%2520slate%2520.jpeg": "1f5cb0885a6fbfc19560cae46b9bc017",
"assets/assets/slate/Jack%2520black%2520slate.jpeg": "e909dc81dfc1a58d5d50a2303f2ebb68",
"assets/assets/slate/Deoli%2520green%2520slate.jpeg": "7082093907eb00ded7535d3eb3d47d70",
"assets/assets/slate/Kund%2520multi%2520slate.jpeg": "3065f41bd3762df4459ab58594d31098",
"assets/assets/slate/Silver%2520shine%2520slate.jpeg": "4b6b9293648b31863a7a3a01565c7cb3",
"assets/assets/slate/Himachal%2520green%2520slate.jpeg": "0c96cbc4d9ff8685fed5844bdd7f483c",
"assets/assets/slate/Red%2520copper%2520slate.jpeg": "5ec51b7289fa3bd7473c047ef7e8cbec",
"assets/assets/slate/Jack%2520multi%2520slate.jpeg": "2988eb7088e1083484eb3a90cb09d621",
"assets/assets/slate/Golden%2520slate.jpeg": "80c61d8434c5800cbfb3ff4a861ecc5c",
"assets/assets/slate/Himachal%2520white%2520slate.jpeg": "4accf0ba2448a0c5755f61cbdea45dfe",
"assets/assets/slate/Zeera%2520green%2520slate.jpeg": "bc5a166c42657ebdbb84172042d39174",
"assets/assets/painting.jpg": "dc566630d8b677b4117b0b112cfb4e03",
"assets/assets/capexil.png": "aa572e8662b3d00b28dccd49ccd3f886",
"assets/assets/msme.svg": "cf4c99a0be340f4ac80ceecb5c93ffd0",
"assets/assets/facebook.svg": "2c4ddf5f1e754050f239c53d451af187",
"assets/assets/vass.png": "0a4d357e33f4211ed19c5884cb63981a",
"assets/assets/youTube.svg": "7a44696754509db83fd9e8cae4d62e88",
"assets/assets/location.png": "14a68098def65a511d2711b6fe905255",
"assets/assets/southIndiaSlate/GREEN%2520RUSTIC%2520SOUTH%2520INDIA.jpg": "ddcb5e004df8f737690b8a2a626a8ae3",
"assets/assets/southIndiaSlate/Black%2520rustic%2520Slate%2520SOUTH%2520INDIA.jpg": "63e2cd1e4c3be637bd61d1d98a366a3c",
"assets/assets/southIndiaSlate/Nag%2520Green%2520Slate%2520SOUTH%2520INDIA.jpg": "b05e2e59846858e591900b7e2ec45f1a",
"assets/assets/southIndiaSlate/california%2520slate%2520SOUTH%2520INDIA.jpg": "f67a7c8a6bfe5a7955fccefed7bf3247",
"assets/assets/southIndiaSlate/Indian%2520AutumnSlate%2520SOUTH%2520INDIA%2520SLATE.jpg": "a850498b3423f1454b5167595143f669",
"assets/assets/southIndiaSlate/multi%2520pink.jpg": "bfb7d910c7c6e7f33825cc6cc8a3c136",
"assets/assets/southIndiaSlate/markapur%2520black%2520slate.jpg": "cdc69f8ae7c6c150eff0a5d66cc50ba1",
"assets/assets/icon/appIcon.png": "9f6677d43bc13931067947c92236006d",
"assets/assets/twitter.svg": "b1167df9517f3314145854c35c218235",
"assets/assets/msme.png": "91d2f6ffcb986d27749097109307c89f",
"assets/assets/capexil.svg": "acd5bc868d93ebf4d099312212efb27b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62"
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
