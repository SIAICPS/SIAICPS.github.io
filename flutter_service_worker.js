'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "58129bd03bd439d37b980c6aad406d43",
"assets/AssetManifest.bin.json": "80c9d7b34ae97b3f78128ab475f42000",
"assets/AssetManifest.json": "23fd618b86401c9c5ba6f9c291a09331",
"assets/assets/%25E5%25A4%25A7%25E6%25A0%2587%25E9%25A2%2598%25E6%2598%259F%25E5%258F%25B7%25E5%258E%25BB%25E9%2599%25A4.py": "f21f5a0a1bcad6222dd129dc3138e1fc",
"assets/assets/0/ICPS_1.md": "62b7f6b317140700c4422a5b4ac4362b",
"assets/assets/0/ICPS_10.md": "f3c618e48902e55ed60ac26f9781dcc0",
"assets/assets/0/ICPS_11.md": "0420e99a544cfb8220dbcd79e3df7870",
"assets/assets/0/ICPS_2.md": "14bef24c9fe87073213f03edffbb7db0",
"assets/assets/0/ICPS_3.md": "96e45f13ffdb4acfe20a93f0115791a7",
"assets/assets/0/ICPS_4.md": "86366235b0d0c9f8cd3112489ec64f44",
"assets/assets/0/ICPS_5.md": "8c79e2fa3d370822081570dc83a14cf1",
"assets/assets/0/ICPS_6.md": "a0832831cd244dc187643e2993206059",
"assets/assets/0/ICPS_7.md": "2769c1ee4131746a00b07a0c01a701c3",
"assets/assets/0/ICPS_8.md": "60527a38dc3297a0da074c11e69b1906",
"assets/assets/0/ICPS_9.md": "2b06e5412f5a8395c42499ec29343390",
"assets/assets/0/md1.jpg": "036a422c968e920cde4f1a165711f785",
"assets/assets/0/md10.jpg": "8d6305fc0fb364589e647deb6011390a",
"assets/assets/0/md11.jpg": "040747787f8123fd1b2d16949e228884",
"assets/assets/0/md2.jpg": "18486fe8b63654805d6e7a33ac932012",
"assets/assets/0/md3.jpg": "5ee9ff2956b81db26131b91701d4154a",
"assets/assets/0/md4.jpg": "8a7c8f846f776a930ea536b3dff7096b",
"assets/assets/0/md5.jpg": "66f86c20c2dff31b64147cff25ba8866",
"assets/assets/0/md6.jpg": "e52de3df6eeaa8d124de1e006dcfd89f",
"assets/assets/0/md7.jpg": "070bcebcf2487d3b7c27610316e11d3c",
"assets/assets/0/md8.jpg": "41194103b791516b8e06af510e2ea154",
"assets/assets/0/md9.jpg": "60c97d6e5e490d4a5e42ba188b925c23",
"assets/assets/1/CAD.jpg": "7d293b5f484009536b04e95dcd195e55",
"assets/assets/1/CAD.md": "8bc9aa1346555383c2fb9c3e47611088",
"assets/assets/1/CAD1.jpg": "a8693a4d8c12656d3c589614b6f9033f",
"assets/assets/1/CAE.jpg": "2d788e8afffe00df356003efd80c936f",
"assets/assets/1/CAE.md": "d18d77fe0ac6ef5c380a22545cc5e61a",
"assets/assets/1/CAX.jpg": "95954c6ce298f53d58b5fe090ae14275",
"assets/assets/1/CAX.md": "23d5d5c380554354b1c3756fac2c101a",
"assets/assets/1/CAX1.jpg": "6ac96efcce19a8ff638156f9fc537669",
"assets/assets/1/classification.md": "4fa213606b5e34b7b3fae2dbcd8c058d",
"assets/assets/1/classification1.png": "656b74def462e08f5212ad13e2bd2d15",
"assets/assets/1/classification2.png": "3efffe1d7d7e03713fcedea41988fbdc",
"assets/assets/1/CPS111.jpg": "967ebd93c5700a822a915be8f854be5f",
"assets/assets/1/CPS111.md": "31a2ecd31a9725cd728facabd9993a0c",
"assets/assets/1/embedded.jpg": "c7a7d339ace72cbcb125f3bded4365b6",
"assets/assets/1/embedded.md": "32975bae2dfd0ffc72834b24c5508287",
"assets/assets/1/ERP.jpg": "089487aebb89545c7742391fb518377f",
"assets/assets/1/ERP.md": "49c4cb4b3769eed73d033d6ec079c932",
"assets/assets/1/Importance.jpg": "650d1faad14755fee008e6e1ff732963",
"assets/assets/1/Importance.md": "eef07019fd049d1067ea87cb6caa3963",
"assets/assets/1/industrial_software.md": "9922053e521058c0b71d5613e5096005",
"assets/assets/1/industrial_software.png": "c5b3ba7f021ab1e1c38769b922192022",
"assets/assets/1/MES.jpg": "d77f577e72e97bb4e48d1445569a300d",
"assets/assets/1/MES.md": "52c7996a7548fad494f33a15299503d6",
"assets/assets/1/PLC.jpg": "a9d3b748d07ea00bfb28763c832af0f0",
"assets/assets/1/PLC.md": "d80a16bedb54b49cf08e151890942e55",
"assets/assets/1/Tesla.jpg": "1aecd5204824b93e140ac44c558f4cee",
"assets/assets/1/Tesla.md": "58d00b8128412196f2363eba3cd7e5cd",
"assets/assets/2/md1.jpg": "92f568500ae6bbb4a43d6040c1e593c7",
"assets/assets/2/md2.jpg": "f59256c0ca381b74ed6f10e3f39fde89",
"assets/assets/2/md3.jpg": "d240d00255477bfe5d553aa780f64bc0",
"assets/assets/2/md4.jpg": "7561ee34f9f8732e2f3874857d3043ce",
"assets/assets/2/md5.jpg": "b70263a89839d1eb811ec860194a52aa",
"assets/assets/2/md6.jpg": "a741ee83e07196e78e1dbd01a45eb442",
"assets/assets/2/md7.jpg": "c67c2162f66df55e418fa027eb061e4a",
"assets/assets/2/md8.jpg": "6d6bcf2e4c6b835d60e7a4d48e19f47f",
"assets/assets/2/network1.md": "721196b5548bcb16a5f74ef3de36b602",
"assets/assets/2/network2.md": "2a0d0567956c24a221b67060b8708059",
"assets/assets/2/network3.md": "49a7f89226ea58e00532c0f170ce7f8a",
"assets/assets/2/network4.md": "5f580432acb8a1fec7ccdecc2c34fb7e",
"assets/assets/2/network5.md": "c8c06db27ec2248df2f16b9db65f266c",
"assets/assets/2/network6.md": "1229a9bf62470d973564de5591cf8a9a",
"assets/assets/2/network7.md": "bfd9fde8ec7385e1adff528b82b8ebbd",
"assets/assets/2/network8.md": "35ad05359a9bb1c73001befaca0f4e86",
"assets/assets/3/Auth.md": "1581b8f1a79f341e866fcd499c6274cd",
"assets/assets/3/Data.md": "069dc3c41b669bbad6b4076288e3a14a",
"assets/assets/3/DesignandApplication.md": "a76b90f179d3553038c00ab447a229dc",
"assets/assets/3/img.png": "9db16c702da3b223ac4c70c4d9c764e2",
"assets/assets/3/img_1.png": "3eb7fd7133da098d98d43bc810ce590d",
"assets/assets/3/img_10.png": "f3ef1b1c985bfb015cb9a1be94427a55",
"assets/assets/3/img_11.png": "89b30ee15b58b5e140dd4f4842a3a838",
"assets/assets/3/img_12.png": "1ba31cee12f8b721ee2da6add3aab48d",
"assets/assets/3/img_13.png": "2e15cf5145f460c76ed0975318416311",
"assets/assets/3/img_14.png": "6512ef0fc09a82b854fcadb287cc24e8",
"assets/assets/3/img_15.png": "caefb2773e22cf33137a1e6cf6c37ef2",
"assets/assets/3/img_16.png": "78797fe694a75b4fd54552dd2f70a335",
"assets/assets/3/img_17.png": "6ada3b89301006e199edcbdbcaadcbea",
"assets/assets/3/img_18.png": "9da2134228602a48122702cfcce2957f",
"assets/assets/3/img_19.png": "5f0f3b56ecde7d8a3489ed6879082001",
"assets/assets/3/img_2.png": "278f91547b4530070921218736cc7a30",
"assets/assets/3/img_20.png": "cda940a9b0ebbbd7ce2bf82807489980",
"assets/assets/3/img_21.png": "de3ac43aca47a85b56913f854ccd84e8",
"assets/assets/3/img_22.png": "3212e5547a951af4c2f0f20e5b345683",
"assets/assets/3/img_23.png": "9160d29a28e043fbe166f25a2bd7112f",
"assets/assets/3/img_24.png": "a3e33938adc52002a892f0f4ac657f77",
"assets/assets/3/img_25.png": "1403efa7314552e573b6ef3b2aebeced",
"assets/assets/3/img_26.png": "e7028b5a509e85b798359b5300945b5b",
"assets/assets/3/img_27.png": "dc83a86860f9fda9c7177fee4b18f41f",
"assets/assets/3/img_28.png": "e8fb33b26c77472e35ce4e17ae982c9a",
"assets/assets/3/img_29.png": "d557adbbb645ad6ba5505f03984308b2",
"assets/assets/3/img_3.png": "45a290ba6216ee052713851d744f24a0",
"assets/assets/3/img_30.png": "48599d1b95853948da895c0e5fe60b23",
"assets/assets/3/img_31.png": "4fe10f1197130f9392ad118841715cb6",
"assets/assets/3/img_32.png": "8e718814078a90522ab2dd4706d83857",
"assets/assets/3/img_4.png": "9792a33e111a1467b90aee1c1b4f572f",
"assets/assets/3/img_5.png": "44798a8e59f62d04d79f1a5f457162be",
"assets/assets/3/img_6.png": "19edd2bf03b885f6de36c6dbab514f69",
"assets/assets/3/img_7.png": "de68593ed251727750feaa62860f81fd",
"assets/assets/3/img_8.png": "9798669485208c7de29af7a795ab69ed",
"assets/assets/3/img_9.png": "7ab5a8954d508315f3db4d002402b775",
"assets/assets/3/MITM.md": "d2a1ce18946297fcf89215ec21083d88",
"assets/assets/3/NearLink.md": "09c6cbab755d53e8fa15c00b3fa3ea29",
"assets/assets/3/NetworkSecurity.md": "4f8128f6dbeef959437e62c2a2b3fb39",
"assets/assets/3/PlanOverview.md": "3a6a9e1862d8638b845c000787904ff0",
"assets/assets/3/SafeCommunication.md": "bfda3130c12eaf27fe21a60371659d8d",
"assets/assets/3/ThreatTarget.md": "5fb176cbd9810ffe26477b28c60b2fbd",
"assets/assets/3/Tool.md": "a25d4533118e21d8ff4dd24b8ad3aeeb",
"assets/assets/4/bigdataVR.jpg": "47b2c69d173f971d45f48c439c77c5ac",
"assets/assets/4/bigdataVR.md": "497cf5f79f0f2d361255ba6839c0bc73",
"assets/assets/4/CPSDT.gif": "dc9d6e594ac90452b0a10dc48f69e05e",
"assets/assets/4/CPSDT.md": "968b27562d1c95f21e6b3dec5ce623fc",
"assets/assets/4/CPSDT1.jpg": "37e9bd961b6e9346936148949b403eb7",
"assets/assets/4/CPSDT2.jpg": "aab7ccbc251e716ca9e816935e2f63c2",
"assets/assets/4/CPSDT3.jpg": "aa2c6746aa95c978b7ccfa474464f9ee",
"assets/assets/4/CPSDTTT.jpg": "79dc5f3b4ede1115ffb39044ef7a0a21",
"assets/assets/4/CPSDTTT.md": "c9aad8c157a8e014d7f66f3b729d1cac",
"assets/assets/4/CPSDTTT1.jpg": "1fda6df5cccb7f22da9abf4d9027aeb1",
"assets/assets/4/CPSDTTT2.jpg": "675fe2ce87377feacc0998511bd38cf4",
"assets/assets/4/CPSIND.jpg": "b1fde3094c9107d2ce9cc0e576b6c557",
"assets/assets/4/CPSIND.md": "82cc26a7d2a39a8ed6ac222b8b8d1c6b",
"assets/assets/4/CPSIND1.png": "43bb9a85f06de29e29f785671f00c2d3",
"assets/assets/4/CPSIOT.jpg": "3fca38fac62e76c410fbd629dc8a9117",
"assets/assets/4/CPSIOT.md": "c6b854a78b41c71c1152821ac44fe26d",
"assets/assets/4/CPSIOT1.jpg": "221349bce5c8e9d6c576a31ed6f630c0",
"assets/assets/4/CPSVR.jpg": "c0ef509442e54c0d236065826c9f5d03",
"assets/assets/4/CPSVR.md": "c832972759c699d8b05f03ecb966e47f",
"assets/assets/4/CPSVR1.png": "99b687eb6daa6dce1533a40eb15880fa",
"assets/assets/4/CPSVR2.png": "2a7530576da595deeb712c1e510dbb96",
"assets/assets/4/industrialPT.jpg": "1032688235ac6e8b0d3c23ee65812a1d",
"assets/assets/4/industrialPT.md": "3c647f5b106a3dbfc8eef2b935434a9b",
"assets/assets/4/IntroductionACT.jpg": "115dfdf8dd549f1ea17b878805adbde5",
"assets/assets/4/IntroductionACT.md": "ffde714d7ea1e6dc7a720678de20fdbd",
"assets/assets/4/IPTVR.jpg": "9e19c5356cd2dd321dffadd52e36d219",
"assets/assets/4/IPTVR.md": "dd9e6c085ccba30d714b6b9410a0159e",
"assets/assets/4/IPTVR1.jpg": "55d86f1aa8bbecae3f1eb8c3283d4ec7",
"assets/assets/4/IPTVR2.jpg": "742a908e393b7fe2eced0ac55c4f6b6f",
"assets/assets/4/IPTVR3.jpg": "3dc09eac6318960232a2540340e9616d",
"assets/assets/4/IPTVR4.jpg": "cb9fe51726bb7749d30ce0d772490482",
"assets/assets/4/IPTVR5.jpg": "54cdf3ba3d86784aec75852c222987c3",
"assets/assets/4/VRINT.jpg": "2579d927c6914150f5e5edc670720253",
"assets/assets/4/VRINT.md": "0f94c66de18f40f8d83b3151200d3d10",
"assets/assets/4/VRINT1.jpg": "5b193311578e3a6752aece4c6a670053",
"assets/assets/4/VRINT2.jpg": "5c98b93ae5816b74f77fd9d2ea26eb49",
"assets/assets/4/VRINT3.jpg": "5377ba4f1d080a305c0beb9306434290",
"assets/assets/5/cloud1.md": "e1a8960cab0a75b05cebfc85b9dc0a8c",
"assets/assets/5/cloud2.md": "b51b1b5845b67c28437081c5ce4cd80a",
"assets/assets/5/cloud3.md": "fc32444816d2987419562466ee7a6472",
"assets/assets/5/cloud4.md": "8fd93a5e522f556f2d38d3919acbfeec",
"assets/assets/5/cloud5.md": "97b7c1eaca52bf0df79377bff2e6cc75",
"assets/assets/5/cloud6.md": "97bb7d5c3e38590b09eceb69a844c790",
"assets/assets/5/cloud7.md": "683b4ea8f2a8c04572d4614fceaab7ef",
"assets/assets/5/cloud8.md": "d51ed60eece1c5aa4616a4cfbddb3bc3",
"assets/assets/5/cloud9.md": "a9d9efeea5fe515dd0c6e940c93836b8",
"assets/assets/5/md1.jpg": "4142cee60770ead6193cd1b4fd79de28",
"assets/assets/5/md2.jpg": "4f6a1dbf04040ac081c224575fec4d77",
"assets/assets/5/md3.jpg": "2fe3c3270972546b65fade397699afc2",
"assets/assets/5/md4.jpg": "d7e5db628df1f54a8f1f9fd63850c925",
"assets/assets/5/md5.jpg": "82811279e621bb2d9763286e5ff717c5",
"assets/assets/5/md6.jpg": "bdf42f2d7db23f0bcc1e5a7fed70f6d8",
"assets/assets/5/md7.jpg": "dd618c9be37d01196a7ba75e0e7e850d",
"assets/assets/5/md8.jpg": "ddd99316ccc45bb30bfa416fa68778fb",
"assets/assets/5/md9.jpg": "d6843b0e3de495c4f0e885ac4f10e027",
"assets/assets/6/CPSAIMI.jpg": "edc1ca621d08bba96b33439f0ce07796",
"assets/assets/6/CPSAIMI.md": "596131bf36545b8a99d4773ef40d9954",
"assets/assets/6/CPSAIMI1.jpg": "1f1f8d05520777889ebb278ae9dbdf75",
"assets/assets/6/CPSAIMI2.jpg": "f5920eb63e7454450590da707d3df5fe",
"assets/assets/6/CPSBANE.jpg": "5c9143e61c8d44d8fcf57da3d22d4c7c",
"assets/assets/6/CPSBANE.md": "e466a740dea2364efa0223721f9b5fb3",
"assets/assets/6/CPSBANE1.jpg": "84530c60fe0250da85e9b8c5129bca43",
"assets/assets/6/CPSIoT.md": "9365913ed19efbc1feb189d308e2f9ba",
"assets/assets/6/CPSIoT.png": "c6f2ddea13567ed147b218a14c6e759b",
"assets/assets/6/CPSISPW.md": "6fbbfdc1b828e4073e395e5ed00f72da",
"assets/assets/6/CPSISPW.png": "076500faa1a6e00ac85c595362c35159",
"assets/assets/6/CPSISPW1.jpg": "e8b2d6fd8c4dc77f90b3e7c1c80e2213",
"assets/assets/6/CPSKTA.jpg": "168b4a23c3ccb1792779d8624f2b2fe5",
"assets/assets/6/CPSKTA.md": "3a68b99da0e82a352ae5e317a2ae2563",
"assets/assets/6/CPSKTA1.jpg": "b29c8a34ded78f8f8617095753c9fdb0",
"assets/assets/6/CPSLS.jpg": "4c24fa86facf3bf02f42fd8756a0de1f",
"assets/assets/6/CPSLS.md": "37acb143e096c3532757721541f2ad61",
"assets/assets/6/CPSLS1.jpg": "57ad2ac642e471acd797df8ff20ab0c9",
"assets/assets/6/CPSMES.jpg": "5a273d13d3ae26eb7654d586cebb547a",
"assets/assets/6/CPSMES.md": "6ac1209e5a93455afc05484a6dc9948a",
"assets/assets/6/CPSMES1.png": "06de107d66ea23543f7d3a05b8fc077c",
"assets/assets/6/CPSMES2.jpg": "4b53ac005cef303e2c97b8acda9fc386",
"assets/assets/6/CPSMES3.jpg": "e9bf75bb13fdd8f2c2defdbd13e39538",
"assets/assets/6/CPSMU.jpg": "5ccde103a273abe5847c738b9e1248f8",
"assets/assets/6/CPSMU.md": "cdf935e0331640f8e052776e72487829",
"assets/assets/6/CPSMU1.jpg": "d1705f030763c966bc4babaa2c66502d",
"assets/assets/6/CPSSWP.jpg": "8994e27ee505ef3b6b6f3c1adfb97bcf",
"assets/assets/6/CPSSWP.md": "60ab00e50d9d5ca2e798af12c0b9d9f2",
"assets/assets/6/CPSSWP1.jpg": "fe57b5e461771fd43e7225e50e6197d3",
"assets/assets/6/HairCPS.jpg": "cd21e5193dfbf3f34db14e0d53beaa28",
"assets/assets/6/HairCPS.md": "0fbfd467f0bf56c846958714021b9188",
"assets/assets/6/HairCPS1.jpg": "28f72937b2a45617220383d778f1a38a",
"assets/assets/example.md": "febe0cd0f07a4efc8c942b17a7c8f626",
"assets/assets/img/default.jpg": "96ec087955be1e4b9934d30b531bd2ec",
"assets/assets/img/img1.png": "aafdac6d1e3865e33391069cbac222d7",
"assets/assets/img/img2.png": "9ac3b34cf77f13b31661bd6185218305",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "74b99f0a1e9caadcad9381d412a30de0",
"assets/NOTICES": "acaba2b917a6f4c0ff0e3cce8b4402f8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/icons8-book-24.png": "5bf555d043cba8cf669089d7f0f1796f",
"icons/icons8-book-48.png": "4f159749adc894ef9289c56524a6d329",
"icons/icons8-book-96.png": "3abdcc006216dce13b2b8aafa7cad045",
"icons8-book-96.png": "3abdcc006216dce13b2b8aafa7cad045",
"index.html": "2e45deb2896744207e2f792b276be154",
"/": "2e45deb2896744207e2f792b276be154",
"main.dart.js": "7a623586f0028b02b49ac49e91b47458",
"manifest.json": "09a140ca65b98713e0c9fbbe43a0eb42",
"version.json": "a58f306f8c7dffa3b35eefc67113239c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
