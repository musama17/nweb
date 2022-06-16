'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "44bb8c80e50388319778521b771a0d42",
"assets/assets/login.svg": "57d08bd7349cb497ec0490e9880c52c1",
"assets/assets/login2.png": "5c280d29a6a964ab93873ed54cb3c05b",
"assets/assets/login2.svg": "e3e8173747621df6c79e930f092c1150",
"assets/assets/todo.svg": "7231a5a1d00dab834a271638b0a82af2",
"assets/assets/welcome.svg": "bfec3a00a5e8a2fc498164deef785a28",
"assets/assets/welcome1.svg": "56be22de6483c2a486f23b8d2383e5ea",
"assets/assets/welcome2.png": "531dcc7b6b82d25e0c2f06e5f75eef67",
"assets/assets/welcome2.svg": "f0dd34796e4ede8c66751ca10648b853",
"assets/FontManifest.json": "80c410ff331e6e3022484de9fee388bf",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "8dfa466ce7b41214984a0b18f726e118",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"assets/packages/phosphor_flutter/lib/fonts/phosphor.ttf": "7c29adb0b02f7d84da8413452ea95c00",
"assets/packages/stream_chat_flutter/animations/typing_dots.json": "3da1c94690095d3a96014b4c695227b7",
"assets/packages/stream_chat_flutter/images/giphy_icon.png": "0258059543bf3666bf0bdbe932592208",
"assets/packages/stream_chat_flutter/images/placeholder.png": "30d340bd4f082a7ef08376e916d960d8",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Camera.svg": "a21d5808436e520b533d05383a95c88a",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Files.svg": "89c153fabdb0c697ea7c5fc38685e9d9",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_No%2520channel.svg": "da759dbf54a6e0858ede6952f8e5e953",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_picture.svg": "1b1879a202a491ceb39720a9bd4ded14",
"assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Search.svg": "ae5f4d7aeacf823ef1be5c0b91973920",
"assets/packages/stream_chat_flutter/lib/svgs/eye-line_big.svg": "c95e43b42a8fe3afcb8f4a9af4ba339e",
"assets/packages/stream_chat_flutter/lib/svgs/files.svg": "ad39ce4a4c661f61336bf24b6c7af07b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_7z.svg": "1b4cb1160bc61b31c7dd8f3daa5eeac9",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_CSV.svg": "3d5faddc2dce3ab9609dd6cd89f7a4b8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOC.svg": "7bd182d6eb10e2a8ee603514d3aae222",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_DOCX.svg": "71373f44f659d095048eb9fd3bd89dba",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_Generic.svg": "a6a1c31ed5a6f0312f8fc4faf6f403c8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_html.svg": "6465f1a4a80c2805c2b9894c7f25494a",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_MD.svg": "3730f0b240e6962d03f9ffecc8ba6b60",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ODT.svg": "1d888fe0910324b6229f55a8b219f426",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PDF.svg": "72b645180a4095d5f7c132fe5f1a537f",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPT.svg": "86d29f47afd46396973646c12c730813",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX-1.svg": "bf49d89aff0be4b06ff062185cbd8195",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX.svg": "c362cf1827e0ec1d78ccd4395d226d4c",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RAR.svg": "27978098749482388b42bcbe5114a530",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_RTF.svg": "80211524634cdaf49221ea987641fb2b",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TAR.svg": "60cdea7f8a30e07480badd17f6efe9d9",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_TXT.svg": "02eee06ebb5f90f668acbd150347eddb",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLS.svg": "8fd7b98002bdfe53422c79cf1a0f4db8",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_XLSX.svg": "bf28d69f1f55b6b04d4836a797c14531",
"assets/packages/stream_chat_flutter/lib/svgs/filetype_ZIP.svg": "2b638aac5ccfa6ca35f17cbb4cf282fd",
"assets/packages/stream_chat_flutter/lib/svgs/flag.svg": "ad96dd68a211f5b61ed14ebdd5155ff2",
"assets/packages/stream_chat_flutter/lib/svgs/giphy%2520icon%2520blue.svg": "90a9fc1bc3169a4027a7d1e5631f854b",
"assets/packages/stream_chat_flutter/lib/svgs/Giphy%2520icon.svg": "1ea05bbb402326e534d905d8a7147d12",
"assets/packages/stream_chat_flutter/lib/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_arrow_right.svg": "cef623b244e5e3de7a7ec2212fe08726",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_attach.svg": "f8cbb1f109c479fe8060b7a4373e6282",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_camera.svg": "2fd8b5ee35c68733e7bd7d4b8ce8b1c3",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check.svg": "2c04e6ad1230c568ab06d4d23be2ba62",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_all.svg": "c8c7fb7fd4bf6868740d70d36c5163f2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_big.svg": "f92095a18204bdca79131e5e295a82e8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_check_send.svg": "83e9ec25419bfef4224b6bdbf922d506",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_right.svg": "063bfba9d4e2adb004ad9cbaf73eaa0b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_up.svg": "6040dc689ef0f2f3f69f5b30c64e19d5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close.svg": "637cefb508c6c762bc0125510a5e1fce",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_black.svg": "1b9deb59c7836e342cf15cfa9112fc3c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_close_sml.svg": "bd3010445035406c174d0137cd1d8893",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_cloud_download.svg": "481b6ba2aae9f1a229be0ace4fa827ee",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_contacts.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_copy.svg": "fe5d2ae30b229c0662ae79adabb08bb5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up.svg": "37b80269ac16708c0cc93fe7e303de90",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up_big.svg": "b963e0bfb52513c29cbd409ef1c30c6d",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_delete.svg": "7015c5ebd7d774c5b8de207bebd65e78",
"assets/packages/stream_chat_flutter/lib/svgs/icon_delete_grey.svg": "b78745df166d13379c2b4727d8c7fc6b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_down.svg": "b8eff7450293b41cec3759a29ac536b6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_download.svg": "c97b54bcd0afbf660eda2a1489f8d346",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_edit.svg": "c6c7779ca0a4c02180765e4a538fe07c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_empty_circle_left.svg": "ba250f5586e12133778a34e43b26a76b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_error.svg": "59bbe2e77294f229159fb2aeeadcdef0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_eye-off.svg": "16a86807a0edab18315b2063befa04b3",
"assets/packages/stream_chat_flutter/lib/svgs/icon_flag.svg": "ef5a011e7d58d95065ec24841b3301d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_grid.svg": "069ddcc807baed602f50fa3dcf8219e4",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_group.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_left.svg": "f41c288202a6c657bbc448f78208debb",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_lightning-command%2520runner.svg": "bca3bcb8841b25693945aea9f66dbc67",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_LOL_reaction.svg": "9bdaa10d600b02ff3742ecb9432f8083",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_love_reaction.svg": "862f3ed12072950a57d9de07c8b5a8d2",
"assets/packages/stream_chat_flutter/lib/svgs/icon_mentions.svg": "47311213de2d3993be49c0b46c1d664c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_menu_point_v.svg": "c9b71afb8f93f627b209a9c11a755ba4",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_message.svg": "0befbb5c5df2a0e601d37f9617e16ca2",
"assets/packages/stream_chat_flutter/lib/svgs/icon_moon.svg": "c70d6c5be8a8f0fa998592f43219cab5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_mute.svg": "e6d35d5fdc93bd80411ee3b250f95e3c",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_notification.svg": "4d22eb100006d4dc45dfe140b7b5f152",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_pen-write.svg": "bb0f26bfe3c6e57b1565c24e94dc1909",
"assets/packages/stream_chat_flutter/lib/svgs/icon_pin.svg": "9c8a9824e1da800a1246c6f7f0bbbd9e",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_record.svg": "d1b6755fc495accab05c7e595e2f1fcb",
"assets/packages/stream_chat_flutter/lib/svgs/icon_retry.svg": "1902bba7b598c43d8f49d9fac3af241b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_right.svg": "5fd2ba93fe0f2ace64d2eec95e897ac5",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_save.svg": "04476852aec6f14fd7b92145032d3017",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_search.svg": "96d4562e2662f1c5cf98815fa1b60b0d",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_send_message.svg": "415eb57116854b04b92fb92ba7fae9eb",
"assets/packages/stream_chat_flutter/lib/svgs/icon_SHARE.svg": "2be93888885f50b0f2641b35ea2f5b5a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_smile.svg": "fcf16ae8a626e1edb9b6b53286f29c83",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_Thread_Reply.svg": "8a9b5c69f0d5b885ae4a0134d8fb5ea2",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_down_reaction.svg": "f86b823d9a46d2bf6eec90e4cac333a6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_up_reaction.svg": "0b1f3ccc43d0dd761c21133e3c97e4fe",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_time.svg": "87de185a105ee0c3613f4720a0921b6a",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_up.svg": "a83cfe5943525699308de701bdc586d9",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user.svg": "288f7d3f089636d4643a6de75f3dc7c6",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_add.svg": "ca29f019afc62bb588b34a09551ae19b",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_delete.svg": "ae50b6a2729d61084482ec2f52f2ca6e",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_User_deselect.svg": "f8307c48bdca665d1e2a6c5b263338f0",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_user_settings.svg": "2289d8af192a558fcad87173b7dae09f",
"assets/packages/stream_chat_flutter/lib/svgs/Icon_wut_reaction.svg": "7c385077d6c23f869319f9afb54d2c5c",
"assets/packages/stream_chat_flutter/lib/svgs/imgur.svg": "7433ee061b383b75a3db4a78ab2b7476",
"assets/packages/stream_chat_flutter/lib/svgs/mentions.svg": "5895f23c2ef7d74ba857402a00b3a7e1",
"assets/packages/stream_chat_flutter/lib/svgs/pictures.svg": "74b029062379e9719ef7f45da914b3a4",
"assets/packages/stream_chat_flutter/lib/svgs/settings.svg": "e269c1c8e828e064991aee732716e868",
"assets/packages/stream_chat_flutter/lib/svgs/share_arrow.svg": "dc9e58ff41fc98e930c04861edf274a8",
"assets/packages/stream_chat_flutter/lib/svgs/STREAM%2520MARK%25201.svg": "197f0bdae9c937be1ecf4a107cf87d88",
"assets/packages/stream_chat_flutter/lib/svgs/UI_Reverse%2520Pagination%2520Loading.svg": "fc48c47d0c4ddf7bbe7f6e4a9fdb19f7",
"assets/packages/stream_chat_flutter/lib/svgs/volume-up.svg": "5df9a3a183126038faccea9e30e9859a",
"assets/packages/stream_chat_flutter/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"assets/packages/stream_chat_flutter/svgs/icon_camera.svg": "5a7c1f19e6670fbf3c5ad1deaffdfd5c",
"assets/packages/stream_chat_flutter/svgs/icon_pen_write.svg": "93279740dc02da26397cd43358cec4e0",
"assets/packages/stream_chat_flutter/svgs/icon_picture_empty_state.svg": "cd17bcb38aa673d1765ee69f9a321929",
"assets/packages/stream_chat_flutter/svgs/video_call_icon.svg": "0dac4d210cf07faf50367cd897ada34a",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"desktop-tutorial/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"desktop-tutorial/.git/config": "d840611959aadcdce75474c110f278eb",
"desktop-tutorial/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"desktop-tutorial/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"desktop-tutorial/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"desktop-tutorial/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"desktop-tutorial/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"desktop-tutorial/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"desktop-tutorial/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"desktop-tutorial/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"desktop-tutorial/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"desktop-tutorial/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"desktop-tutorial/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"desktop-tutorial/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"desktop-tutorial/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"desktop-tutorial/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"desktop-tutorial/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"desktop-tutorial/.git/index": "685ebee60d4b4d7d16929454303f9645",
"desktop-tutorial/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"desktop-tutorial/.git/logs/HEAD": "454e90f4702922797eb98034c1dcdea4",
"desktop-tutorial/.git/logs/refs/heads/main": "454e90f4702922797eb98034c1dcdea4",
"desktop-tutorial/.git/logs/refs/remotes/origin/main": "5ee5f8bce7751716bd9f33f68a4200ef",
"desktop-tutorial/.git/objects/4b/8c7642072886fb63953f5f7e3a8078f1dc8afa": "8118cf710c2daa839fa5f7021f12b6c0",
"desktop-tutorial/.git/objects/74/40be376731f312f2055335552b2dac991261e9": "a19a25da5008b050dff964f5a3ba0dcd",
"desktop-tutorial/.git/objects/79/c0873ce951b1cb9b433535fe190c74467c844d": "7ea2bf148f9966354b3f570029334836",
"desktop-tutorial/.git/refs/heads/main": "31058b4c47dfb17dc7e02c966ee5b1d0",
"desktop-tutorial/.git/refs/remotes/origin/main": "31058b4c47dfb17dc7e02c966ee5b1d0",
"desktop-tutorial/README.md": "72af7c6717fa577276fe0edc82c24d93",
"favicon.png": "332a51ec5bdb3c3e751161d327a98e63",
"favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "2ebf18fdcd1f9c6345be2b9d604fb7fd",
"/": "558531f81f6bd7c0d95e2ae53b12a356",
"main.dart.js": "b613392c4a94032dcb0d2f20f8c3954a",
"manifest.json": "b2ab0097acdb754f79d77f74fd6689a2",
"nweb/.git/COMMIT_EDITMSG": "2cd6ee2c70b0bde53fbe6cac3c8b8bb1",
"nweb/.git/config": "82e6bc47467003db19d0d59ca8292bd6",
"nweb/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"nweb/.git/FETCH_HEAD": "228f31c2e95b955eb8fa01c78799ec69",
"nweb/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"nweb/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"nweb/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"nweb/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"nweb/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"nweb/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"nweb/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"nweb/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"nweb/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"nweb/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"nweb/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"nweb/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"nweb/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"nweb/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"nweb/.git/index": "a9f34aa2126d771fd8a94c69f9b01f99",
"nweb/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"nweb/.git/logs/HEAD": "97911eb1c1828756cc084c042b669fc6",
"nweb/.git/logs/refs/heads/main": "42d944065ceacd09240bd5d5dfe09665",
"nweb/.git/logs/refs/remotes/origin/main": "af4094a2d6d2a6aa16ede35761317533",
"nweb/.git/objects/05/063373cc59324c75420f5d92e15dca1b77ce19": "905cd764785fc3ac87e9af42b838b452",
"nweb/.git/objects/05/bdee3b4459252ad36cf5440b8db3c921a79b3a": "21969954f91aeeaf17eef6a5318a7c1f",
"nweb/.git/objects/07/224b426c19ac14762ae3b0d393d0ab33c14c71": "9d22e498f2add08353996213d81f9719",
"nweb/.git/objects/07/228a4e32153610a3e45945e4000c9484e9597e": "f3e3060f4f93066e87ac91871dfbff51",
"nweb/.git/objects/07/65c5c33eb567aa31f04f900dcebce4cc99a750": "e051bf59bad799182b336b8a37c9b067",
"nweb/.git/objects/08/38e2dc6261e7ab2c978dbbb1aebcb6507b8246": "f952d45dc80dbd08fc003fe402d8cab1",
"nweb/.git/objects/08/65a95e8fa984742e7feaace85b17f319805bed": "33cbcbf8c55d1ad264fe95103e4ed2fc",
"nweb/.git/objects/09/2e3ac6ac3e3956416121b4366cccdaf28149e1": "c5167bf9560e240c7f765766d19305bd",
"nweb/.git/objects/0b/f3122da855f525c6a6434972f9ba79baedacd8": "437b12290e37a6f480e40cf697b6a151",
"nweb/.git/objects/0c/46ed0436e682f86e62b979491a46832c7e1e17": "b919366d9c0ce555099a91faf4dd3f65",
"nweb/.git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
"nweb/.git/objects/0d/504a409c9e7ef2ce11ac6e49bbf504f2794f40": "3c8335bc32a19ef86ca95f9c00f3d9e4",
"nweb/.git/objects/0f/382e94d4ca05fccc0544d4c9f3eee49a11f46d": "2529d78bc0ef6de6467edd41f167e49c",
"nweb/.git/objects/0f/4947298764435c761db873135b99f0d112a69b": "3ea779d10dfc38ef968d25255239aba8",
"nweb/.git/objects/10/1520745651f6c350e4253bd9e09d0f1730f82d": "db44ee1e4a3cb9c6a54fe492aa8cfa65",
"nweb/.git/objects/10/320d232e48e18bf58c1516cfd7dc26e504174c": "0e64873e31c394795bf8f4055d0619de",
"nweb/.git/objects/10/689df2c9772c5558b60f1cc71f2fb9e44e5214": "6fd280e15543ace8d8b4d1604dfc72cf",
"nweb/.git/objects/11/eacefabe58f098c616a0d221759c94393232e0": "8a5338cc2711a6c411966e2eab9eadbc",
"nweb/.git/objects/13/5772d04ff2b7cdb9a28d2833f1f632b68e287d": "b6aeafe20759733e0412db83f65f2f93",
"nweb/.git/objects/14/087646b13a6e3c9609b27fdabfba9bfe6c5bac": "a49ba337bc1fa3c3675db5eec0becac1",
"nweb/.git/objects/14/a1c64036635b2a8dc1d095a08d5d2c8c6bd2ae": "a8640d19849e6bc4e4df2ca5da78e532",
"nweb/.git/objects/14/bedc6fa894dcec82805cfbd0f850b494b45e68": "301e6a6844e820fc536c67833451b665",
"nweb/.git/objects/17/0ff7d40b8f26f8e52c54ca877265e02e53a5d4": "0329df89e95ce2bba60c3611c4e4aa53",
"nweb/.git/objects/17/c9938363cbfeeb667fb5575eff52c074956e42": "c8b90ff6524bc2a61f514fad22614c1f",
"nweb/.git/objects/17/f8443634778e3a30d89e4bc02e5165ce81e909": "9851b1afbf2bc8d75484dc52bcd39a0a",
"nweb/.git/objects/1c/3832d678f12b3230bad059beb12616432e766b": "6d5cb2a77d17b0015428d12c487a2cf7",
"nweb/.git/objects/1c/3c718cffa61f44cd7cbccc0319fe879c472b28": "e96a67bab3ad9999b65b5bfedca7e208",
"nweb/.git/objects/1c/cd0b6cfaeb49b783ae017b651f180b19a6231b": "8a29aa935039d44c9f7d42d6cec876d7",
"nweb/.git/objects/1d/20c0317ce47ec37156cf7e9b952abb4340a611": "dd3e8da351800550f4b49d5d55742d12",
"nweb/.git/objects/1d/3d429cfce520cae8c7515032c94aadc5ee62da": "6ea04aaaf8c0f9e3b7d4bd5151c17f5b",
"nweb/.git/objects/1e/19aefe9b4d158b8b604baafc6b557af387e0d4": "90cc4f16745774208b4d94ad5b565f5c",
"nweb/.git/objects/21/3f33c0ae04e61bfccd372d11ae802beb9a8282": "b5bcbf97a2652c92697da5aa45faf66d",
"nweb/.git/objects/21/45d9bfc10ab04a7b22c289f566f706144dce6d": "29c1e0761b6abbe9762505bcf7e30ed5",
"nweb/.git/objects/21/f64c350834683dec2b6a3259275205b548f087": "ce358e86cff40e1601ca7ca88d847924",
"nweb/.git/objects/23/16cfb06b9a889502d793d7fee3dc9b8f445dab": "56e84de8d4f05d4f4acd244e029d31e5",
"nweb/.git/objects/23/85605f8df47b8463ab90e0e6355d147fd6d641": "d0122fbd591e1493da130076c912e635",
"nweb/.git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
"nweb/.git/objects/26/019b3367f63a20fcbcee473b7c9dc87c23f19e": "081c17a0b1a2cfc798cbfe2956db73d6",
"nweb/.git/objects/26/3fdfbe79690ffe1222ec45da234673d784a121": "2b2415f56163628526e60f268f454c00",
"nweb/.git/objects/27/076b489c9bb22a00fab236aa44af32424af96c": "295ba63493d27600c24e968ca5e84fb7",
"nweb/.git/objects/27/7e4d09eecca0a30c06b00fa5f427c8dde4bb5e": "5b826f15040ecc5b2ff7b2827fbf2420",
"nweb/.git/objects/29/524039d5406e6251afe6d67ed19c6e66b8c3ef": "f3e0e5e4c788f38996c6810665afcd30",
"nweb/.git/objects/2a/79e47454697480eda7d0b5f9af7a38041626a9": "746a4c9398c677692a11011e59e82ee4",
"nweb/.git/objects/2a/87cc9466f48e5d251388fdfb5c8f09de06ad48": "af735cbb127a9c17da67e7af2275f329",
"nweb/.git/objects/2b/710aa305c9ba7fb319dcbb012c64e910426c77": "330a32d7c094b0a21adcfb49f3f581b4",
"nweb/.git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
"nweb/.git/objects/2e/e561ad939434b47ed90d669485108d8ebc0697": "b115a76b9e29ba2ae436865dd516dc2b",
"nweb/.git/objects/33/b99c3538fa28fabfb6fca8d53fa8eb208b01e5": "0e819878989c6280c9490bf7e3dee69f",
"nweb/.git/objects/34/2219544cfe44cd60c15c6b27301914d233fd94": "5289a9b2f0ea7f5d26d3297726bd0443",
"nweb/.git/objects/36/ce6115871d59a8618164bcf906ef8e967ec901": "afdc02454e4e0ffbf5b88f3bd8cceebf",
"nweb/.git/objects/36/ce76100c1b3a835acab9da3ac9bb8f8b34f79d": "26a7ed974bbb72e66ab6b02e7d61b62e",
"nweb/.git/objects/36/ef80fc5ef708e778726a5217dbfaa182ef5eaa": "fbc7524402a6583b1ae1bb693d645495",
"nweb/.git/objects/39/54706812e7bd42482b02cd5a3a7c443e4f124a": "99e55cc779ba597a1fca2fee07f49ce3",
"nweb/.git/objects/3a/63cfec8cc060f4d6cc42a57c744a4815ef05d2": "c73916e3558cf7209eb73b8cb03e9b04",
"nweb/.git/objects/3c/f5548054bc0d96c5e71f9e43653ce210b76a30": "e21cd5c9203f6c83a4921a78566926a9",
"nweb/.git/objects/3d/93282a2cdf937ca709d94e1587a0109cb8c744": "202006f97873892249fe2747e26e4e94",
"nweb/.git/objects/40/b203082895ff304978af0f3527639f90c2a29b": "09e1b37e78d2bc006acbd9d8cee1b8a0",
"nweb/.git/objects/41/ed17ddbd822215a0c1331ac8f5714e94893e33": "41820d012bbfb0638b3949ec729172a9",
"nweb/.git/objects/43/bb04890860027ac506a500e6c8c48a0331f1c9": "7d954e25c99a6e01550f95c1e7d99786",
"nweb/.git/objects/44/e5e523e70d4f055272bb4f4944a1a74ad9af0e": "22900fda978822354c9fb0d797d14699",
"nweb/.git/objects/45/3ee694d84c6a18fa92663183971d0d53848e62": "769bd55913e985cbd98cd5328990b81d",
"nweb/.git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
"nweb/.git/objects/48/35f7b2c7507e2ab4a57ec708009e52d5918f92": "280758194d97df55f3411527df215276",
"nweb/.git/objects/48/7388a5fa5c42d353ad07a99752a5705f4e50ba": "7e7a779d3ea1c15eb600cbb2fe96c7d0",
"nweb/.git/objects/49/cf76bef58858e2d74004557f73ec7d7dd86738": "9e00bc1b488c3cec9857dbc52d545cd6",
"nweb/.git/objects/4a/53948c08552fb4f93e50bac5d3cdfa2961d568": "24c006e2dd9a3d20a6fec7a8d3490569",
"nweb/.git/objects/4b/5b196f783e1345d882e17a0e5f213867a464e9": "7f7f2e6b496f2f6ee5b053ecee44746f",
"nweb/.git/objects/4b/6181b15f318becddfa2017f812bc090a22da09": "50cf61ed7f2067633d2accb6f51722bf",
"nweb/.git/objects/4b/6f4ea3064c9adcabae06f96fb3f7e5167774ac": "da612c0fb6f31ed4362d935fcd4a8115",
"nweb/.git/objects/4d/66f4f0988e29ef85ca8b49233e0382b69b3b63": "be7ae01aae5db9f4480a5eae377f822b",
"nweb/.git/objects/4d/946544c4b33f03e72854834c572dfe857020aa": "c4c459f7f106665ffe282038dd6377ca",
"nweb/.git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
"nweb/.git/objects/4f/047db9a0e2df65099bbd7173951f3c80b7129e": "dd215cce10edebcd47a1554f1b98cd31",
"nweb/.git/objects/51/b3c7f951e089fe6edb3ab305e77c79b798f78c": "242bafc9ff55d63acf31f6bb57bacbeb",
"nweb/.git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
"nweb/.git/objects/52/8f6bfb26ba5d61ac44d4cf254f1e0f106a8617": "81fee5d2e25d86a2ea963eb250eb7b01",
"nweb/.git/objects/56/0b7c613573c883b058c66bae47c459a4bb131c": "02ed9a4dd635e8ce0d52469e7d344f6a",
"nweb/.git/objects/58/0761a7056e037f35435506a523e0d1b96c51d4": "45f45ff757d72992ba9362c69555721e",
"nweb/.git/objects/58/4d860c7ada1eda849e7621770af094df1b9394": "a081683df28459ae9b8cfeb5765b138e",
"nweb/.git/objects/58/cafe4b0062cd49883756327433867b146cdff8": "ab9b09b5c9f3e3afbb13aa4bf2d3b933",
"nweb/.git/objects/59/aa2c5defdadad5868f2d7a90e77443fc25911c": "a14509c2c6de5935bf19f56d3f55af45",
"nweb/.git/objects/59/f9be22f41bcb4951605d34eaa3fdebde065ebd": "4bcc3f9c7cd4850eaa1dbfc6505fc2bf",
"nweb/.git/objects/5a/4c5cedd947971b895fb0ed5805df44066fc314": "69e9eb011ca70480ca31b021a52d4879",
"nweb/.git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
"nweb/.git/objects/5d/72fdd33116eaf85fc051570a16bea3b69bb208": "00a3867cafdb167cc1a6d3a46238adfb",
"nweb/.git/objects/5e/9d96ad8bfa670b36683f9d685c550bbb7e16cd": "1035679b6c85a83aaa08f811a9ff13c5",
"nweb/.git/objects/5f/67205d10fb670adf1fe6a6e84ed92ea1eae146": "219213d5abb02e06ccf6554639a38747",
"nweb/.git/objects/60/8202209ce368b23261df1e5667815e2d632693": "280ca9679ec91dc0aabd7f7aeb606e7e",
"nweb/.git/objects/60/b960db2c0bb2e66583c87188a6f7d8ab8b65d9": "fcfecd805e9af8ae9467ab780f274b22",
"nweb/.git/objects/60/e6888f7449d3b9baa4d0f0799b84d0ece0ecf1": "0287d3b19378f123fc8cded2ef428f3a",
"nweb/.git/objects/60/ea59eeab35a18e9b8a588cc613c1f13fff8e6e": "a6c8f740bc2421072dbe94acd85ade1e",
"nweb/.git/objects/63/e0d0164bd5472daaa45a2dcee6a0efed95481b": "2c185bdf8dde39914a022fb94a4cf153",
"nweb/.git/objects/64/04f0512412659209ba800e8aeb6e869d57bc58": "45f452f91e5d163208c3ac283ebe89a8",
"nweb/.git/objects/64/d02895c257f91ab33bbc9df32bb36846fcb173": "ad1809dac124191693b2814b03bdd84d",
"nweb/.git/objects/64/e6ca34406f3acaaefa8d9a3f910050a7d1897f": "f63e7c554224263aacd68eeb0e5fba6d",
"nweb/.git/objects/64/ef84c145cf08f0aa62e6d7c0bfb1f3a4793da9": "7539ad00be877f89cb3f0d65fa8b4184",
"nweb/.git/objects/64/f9aa9771d7bc9f3c56dd1e49a178f6ffb0e10b": "6adc78f1533b4ff3cbdb52d4c0ad7f99",
"nweb/.git/objects/65/5f7a5d6e42473440cc2688e4ce0c388b225806": "00f7612982eb69254c48dab53317473e",
"nweb/.git/objects/65/8bcb1d009b8b17b5348a70f225ee39f566a045": "f26e78856ff767571e8d5d5bc84a1260",
"nweb/.git/objects/67/96e1f7814805fff2565f4f66519d5b39308d71": "779f52e454e43408635d6dbbc2e50521",
"nweb/.git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
"nweb/.git/objects/69/d76e1a55f6cb37dd546aeeca78ac4a5eaf2790": "8f49c7be200dd1b84a323707aed49619",
"nweb/.git/objects/6a/35ef8d5bce5b529c0a7cbe3fe96729597b169c": "bb11b77b79fe363ab6caf64390ac20d5",
"nweb/.git/objects/6c/af3c968dc3e337132b2e822b8c0507b56362dd": "1682413ac28e2954f2601bbca409480f",
"nweb/.git/objects/6d/42a1dbf93a608198fb6c0a5ad8c118c8da2774": "1715d69ad1ec0671e0e08366eb6907e1",
"nweb/.git/objects/6d/b40129e3497b249a2f48a80f1497b0aa257206": "b17fec4c486348bfefab898ecd846efc",
"nweb/.git/objects/6e/08875f5340169c5ed6d9999a8ea46e89170b01": "a6eb188f784385a43425cd6b3c5731ba",
"nweb/.git/objects/70/db23a2316ea59b6640c08f5509c2f9c04629b0": "cc05951eae87fb5f2f931ee4bac34145",
"nweb/.git/objects/71/ab1fc58d9b46c9e644964905df958c1f1c108d": "6889093ac2a9ce8f33d5ac330371887a",
"nweb/.git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
"nweb/.git/objects/74/6e50a40c533afda38f2d0f94b87ae96c9886fa": "446ff013d5bfb1b8872b9cf3da21db15",
"nweb/.git/objects/74/82300d487cd24cbde76762f8c38cf255c1bd81": "69d95e6133f128a31040ee51032273f5",
"nweb/.git/objects/74/eb480ca40d9cd6a188213ab6fbab19bc7baba0": "d08a042bd58cdd889b44ea5a1dfd9c33",
"nweb/.git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
"nweb/.git/objects/78/7f5f8c62e1eaf324b34bcddcd330abfc308dda": "92d8bca8e35ec6e5b0ddecaf795d18ae",
"nweb/.git/objects/78/e8826fbc653850df01aaa8bd51ff687ef6591d": "93bbb9450382d388ebc50dfd27c9daee",
"nweb/.git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
"nweb/.git/objects/7a/c08c8c7510096074e9736b3b2bbdf2f8c6be0c": "7ba4299bc76eb8eeaa5d7a682eafc430",
"nweb/.git/objects/7b/935f29b6e5d45961ee3a7d196366095deef639": "2e5d8365ecb3e6abbd1d396c395ea780",
"nweb/.git/objects/7c/85d70cd0f019a4d6469c117deca13691669eff": "63dac58773a202f7d0f939fb2b4ee29f",
"nweb/.git/objects/7d/fab2096eae444007bd281e58cd49e25dc7e4aa": "0974d441c60e3c965fee4c608a2b5fcd",
"nweb/.git/objects/7e/16d505c1513590bbf85e1b02d219875580934e": "5de053679d7b87d6508a28af67508aa4",
"nweb/.git/objects/7f/5fc99eb56ee9abb308ec0b230fe314d690901a": "b4146fd4fbf7405c95fd7e90a4f040d7",
"nweb/.git/objects/7f/c2400da026818382108979e50f123d566eb472": "aaeb181884adc2ae4a2fa60f135aeddc",
"nweb/.git/objects/7f/c784fbb7f1d8db172f5721cde9636c4742943d": "86ac94b35ebb9cc05f7858683000223b",
"nweb/.git/objects/82/0d28bd6adcf35679e60c5f4639cfc27b5c39d5": "721ef2e12f071ed0267c46a8ed87e6b3",
"nweb/.git/objects/83/045bbbb96c6e0266fcacbd07d706295bf69c2e": "0114109967eb373f478ab2af317a34b5",
"nweb/.git/objects/83/bd7aa5235b4c52243b2aedf934cb8392f6a74a": "f9cde9939842501e5f607a15d16c878e",
"nweb/.git/objects/83/c9ae5611d7ae37a2df4fc23fcdce3737e31891": "9e953251ed742d0077d493790bd1ada9",
"nweb/.git/objects/83/fb838629d7132ac66337c8746cc948b914746a": "8d1fd61c2ab18c98b4d62ddef36a277b",
"nweb/.git/objects/84/2f93fc23799ed2b4c2a3ffd010dc61771aa850": "8545e19c600818d1301d4f52861124df",
"nweb/.git/objects/84/e9a6454a9f25945605a8e9c1052508d3b47f93": "03ede858a4fad0098a48faf0880e168a",
"nweb/.git/objects/85/944c3c5287b5dc219d1ea4608de6d80cf66ddb": "bee6d9c8d4422f6274d2f39789c6b1a8",
"nweb/.git/objects/85/bb8674c017275b17c11421893c659c425ac674": "54f3d2b564f2a6c2c7691b8b473dec00",
"nweb/.git/objects/86/3860dc220ea557b5fdcc30f83b39095dba021c": "e351d7fc527a293b1096d5620807c8ab",
"nweb/.git/objects/86/e0f95b2f3a72f7d82d677964ff71de83da2c97": "7834e1bd07d54652e550d11d2abbbbed",
"nweb/.git/objects/86/f4a0d4812c788cf6653750a2953860e77e67b0": "4ec6b99ea2c6883115e53baca10a19dc",
"nweb/.git/objects/87/b34f60732ad5a598bdb8dd3cc07689287fd222": "4e063968742be118535daf4fce867047",
"nweb/.git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
"nweb/.git/objects/89/2c01ac8df92b3e7f708ed3f873e6fe166d76ea": "2ff0365d98253d00cd3403bea5b132fd",
"nweb/.git/objects/89/508e2abf8e9eccdb8137f55400182eb1e46847": "44d8565f1a094009ef25eb587e4774b4",
"nweb/.git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
"nweb/.git/objects/8b/348cdd07b2f576330b60952226c2ecaab2690d": "8866e49e3afaea027aeea0ee182f4101",
"nweb/.git/objects/8e/3da03187cf710725ca169d457821b267e35670": "130be85bbfffcd6dd77186d70efff9db",
"nweb/.git/objects/8e/ed98799be609bb9910b95bb084caccf8c2ae90": "141886ebb49b7c3d742949aec5ffe052",
"nweb/.git/objects/8f/1e8329ee332a8580cb8074c9cca526367116f6": "e7cd6e909534c24b8690f07b83a10adc",
"nweb/.git/objects/8f/404ae274122d253f3eee87bfb4268d4bb68768": "826288edf31b544eb1f3ef1f2b93d03a",
"nweb/.git/objects/8f/8dad75b241a76440a42011ef85f3024bd2f160": "c290f043e16b2090dfcf60ac8730f394",
"nweb/.git/objects/90/36ff724fb514bbf9c639d721a0427a858fb7eb": "9819b5215fe8260e6673b3ecbda52c20",
"nweb/.git/objects/91/fcf00bc554027396cf74d4e2740c8fd7089eb2": "5746af81cc6dbf59ca7dbb6a374cc71b",
"nweb/.git/objects/91/fedc05015a1bd29477e9b87bec16ea93382780": "2ceba33504cd1c0cf9a065cb3f4fe764",
"nweb/.git/objects/92/0fbb626fa5ebdf2daf53e5f44b64b846857372": "40aee9bcad7c388020dabca80474dd4c",
"nweb/.git/objects/96/74e3a63f408348b2ec2133d280cfb303a17b17": "0453ea3a67405c005d2d029cedd937ed",
"nweb/.git/objects/98/c0b047a8e689c566b53fbf15f37d2e1ef359b6": "54c90cb9b82a5ff1c61e3f314b79ba6d",
"nweb/.git/objects/98/d48e73c1a813da58cc31bdffcf29645a34177d": "b27922a659a8d9c7d5aa7f1a48d55c0c",
"nweb/.git/objects/9a/42bcfdfc39b7420798525699b1148561f826bf": "eaa9e4cfbdfca4792f4977ceb349918d",
"nweb/.git/objects/9a/83e181aa62bfa9e66e3cda2b997f7c7e2d536b": "f9d47d7d014fde9918c1e6253fab03f1",
"nweb/.git/objects/9b/fa2809aadbed492e40d45a5b6947d4d42ff7de": "02a84636704be70226aaf81cd7f8b7fd",
"nweb/.git/objects/9e/3cb9cf7f80bec3b54b2b8f5ed7db1732f8e3c1": "db6dac0f3abffc466c3e2962cde5779c",
"nweb/.git/objects/9e/b20a58a5fb3d4d260c5caec6b4f927768aa628": "591ddc3af8bcf0ad4443256659eddc71",
"nweb/.git/objects/9f/f3af5bd487ffb623e1d6aad4149df94a4e4cb0": "9c352a8d8f03a2571014d8bba5e4a937",
"nweb/.git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
"nweb/.git/objects/a4/2ee4fb851886b7ba30991956bc9382cafa0557": "67f2c1fcc232827b90f838ea1ffb5e60",
"nweb/.git/objects/a5/1530a4ddbb051a0e7e47ac9794d92155aa84bd": "854f0e8044a0dd738188dd3b3c155812",
"nweb/.git/objects/a5/a7d99d9825ee4457b9172815e0146f72b27c93": "2b1c2239e900e94179a0f8226d161654",
"nweb/.git/objects/a6/f144cffad35304d48aa9a657cdec8c7a558722": "c24d691b1722cba87edd5c4afed56adc",
"nweb/.git/objects/a9/419e59f6b0653f2a5544b6fc7ecbe356b40045": "1e2d594b4b41a0c20182d9d0128968dc",
"nweb/.git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
"nweb/.git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
"nweb/.git/objects/ae/0e14d029d5d18e7bbfdb4c3b93873b9aa7be84": "65627f92fd5529c9fb95927cd62a64dd",
"nweb/.git/objects/af/3df414367e2f1bd8a116ff53f038f8a667f0c5": "f8e675a338c7e68c254c08308a8ae78d",
"nweb/.git/objects/af/d4dc12703a80f78c06a1fd6da40332ce2c907a": "30007c2c940aaed86ae6c1450d52b765",
"nweb/.git/objects/b0/614034ad3a95e4ae9f53c2b015eeb3e8d68bde": "7ac75a1205d6369de21c8c4b5e901c5f",
"nweb/.git/objects/b2/10c24b0ecc464bb7b9922a9cfd6eeaa3809207": "6d6676e47e9ca92dd6eb6e8e8bc68247",
"nweb/.git/objects/b2/24a9f1238fb17f78583b1b56a7323c86ffdf1e": "bfdac958faa03af17630724652e6e544",
"nweb/.git/objects/b2/711dadffe008e7e05cf008f8cd39cee9a56172": "d5b52abcc7b4497345c04292700098e1",
"nweb/.git/objects/b2/7c9057971d0991fd6d71732d5d3c09f4908384": "465876c228b5981c7545e513b11c7bdc",
"nweb/.git/objects/b2/b616ef58388cf0a45ade7af49ea96961d4a5cd": "a6866fa0fa52563b91361bb8ce1017f5",
"nweb/.git/objects/b3/c525c8300ee20d3d065f690b09a3f8eeebbff6": "326b4eb07a30ce14bec322c2504d0659",
"nweb/.git/objects/b4/77edde1ca74c276356d48c24e149eb08e03758": "db79db57068d74d463184167f381bd5f",
"nweb/.git/objects/b4/b1ee716689ae6b9ae457eaccd276c371ce0779": "df6fe29bce6fb9ca0f6a305ba43739f1",
"nweb/.git/objects/b5/0ce03144dfe2b197f430c48369bd21a5eef9d9": "12c43e1c73f8fb270fd86eef81bb066b",
"nweb/.git/objects/b6/b506f32c2330e10aff914074ac99bf9bc42e69": "2b5eb3dbf649befb4db3ecc51571d213",
"nweb/.git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
"nweb/.git/objects/b7/cc8f79527171af368ffb35ff7cfb1f383e16bb": "702fee61d8f4316980858f98bbebf984",
"nweb/.git/objects/b8/03cf2239260b817da12a5eacddb43ac5a685dc": "d03526af0d11f5ebd2fb78e78946a8d1",
"nweb/.git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
"nweb/.git/objects/bc/919f35356827f1247efebb99ba5c88f0fc93c6": "b89c4255710433628daadc3ba698a60b",
"nweb/.git/objects/be/fe33a385e065283c07520a5a478519b39196b8": "532ba8b8992688b7b26ab72940685649",
"nweb/.git/objects/c0/862a4e19089ad4caf69211d0fba977d3bac0ba": "0f372c0005ea8d1e6e80d590dc6f100d",
"nweb/.git/objects/c0/dc3ceb7a6038d8e1bab023c5af8b374c4e9055": "a0eefe66f762034fc42ab1a1fb34fe55",
"nweb/.git/objects/c0/f1d6fca83546f1313ec00f6d41d126ac9f1f2d": "61192f805899dd14e7ad695c90a57928",
"nweb/.git/objects/c3/116914ba60c80ffdc639ed8ae7b329b596a662": "8601badea8e36492c8c9e395308ceff7",
"nweb/.git/objects/c3/4b8d171e7af1ba385ee66fef547dbab371036c": "1f5630191e99cf041b2b7dfde7d98f60",
"nweb/.git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
"nweb/.git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
"nweb/.git/objects/c3/ac1342144616ddddbe85136d9a131f2a2bb232": "a50138de8cfe8ec37896058a6d180e83",
"nweb/.git/objects/c4/fa16f8da13143ca921a5b9036d8fc8caf8985f": "09b42340a2995fdede610bb670b391c1",
"nweb/.git/objects/c6/d866a14be6de9f8a913d7add354e81bdba2d9e": "751484d299b0ef062213674268b35ea2",
"nweb/.git/objects/c7/1ff20b575a287298d3a1aa6b5560c24a60cca6": "87e7ea5f42aadf448c8f92238381b869",
"nweb/.git/objects/c8/306ca1d0a0e5a54f8d5a226285dfa9aee972a5": "374232f75beb721bb4b314b8023bf482",
"nweb/.git/objects/c9/db78598324078cf04733b036eed67dbdb5cd90": "d71c5c8c96167b84f727bfd68ccb1398",
"nweb/.git/objects/cc/98cf90cd93577b9d57e6f2a73547faa5ba7074": "f325334a194463a2b5f531d2cdbcd40d",
"nweb/.git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
"nweb/.git/objects/ce/6c6fa1f0dc646c7f9b423cd9adb5dc606cac32": "125161305a7618554728239558ed7b62",
"nweb/.git/objects/d0/02638835e41c80a4bbb6ce59cfcb439c37fcde": "0ef55fcdd6c628b2c6e90778ee907fed",
"nweb/.git/objects/d1/d16aa768d7eb6ca4b1b437430852f433618262": "a85c54d0a1416bfb832743c27c2d6c99",
"nweb/.git/objects/d4/2503bb1e4c69628667485e6f94f11f6eb4567f": "facca6e694e8a7dbeadb11c7c4eef89b",
"nweb/.git/objects/d5/3e4b8d100889d847e04449a6ef1e1d0564454d": "9c10ee455481071115eafc3fa3fe5d18",
"nweb/.git/objects/d5/903df431edaf9c65b0951fefdf781fb8f69340": "9d7fb6b6792acd991000598a66274243",
"nweb/.git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
"nweb/.git/objects/d7/395e7868404068f06a9121d95dd399b112d02a": "de14a1ae878be79106dd04adade2d67c",
"nweb/.git/objects/d7/9795346b097b564b0bc162b7a394b547bfd560": "32ada356a5ab207e8efa9b9368ee6b18",
"nweb/.git/objects/da/a24576747899207920eb8e6e38b27f97d57794": "932b7b18f4e742f5c6f21638df8ba7af",
"nweb/.git/objects/dc/fe07af7e9c6a5ad8d851b72f5c1754bc7ad73b": "12738a6074b169e2542afd80494a2a5e",
"nweb/.git/objects/dd/e29bcb1bd8977d8d251ba6ebf0afedd981a995": "fe10dfc7b1b3dd9945b4e9174eac2b77",
"nweb/.git/objects/de/a4b0409facfbaa40174559779e1c445da8315b": "a18a3abec09ec05f0124721f2e2f51bb",
"nweb/.git/objects/de/ca84745564e52a2d1da32eb4bbd07eb7c46323": "bd47bba3de1c6c24ccdf50becf7ee91a",
"nweb/.git/objects/df/3e6584c26f32d217bae3433a2613c53aa81104": "e0a6a63ab27b26c63152a604b68ae9e1",
"nweb/.git/objects/df/d4f6626b1045270b4cee325b8455c342c52d13": "bfa2df4e02ae33206558879960ceabf3",
"nweb/.git/objects/e0/ae627170f076854179b87674a7c5cba5c3a7e0": "5899aa6f7804f628ed887c2123e97d43",
"nweb/.git/objects/e1/a1d4bb6b1334e8c4f1134ea088191633390fae": "57aed8c903aa6114c8bfcecf95400530",
"nweb/.git/objects/e2/369d21a03ff4fb54e0b66b729e0f05f086bb22": "c5d2bb91d528a01aeac60ded0cbdd694",
"nweb/.git/objects/e2/7426961572488234fdaff0bde5a651aa98035d": "76f4b2a70970d06d8be0b862462c54f2",
"nweb/.git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
"nweb/.git/objects/e6/2c7099bdb78a2bd6a18187c01a3a626e623a99": "34f6a85aeea0f19d7f93c08ab07515bf",
"nweb/.git/objects/e8/ef4507ccbe608b6b307d6e29de5f6d381f59e1": "3c5bb9e94e2095bdf505dfff71680433",
"nweb/.git/objects/e9/266599b34a8a403f7f845163891c46cbb6be43": "9dcffa3fda2bc661ea8855594189a83f",
"nweb/.git/objects/e9/66783db81aa32544fe1988995f2de7b631f74c": "ddf495033a1b21bda1c71c9541cd6a75",
"nweb/.git/objects/e9/b302824e0c16a33b4c7d276faa6b2f72b22ad6": "ee9b1d50a2574c8b3c7626b1c2030939",
"nweb/.git/objects/e9/bb8400209c99cf3718c32dd2a7131f0b68110b": "a2807522d5b2094af7ba3b33530e6a3d",
"nweb/.git/objects/e9/d1c069a2673c7b84a83ccbd4635551fbd5ca5a": "4c61666f11016f57e1bdee8fb18dab77",
"nweb/.git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
"nweb/.git/objects/ea/3ccb4484f1fa625619192998c412c4bface2db": "dc1b9ce40d9a33070c709166b4ddef93",
"nweb/.git/objects/ea/99e8341848dcbb49d654ff1847818bb301cf92": "d83634fac6066e97243192a695ad4f45",
"nweb/.git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
"nweb/.git/objects/eb/c3279c944aeafbc94f8dc7fdf86ccad44dd4d2": "43fb90052a9fcb640f3d547ef7904eb5",
"nweb/.git/objects/ec/d9a8071e57abf0bd28a29a32869d98b0500a24": "008689db7606bdbb358e157995a1effc",
"nweb/.git/objects/f1/91a5be0fbdc8b78d7732d0b0fa4c9687c5e907": "d8d264499940fc9517d0074dcaf158a7",
"nweb/.git/objects/f2/707fd12bfde799bdee953f0d793db940ca2dd7": "f4494a2f39df96c3574a31adcacc17dd",
"nweb/.git/objects/f3/3c7865a19b3a7cb7b9e95a973efb283e68c5af": "01c6d1339b6529240211fe7100cc5bf1",
"nweb/.git/objects/f4/2047ba4b3fc63e6adb23540f168ec6223514cb": "b23074a965ad4875ae3cebe77a196220",
"nweb/.git/objects/f4/2de4e633df8f5de8ac1cca5a0071f0a18296aa": "de6f625fa04f6500b79da8060c8e9a1d",
"nweb/.git/objects/f4/44b03788238026a4a725455ca20c5d3e77f8bd": "8427a7c121fac59cc2bb6bb6e40dc8b7",
"nweb/.git/objects/f4/45ec294bdc0861f85ca2d642f0a45bb5fe416d": "17333c2419c3689260724c2749d2eef5",
"nweb/.git/objects/f5/0e33fcda9b21be093e771b39e90108f0dbe048": "b1e90b903713067d0e8da96f8db1a804",
"nweb/.git/objects/f5/9656780fbaed3552f12812f638e19f44e5dbcf": "28b80a04deb14f8d59dbd2cad8aab0a7",
"nweb/.git/objects/f7/b61163843ce9d9edfb6913e315f1a26ec074d0": "1a3a846ca86ba2a615bb13a9fc15c603",
"nweb/.git/objects/f8/50a61e18be97aaf85f2d75fe294e6361f34474": "64cdb5c92c80af3b6303a1bc212a2f2a",
"nweb/.git/objects/fb/47f5e80cde05a1882a87bcc2411b7baa7e61c2": "f36b4c323550a2985efaef322c7982ef",
"nweb/.git/objects/fc/5129d7d907ed59bd492664f30e27dce380a3d5": "65bbd1f78e26fc536c8fec338c21b254",
"nweb/.git/objects/fc/82db46f1cb373a19f1b30cd2f7154cb225eea4": "985051fbba9370b07e5510fca18479b5",
"nweb/.git/objects/fc/a15011a3f8be4779d25f49fb3b11932216dc9f": "7aaf08d82dac8d31f09051cee7b31d9e",
"nweb/.git/objects/fe/54f3ebd9007cfdb4443966188090d203a2b4da": "f6e0c866e819a6c85429c648373b2184",
"nweb/.git/objects/fe/76b9b6652182db66b320eb26b3d2931fb77235": "29150685495cb94de37edf052f3d0a74",
"nweb/.git/objects/ff/4dcc72bc1adeb546783a054df0a14cebb650e5": "8f71c5a5684c86ddfd6744800bc38b3a",
"nweb/.git/ORIG_HEAD": "a58bf53d775fe5ead85e225420d94d92",
"nweb/.git/refs/heads/main": "f0c23068f52a54ecd61afd1e3f8f95c6",
"nweb/.git/refs/remotes/origin/main": "f0c23068f52a54ecd61afd1e3f8f95c6",
"nweb/assets/AssetManifest.json": "44bb8c80e50388319778521b771a0d42",
"nweb/assets/assets/login.svg": "57d08bd7349cb497ec0490e9880c52c1",
"nweb/assets/assets/login2.png": "5c280d29a6a964ab93873ed54cb3c05b",
"nweb/assets/assets/login2.svg": "e3e8173747621df6c79e930f092c1150",
"nweb/assets/assets/todo.svg": "7231a5a1d00dab834a271638b0a82af2",
"nweb/assets/assets/welcome.svg": "bfec3a00a5e8a2fc498164deef785a28",
"nweb/assets/assets/welcome1.svg": "56be22de6483c2a486f23b8d2383e5ea",
"nweb/assets/assets/welcome2.png": "531dcc7b6b82d25e0c2f06e5f75eef67",
"nweb/assets/assets/welcome2.svg": "f0dd34796e4ede8c66751ca10648b853",
"nweb/assets/FontManifest.json": "80c410ff331e6e3022484de9fee388bf",
"nweb/assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"nweb/assets/NOTICES": "8dfa466ce7b41214984a0b18f726e118",
"nweb/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"nweb/assets/packages/flex_color_picker/assets/opacity.png": "49c4f3bcb1b25364bb4c255edcaaf5b2",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-attachment.png": "9c8f255d58a0a4b634009e19d4f182fa",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-delivered.png": "b6b5d85c3270a5cad19b74651d78c507",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-document.png": "e61ec1c2da405db33bff22f774fb8307",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-error.png": "5a59dc97f28a33691ff92d0a128c2b7f",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-seen.png": "10c256cc3c194125f8fffa25de5d6b8a",
"nweb/assets/packages/flutter_chat_ui/assets/2.0x/icon-send.png": "2a7d5341fd021e6b75842f6dadb623dd",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-attachment.png": "fcf6bfd600820e85f90a846af94783f4",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-delivered.png": "28f141c87a74838fc20082e9dea44436",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-document.png": "4578cb3d3f316ef952cd2cf52f003df2",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-error.png": "872d7d57b8fff12c1a416867d6c1bc02",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-seen.png": "684348b596f7960e59e95cff5475b2f8",
"nweb/assets/packages/flutter_chat_ui/assets/3.0x/icon-send.png": "8e7e62d5bc4a0e37e3f953fb8af23d97",
"nweb/assets/packages/flutter_chat_ui/assets/icon-attachment.png": "17fc0472816ace725b2411c7e1450cdd",
"nweb/assets/packages/flutter_chat_ui/assets/icon-delivered.png": "b064b7cf3e436d196193258848eae910",
"nweb/assets/packages/flutter_chat_ui/assets/icon-document.png": "b4477562d9152716c062b6018805d10b",
"nweb/assets/packages/flutter_chat_ui/assets/icon-error.png": "4fceef32b6b0fd8782c5298ee463ea56",
"nweb/assets/packages/flutter_chat_ui/assets/icon-seen.png": "b9d597e29ff2802fd7e74c5086dfb106",
"nweb/assets/packages/flutter_chat_ui/assets/icon-send.png": "34e43bc8840ecb609e14d622569cda6a",
"nweb/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"nweb/assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"nweb/assets/packages/html_editor_enhanced/assets/font/summernote.eot": "f4a47ce92c02ef70fc848508f4cec94a",
"nweb/assets/packages/html_editor_enhanced/assets/font/summernote.ttf": "82fa597f29de41cd41a7c402bcf09ba5",
"nweb/assets/packages/html_editor_enhanced/assets/font/summernote.woff": "c1a96d26d30d9e0b2fd33c080d88c72e",
"nweb/assets/packages/html_editor_enhanced/assets/font/summernote.woff2": "f694db69cded200e4edd999fddef81b7",
"nweb/assets/packages/html_editor_enhanced/assets/jquery.min.js": "b61aa6e2d68d21b3546b5b418bf0e9c3",
"nweb/assets/packages/html_editor_enhanced/assets/plugins/summernote-at-mention/summernote-at-mention.js": "8d1a7c753cf1a4cd0058e31fa1e5376e",
"nweb/assets/packages/html_editor_enhanced/assets/summernote-lite-dark.css": "3f3cb618d1d51e3e6d0d4cce469b991b",
"nweb/assets/packages/html_editor_enhanced/assets/summernote-lite.min.css": "cadfcf986f26d830521e9a63350f4dbd",
"nweb/assets/packages/html_editor_enhanced/assets/summernote-lite.min.js": "4fe75f9b35f43da141d60d6a697db1c1",
"nweb/assets/packages/html_editor_enhanced/assets/summernote-no-plugins.html": "89ca56cd85a91f1dc39f5413204e24d0",
"nweb/assets/packages/html_editor_enhanced/assets/summernote.html": "8ce8915ee5696d3c568e94911eb0d9bf",
"nweb/assets/packages/phosphor_flutter/lib/fonts/phosphor.ttf": "7c29adb0b02f7d84da8413452ea95c00",
"nweb/assets/packages/stream_chat_flutter/animations/typing_dots.json": "3da1c94690095d3a96014b4c695227b7",
"nweb/assets/packages/stream_chat_flutter/images/giphy_icon.png": "0258059543bf3666bf0bdbe932592208",
"nweb/assets/packages/stream_chat_flutter/images/placeholder.png": "30d340bd4f082a7ef08376e916d960d8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Camera.svg": "a21d5808436e520b533d05383a95c88a",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Files.svg": "89c153fabdb0c697ea7c5fc38685e9d9",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_No%2520channel.svg": "da759dbf54a6e0858ede6952f8e5e953",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_picture.svg": "1b1879a202a491ceb39720a9bd4ded14",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Empty%2520State_Search.svg": "ae5f4d7aeacf823ef1be5c0b91973920",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/eye-line_big.svg": "c95e43b42a8fe3afcb8f4a9af4ba339e",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/files.svg": "ad39ce4a4c661f61336bf24b6c7af07b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_7z.svg": "1b4cb1160bc61b31c7dd8f3daa5eeac9",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_CSV.svg": "3d5faddc2dce3ab9609dd6cd89f7a4b8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_DOC.svg": "7bd182d6eb10e2a8ee603514d3aae222",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_DOCX.svg": "71373f44f659d095048eb9fd3bd89dba",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_Generic.svg": "a6a1c31ed5a6f0312f8fc4faf6f403c8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_html.svg": "6465f1a4a80c2805c2b9894c7f25494a",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_MD.svg": "3730f0b240e6962d03f9ffecc8ba6b60",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_ODT.svg": "1d888fe0910324b6229f55a8b219f426",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_PDF.svg": "72b645180a4095d5f7c132fe5f1a537f",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_PPT.svg": "86d29f47afd46396973646c12c730813",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX-1.svg": "bf49d89aff0be4b06ff062185cbd8195",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_PPTX.svg": "c362cf1827e0ec1d78ccd4395d226d4c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_RAR.svg": "27978098749482388b42bcbe5114a530",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_RTF.svg": "80211524634cdaf49221ea987641fb2b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_TAR.svg": "60cdea7f8a30e07480badd17f6efe9d9",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_TXT.svg": "02eee06ebb5f90f668acbd150347eddb",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_XLS.svg": "8fd7b98002bdfe53422c79cf1a0f4db8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_XLSX.svg": "bf28d69f1f55b6b04d4836a797c14531",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/filetype_ZIP.svg": "2b638aac5ccfa6ca35f17cbb4cf282fd",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/flag.svg": "ad96dd68a211f5b61ed14ebdd5155ff2",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/giphy%2520icon%2520blue.svg": "90a9fc1bc3169a4027a7d1e5631f854b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Giphy%2520icon.svg": "1ea05bbb402326e534d905d8a7147d12",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_arrow_right.svg": "cef623b244e5e3de7a7ec2212fe08726",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_attach.svg": "f8cbb1f109c479fe8060b7a4373e6282",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_camera.svg": "2fd8b5ee35c68733e7bd7d4b8ce8b1c3",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_check.svg": "2c04e6ad1230c568ab06d4d23be2ba62",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_check_all.svg": "c8c7fb7fd4bf6868740d70d36c5163f2",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_check_big.svg": "f92095a18204bdca79131e5e295a82e8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_check_send.svg": "83e9ec25419bfef4224b6bdbf922d506",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_right.svg": "063bfba9d4e2adb004ad9cbaf73eaa0b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_circle_up.svg": "6040dc689ef0f2f3f69f5b30c64e19d5",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_close.svg": "637cefb508c6c762bc0125510a5e1fce",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_close_black.svg": "1b9deb59c7836e342cf15cfa9112fc3c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_close_sml.svg": "bd3010445035406c174d0137cd1d8893",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_cloud_download.svg": "481b6ba2aae9f1a229be0ace4fa827ee",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_contacts.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_copy.svg": "fe5d2ae30b229c0662ae79adabb08bb5",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up.svg": "37b80269ac16708c0cc93fe7e303de90",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_curve_line_left_up_big.svg": "b963e0bfb52513c29cbd409ef1c30c6d",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_delete.svg": "7015c5ebd7d774c5b8de207bebd65e78",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_delete_grey.svg": "b78745df166d13379c2b4727d8c7fc6b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_down.svg": "b8eff7450293b41cec3759a29ac536b6",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_download.svg": "c97b54bcd0afbf660eda2a1489f8d346",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_edit.svg": "c6c7779ca0a4c02180765e4a538fe07c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_empty_circle_left.svg": "ba250f5586e12133778a34e43b26a76b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_error.svg": "59bbe2e77294f229159fb2aeeadcdef0",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_eye-off.svg": "16a86807a0edab18315b2063befa04b3",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_flag.svg": "ef5a011e7d58d95065ec24841b3301d9",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_grid.svg": "069ddcc807baed602f50fa3dcf8219e4",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_group.svg": "2f30b55f82e8dc1d9a5375673fac23b8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_left.svg": "f41c288202a6c657bbc448f78208debb",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_lightning-command%2520runner.svg": "bca3bcb8841b25693945aea9f66dbc67",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_LOL_reaction.svg": "9bdaa10d600b02ff3742ecb9432f8083",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_love_reaction.svg": "862f3ed12072950a57d9de07c8b5a8d2",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_mentions.svg": "47311213de2d3993be49c0b46c1d664c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_menu_point_v.svg": "c9b71afb8f93f627b209a9c11a755ba4",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_message.svg": "0befbb5c5df2a0e601d37f9617e16ca2",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_moon.svg": "c70d6c5be8a8f0fa998592f43219cab5",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_mute.svg": "e6d35d5fdc93bd80411ee3b250f95e3c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_notification.svg": "4d22eb100006d4dc45dfe140b7b5f152",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_pen-write.svg": "bb0f26bfe3c6e57b1565c24e94dc1909",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_pin.svg": "9c8a9824e1da800a1246c6f7f0bbbd9e",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_record.svg": "d1b6755fc495accab05c7e595e2f1fcb",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_retry.svg": "1902bba7b598c43d8f49d9fac3af241b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_right.svg": "5fd2ba93fe0f2ace64d2eec95e897ac5",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_save.svg": "04476852aec6f14fd7b92145032d3017",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_search.svg": "96d4562e2662f1c5cf98815fa1b60b0d",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_send_message.svg": "415eb57116854b04b92fb92ba7fae9eb",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/icon_SHARE.svg": "2be93888885f50b0f2641b35ea2f5b5a",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_smile.svg": "fcf16ae8a626e1edb9b6b53286f29c83",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_Thread_Reply.svg": "8a9b5c69f0d5b885ae4a0134d8fb5ea2",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_down_reaction.svg": "f86b823d9a46d2bf6eec90e4cac333a6",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_thumbs_up_reaction.svg": "0b1f3ccc43d0dd761c21133e3c97e4fe",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_time.svg": "87de185a105ee0c3613f4720a0921b6a",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_up.svg": "a83cfe5943525699308de701bdc586d9",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_user.svg": "288f7d3f089636d4643a6de75f3dc7c6",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_User_add.svg": "ca29f019afc62bb588b34a09551ae19b",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_user_delete.svg": "ae50b6a2729d61084482ec2f52f2ca6e",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_User_deselect.svg": "f8307c48bdca665d1e2a6c5b263338f0",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_user_settings.svg": "2289d8af192a558fcad87173b7dae09f",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/Icon_wut_reaction.svg": "7c385077d6c23f869319f9afb54d2c5c",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/imgur.svg": "7433ee061b383b75a3db4a78ab2b7476",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/mentions.svg": "5895f23c2ef7d74ba857402a00b3a7e1",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/pictures.svg": "74b029062379e9719ef7f45da914b3a4",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/settings.svg": "e269c1c8e828e064991aee732716e868",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/share_arrow.svg": "dc9e58ff41fc98e930c04861edf274a8",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/STREAM%2520MARK%25201.svg": "197f0bdae9c937be1ecf4a107cf87d88",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/UI_Reverse%2520Pagination%2520Loading.svg": "fc48c47d0c4ddf7bbe7f6e4a9fdb19f7",
"nweb/assets/packages/stream_chat_flutter/lib/svgs/volume-up.svg": "5df9a3a183126038faccea9e30e9859a",
"nweb/assets/packages/stream_chat_flutter/svgs/giphy_icon.svg": "ecb1168250a8e9e5b2df52e0e34a3683",
"nweb/assets/packages/stream_chat_flutter/svgs/icon_camera.svg": "5a7c1f19e6670fbf3c5ad1deaffdfd5c",
"nweb/assets/packages/stream_chat_flutter/svgs/icon_pen_write.svg": "93279740dc02da26397cd43358cec4e0",
"nweb/assets/packages/stream_chat_flutter/svgs/icon_picture_empty_state.svg": "cd17bcb38aa673d1765ee69f9a321929",
"nweb/assets/packages/stream_chat_flutter/svgs/video_call_icon.svg": "0dac4d210cf07faf50367cd897ada34a",
"nweb/assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"nweb/canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"nweb/canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"nweb/canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"nweb/canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"nweb/desktop-tutorial/.git/COMMIT_EDITMSG": "d778d8b1f42d0dd1bb284e5ca9549187",
"nweb/desktop-tutorial/.git/config": "d840611959aadcdce75474c110f278eb",
"nweb/desktop-tutorial/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"nweb/desktop-tutorial/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"nweb/desktop-tutorial/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"nweb/desktop-tutorial/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"nweb/desktop-tutorial/.git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
"nweb/desktop-tutorial/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"nweb/desktop-tutorial/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"nweb/desktop-tutorial/.git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
"nweb/desktop-tutorial/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"nweb/desktop-tutorial/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"nweb/desktop-tutorial/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"nweb/desktop-tutorial/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"nweb/desktop-tutorial/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"nweb/desktop-tutorial/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"nweb/desktop-tutorial/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"nweb/desktop-tutorial/.git/index": "685ebee60d4b4d7d16929454303f9645",
"nweb/desktop-tutorial/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"nweb/desktop-tutorial/.git/logs/HEAD": "454e90f4702922797eb98034c1dcdea4",
"nweb/desktop-tutorial/.git/logs/refs/heads/main": "454e90f4702922797eb98034c1dcdea4",
"nweb/desktop-tutorial/.git/logs/refs/remotes/origin/main": "5ee5f8bce7751716bd9f33f68a4200ef",
"nweb/desktop-tutorial/.git/objects/4b/8c7642072886fb63953f5f7e3a8078f1dc8afa": "8118cf710c2daa839fa5f7021f12b6c0",
"nweb/desktop-tutorial/.git/objects/74/40be376731f312f2055335552b2dac991261e9": "a19a25da5008b050dff964f5a3ba0dcd",
"nweb/desktop-tutorial/.git/objects/79/c0873ce951b1cb9b433535fe190c74467c844d": "7ea2bf148f9966354b3f570029334836",
"nweb/desktop-tutorial/.git/refs/heads/main": "31058b4c47dfb17dc7e02c966ee5b1d0",
"nweb/desktop-tutorial/.git/refs/remotes/origin/main": "31058b4c47dfb17dc7e02c966ee5b1d0",
"nweb/desktop-tutorial/README.md": "72af7c6717fa577276fe0edc82c24d93",
"nweb/favicon.png": "332a51ec5bdb3c3e751161d327a98e63",
"nweb/favicon2.png": "5dcef449791fa27946b3d35ad8803796",
"nweb/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"nweb/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"nweb/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"nweb/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"nweb/index.html": "558531f81f6bd7c0d95e2ae53b12a356",
"nweb/main.dart.js": "aa48a13f069d13aa166a84646028af27",
"nweb/manifest.json": "b2ab0097acdb754f79d77f74fd6689a2",
"nweb/version.json": "52befa848a3a87ee51d76452f3762dac",
"version.json": "52befa848a3a87ee51d76452f3762dac"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
