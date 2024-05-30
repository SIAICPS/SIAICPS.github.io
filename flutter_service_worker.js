'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "b8a4e359db9f4337819dad89afd8afa8",
"assets/AssetManifest.bin.json": "074ddf1ae78739c96c617894e6fe31a1",
"assets/AssetManifest.json": "74c57c0d6c4b69801768b682164a7a90",
"assets/assets/%2525E5%2525A4%2525A7%2525E6%2525A0%252587%2525E9%2525A2%252598%2525E6%252598%25259F%2525E5%25258F%2525B7%2525E5%25258E%2525BB%2525E9%252599%2525A4.py": "f21f5a0a1bcad6222dd129dc3138e1fc",
"assets/assets/%25E5%25A4%25A7%25E6%25A0%2587%25E9%25A2%2598%25E6%2598%259F%25E5%258F%25B7%25E5%258E%25BB%25E9%2599%25A4.py": "f21f5a0a1bcad6222dd129dc3138e1fc",
"assets/assets/0/ICPS_1.md": "49998a5190d90b3e108978dedae20dae",
"assets/assets/0/ICPS_10.md": "16c974e7a909b97a9ef5ec3caea1b06c",
"assets/assets/0/ICPS_11.md": "c2d2266f44bf5378ec6ced5ef0f4cf1f",
"assets/assets/0/ICPS_2.md": "654f6f57d4e6a4b38a9ee4532d51ca1c",
"assets/assets/0/ICPS_3.md": "f1f04a33c6f933f58aec51bdcb8d1913",
"assets/assets/0/ICPS_4.md": "22d941669e87f6fb2f7a97ab0b1b3d1b",
"assets/assets/0/ICPS_5.md": "de247a58d767e7d4a311c4a0bf90dae0",
"assets/assets/0/ICPS_6.md": "0dd6cbc1b22171404aee7a5a33e3d4ee",
"assets/assets/0/ICPS_7.md": "37cce25abb6c3d82fa94faf074db5199",
"assets/assets/0/ICPS_8.md": "243ed869e9a3acb56ef526b64cc0c7f1",
"assets/assets/0/ICPS_9.md": "ce92deead83a72e242b462a65b487345",
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
"assets/assets/1/CAD.md": "5acf4053876d517d85d11cade4a85902",
"assets/assets/1/CAD1.jpg": "a8693a4d8c12656d3c589614b6f9033f",
"assets/assets/1/CAE.jpg": "2d788e8afffe00df356003efd80c936f",
"assets/assets/1/CAE.md": "d18d77fe0ac6ef5c380a22545cc5e61a",
"assets/assets/1/CAX.jpg": "95954c6ce298f53d58b5fe090ae14275",
"assets/assets/1/CAX.md": "23d5d5c380554354b1c3756fac2c101a",
"assets/assets/1/CAX1.jpg": "6ac96efcce19a8ff638156f9fc537669",
"assets/assets/1/classification.md": "8acd7cb67d5237efe86928b24ff4ea68",
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
"assets/assets/2/network1.md": "abcf63adb399f6e4460dfd87e09ff70a",
"assets/assets/2/network2.md": "9f4dc03a2bf5939f617643cc0d7c04f1",
"assets/assets/2/network3.md": "33e4b3ee2a5881e0ad2039ca635c438a",
"assets/assets/2/network4.md": "7538059f065434910a8fc864daaf11b1",
"assets/assets/2/network5.md": "a959eb411cbb4298dde6e54d9b63a029",
"assets/assets/2/network6.md": "04679b9285b5c9825b8be5613799c0b1",
"assets/assets/2/network7.md": "3bf8246a6fc96abd6638c31b7e8040d2",
"assets/assets/2/network8.md": "aff5e031029230c0369ec6f0d91b9d62",
"assets/assets/3/ASD1.png": "4f0de8b2b277ebd8782fbaaabbd92146",
"assets/assets/3/ASD10.png": "8a81bc86319daaf8058d7c0d25d51e76",
"assets/assets/3/ASD2.png": "6c726a749d85e7c6458c9b4116786d4f",
"assets/assets/3/ASD3.png": "ff07949094f20e6b42f85a8f6aee3c8c",
"assets/assets/3/ASD4.png": "25abd18d71eb93fa8aadf1afc8fe5461",
"assets/assets/3/ASD5.png": "d6ad344731557b833d96ce946944b5bd",
"assets/assets/3/ASD6.png": "db8ea868539e1b7f6cd6828f6a74c3bc",
"assets/assets/3/ASD7.png": "facc1c2f96fdbe5860a1fc9f6c00ecab",
"assets/assets/3/ASD8.png": "50173562e3ac0bec125ac61adfec994b",
"assets/assets/3/ASD9.png": "7961cd5241770173c08d683d73d11ace",
"assets/assets/3/Auth.md": "aef37cce6fad3beb9d70fa27f2d1cf33",
"assets/assets/3/Data.md": "ed6dada3e57a0c8c3c307fd70e9c39c8",
"assets/assets/3/DesignandApplication.md": "e42558e940c49c94b766c0e7d82f286c",
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
"assets/assets/3/MITM.md": "1ee7b1049112ae7134bd4755a3d1c131",
"assets/assets/3/NearLink.md": "fc553156c27151069877266d79eb709e",
"assets/assets/3/NetworkSecurity.md": "bc9cd0b94c6d222cdc7b0db1e61c78ab",
"assets/assets/3/PlanOverview.md": "6dc5696c60cdff08ea4091d57aa42a46",
"assets/assets/3/SafeCommunication.md": "9b2a25d2b6631ace4f4ee1def3665499",
"assets/assets/3/ThreatTarget.md": "85b3f7654fd282bc069b0ca9ca67ca6a",
"assets/assets/3/Tool.md": "c168a90faf437a027d3733a45e4453fe",
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
"assets/assets/5/cloud1.md": "8da7a86d9a853b971b86f036ab96a47f",
"assets/assets/5/cloud2.md": "766e2a92521dd42e2d108d61a8d6090d",
"assets/assets/5/cloud3.md": "07fe5cdb250e5b9869ab2c41bf4cc899",
"assets/assets/5/cloud4.md": "9f06367a95d32be782c46195f479e5dd",
"assets/assets/5/cloud5.md": "afd1b09dcf509f8e483b791b28aaea10",
"assets/assets/5/cloud6.md": "27cff263bbb6ca7e8ea5185c1920ee82",
"assets/assets/5/cloud7.md": "d81848335e60de1df02c9a8b2fe523b0",
"assets/assets/5/cloud8.md": "56ed9d00eba97a11600c87fa68babf44",
"assets/assets/5/cloud9.md": "de8de7b7ddc2dfa6d9aacbcbcdeb65db",
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
"index.html": "fa12703b6f9b6fb094a3c6b820793110",
"/": "fa12703b6f9b6fb094a3c6b820793110",
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
