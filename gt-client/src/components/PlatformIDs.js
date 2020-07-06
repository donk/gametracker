const platformIDs = [
  {
    "id": 160,
    "name": "Nintendo eShop",
    "slug": "nintendo-eshop"
  },
  {
    "id": 169,
    "name": "Xbox Series X",
    "slug": "xbox-series-x"
  },
  {
    "id": 203,
    "name": "Stadia",
    "slug": "stadia--1"
  },
  {
    "id": 238,
    "name": "DVD Player",
    "slug": "dvd-player"
  },
  {
    "id": 134,
    "name": "Acorn Electron",
    "slug": "acorn-electron"
  },
  {
    "id": 6,
    "name": "PC (Microsoft Windows)",
    "slug": "win"
  },
  {
    "id": 51,
    "name": "Family Computer Disk System",
    "slug": "fds"
  },
  {
    "id": 8,
    "name": "PlayStation 2",
    "slug": "ps2"
  },
  {
    "id": 68,
    "name": "ColecoVision",
    "slug": "colecovision"
  },
  {
    "id": 94,
    "name": "Commodore Plus/4",
    "slug": "c-plus-4"
  },
  {
    "id": 163,
    "name": "SteamVR",
    "slug": "steam-vr"
  },
  {
    "id": 165,
    "name": "PlayStation VR",
    "slug": "playstation-vr"
  },
  {
    "id": 170,
    "name": "Google Stadia",
    "slug": "stadia"
  },
  {
    "id": 239,
    "name": "Blu-ray Player",
    "slug": "blu-ray-player"
  },
  {
    "id": 123,
    "name": "WonderSwan Color",
    "slug": "wonderswan-color"
  },
  {
    "id": 133,
    "name": "Philips Videopac G7000",
    "slug": "philips-videopac-g7000"
  },
  {
    "id": 236,
    "name": "Exidy Sorcerer",
    "slug": "exidy-sorcerer"
  },
  {
    "id": 136,
    "name": "Neo Geo CD",
    "slug": "neo-geo-cd"
  },
  {
    "id": 142,
    "name": "PC-50X Family",
    "slug": "pc-50x-family"
  },
  {
    "id": 129,
    "name": "Texas Instruments TI-99",
    "slug": "ti-99"
  },
  {
    "id": 25,
    "name": "Amstrad CPC",
    "slug": "acpc"
  },
  {
    "id": 27,
    "name": "MSX",
    "slug": "msx"
  },
  {
    "id": 39,
    "name": "iOS",
    "slug": "ios"
  },
  {
    "id": 144,
    "name": "AY-3-8710",
    "slug": "ay-3-8710"
  },
  {
    "id": 44,
    "name": "Tapwave Zodiac",
    "slug": "zod"
  },
  {
    "id": 146,
    "name": "AY-3-8605",
    "slug": "ay-3-8605"
  },
  {
    "id": 156,
    "name": "Thomson MO5",
    "slug": "thomson-mo5"
  },
  {
    "id": 237,
    "name": "Sol-20",
    "slug": "sol-20"
  },
  {
    "id": 147,
    "name": "AY-3-8606",
    "slug": "ay-3-8606"
  },
  {
    "id": 148,
    "name": "AY-3-8607",
    "slug": "ay-3-8607"
  },
  {
    "id": 149,
    "name": "PC-98",
    "slug": "pc-98"
  },
  {
    "id": 135,
    "name": "Hyper Neo Geo 64",
    "slug": "hyper-neo-geo-64"
  },
  {
    "id": 158,
    "name": "Commodore CDTV",
    "slug": "commodore-cdtv"
  },
  {
    "id": 105,
    "name": "HP 3000",
    "slug": "hp3000"
  },
  {
    "id": 88,
    "name": "Odyssey",
    "slug": "odyssey--1"
  },
  {
    "id": 90,
    "name": "Commodore PET",
    "slug": "cpet"
  },
  {
    "id": 35,
    "name": "Sega Game Gear",
    "slug": "gamegear"
  },
  {
    "id": 164,
    "name": "Daydream",
    "slug": "daydream"
  },
  {
    "id": 36,
    "name": "Xbox Live Arcade",
    "slug": "xla"
  },
  {
    "id": 47,
    "name": "Virtual Console (Nintendo)",
    "slug": "vc"
  },
  {
    "id": 115,
    "name": "Apple IIGS",
    "slug": "apple-iigs"
  },
  {
    "id": 124,
    "name": "SwanCrystal",
    "slug": "swancrystal"
  },
  {
    "id": 11,
    "name": "Xbox",
    "slug": "xbox"
  },
  {
    "id": 45,
    "name": "PlayStation Network",
    "slug": "psn"
  },
  {
    "id": 62,
    "name": "Atari Jaguar",
    "slug": "jaguar"
  },
  {
    "id": 60,
    "name": "Atari 7800",
    "slug": "atari7800"
  },
  {
    "id": 53,
    "name": "MSX2",
    "slug": "msx2"
  },
  {
    "id": 65,
    "name": "Atari 8-bit",
    "slug": "atari8bit"
  },
  {
    "id": 87,
    "name": "Virtual Boy",
    "slug": "virtualboy"
  },
  {
    "id": 98,
    "name": "DEC GT40",
    "slug": "gt40"
  },
  {
    "id": 97,
    "name": "PDP-8",
    "slug": "pdp-8--1"
  },
  {
    "id": 127,
    "name": "Fairchild Channel F",
    "slug": "fairchild-channel-f"
  },
  {
    "id": 126,
    "name": "TRS-80",
    "slug": "trs-80"
  },
  {
    "id": 128,
    "name": "PC Engine SuperGrafx",
    "slug": "supergrafx"
  },
  {
    "id": 101,
    "name": "Ferranti Nimrod Computer",
    "slug": "nimrod"
  },
  {
    "id": 150,
    "name": "Turbografx-16/PC Engine CD",
    "slug": "turbografx-16-slash-pc-engine-cd"
  },
  {
    "id": 153,
    "name": "Dragon 32/64",
    "slug": "dragon-32-slash-64"
  },
  {
    "id": 155,
    "name": "Tatung Einstein",
    "slug": "tatung-einstein"
  },
  {
    "id": 50,
    "name": "3DO Interactive Multiplayer",
    "slug": "3do"
  },
  {
    "id": 159,
    "name": "Nintendo DSi",
    "slug": "nintendo-dsi"
  },
  {
    "id": 154,
    "name": "Amstrad PCW",
    "slug": "amstrad-pcw"
  },
  {
    "id": 166,
    "name": "Pokémon mini",
    "slug": "pokemon-mini"
  },
  {
    "id": 108,
    "name": "PDP-11",
    "slug": "pdp11"
  },
  {
    "id": 58,
    "name": "Super Famicom",
    "slug": "sfam"
  },
  {
    "id": 70,
    "name": "Vectrex",
    "slug": "vectrex"
  },
  {
    "id": 119,
    "name": "Neo Geo Pocket",
    "slug": "neo-geo-pocket"
  },
  {
    "id": 130,
    "name": "Nintendo Switch",
    "slug": "switch"
  },
  {
    "id": 132,
    "name": "Amazon Fire TV",
    "slug": "amazon-fire-tv"
  },
  {
    "id": 138,
    "name": "VC 4000",
    "slug": "vc-4000"
  },
  {
    "id": 139,
    "name": "1292 Advanced Programmable Video System",
    "slug": "1292-advanced-programmable-video-system"
  },
  {
    "id": 85,
    "name": "Donner Model 30",
    "slug": "donner30"
  },
  {
    "id": 95,
    "name": "PDP-1",
    "slug": "pdp1"
  },
  {
    "id": 125,
    "name": "PC-8801",
    "slug": "pc-8801"
  },
  {
    "id": 89,
    "name": "Microvision",
    "slug": "microvision--1"
  },
  {
    "id": 112,
    "name": "Microcomputer",
    "slug": "microcomputer--1"
  },
  {
    "id": 13,
    "name": "PC DOS",
    "slug": "dos"
  },
  {
    "id": 23,
    "name": "Dreamcast",
    "slug": "dc"
  },
  {
    "id": 26,
    "name": "ZX Spectrum",
    "slug": "zxs"
  },
  {
    "id": 30,
    "name": "Sega 32X",
    "slug": "sega32"
  },
  {
    "id": 41,
    "name": "Wii U",
    "slug": "wiiu"
  },
  {
    "id": 37,
    "name": "Nintendo 3DS",
    "slug": "3ds"
  },
  {
    "id": 140,
    "name": "AY-3-8500",
    "slug": "ay-3-8500"
  },
  {
    "id": 121,
    "name": "Sharp X68000",
    "slug": "sharp-x68000"
  },
  {
    "id": 100,
    "name": "Analogue electronics",
    "slug": "analogueelectronics"
  },
  {
    "id": 141,
    "name": "AY-3-8610",
    "slug": "ay-3-8610"
  },
  {
    "id": 143,
    "name": "AY-3-8760",
    "slug": "ay-3-8760"
  },
  {
    "id": 167,
    "name": "PlayStation 5",
    "slug": "playstation-5"
  },
  {
    "id": 114,
    "name": "Amiga CD32",
    "slug": "amiga-cd32"
  },
  {
    "id": 4,
    "name": "Nintendo 64",
    "slug": "n64"
  },
  {
    "id": 106,
    "name": "SDS Sigma 7",
    "slug": "sdssigma7"
  },
  {
    "id": 103,
    "name": "PDP-7",
    "slug": "pdp-7--1"
  },
  {
    "id": 109,
    "name": "CDC Cyber 70",
    "slug": "cdccyber70"
  },
  {
    "id": 116,
    "name": "Acorn Archimedes",
    "slug": "acorn-archimedes"
  },
  {
    "id": 151,
    "name": "TRS-80 Color Computer",
    "slug": "trs-80-color-computer"
  },
  {
    "id": 102,
    "name": "EDSAC",
    "slug": "edsac--1"
  },
  {
    "id": 104,
    "name": "HP 2100",
    "slug": "hp2100"
  },
  {
    "id": 18,
    "name": "Nintendo Entertainment System (NES)",
    "slug": "nes"
  },
  {
    "id": 16,
    "name": "Amiga",
    "slug": "amiga"
  },
  {
    "id": 24,
    "name": "Game Boy Advance",
    "slug": "gba"
  },
  {
    "id": 29,
    "name": "Sega Mega Drive/Genesis",
    "slug": "smd"
  },
  {
    "id": 59,
    "name": "Atari 2600",
    "slug": "atari2600"
  },
  {
    "id": 64,
    "name": "Sega Master System",
    "slug": "sms"
  },
  {
    "id": 82,
    "name": "Web browser",
    "slug": "browser"
  },
  {
    "id": 77,
    "name": "Sharp X1",
    "slug": "x1"
  },
  {
    "id": 78,
    "name": "Sega CD",
    "slug": "segacd"
  },
  {
    "id": 113,
    "name": "OnLive Game System",
    "slug": "onlive-game-system"
  },
  {
    "id": 99,
    "name": "Family Computer (FAMICOM)",
    "slug": "famicom"
  },
  {
    "id": 145,
    "name": "AY-3-8603",
    "slug": "ay-3-8603"
  },
  {
    "id": 117,
    "name": "Philips CD-i",
    "slug": "philips-cd-i"
  },
  {
    "id": 120,
    "name": "Neo Geo Pocket Color",
    "slug": "neo-geo-pocket-color"
  },
  {
    "id": 107,
    "name": "Call-A-Computer time-shared mainframe computer system",
    "slug": "call-a-computer"
  },
  {
    "id": 110,
    "name": "PLATO",
    "slug": "plato--1"
  },
  {
    "id": 240,
    "name": "Zeebo",
    "slug": "zeebo"
  },
  {
    "id": 274,
    "name": "PC-FX",
    "slug": "pc-fx"
  },
  {
    "id": 22,
    "name": "Game Boy Color",
    "slug": "gbc"
  },
  {
    "id": 122,
    "name": "Nuon",
    "slug": "nuon"
  },
  {
    "id": 308,
    "name": "Playdia",
    "slug": "playdia"
  },
  {
    "id": 93,
    "name": "Commodore 16",
    "slug": "c16"
  },
  {
    "id": 61,
    "name": "Atari Lynx",
    "slug": "lynx"
  },
  {
    "id": 63,
    "name": "Atari ST/STE",
    "slug": "atari-st"
  },
  {
    "id": 131,
    "name": "Nintendo PlayStation",
    "slug": "nintendo-playstation"
  },
  {
    "id": 111,
    "name": "Imlac PDS-1",
    "slug": "imlac-pds1"
  },
  {
    "id": 309,
    "name": "Evercade",
    "slug": "evercade"
  },
  {
    "id": 307,
    "name": "Game & Watch",
    "slug": "game-and-watch"
  },
  {
    "id": 152,
    "name": "FM-7",
    "slug": "fm-7"
  },
  {
    "id": 20,
    "name": "Nintendo DS",
    "slug": "nds"
  },
  {
    "id": 306,
    "name": "Satellaview",
    "slug": "satellaview"
  },
  {
    "id": 19,
    "name": "Super Nintendo Entertainment System (SNES)",
    "slug": "snes--1"
  },
  {
    "id": 14,
    "name": "Mac",
    "slug": "mac"
  },
  {
    "id": 15,
    "name": "Commodore C64/128",
    "slug": "c64"
  },
  {
    "id": 9,
    "name": "PlayStation 3",
    "slug": "ps3"
  },
  {
    "id": 21,
    "name": "Nintendo GameCube",
    "slug": "ngc"
  },
  {
    "id": 12,
    "name": "Xbox 360",
    "slug": "xbox360"
  },
  {
    "id": 38,
    "name": "PlayStation Portable",
    "slug": "psp"
  },
  {
    "id": 73,
    "name": "BlackBerry OS",
    "slug": "blackberry"
  },
  {
    "id": 86,
    "name": "TurboGrafx-16/PC Engine",
    "slug": "turbografx16--1"
  },
  {
    "id": 157,
    "name": "NEC PC-6000 Series",
    "slug": "nec-pc-6000-series"
  },
  {
    "id": 162,
    "name": "Oculus VR",
    "slug": "oculus-vr"
  },
  {
    "id": 118,
    "name": "FM Towns",
    "slug": "fm-towns"
  },
  {
    "id": 32,
    "name": "Sega Saturn",
    "slug": "saturn"
  },
  {
    "id": 42,
    "name": "N-Gage",
    "slug": "ngage"
  },
  {
    "id": 34,
    "name": "Android",
    "slug": "android"
  },
  {
    "id": 46,
    "name": "PlayStation Vita",
    "slug": "psvita"
  },
  {
    "id": 49,
    "name": "Xbox One",
    "slug": "xboxone"
  },
  {
    "id": 48,
    "name": "PlayStation 4",
    "slug": "ps4--1"
  },
  {
    "id": 67,
    "name": "Intellivision",
    "slug": "intellivision"
  },
  {
    "id": 66,
    "name": "Atari 5200",
    "slug": "atari5200"
  },
  {
    "id": 69,
    "name": "BBC Microcomputer System",
    "slug": "bbcmicro"
  },
  {
    "id": 84,
    "name": "SG-1000",
    "slug": "sg1000"
  },
  {
    "id": 80,
    "name": "Neo Geo AES",
    "slug": "neogeoaes"
  },
  {
    "id": 91,
    "name": "Bally Astrocade",
    "slug": "astrocade"
  },
  {
    "id": 161,
    "name": "Windows Mixed Reality",
    "slug": "windows-mixed-reality"
  },
  {
    "id": 55,
    "name": "Mobile",
    "slug": "mobile"
  },
  {
    "id": 52,
    "name": "Arcade",
    "slug": "arcade"
  },
  {
    "id": 5,
    "name": "Wii",
    "slug": "wii"
  },
  {
    "id": 3,
    "name": "Linux",
    "slug": "linux"
  },
  {
    "id": 7,
    "name": "PlayStation",
    "slug": "ps"
  },
  {
    "id": 137,
    "name": "New Nintendo 3DS",
    "slug": "new-nintendo-3ds"
  },
  {
    "id": 71,
    "name": "Commodore VIC-20",
    "slug": "vic-20"
  },
  {
    "id": 75,
    "name": "Apple II",
    "slug": "appleii"
  },
  {
    "id": 33,
    "name": "Game Boy",
    "slug": "gb"
  },
  {
    "id": 72,
    "name": "Ouya",
    "slug": "ouya"
  },
  {
    "id": 74,
    "name": "Windows Phone",
    "slug": "winphone"
  },
  {
    "id": 79,
    "name": "Neo Geo MVS",
    "slug": "neogeomvs"
  },
  {
    "id": 92,
    "name": "SteamOS",
    "slug": "steam--1"
  },
  {
    "id": 96,
    "name": "PDP-10",
    "slug": "pdp10"
  },
  {
    "id": 57,
    "name": "WonderSwan",
    "slug": "wonderswan"
  },
  {
    "id": 56,
    "name": "WiiWare",
    "slug": "wiiware"
  }
]

export default platformIDs;