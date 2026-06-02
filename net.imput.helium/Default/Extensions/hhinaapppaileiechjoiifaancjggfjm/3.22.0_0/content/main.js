const He = [
  {
    label: "YouTube",
    matches: ["*://www.youtube.com/*", "*://m.youtube.com/*"],
    js: "youtube.js",
    id: "youtube",
    usesBlocklist: !0
  },
  {
    label: "MySpace",
    matches: ["*://myspace.com/*"],
    js: "myspace.js",
    id: "myspace"
  },
  {
    label: "Bandcamp Daily",
    matches: ["*://daily.bandcamp.com/*"],
    js: "bandcamp-daily.js",
    id: "bandcamp-daily"
  },
  {
    label: "Bandcamp Embed",
    matches: ["*://*.bandcamp.com/EmbeddedPlayer/*"],
    js: "bandcamp-embed.js",
    id: "bandcamp-embed",
    allFrames: !0
  },
  {
    label: "Bandcamp",
    matches: ["*://*.bandcamp.com/*", "*://bandcamp.com/*"],
    js: "bandcamp.js",
    id: "bandcamp"
  },
  {
    label: "BNDCMPR",
    matches: ["*://bndcmpr.co/*"],
    js: "bndcmpr.js",
    id: "bndcmpr",
    allFrames: !0
  },
  {
    label: "Buy Music Club",
    matches: ["*://www.buymusic.club/*"],
    js: "buymusicclub.js",
    id: "buymusicclub"
  },
  {
    label: "Pandora",
    matches: ["*://www.pandora.com/*"],
    js: "pandora.js",
    id: "pandora"
  },
  {
    label: "Pakartot",
    matches: ["*://www.pakartot.lt/*"],
    js: "pakartot.js",
    id: "pakartot"
  },
  {
    label: "Deezer",
    matches: ["*://www.deezer.com/*"],
    js: "deezer.js",
    id: "deezer"
  },
  {
    label: "SoundCloud",
    matches: ["*://soundcloud.com/*", "*://m.soundcloud.com/*"],
    js: "soundcloud.js",
    id: "soundcloud"
  },
  {
    label: "Amazon Music",
    matches: [
      "*://music.amazon.*/*",
      "*://www.amazon.*/gp/dmusic/cloudplayer/*"
    ],
    js: "amazon.js",
    id: "amazon"
  },
  {
    label: "Amazon Echo",
    matches: ["*://alexa.amazon.*/spa/*"],
    js: "amazon-alexa.js",
    id: "amazon-alexa"
  },
  {
    label: "Radio Vas3k Club",
    matches: ["https://radio.vas3k.club/*"],
    js: "vas3kradio.js",
    id: "vas3kradio"
  },
  {
    label: "VK",
    matches: ["*://vk.ru/*", "*://vk.com/*"],
    js: "vk.js",
    id: "vk"
  },
  {
    label: "Megalyrics",
    matches: ["*://megalyrics.ru/*"],
    js: "megalyrics.js",
    id: "megalyrics"
  },
  {
    label: "iHeart",
    matches: ["*://*.iheart.com/*"],
    js: "iheart.js",
    id: "iheart"
  },
  {
    label: "Indie Shuffle",
    matches: ["*://www.indieshuffle.com/*"],
    js: "indieshuffle.js",
    id: "indieshuffle"
  },
  {
    label: "Tuba.FM",
    matches: ["*://fm.tuba.pl/*"],
    js: "tubafm.js",
    id: "tubafm"
  },
  {
    label: "Spotify Embed",
    matches: ["*://open.spotify.com/embed/*"],
    js: "spotify-embed.js",
    id: "spotify-embed",
    allFrames: !0
  },
  {
    label: "Spotify",
    matches: ["*://open.spotify.com/*"],
    js: "spotify.js",
    id: "spotify",
    hasNativeScrobbler: !0
  },
  {
    label: "plug.dj",
    matches: ["*://plug.dj/*"],
    js: "plug.dj.js",
    id: "plug.dj"
  },
  {
    label: "Dandelion Radio",
    matches: ["*://www.dandelionradio.com/player.htm"],
    js: "dandelionradio.js",
    id: "dandelionradio"
  },
  {
    label: "HillyDilly",
    matches: ["*://www.hillydilly.com/*"],
    js: "hillydilly.js",
    id: "hillydilly"
  },
  {
    label: "8tracks",
    matches: ["*://8tracks.com/*"],
    js: "8tracks.js",
    id: "8tracks"
  },
  {
    label: "SoGreatandPowerful",
    matches: ["*://sogreatandpowerful.com/*"],
    js: "sogreatandpowerful.js",
    id: "sogreatandpowerful"
  },
  {
    label: "Radio Cidade",
    matches: [
      "*://radiocidade.fm/player/*",
      "*://play.radiomania.com.br/*",
      "*://*.melodia.com.br/*",
      "*://jb.fm/player/*"
    ],
    js: "radiocidade.js",
    id: "radiocidade"
  },
  {
    label: "Radio Nova",
    matches: ["*://www.nova.fr/*"],
    js: "nova.js",
    id: "nova"
  },
  {
    label: "Radioplus",
    matches: ["*://www.radioplus.be/*", "*://radioplus.be/*"],
    js: "radioplus.js",
    id: "radioplus"
  },
  {
    label: "Радио Premium",
    matches: ["*://rpfm.ru/*"],
    js: "rpfm.js",
    id: "rpfm"
  },
  {
    label: "Douban.FM",
    matches: ["*://douban.fm/*", "*://fm.douban.fm/*"],
    js: "douban.fm.js",
    id: "douban.fm"
  },
  {
    label: "Focus@Will",
    matches: ["*://www.focusatwill.com/*"],
    js: "focusatwill.js",
    id: "focusatwill"
  },
  {
    label: "Subphonic (owncloud plugin)",
    matches: ["*://*/*/apps/subphonic/minisub/*"],
    js: "subphonic.js",
    id: "subphonic"
  },
  {
    label: "Nextcloud music",
    matches: ["*://*/apps/music/*"],
    js: "nextcloud-music.js",
    id: "nextcloud-music"
  },
  {
    label: "Digitally Imported",
    matches: ["*://www.di.fm/*"],
    js: "radiotunes.js",
    id: "di"
  },
  {
    label: "BBC Sounds",
    matches: ["*://*.bbc.co.uk/*"],
    js: "bbc-sounds.js",
    id: "bbc-sounds"
  },
  {
    label: "Gaana",
    matches: ["*://gaana.com/*"],
    js: "gaana.js",
    id: "gaana"
  },
  {
    label: "Яндекс.Музыка",
    matches: [
      "*://music.yandex.ru/*",
      "*://music.yandex.by/*",
      "*://music.yandex.kz/*",
      "*://music.yandex.ua/*",
      "*://music.yandex.com/*"
    ],
    js: "yandex-music.js",
    id: "yandex-music"
  },
  {
    label: "Plex",
    matches: [
      "*://*32400/web/*",
      "*://plex.tv/web/*",
      "*://*.plex.tv/web/*",
      "*://*.plex.tv/desktop*"
    ],
    js: "plex.js",
    id: "plex"
  },
  {
    label: "TuneIn",
    matches: ["*://tunein.com/*"],
    js: "tunein.js",
    id: "tunein"
  },
  {
    label: "Mixcloud",
    matches: ["*://*.mixcloud.com/*"],
    js: "mixcloud.js",
    id: "mixcloud"
  },
  {
    label: "ReverbNation",
    matches: ["*://www.reverbnation.com/*"],
    js: "reverbnation.js",
    id: "reverbnation"
  },
  {
    label: "NRK Radio",
    matches: ["*://radio.nrk.no/*"],
    js: "nrk-radio.js",
    id: "nrk-radio"
  },
  {
    label: "Internet Archive",
    matches: ["*://archive.org/details/*"],
    js: "archive.js",
    id: "archive"
  },
  {
    label: "Odnoklassniki",
    matches: ["*://odnoklassniki.ru/*", "*://ok.ru/*"],
    js: "odnoklassniki.js",
    id: "odnoklassniki"
  },
  {
    label: "Overcast",
    matches: ["*://overcast.fm/*"],
    js: "overcast.js",
    id: "overcast"
  },
  {
    label: "Online Radio Box",
    matches: ["*://onlineradiobox.com/*", "*://p.onlineradiobox.com/*"],
    js: "onlineradiobox.js",
    id: "onlineradiobox"
  },
  {
    label: "163 Music",
    matches: ["*://music.163.com/*"],
    js: "163-music.js",
    id: "163-music"
  },
  {
    label: "Ambient Sleeping Pill",
    matches: ["*://ambientsleepingpill.com/"],
    js: "ambientsleepingpill.js",
    id: "ambientsleepingpill"
  },
  {
    label: "a.m. ambient",
    matches: ["*://amambient.com/"],
    js: "ambientsleepingpill.js",
    id: "amambient"
  },
  {
    label: "Tidal",
    matches: ["*://tidal.com/*"],
    js: "tidal.js",
    id: "tidal"
  },
  {
    label: "Hype Machine Featured Albums",
    matches: ["*://hypem.com/album/*"],
    js: "hypem-albums.js",
    id: "hypem-premieres"
  },
  {
    label: "Hype Machine",
    matches: ["*://hypem.com/*"],
    js: "hypem.js",
    id: "hypem"
  },
  {
    label: "Radionomy",
    matches: ["*://www.radionomy.com/*"],
    js: "radionomy.js",
    id: "radionomy"
  },
  {
    label: "J1 Radio",
    matches: [
      "*://www.j1fm.tokyo/player/*",
      "*://www.j1fm.tokyo/michi/player/*"
    ],
    js: "aiircom.js",
    id: "j1-radio"
  },
  {
    label: "JazzAndRain",
    matches: ["*://*.jazzandrain.com/*"],
    js: "jazzandrain.js",
    id: "jazzandrain"
  },
  {
    label: "RelaxingBeats",
    matches: ["*://*.relaxingbeats.com/*"],
    js: "jazzandrain.js",
    id: "relaxingbeats"
  },
  {
    label: "EpicMusicTime",
    matches: ["*://*.epicmusictime.com/*"],
    js: "jazzandrain.js",
    id: "epicmusictime"
  },
  {
    label: "AccuJazz",
    matches: ["*://www.accuradio.com/pop_player/accujazz/*"],
    js: "accujazz.js",
    id: "accujazz"
  },
  {
    label: "AccuRadio",
    matches: ["*://www.accuradio.com/*"],
    js: "accuradio.js",
    id: "accuradio"
  },
  {
    label: "Imusic.am",
    matches: ["*://imusic.am/*"],
    js: "imusic.am.js",
    id: "imusic.am"
  },
  {
    label: "Earbits",
    matches: ["*://www.earbits.com/*"],
    js: "earbits.js",
    id: "earbits"
  },
  {
    label: "Player.fm",
    matches: ["*://player.fm/*"],
    js: "player.fm.js",
    id: "player.fm"
  },
  {
    label: "Sound Test",
    matches: ["*://sndtst.com/*"],
    js: "sndtst.js",
    id: "sndtst"
  },
  {
    label: "RadioTunes",
    matches: ["*://www.radiotunes.com/*"],
    js: "radiotunes.js",
    id: "radiotunes"
  },
  {
    label: "RockRadio",
    matches: ["*://www.rockradio.com/*"],
    js: "radiotunes.js",
    id: "rockradio"
  },
  {
    label: "ClassicalRadio",
    matches: ["*://www.classicalradio.com/*"],
    js: "radiotunes.js",
    id: "classicalradio"
  },
  {
    label: "Audacy",
    matches: ["*://www.audacy.com/*"],
    js: "audacy.js",
    id: "audacy"
  },
  {
    label: "Audius",
    matches: ["*://audius.co/*"],
    js: "audius.js",
    id: "audius"
  },
  {
    label: "GetWorkDoneMusic",
    matches: ["*://*.getworkdonemusic.com/*"],
    js: "getworkdonemusic.js",
    id: "getworkdonemusic"
  },
  {
    label: "Jamendo",
    matches: ["*://www.jamendo.com/*"],
    js: "jamendo.js",
    id: "jamendo"
  },
  {
    label: "Bandzone.cz",
    matches: ["*://bandzone.cz/*"],
    js: "bandzone.cz.js",
    id: "bandzone.cz"
  },
  {
    label: "Music Player for Google Drive",
    matches: ["*://www.driveplayer.com/*"],
    js: "driveplayer.js",
    id: "driveplayer"
  },
  {
    label: "Kodi",
    js: "kodi.js",
    id: "kodi"
  },
  {
    label: "Superplayer",
    matches: ["*://www.superplayer.fm/*"],
    js: "superplayer.js",
    id: "superplayer"
  },
  {
    label: "RMFON",
    matches: ["*://www.rmfon.pl/*"],
    js: "rmfon.js",
    id: "rmfon"
  },
  {
    label: "Radio 357",
    matches: ["*://radio357.pl/*"],
    js: "radio357.js",
    id: "radio357"
  },
  {
    label: "JazzRadio",
    matches: ["*://www.jazzradio.com/*"],
    js: "radiotunes.js",
    id: "jazzradio"
  },
  {
    label: "Zen Radio",
    matches: ["*://www.zenradio.com/*"],
    js: "radiotunes.js",
    id: "zenradio"
  },
  {
    label: "SomaFM",
    matches: ["*://somafm.com/player/*", "*://somafm.com/player24/*"],
    js: "somafm.js",
    id: "somafm"
  },
  {
    label: "Free Music Archive",
    matches: ["*://*.freemusicarchive.org/*"],
    js: "freemusicarchive.js",
    id: "freemusicarchive"
  },
  {
    label: "Reddit Music Player",
    matches: ["*://musicplayer.io/"],
    js: "redditmusicplayer.js",
    id: "redditmusicplayer"
  },
  {
    label: "Новое Радио",
    matches: ["*://www.novoeradio.by/*"],
    js: "novoeradio.js",
    id: "novoeradio"
  },
  {
    label: "Radio Paradise",
    matches: ["*://radioparadise.com/*"],
    js: "radioparadise.js",
    id: "radioparadise",
    allFrames: !0
  },
  {
    label: "Beatport",
    matches: ["*://www.beatport.com/*"],
    js: "beatport.js",
    id: "beatport"
  },
  {
    label: "Beeline Music",
    matches: ["*://music.beeline.ru/*"],
    js: "beeline-music.js",
    id: "beeline-music"
  },
  {
    label: "wavo",
    matches: ["*://wavo.me/*"],
    js: "wavo.js",
    id: "wavo"
  },
  {
    label: "FluxFM Berlin",
    matches: ["*://www.fluxfm.de/*"],
    js: "fluxfm.js",
    id: "fluxfm"
  },
  {
    label: "Noise FM",
    matches: ["*://noisefm.ru/*", "*://en.noisefm.ru/*"],
    js: "noisefm.js",
    id: "noisefm",
    allFrames: !0
  },
  {
    label: "WWOZ",
    matches: ["*://www.wwoz.org/listen/player/*"],
    js: "wwoz.js",
    id: "wwoz"
  },
  {
    label: "Sonerezh",
    matches: ["*://sonerezh.*/*", "*://*/*sonerezh*"],
    js: "sonerezh.js",
    id: "sonerezh"
  },
  {
    label: "Youradio",
    matches: ["*://www.youradio.cz/*"],
    js: "youradio.js",
    id: "youradio"
  },
  {
    label: "GPMusic",
    matches: ["*://player.gpmusic.co/*"],
    js: "gpmusic.js",
    id: "gpmusic"
  },
  {
    label: "Nightwave Plaza",
    matches: ["*://plaza.one/*"],
    js: "plaza.js",
    id: "plaza"
  },
  {
    label: "Retrowave",
    matches: ["*://retrowave.ru/*"],
    js: "retrowave.js",
    id: "retrowave"
  },
  {
    label: "Genie",
    matches: ["*://www.genie.co.kr/player/fPlayer*"],
    js: "genie.js",
    id: "genie"
  },
  {
    label: "Bugs",
    matches: ["*://music.bugs.co.kr/newPlayer*"],
    js: "bugs.js",
    id: "bugs"
  },
  {
    label: "openfm",
    matches: ["*://open.fm/*"],
    js: "openfm.js",
    id: "openfm"
  },
  {
    label: "Playmoss",
    matches: ["*://playmoss.com/*"],
    js: "playmoss.js",
    id: "playmoss"
  },
  {
    label: "Apidog",
    matches: ["*://apidog.ru/*"],
    js: "apidog.js",
    id: "apidog"
  },
  {
    label: "Pinguin Radio",
    matches: ["*://pinguinradio.com/*"],
    js: "pinguinradio.js",
    id: "pinguinradio"
  },
  {
    label: "JioSaavn",
    matches: ["*://www.jiosaavn.com/*"],
    js: "jiosaavn.js",
    id: "jiosaavn"
  },
  {
    label: "Anghami",
    matches: ["*://*.anghami.com/*"],
    js: "anghami.js",
    id: "anghami"
  },
  {
    label: "Mail.ru Music",
    matches: ["*://my.mail.ru/music", "*://my.mail.ru/music/*"],
    js: "mail.ru.js",
    id: "mail.ru"
  },
  {
    label: "Emby/Jellyfin",
    matches: ["*://*8096/web/*", "*://*8920/web/*", "*://app.emby.media/*"],
    js: "emby.js",
    id: "emby"
  },
  {
    label: "Freegal Music",
    matches: ["*://*.freegalmusic.com/*"],
    js: "freegalmusic.js",
    id: "freegalmusic"
  },
  {
    label: "hoopla",
    matches: ["*://www.hoopladigital.com/*"],
    js: "hoopladigital.js",
    id: "hoopladigital"
  },
  {
    label: "Amplify 817",
    matches: ["*://amplify817.org/*"],
    js: "musicat.js",
    id: "amplify817"
  },
  {
    label: "Capital City Records",
    matches: ["*://capitalcityrecords.ca/*"],
    js: "musicat.js",
    id: "capitalcityrecords"
  },
  {
    label: "Electric Lady Bird",
    matches: ["*://atxlibrary.musicat.co/*"],
    js: "musicat.js",
    id: "musicat-atxlibrary"
  },
  {
    label: "FlipSide",
    matches: ["*://flipside.apl.org/*"],
    js: "musicat.js",
    id: "apl-flipside"
  },
  {
    label: "HUM (Hear Utah Music)",
    matches: ["*://hum.slcpl.org/*"],
    js: "musicat.js",
    id: "slcpl-hum"
  },
  {
    label: "KDL Vibes",
    matches: ["*://vibes.kdl.org/*"],
    js: "musicat.js",
    id: "kdl-vibes"
  },
  {
    label: "Library Music Project",
    matches: ["*://librarymusicproject.com/*"],
    js: "musicat.js",
    id: "librarymusicproject"
  },
  {
    label: "MNspin",
    matches: ["*://hclib.musicat.co/*"],
    js: "musicat.js",
    id: "musicat-hclib"
  },
  {
    label: "Nashville BoomBox",
    matches: ["*://boombox.nashvillepubliclibrary.org/*"],
    js: "musicat.js",
    id: "nashville-library-boombox"
  },
  {
    label: "QC Beats",
    matches: ["*://qcbeats.org/*"],
    js: "musicat.js",
    id: "qcbeats"
  },
  {
    label: "Q-Dance",
    matches: ["*://www.q-dance.com/*"],
    js: "q-dance.js",
    id: "q-dance"
  },
  {
    label: "Sawdust City Sounds",
    matches: ["*://sawdustcitysounds.org/*"],
    js: "musicat.js",
    id: "sawdustcitysounds"
  },
  {
    label: "Seattle PlayBack",
    matches: ["*://playback.spl.org/*"],
    js: "musicat.js",
    id: "spl-playback"
  },
  {
    label: "STACKS",
    matches: ["*://stacks.carnegielibrary.org/*"],
    js: "musicat.js",
    id: "carnegielibrary-stacks"
  },
  {
    label: "Tracks Music Library",
    matches: ["*://tracksmusiclibrary.org/*"],
    js: "musicat.js",
    id: "tracksmusiclibrary"
  },
  {
    label: "Bay Beats",
    matches: ["*://baybeats.sfpl.org/*"],
    js: "musicat.js",
    id: "baybeats"
  },
  {
    label: "Monstercat",
    matches: ["*://www.monstercat.com/*", "*://player.monstercat.com/*"],
    js: "monstercat.js",
    id: "monstercat"
  },
  {
    label: "Listen.moe",
    matches: ["*://listen.moe/*"],
    js: "listen.moe.js",
    id: "listen.moe"
  },
  {
    label: "anime(bits)",
    matches: [
      "*://radio.animebits.moe/",
      "*://radio.animebits.moe/player/*"
    ],
    js: "animebits.js",
    id: "animebits"
  },
  {
    label: "Fair Price Music",
    matches: ["*://www.fairpricemusic.com/*"],
    js: "fairpricemusic.js",
    id: "fairpricemusic"
  },
  {
    label: "Radio ULTRA",
    matches: ["*://player.radioultra.ru/*"],
    js: "radioultra.js",
    id: "radioultra"
  },
  {
    label: "Наше Радио",
    matches: ["*://player.nashe.ru/*"],
    js: "radioultra.js",
    id: "nashe"
  },
  {
    label: "RockFM",
    matches: ["*://player.rockfm.ru/*"],
    js: "radioultra.js",
    id: "rockfm"
  },
  {
    label: "Radio JAZZ",
    matches: ["*://player.radiojazzfm.ru/*"],
    js: "radioultra.js",
    id: "radiojazzfm"
  },
  {
    label: "WO Streaming",
    matches: ["*://*player.wostreaming.net/*"],
    js: "wostreaming.js",
    id: "wostreaming"
  },
  {
    label: "Listen Live",
    matches: ["*://player.listenlive.co/*"],
    js: "listenlive.js",
    id: "listenlive"
  },
  {
    label: "Rayo",
    matches: [
      "*://hellorayo.co.uk/*/play/*",
      "*://hellorayo.co.uk/*/player/*"
    ],
    js: "planetradio.js",
    id: "planetradio"
  },
  {
    label: "Roxx Radio",
    matches: ["*://roxx.gr/radio/*"],
    js: "roxx.js",
    id: "roxx"
  },
  {
    label: "ListenOnRepeat",
    matches: ["*://listenonrepeat.com/*"],
    js: "listenonrepeat.js",
    id: "listenonrepeat"
  },
  {
    label: "Duckburg Radio",
    matches: ["*://*.radio-mb.com/*"],
    js: "radio-mb.js",
    id: "radio-mb"
  },
  {
    label: "Webradio.de",
    matches: ["*://www.webradio.de/*"],
    js: "radioplayer.js",
    id: "webradio.de"
  },
  {
    label: "The Breeze",
    matches: ["*://www.thebreeze.com/*/radioplayer/*"],
    js: "radioplayer.js",
    id: "thebreeze"
  },
  {
    label: "RadioPlayer",
    matches: [
      "*://ukradioplayer.*/*",
      "*://radioplayer.*/*",
      // Generic patterns
      "*://*/radioplayer/*",
      "*://*/radio/player/",
      "*://*/*/radio/player/"
    ],
    js: "radioplayer.js",
    id: "radioplayer"
  },
  {
    label: "deltaradio",
    matches: ["*://www.deltaradio.de/*"],
    js: "deltaradio.de.js",
    id: "deltaradio.de"
  },
  {
    label: "Radio Bob",
    matches: ["*://*.radiobob.de/*"],
    js: "radiobob.js",
    id: "radiobob"
  },
  {
    label: "ByteFM",
    matches: ["*://www.byte.fm/*"],
    js: "byte.fm.js",
    id: "byte.fm"
  },
  {
    label: "Deutschlandfunk Nova",
    matches: ["*://www.deutschlandfunknova.de/*"],
    js: "deutschlandfunknova.js",
    id: "deutschlandfunknova"
  },
  {
    label: "QQ Music",
    matches: ["*://y.qq.com/*"],
    js: "qq-music.js",
    id: "qq-music"
  },
  {
    label: "QQ Video",
    matches: ["*://v.qq.com/x/*"],
    js: "qq-video.js",
    id: "qq-video"
  },
  {
    label: "Naver",
    matches: ["*://playerui.music.naver.com/*"],
    js: "naver.js",
    id: "naver"
  },
  {
    label: "Naver Vibe",
    matches: ["*://vibe.naver.com/*"],
    js: "naver-vibe.js",
    id: "naver-vibe"
  },
  {
    label: "Soribada",
    matches: ["*://www.soribada.com/*"],
    js: "soribada.js",
    id: "soribada"
  },
  {
    label: "Flo",
    matches: ["*://www.music-flo.com/*"],
    js: "music-flo.js",
    id: "music-flo"
  },
  {
    label: "Discogs",
    matches: ["*://www.discogs.com/*"],
    js: "youtube-embed.js",
    id: "youtube-embed",
    allFrames: !0
  },
  {
    label: "NPR",
    matches: ["*://www.npr.org/*"],
    js: "npr.js",
    id: "npr"
  },
  {
    label: "Streamsquid",
    matches: ["*://streamsquid.com/*"],
    js: "streamsquid.js",
    id: "streamsquid"
  },
  {
    label: "Streemlion",
    matches: ["*://listen.streemlion.com/*"],
    js: "streemlion.js",
    id: "streemlion"
  },
  {
    label: "eMusic",
    matches: ["*://www.emusic.com/*"],
    js: "emusic.js",
    id: "emusic"
  },
  {
    label: "LyricsTraining",
    matches: ["*://lyricstraining.com/*"],
    js: "lyricstraining.js",
    id: "lyricstraining"
  },
  {
    label: "Music Walker",
    matches: ["*://arkanath.com/MusicWalker/*"],
    js: "musicwalker.js",
    id: "musicwalker"
  },
  {
    label: "radioeins",
    matches: ["*://www.radioeins.de/livestream/*"],
    js: "radioeins.js",
    id: "radioeins"
  },
  {
    label: "Fritz",
    matches: ["*://www.fritz.de/livestream/*"],
    js: "fritz.js",
    id: "fritz"
  },
  {
    label: "Musicoin",
    matches: ["*://musicoin.org/*"],
    js: "musicoin.js",
    id: "musicoin"
  },
  {
    label: "181.fm",
    matches: ["*://player.181fm.com/*"],
    js: "181.fm.js",
    id: "181.fm"
  },
  {
    label: "Phish.in",
    matches: ["*://phish.in/*"],
    js: "phish.in.js",
    id: "phish.in"
  },
  {
    label: "Rainwave",
    matches: [
      "*://rainwave.cc/*",
      "*://all.rainwave.cc/*",
      "*://game.rainwave.cc/*",
      "*://chiptune.rainwave.cc/*",
      "*://ocr.rainwave.cc/*",
      "*://covers.rainwave.cc/*"
    ],
    js: "rainwave.js",
    id: "rainwave"
  },
  {
    label: "Retro Synthwave",
    matches: ["*://www.retro-synthwave.com/*"],
    js: "retro-synthwave.js",
    id: "retro-synthwave"
  },
  {
    label: "Радиоволна.нет",
    matches: ["*://radiovolna.net/*"],
    js: "radiovolna.js",
    id: "radiovolna"
  },
  {
    label: "Feedbands",
    matches: ["*://feedbands.com/*"],
    js: "feedbands.js",
    id: "feedbands"
  },
  {
    label: "Taazi",
    matches: ["*://taazi.com/*"],
    js: "taazi.js",
    id: "taazi"
  },
  {
    label: "Patari",
    matches: ["*://patari.pk/*"],
    js: "patari.js",
    id: "patari"
  },
  {
    label: "pCloud",
    matches: ["*://my.pcloud.com/*"],
    js: "pcloud.js",
    id: "pcloud"
  },
  {
    label: "JetSetRadio Live",
    matches: ["*://jetsetradio.live/*"],
    js: "jetsetradio.live.js",
    id: "jetsetradio.live"
  },
  {
    label: "Radio France",
    matches: ["*://www.radiofrance.fr/*"],
    js: "radiofrance.js",
    id: "radiofrance"
  },
  {
    label: "RemixRotation",
    matches: ["*://remixrotation.com/*"],
    js: "remixrotation.js",
    id: "remixrotation"
  },
  {
    label: "WFMU",
    matches: ["*://wfmu.org/*", "*://freeform.wfmu.org/*"],
    js: "wfmu.js",
    id: "wfmu"
  },
  {
    label: "SiriusXM",
    matches: [
      "*://www.siriusxm.com/*",
      "*://www.siriusxm.ca/*",
      "*://*.siriusxm.com/player/*"
    ],
    js: "siriusxm-player.js",
    id: "siriusxm-player"
  },
  {
    label: "1ting",
    matches: [
      "*://www.1ting.com/player/*",
      "*://www.1ting.com/p_*",
      "*://www.1ting.com/album*",
      "*://www.1ting.com/rand.php*",
      "*://www.1ting.com/day/*",
      "*://h5.1ting.com/*"
    ],
    js: "1ting.js",
    id: "1ting"
  },
  {
    label: "Douban Artists",
    matches: ["*://music.douban.com/artists/player/*"],
    js: "douban-artists.js",
    id: "douban-artists"
  },
  {
    label: "Kugou",
    matches: ["*://www.kugou.com/song/*"],
    js: "kugou.js",
    id: "kugou"
  },
  {
    label: "Gimme Radio",
    matches: [
      "*://gimmeradio.com/*",
      "*://www.gimmeradio.com/*",
      "*://gimmecountry.com/*",
      "*://www.gimmecountry.com/*",
      "*://gimmemetal.com/*",
      "*://www.gimmemetal.com/*"
    ],
    js: "gimmeradio.js",
    id: "gimmeradio"
  },
  {
    label: "9sky",
    matches: ["*://www.9sky.com/music*", "*://www.9sky.com/mv/detail*"],
    js: "9sky.js",
    id: "9sky"
  },
  {
    label: "Vagalume.FM",
    matches: ["*://vagalume.fm/*", "*://*.vagalume.com.br/*"],
    js: "vagalume.js",
    id: "vagalume"
  },
  {
    label: "Radiooooo",
    matches: ["*://app.radiooooo.com/*", "*://mobile.radiooooo.com/*"],
    js: "radiooooo.js",
    id: "radiooooo"
  },
  {
    label: "LetsLoop",
    matches: ["*://letsloop.com/*"],
    js: "letsloop.js",
    id: "letsloop"
  },
  {
    label: "Mideast Tunes",
    matches: ["*://mideastunes.com/*", "*://map.mideastunes.com/*"],
    js: "mideastunes.js",
    id: "mideastunes"
  },
  {
    label: "mujRozhlas",
    matches: ["*://www.mujrozhlas.cz/*"],
    js: "mujrozhlas.js",
    id: "rozhlas"
  },
  {
    label: "blocSonic",
    matches: ["*://*.blocsonic.com/*"],
    js: "blocsonic.js",
    id: "blocsonic"
  },
  {
    label: "Resonate",
    matches: ["*://stream.resonate.coop/*"],
    js: "resonate.js",
    id: "resonate"
  },
  {
    label: "KEXP",
    matches: ["*://*.kexp.org/*"],
    js: "kexp.js",
    id: "kexp"
  },
  {
    label: "Hotmixradio.fr",
    matches: ["*://www.hotmixradio.fr/*"],
    js: "hotmixradio.js",
    id: "hotmixradio"
  },
  {
    label: "Aphex Twin",
    matches: ["*://aphextwin.warp.net/*"],
    js: "warp-aphextwin.js",
    id: "warp-aphextwin"
  },
  {
    label: "Zachary Seguin Music",
    matches: ["*://music.zacharyseguin.ca/*"],
    js: "musickit.js",
    id: "zacharyseguin"
  },
  {
    label: "Joox",
    matches: ["*://www.joox.com/*"],
    js: "joox.js",
    id: "joox"
  },
  {
    label: "Musish",
    matches: ["*://musi.sh/*"],
    js: "musickit.js",
    id: "musish"
  },
  {
    label: "1001tracklists",
    matches: ["*://www.1001tracklists.com/tracklist/*"],
    js: "1001tracklists.js",
    id: "1001tracklists"
  },
  {
    label: "YouTube Music",
    matches: ["*://music.youtube.com/*"],
    js: "youtube-music.js",
    id: "youtube-music"
  },
  {
    label: "Radiozenders.FM",
    matches: ["*://www.radiozenders.fm/*"],
    js: "radiozenders.js",
    id: "radiozenders"
  },
  {
    label: "Invidious",
    matches: ["*://*.invidio.us/*"],
    js: "invidious.js",
    id: "invidious"
  },
  {
    label: "Piped",
    matches: ["*://piped.video/*"],
    js: "piped.js",
    id: "piped"
  },
  {
    label: "Pretzel",
    matches: ["*://*.pretzel.rocks/*"],
    js: "pretzel.js",
    id: "pretzel"
  },
  {
    label: "Primordial Radio",
    matches: ["*://primordialradio.com/*"],
    js: "primordialradio.js",
    id: "primordialradio"
  },
  {
    label: "Radio Kyivstar",
    matches: ["*://radio.kyivstar.ua/*"],
    js: "kyivstar.js",
    id: "kyivstar"
  },
  {
    label: "Funkwhale",
    js: "funkwhale.js",
    id: "funkwhale"
  },
  {
    label: "9128.live",
    matches: ["*://9128.live/*", "*://embed.radio.co/player/*"],
    js: "radioco.js",
    id: "9128.live",
    allFrames: !0
  },
  {
    label: "Radio.co",
    matches: ["*://embed.radio.co/player/*"],
    js: "radioco.js",
    id: "radioco"
  },
  {
    label: "Super45.fm",
    matches: ["*://super45.fm/"],
    js: "radioco.js",
    id: "super45fm",
    allFrames: !0
  },
  {
    label: "R/a/dio",
    matches: ["*://r-a-d.io/*"],
    js: "r-a-d.io.js",
    id: "r-a-d.io"
  },
  {
    label: "Apple Music",
    matches: ["*://*music.apple.com/*"],
    js: "musickit.js",
    id: "apple-music"
  },
  {
    label: "Primephonic",
    matches: ["*://play.primephonic.com/*"],
    js: "primephonic.js",
    id: "primephonic"
  },
  {
    label: "Watch2Gether",
    matches: ["*://w2g.tv/*"],
    js: "watch2gether.js",
    id: "watch2gether"
  },
  {
    label: "Poolsuite",
    matches: ["*://poolsuite.net/*"],
    js: "poolsuite.js",
    id: "poolsuite"
  },
  {
    label: "GDS.FM",
    matches: ["*://www.gds.fm/*", "*://gds.fm/*"],
    js: "gds.fm.js",
    id: "gds"
  },
  {
    label: "Wynk Music",
    matches: ["*://wynk.in/music*"],
    js: "wynk.js",
    id: "wynk"
  },
  {
    label: "RadioJavan",
    matches: ["*://play.radiojavan.com/*"],
    js: "radiojavan.js",
    id: "radiojavan"
  },
  {
    label: "Audiomack",
    matches: ["*://audiomack.com/*"],
    js: "audiomack.js",
    id: "audiomack"
  },
  {
    label: "Global Player",
    matches: ["*://www.globalplayer.com/*"],
    js: "globalplayer.js",
    id: "globalplayer"
  },
  {
    label: "The Current",
    matches: ["*://www.thecurrent.org/*"],
    js: "thecurrent.js",
    id: "thecurrent"
  },
  {
    label: "pan y rosas discos",
    matches: ["*://www.panyrosasdiscos.net/*"],
    js: "panyrosasdiscos.js",
    id: "panyrosasdiscos"
  },
  {
    label: "GRRIF",
    matches: ["*://*.grrif.ch/*"],
    js: "grrif.js",
    id: "grrif"
  },
  {
    label: "newgrounds",
    matches: ["*://www.newgrounds.com/audio*"],
    js: "newgrounds.js",
    id: "newgrounds"
  },
  {
    label: "Jango",
    matches: ["*://www.jango.com/*"],
    js: "jango.js",
    id: "jango"
  },
  {
    label: "PlayIrish",
    matches: ["*://*.playirish.ie/*"],
    js: "playirish.js",
    id: "playirish"
  },
  {
    label: "Radio Record",
    matches: ["*://www.radiorecord.ru/*"],
    js: "radiorecord.js",
    id: "radiorecord"
  },
  {
    label: "Imago Radio",
    matches: ["*://*.imago.fm/*"],
    js: "imago.js",
    id: "imago"
  },
  {
    label: "Provoda.ch",
    matches: ["*://*.provoda.ch/*"],
    js: "provoda.ch.js",
    id: "provoda.ch"
  },
  {
    label: "Atomic Music Space",
    matches: ["*://stream.atomicmusic.space/*"],
    js: "atomicmusic.space.js",
    id: "atomicmusic.space"
  },
  {
    label: "The-radio.ru",
    matches: ["*://the-radio.ru/*"],
    js: "the-radio.ru.js",
    id: "the-radio.ru"
  },
  {
    label: "HQ Radio",
    matches: ["*://hqradio.ru/*"],
    js: "hqradio.js",
    id: "hqradio"
  },
  {
    label: "Smooth FM",
    matches: ["*://smoothfm.iol.pt/*"],
    js: "smoothfm.js",
    id: "smoothfm"
  },
  {
    label: "Vodafone.fm",
    matches: ["*://vodafone.fm/*"],
    js: "vodafone.fm.js",
    id: "vodafonefm"
  },
  {
    label: "Relisten.net",
    matches: ["*://relisten.net/*"],
    js: "relisten.js",
    id: "relisten"
  },
  {
    label: "UpBeatRadio",
    matches: ["*://upbeatradio.net/*"],
    js: "upbeatradio.js",
    id: "upbeatradio"
  },
  {
    label: "Chillhop",
    matches: ["*://chillhop.com/*"],
    js: "chillhop.js",
    id: "chillhop"
  },
  {
    label: "Chillhop Radio",
    matches: ["*://app.chillhop.com/*"],
    js: "chillhop-radio.js",
    id: "chillhop-radio"
  },
  {
    label: "DatPiff",
    matches: ["*://www.datpiff.com/player/*"],
    js: "datpiff.js",
    id: "datpiff",
    allFrames: !0
  },
  {
    label: "Shuffle",
    matches: ["*://shuffle.one/play*"],
    js: "shuffleone.js",
    id: "shuffleone"
  },
  {
    label: "JB FM",
    matches: ["*://jb.fm/player/*"],
    js: "jb.fm.js",
    id: "jbfm"
  },
  {
    label: "SECTOR Radio",
    matches: ["*://sectorradio.ru/*"],
    js: "sectorradio.js",
    id: "sectorradio"
  },
  {
    label: "LiveOne",
    matches: ["*://*.liveone.com/*"],
    js: "liveone.js",
    id: "liveone"
  },
  {
    label: "PocketCasts",
    matches: ["*://play.pocketcasts.com/*"],
    js: "pocketcasts.js",
    id: "pocketcasts"
  },
  {
    label: "Clyp",
    matches: ["*://clyp.it/*"],
    js: "clyp.js",
    id: "clyp"
  },
  {
    label: "RTBF Radio",
    matches: ["*://www.rtbf.be/radio/*"],
    js: "rtbf.js",
    id: "rtbf"
  },
  {
    label: "TuneTrack",
    matches: ["*://tunetrack.net/*"],
    js: "tunetrack.js",
    id: "tunetrack"
  },
  {
    label: "Musify",
    matches: ["*://*.musify.club/*"],
    js: "musify.js",
    id: "musify"
  },
  {
    label: "Radio Rethink",
    matches: ["*://www.radiorethink.com/*"],
    js: "radiorethink.js",
    id: "radiorethink"
  },
  {
    label: "SoundClick",
    matches: ["*://www.soundclick.com/*"],
    js: "soundclick.js",
    id: "soundclick"
  },
  {
    label: "Napster",
    matches: ["*://app.napster.com/*"],
    js: "napster.js",
    id: "napster"
  },
  {
    label: "abc.net.au",
    matches: ["*://www.abc.net.au/*/*live*/*"],
    js: "abc.net.au.js",
    id: "abcnetau"
  },
  {
    label: "JQBX",
    matches: ["*://app.jqbx.fm/*"],
    js: "jqbx.js",
    id: "jqbx"
  },
  {
    label: "music.jsososo.com",
    matches: ["*://y.jsososo.com/*", "*://music.jsososo.com/*"],
    js: "jsososo.js",
    id: "jsososo"
  },
  {
    label: "Supla",
    matches: ["*://*.supla.fi/*"],
    js: "supla.js",
    id: "supla"
  },
  {
    label: "swr3",
    matches: ["*://www.swr3.de/*", "*://www.swr.de/*"],
    js: "swr3.js",
    id: "swr3"
  },
  {
    label: "Epidemic Sound",
    matches: ["*://*.epidemicsound.com/*"],
    js: "epidemicsound.js",
    id: "epidemicsound"
  },
  {
    label: "Rekt Network",
    matches: ["*://rekt.network/*"],
    js: "rekt.network.js",
    id: "rektnetwork"
  },
  {
    label: "Nightride FM",
    matches: ["*://nightride.fm/*"],
    js: "nightride.fm.js",
    id: "nightridefm"
  },
  {
    label: "Qobuz",
    matches: ["*://*.qobuz.com/*"],
    js: "qobuz.js",
    id: "qobuz"
  },
  {
    label: "TruckersFM",
    matches: ["*://*.truckers.fm/*"],
    js: "truckersfm.js",
    id: "truckersfm"
  },
  {
    id: "winampify",
    label: "Winampify",
    js: "winampify.js",
    matches: ["*://winampify.io/*"]
  },
  {
    label: "detektor.fm",
    matches: ["*://detektor.fm/*"],
    js: "detektorfm.js",
    id: "detektorfm"
  },
  {
    label: "iBroadcast",
    matches: ["*://media.ibroadcast.com/*"],
    js: "ibroadcast.js",
    id: "ibroadcast"
  },
  {
    label: "Radio7",
    matches: ["*://radio7.lv/*"],
    js: "radio7.js",
    id: "radio7lv"
  },
  {
    label: "Radio Nemiers",
    matches: ["*://radionemiers.com/*"],
    js: "radionemiers.js",
    id: "radionemiers"
  },
  {
    label: "TOWER RECORDS MUSIC",
    matches: ["*://music.tower.jp/*"],
    js: "towerrecordsmusic.js",
    id: "towerrecordsmusic"
  },
  {
    label: "Eggs",
    matches: ["*://eggs.mu/*"],
    js: "eggs.js",
    id: "eggs"
  },
  {
    label: "Jamstash",
    matches: ["*://jamstash.com/*"],
    js: "jamstash.js",
    id: "jamstash"
  },
  {
    label: "SubFire",
    matches: ["*://p.subfireplayer.net/*"],
    js: "subfire.js",
    id: "subfire"
  },
  {
    label: "Idagio",
    matches: ["*://app.idagio.com/*"],
    js: "idagio.js",
    id: "idagio"
  },
  {
    label: "Relax FM",
    matches: ["*://relax-fm.ru/*"],
    js: "relaxfm.js",
    id: "relaxfm"
  },
  {
    label: "Laut.fm",
    matches: ["*://laut.fm/*"],
    js: "laut.fm.js",
    id: "laut.fm"
  },
  {
    label: "Magnatune",
    matches: ["*://magnatune.com/*"],
    js: "magnatune.js",
    id: "magnatune"
  },
  {
    label: "Libre.fm",
    matches: ["*://libre.fm/*"],
    js: "librefm.js",
    id: "librefm"
  },
  {
    label: "Brain.fm",
    matches: ["*://my.brain.fm/*"],
    js: "brainfm.js",
    id: "brainfm"
  },
  {
    label: "bullofheaven.com",
    matches: ["*://bullofheaven.com/*"],
    js: "bullofheaven.com.js",
    id: "bullofheavencom"
  },
  {
    label: "All Classical Portland",
    matches: ["*://player.allclassical.org/*"],
    js: "allclassical.org.js",
    id: "allclassicalportland"
  },
  {
    label: "Migu Music",
    matches: ["*://music.migu.cn/*"],
    js: "migu-music.js",
    id: "migu-music"
  },
  {
    label: "Weibo",
    matches: ["*://weibo.com/*", "*://*.weibo.com/*"],
    js: "weibo.js",
    id: "weibo"
  },
  {
    label: "Street Voice",
    matches: ["*://streetvoice.cn/*", "*://streetvoice.com/*"],
    js: "streetvoice.js",
    id: "streetvoice"
  },
  {
    label: "Red Bull",
    matches: ["*://www.redbull.com/*"],
    js: "redbull.js",
    id: "redbull"
  },
  {
    label: "Synology",
    matches: [
      "*://*5000/*",
      "*://*5001/*",
      "*://*/?launchApp=SYNO.SDS.AudioStation.Application*"
    ],
    js: "synology.js",
    id: "synology"
  },
  {
    label: "Ragya",
    matches: ["*://www.ragya.com/*"],
    js: "ragya.js",
    id: "ragya"
  },
  {
    label: "CodeRadio",
    matches: ["*://coderadio.freecodecamp.org/*"],
    js: "coderadio.js",
    id: "coderadio"
  },
  {
    label: "LITT Live",
    matches: ["*://littlive.com/*"],
    js: "littlive.js",
    id: "dashradio"
  },
  {
    label: "Niconico",
    matches: ["*://www.nicovideo.jp/*"],
    js: "nicovideo.js",
    id: "nicovideo"
  },
  {
    label: "Звук",
    matches: ["*://zvuk.com/*"],
    js: "zvuk.js",
    id: "zvuk"
  },
  {
    label: "Navidrome",
    js: "navidrome.js",
    id: "navidrome"
  },
  {
    label: "LMS",
    js: "lms.js",
    id: "lms"
  },
  {
    label: "deep-cut.fm",
    matches: [
      "*://deepcut.fm/*",
      "*://turntable.fm/*",
      "*://deep-cut.fm/*",
      "*://deepcuts.fm/*"
    ],
    js: "deep-cut.fm.js",
    id: "deepcut.fm"
  },
  {
    label: "Burntable",
    matches: ["*://*.burntable.com/*"],
    js: "burntable.js",
    id: "burntable"
  },
  {
    label: "Stingray Music",
    matches: ["*://*.stingray.com/*"],
    js: "stingray.js",
    id: "stingray"
  },
  {
    label: "CBC Music",
    matches: ["*://www.cbc.ca/listen/cbc-music-playlists*"],
    js: "cbcmusic.js",
    id: "cbcmusic"
  },
  {
    label: "Indie88",
    matches: [
      "*://indie88.com/lean-stream-player/*",
      "*://cob.leanplayer.com/CINDFM*"
    ],
    js: "indie88.js",
    id: "indie88"
  },
  {
    label: "Playlist Randomizer",
    matches: [
      "*://www.playlist-randomizer.com/*",
      "*://playlist-randomizer.com/*"
    ],
    js: "playlist-randomizer.js",
    id: "playlist-randomizer"
  },
  {
    label: "QueUp",
    matches: ["*://www.queup.net/*"],
    js: "queup.js",
    id: "queup"
  },
  {
    label: "Live 365",
    matches: ["*://*.live365.com/*"],
    js: "live365.js",
    id: "live365"
  },
  {
    label: "Lounge.fm",
    matches: ["*://www.lounge.fm/*"],
    js: "lounge.fm.js",
    id: "lounge.fm"
  },
  {
    label: "EulerBeats",
    matches: ["*://eulerbeats.com/*"],
    js: "eulerbeats.js",
    id: "eulerbeats"
  },
  {
    label: "FilmMusic.io",
    matches: ["*://*.filmmusic.io/*"],
    js: "filmmusic.io.js",
    id: "filmmusic.io"
  },
  {
    label: "X-Team Radio",
    matches: ["*://radio.x-team.com/*"],
    js: "xteam-radio.js",
    id: "xteam-radio"
  },
  {
    label: "Calm",
    matches: ["*://*.calm.com/*"],
    js: "calm.js",
    id: "calm"
  },
  {
    label: "Keakie",
    matches: ["*://*.keakie.com/*"],
    js: "keakie.js",
    id: "keakie"
  },
  {
    label: "KKBOX",
    matches: ["*://*play.kkbox.com/*"],
    js: "kkbox.js",
    id: "kkbox"
  },
  {
    label: "Thrill Jockey",
    matches: ["*://thrilljockey.com/products/*"],
    js: "thrilljockey.js",
    id: "thrilljockey"
  },
  {
    label: "Radio Horizonte",
    matches: ["*://horizonte.cl/*"],
    js: "mediastream.js",
    id: "horizontecl"
  },
  {
    label: "Sonar FM",
    matches: ["*://sonarfm.cl/*"],
    js: "mediastream.js",
    id: "sonarfmcl"
  },
  {
    label: "Play FM",
    matches: ["*://playfm.cl/*"],
    js: "mediastream.js",
    id: "playfmcl"
  },
  {
    label: "WKM Radio",
    matches: ["*://www.wkmradio.com/*"],
    js: "mediastream.js",
    id: "wkmradio"
  },
  {
    label: "Rockaxis",
    matches: ["*://www.rockaxis.com/*"],
    js: "mediastream.js",
    id: "rockaxis"
  },
  {
    label: "Rock&Pop Chile",
    matches: ["*://www.rockandpop.cl/*"],
    js: "rockandpopcl.js",
    id: "rockandpopcl"
  },
  {
    label: "WYEP",
    matches: ["*://wyep.org/*"],
    js: "wyep.js",
    id: "wyep"
  },
  {
    label: "ZENO",
    matches: ["*://*zeno.fm/*"],
    js: "zeno.js",
    id: "zeno"
  },
  {
    label: "Naxos Music Library",
    matches: ["*://*.naxosmusiclibrary.com/*"],
    js: "naxosmusiclibrary.js",
    id: "naxosmusiclibrary"
  },
  {
    label: "Klassik Radio",
    matches: ["*://*klassikradio.de/*"],
    js: "klassikradio.de.js",
    id: "klassikradio"
  },
  {
    label: "Beetle",
    js: "beetle.js",
    id: "beetle"
  },
  {
    label: "RefNet",
    matches: ["*://listen.refnet.fm/*"],
    js: "refnet.js",
    id: "refnet"
  },
  {
    label: "La Radio du bord de l'eau",
    matches: ["*://*auborddeleau.radio/*"],
    js: "auborddeleau.radio.js",
    id: "auborddeleau.radio",
    allFrames: !0
  },
  {
    label: "Radio Willy",
    matches: ["*://*willy.radio/player/willy/*"],
    js: "willy.radio.js",
    id: "willy.radio"
  },
  {
    label: "NIGHT.FM",
    matches: ["*://*night.fm/*"],
    js: "night.fm.js",
    id: "night.fm"
  },
  {
    label: "Radio Nowy Swiat",
    matches: ["*://nowyswiat.online/*"],
    js: "nowyswiat.js",
    id: "nowyswiat"
  },
  {
    label: "Radiolla",
    matches: ["*://*radiolla.com/*"],
    js: "radiolla.js",
    id: "radiolla"
  },
  {
    label: "Oxigenio.fm",
    matches: ["*://*oxigenio.fm/*"],
    js: "oxigenio.fm.js",
    id: "oxigenio.fm"
  },
  {
    label: "Intergalactic FM",
    matches: ["*://*intergalactic.fm/*"],
    js: "intergalacticfm.js",
    id: "intergalactic.fm"
  },
  {
    label: "Radio Cuca",
    matches: ["*://*radiocuca.es/*"],
    js: "radiocuca.js",
    id: "radiocuca"
  },
  {
    label: "Irama Nusantara",
    matches: ["*://*.iramanusantara.org/*"],
    js: "iramanusantara.js",
    id: "iramanusantara"
  },
  {
    label: "Yammat FM",
    matches: ["*://*yammat.fm/*"],
    js: "yammat.fm.js",
    id: "yammat.fm"
  },
  {
    label: "Husk Recordings",
    matches: ["*://huskrecordings.com/music/*"],
    js: "huskrecordings.js",
    id: "huskrecordings"
  },
  {
    label: "nugs.net",
    matches: ["*://play.nugs.net/*"],
    js: "nugs.js",
    id: "nugs"
  },
  {
    label: "livephish.com",
    matches: ["*://plus.livephish.com/*"],
    js: "livephish.js",
    id: "livephish.com"
  },
  {
    label: "Ishkur's Guide to Electronic Music",
    matches: ["*://music.ishkur.com/*"],
    js: "ishkur.js",
    id: "music.ishkur.com"
  },
  {
    label: "Nonoki",
    matches: ["*://nonoki.com/music/*"],
    js: "nonoki.js",
    id: "nonoki"
  },
  {
    label: "Beatbump",
    matches: ["*://beatbump.io/*"],
    js: "beatbump.js",
    id: "beatbump"
  },
  {
    label: "LINE MUSIC",
    matches: ["*://music.line.me/*"],
    js: "line-music.js",
    id: "linemusic"
  },
  {
    label: "KCRW",
    matches: ["*://www.kcrw.com/*"],
    js: "kcrw.js",
    id: "kcrw"
  },
  {
    label: "World Fusion Radio",
    matches: ["*://worldfusionradio.com/*"],
    js: "worldfusionradio.js",
    id: "worldfusionradio"
  },
  {
    label: "Hardtunes",
    matches: [
      "*://www.hard-tunes.de/*",
      "*://www.hardtunes.com/*",
      "*://www.hardtunes.fr/*",
      "*://www.hardtunes.it/*",
      "*://www.hardtunes.nl/*"
    ],
    js: "hardtunes.js",
    id: "hardtunes"
  },
  {
    label: "KINK",
    matches: ["*://kink.nl/player", "*://kink.nl/player/*"],
    js: "kinknl.js",
    id: "kinknl"
  },
  {
    label: "The Jazz Groove",
    matches: ["*://jazzgroove.org/*"],
    js: "jazzgroove.js",
    id: "jazzgroove"
  },
  {
    label: "XRAY.FM",
    matches: ["*://*.xray.fm/*"],
    js: "xrayfm.js",
    id: "xrayfm"
  },
  {
    label: "DKFM Shoegaze Radio",
    matches: ["*://decayfm.com/*"],
    js: "decayfm.js",
    id: "decayfm"
  },
  {
    label: "QCIndie",
    matches: ["*://www.qcindie.com/listen-live/*"],
    js: "qcindie.js",
    id: "qcindie"
  },
  {
    label: "Colorado Public Radio",
    matches: ["*://www.cpr.org/*"],
    js: "cpr.js",
    id: "cpr"
  },
  {
    label: "Indie 102.3",
    matches: ["*://indie.cpr.org/"],
    js: "cpr-indie.js",
    id: "cpr-indie"
  },
  {
    label: "WXPN",
    matches: ["*://xpn.org/*"],
    js: "xpn.js",
    id: "xpn"
  },
  {
    label: "FRISKY",
    matches: ["*://*.frisky.fm/*"],
    js: "friskyfm.js",
    id: "friskyfm"
  },
  {
    label: "GotRadio",
    matches: ["*://player.gotradio.com/*"],
    js: "gotradio.js",
    id: "gotradio"
  },
  {
    label: "LightningStream",
    matches: [
      "*://*.lightningstream.com/Player*",
      "*://*.lightningstream.com/player*"
    ],
    js: "lightningstream.js",
    id: "lightningstream"
  },
  {
    label: "Securenet Systems",
    matches: [
      "*://radio.securenetsystems.net/*",
      "*://stream*.securenetsystems.net/*"
    ],
    js: "securenetsystems.js",
    id: "securenetsystems"
  },
  {
    label: "WBRU",
    matches: ["*://www.wbru.com/*"],
    js: "radioco.js",
    id: "wbru",
    allFrames: !0
  },
  {
    label: "uwu radio",
    matches: ["*://radio.uwu.network/*"],
    js: "uwu-radio.js",
    id: "uwu-radio"
  },
  {
    label: "MyStreamPlayer",
    matches: ["*://*.mystreamplayer.com/*"],
    js: "mystreamplayer.js",
    id: "mystreamplayer"
  },
  {
    label: "BagelRadio",
    matches: ["*://*.bagelradio.com/*"],
    js: "mystreamplayer.js",
    id: "bagelradio",
    allFrames: !0
  },
  {
    label: "Amazing Radio",
    matches: ["*://amazingradio.com/*", "*://amazingradio.us/*"],
    js: "amazingradio.js",
    id: "amazingradio"
  },
  {
    label: "DR Lyd",
    matches: ["*://www.dr.dk/lyd*"],
    js: "dr-lyd.js",
    id: "dr-lyd"
  },
  {
    label: "lulu.fm",
    matches: ["*://*lulu.fm/*"],
    js: "lulu.fm.js",
    id: "lulufm"
  },
  {
    label: "ROCK ANTENNE",
    matches: ["*://*rockantenne.*/webradio/*"],
    js: "rockantenne.js",
    id: "rockantenne"
  },
  {
    label: "copyparty",
    matches: ["*://127.0.0.1:3923/*", "*://a.ocv.me/*"],
    js: "copyparty.js",
    id: "copyparty"
  },
  {
    label: "Fungjai",
    matches: ["*://*.fungjai.com/*"],
    js: "fungjai.js",
    id: "fungjai"
  },
  {
    label: "Radio Caprice",
    matches: ["*://radcap.ru/*"],
    js: "radcap.js",
    id: "radcap"
  },
  {
    label: "TrackerHub",
    matches: ["*://trackerhub.vercel.app/*", "*://trackerhub.cx/*"],
    js: "trackerhub.js",
    id: "trackerhub"
  },
  {
    label: "Gensokyo Radio",
    matches: ["*://gensokyoradio.net/*"],
    js: "gensokyoradio.js",
    id: "gensokyoradio"
  },
  {
    label: "Stationhead",
    matches: ["*://*stationhead.com/*"],
    js: "stationhead.js",
    id: "stationhead"
  },
  {
    label: "TECHNOBASE.FM",
    matches: [
      "*://*technobase.fm/*",
      "*://*housetime.fm/*",
      "*://*hardbase.fm/*",
      "*://*trancebase.fm/*",
      "*://*coretime.fm/*",
      "*://*clubtime.fm/*",
      "*://*teatime.fm/*",
      "*://*replay.fm/*"
    ],
    js: "technobase.fm.js",
    id: "technobase.fm"
  },
  {
    label: "Telegram A",
    matches: ["*://web.telegram.org/a/*"],
    js: "telegram-a.js",
    id: "telegram-a"
  },
  {
    label: "Telegram K",
    matches: ["*://web.telegram.org/k/*"],
    js: "telegram-k.js",
    id: "telegram-k"
  },
  {
    label: "TuneGenieEmbed",
    matches: ["*://b3.tunegenie.com/*"],
    js: "tunegenie-embed.js",
    id: "tunegenie-embed",
    allFrames: !0
  },
  {
    label: "TuneGenie",
    matches: ["*://*.tunegenie.com/*"],
    js: "tunegenie.js",
    id: "tunegenie"
  },
  {
    label: "RTL+ Musik",
    matches: ["*://plus.rtl.de/*"],
    js: "rtl-plus-musik.js",
    id: "rtl-plus-musik"
  },
  {
    label: "Tomorrowland",
    matches: ["*://www.tomorrowland.com/*"],
    js: "tomorrowland.js",
    id: "tomorrowland"
  },
  {
    label: "hearthis.at",
    matches: ["*://hearthis.at/*"],
    js: "hearthis-at.js",
    id: "hearthis-at"
  },
  {
    label: "Blend",
    matches: ["*://blend.io/*"],
    js: "blend.js",
    id: "blend"
  },
  {
    label: "Radio Italia",
    matches: ["*://www.radioitalia.it/*"],
    js: "radio-italia.js",
    id: "radio-italia"
  },
  {
    label: "Lyden av Norge",
    matches: ["*://www.lydenavnorge.no/*"],
    js: "lyden-av-norge.js",
    id: "lyden-av-norge"
  },
  {
    label: "audio.com",
    matches: ["*://audio.com/*"],
    js: "audio.js",
    id: "audio-com"
  },
  {
    label: "AfroCharts",
    matches: ["*://*.afrocharts.com/*"],
    js: "afrocharts.js",
    id: "afrocharts"
  },
  {
    label: "Ed Banger Records",
    matches: ["*://*.edbangerrecords.com/*"],
    js: "ed-banger-records.js",
    id: "ed-banger-records"
  },
  {
    label: "Hyperpipe",
    matches: ["*://hyperpipe.surge.sh/*"],
    js: "hyperpipe.js",
    id: "hyperpipe"
  },
  {
    label: "Radiofreccia",
    matches: ["*://play.rtl.it/live/*"],
    js: "radiofreccia.js",
    id: "radiofreccia"
  },
  {
    label: "khinsider",
    matches: ["*://downloads.khinsider.com/*"],
    js: "khinsider.js",
    id: "khinsider"
  },
  {
    label: "WDR",
    matches: ["*://*.wdr.de/radio/*"],
    js: "wdr.js",
    id: "wdr"
  },
  {
    label: "radio.de",
    matches: ["*://www.radio.de/*", "*://www.radio.net/*"],
    js: "radio.de.js",
    id: "radiode"
  },
  {
    label: "FMSpins",
    matches: ["*://*.fmspins.com/*"],
    js: "fmspins.js",
    id: "fmspins"
  },
  {
    label: "vk-save",
    matches: ["*://*.vk-save.com/*"],
    js: "vk-save.js",
    id: "vk-save"
  },
  {
    label: "Radio Student",
    matches: ["*://www.radiostudent.hr/*"],
    js: "radiostudent.js",
    id: "radiostudent"
  },
  {
    label: "BiliBili",
    matches: ["*://www.bilibili.com/*"],
    js: "bilibili.js",
    id: "bilibili",
    usesBlocklist: !0
  },
  {
    label: "jam.coop",
    matches: ["*://jam.coop/*"],
    js: "jam.coop.js",
    id: "jam.coop"
  },
  {
    label: "Zing MP3",
    matches: ["*://zingmp3.vn/*"],
    js: "zingmp3.js",
    id: "zingmp3"
  },
  {
    label: "NTS",
    matches: ["*://*nts.live/*"],
    js: "nts.js",
    id: "nts"
  },
  {
    label: "earth.fm",
    matches: ["*://earth.fm/*"],
    js: "earth.fm.js",
    id: "earthfm"
  },
  {
    label: "apt-get's auditorium",
    matches: ["*://tunes.apt-get.xyz/*"],
    js: "apt-get-tunes.js",
    id: "apt-get-tunes"
  },
  {
    label: "AzuraCast",
    js: "azuracast.js",
    id: "azuracast"
  },
  {
    label: "scrobblerad.io",
    matches: ["*://scrobblerad.io/*"],
    js: "scrobbleradio.js",
    id: "scrobbleradio"
  },
  {
    label: "VocaDB",
    matches: ["*://vocadb.net/*"],
    js: "vocadb.js",
    id: "vocadb"
  },
  {
    label: "UtaiteDB",
    matches: ["*://utaitedb.net/*"],
    js: "vocadb.js",
    id: "utaitedb"
  },
  {
    label: "TouhouDB",
    matches: ["*://touhoudb.com/*"],
    js: "vocadb.js",
    id: "touhoudb"
  },
  {
    label: "weareone.fm",
    matches: ["*://weareone.fm/*"],
    js: "weareone.js",
    id: "weareone"
  },
  {
    label: "Bollerwagen",
    matches: ["*://radiobollerwagen.de/*"],
    js: "bollerwagen.js",
    id: "bollerwagen"
  },
  {
    label: "МТС Музыка",
    matches: ["*://music.mts.ru/*"],
    js: "mts-music.js",
    id: "mts-music"
  },
  {
    label: "ChirpRadio",
    matches: ["*://chirpradio.org/*"],
    js: "chirpradio.js",
    id: "chirpradio"
  },
  {
    label: "OnlyHit",
    matches: ["*://onlyhit.us/*"],
    js: "onlyhit.js",
    id: "onlyhit"
  },
  {
    label: "InstantAudio",
    matches: [
      "*://instant.audio/*",
      // North America
      "*://radiosdecuba.com/*",
      "*://radio.ht/*",
      "*://jamaicaradio.net/*",
      "*://emisoras.com.mx/*",
      "*://radiosdepuertorico.com/*",
      "*://radios.com.do/*",
      "*://trinidadradiostations.net/*",
      // Central America
      "*://radios.co.cr/*",
      "*://radios.com.sv/*",
      "*://emisoras.com.gt/*",
      "*://radios.hn/*",
      "*://radios.co.ni/*",
      "*://radios.com.pa/*",
      // South America
      "*://radioarg.com/*",
      "*://radios.com.bo/*",
      "*://radiosaovivo.net/*",
      "*://emisora.cl/*",
      "*://radios.com.co/*",
      "*://radios.com.ec/*",
      "*://emisoras.com.py/*",
      "*://radios.com.pe/*",
      "*://surinaamseradio.com/*",
      "*://radios.com.uy/*",
      "*://radio.co.ve/*",
      // Europe
      "*://radiosonline.be/*",
      "*://ceskaradiaonline.cz/*",
      "*://radio.co.dk/*",
      "*://radiolisten.de/*",
      "*://raadiod.com/*",
      "*://emisora.org.es/*",
      "*://ecouterradioenligne.com/*",
      "*://radiofona.com.gr/*",
      "*://radios.hr/*",
      "*://ieradio.org/*",
      "*://ascoltareradio.com/*",
      "*://latvijasradio.com/*",
      "*://radios.lu/*",
      "*://radijas.org/*",
      "*://radiohallgatas.hu/*",
      "*://nederlandseradio.nl/*",
      "*://nettradionorge.com/*",
      "*://radios.co.at/*",
      "*://onlineradio.pl/*",
      "*://radioonline.com.pt/*",
      "*://radio.org.ro/*",
      "*://radiosonline.ch/*",
      "*://siradio.si/*",
      "*://radiostanice.rs/*",
      "*://nettiradiot.org/*",
      "*://radio.org.se/*",
      "*://internetradiouk.com/*",
      "*://bg-radio.org/*",
      "*://radio.pp.ru/*",
      "*://radioua.net/*",
      // Africa
      "*://radioalgerie.eu/*",
      "*://radio.co.cm/*",
      "*://radio.cd/*",
      "*://radio.co.ci/*",
      "*://radio.com.gh/*",
      "*://radio.or.ke/*",
      "*://radio.mg/*",
      "*://radio.co.ma/*",
      "*://egyptradio.net/*",
      "*://radio.org.ng/*",
      "*://radio.sn/*",
      "*://radiosa.org/*",
      "*://radiotunisienne.org/*",
      "*://radio.co.ug/*",
      // Asia
      "*://radio-bd.com/*",
      "*://radioonline.kr/*",
      "*://radios.hk/*",
      "*://onlineradios.in/*",
      "*://radioonline.co.id/*",
      "*://radioonline.my/*",
      "*://radionp.com/*",
      "*://jpradio.jp/*",
      "*://radio.net.pk/*",
      "*://radio.org.ph/*",
      "*://radiosingapore.org/*",
      "*://radio.com.lk/*",
      "*://vietnamradio.org/*",
      "*://radios.org.il/*",
      "*://radioth.net/*",
      "*://zhibo.fm/*",
      "*://radios.tw/*",
      // Oceania
      "*://radioau.net/*",
      "*://radio.org.nz/*"
    ],
    js: "instantaudio.js",
    id: "instantaudio"
  },
  {
    label: "Basspistol Radio",
    matches: ["*://*.basspistol.com/*"],
    js: "basspistol.js",
    id: "basspistol"
  },
  {
    label: "RadioFreeFedi",
    matches: ["*://radiofreefedi.net/*"],
    js: "radiofreefedi.js",
    id: "radiofreefedi"
  },
  {
    label: "MyTuner",
    matches: ["*://mytuner-radio.com/*"],
    js: "mytuner.js",
    id: "mytuner"
  },
  {
    label: "Mirlo",
    matches: ["*://mirlo.space/*"],
    js: "mirlo.js",
    id: "mirlo"
  },
  {
    label: "Simulator Radio",
    matches: ["*://*.simulatorradio.com/*"],
    js: "simulatorradio.js",
    id: "simulatorradio"
  },
  {
    label: "Echo",
    matches: ["*://echo.sleepyfran.me/*"],
    js: "echo.js",
    id: "echo"
  },
  {
    label: "Gizz Tapes",
    matches: ["*://tapes.kglw.net/*"],
    js: "tapes-kglw.js",
    id: "tapes-kglw"
  },
  {
    label: "Systrum Sistum Radio",
    matches: ["*://systrum.net/*"],
    js: "systrum.js",
    id: "systrum"
  },
  {
    label: "cosine.club",
    matches: ["*://cosine.club/*"],
    js: "cosine.club.js",
    id: "cosine.club"
  },
  {
    label: "The Indie Beat Radio",
    matches: ["*://theindiebeat.fm/*"],
    js: "theindiebeat.js",
    id: "theindiebeat"
  },
  {
    label: "Musique Approximative",
    matches: ["*://*.musiqueapproximative.net/*"],
    js: "musiqueapproximative.js",
    id: "musiqueapproximative"
  },
  {
    label: "Suno AI",
    matches: ["*://suno.com/*"],
    js: "suno.js",
    id: "suno"
  },
  {
    label: "[untitled]",
    matches: ["*://untitled.stream/*"],
    js: "untitled.js",
    id: "[untitled]"
  },
  {
    label: "DAB Music Player",
    matches: ["*://dab.yeet.su/*", "*://dabmusic.xyz/*"],
    js: "dabmusic.js",
    id: "dabmusic"
  },
  {
    label: "GBS-FM",
    matches: ["*://gbs.fm/*"],
    js: "gbs.fm.js",
    id: "gbs"
  },
  {
    label: "Yumi Co. Radio",
    matches: ["*://yumicoradio.net/*"],
    js: "yumicoradio.js",
    id: "yumicoradio"
  },
  {
    label: "Kosmik Dstroyer",
    matches: ["*://kosmik-dstroyer.top/*"],
    js: "kosmik-dstroyer.js",
    id: "kosmik-dstroyer"
  },
  {
    label: "LaTeX 4000",
    matches: ["*://nonacademic.net/*"],
    js: "nonacademic.js",
    id: "nonacademic"
  },
  {
    label: "gravity.fm",
    matches: ["*://gravity.fm/*"],
    js: "gravity.fm.js",
    id: "gravity"
  },
  {
    label: "Archaic Horizon",
    matches: ["*://archaichorizon.com/*", "*://www.archaichorizon.com/*"],
    js: "archaichorizon.js",
    id: "archaichorizon"
  },
  {
    label: "Aonsoku",
    matches: ["*://aonsoku.vercel.app/*"],
    js: "aonsoku.js",
    id: "aonsoku"
  },
  {
    label: "CREAMER NATION",
    matches: ["*://creamernation.men/*"],
    js: "creamernation.js",
    id: "creamer-nation"
  },
  {
    label: "Feishin",
    matches: ["*://feishin.vercel.app/*"],
    js: "feishin.js",
    id: "feishin"
  },
  {
    label: "Ampwall",
    matches: ["*://ampwall.com/*"],
    js: "ampwall.js",
    id: "ampwall"
  },
  {
    label: "Monochrome",
    matches: [
      "*://monochrome.prigoana.com/*",
      "*://monochrome.tf/*",
      "*://monochrome.samidy.com/*",
      "*://monochrome-back.pages.dev/*"
    ],
    js: "monochrome.js",
    id: "monochrome"
  },
  {
    label: "WeeklyBeats",
    matches: ["*://weeklybeats.com/*"],
    js: "weeklybeats.js",
    id: "weeklybeats"
  },
  {
    label: "XRaydio",
    matches: ["*://xraydio.net/*"],
    js: "xraydio.js",
    id: "xraydio"
  },
  {
    label: "Cytu.be",
    matches: ["*://cytu.be/r/*"],
    js: "cytu-be.js",
    id: "cytu-be"
  },
  {
    label: "Telegram Audio Player",
    matches: ["*://teleplay.rv7.nl/*"],
    js: "teleplay.js",
    id: "teleplay"
  },
  {
    label: "Subvert",
    matches: ["*://*.subvert.fm/*"],
    js: "subvert.js",
    id: "subvert"
  },
  {
    label: "Debrid Vault",
    matches: ["*://debridvault.elfhosted.com/*"],
    js: "debridvault.js",
    id: "debridvault"
  },
  {
    label: "Radio Swiss Classic",
    matches: [
      "*://www.radioswissclassic.ch/*",
      "*://www.radioswissjazz.ch/*",
      "*://www.radioswisspop.ch/*"
    ],
    js: "radioswissclassic.js",
    id: "radioswissclassic"
  },
  {
    label: "Rockserwis.fm",
    matches: ["*://rockserwis.fm/*"],
    js: "rockserwis.fm.js",
    id: "rockserwis.fm"
  },
  {
    label: "Bossa Jazz Brasil",
    matches: ["*://bossajazzbrasil.com/ouca-on-line/*"],
    js: "bossajazzbrazil.js",
    id: "bossajazzbrazil"
  },
  {
    label: "Kiss rádio",
    matches: ["*://www.kiss.cz/online/*"],
    js: "kiss.js",
    id: "kiss"
  },
  {
    label: "Radio SAW",
    matches: ["*://www.radiosaw.de/*"],
    js: "radiosaw.js",
    id: "radiosaw"
  },
  {
    label: "Star FM",
    matches: ["*://tv3.lv/starfm/online/*"],
    js: "starfm.js",
    id: "starfm"
  },
  {
    label: "bandwagon",
    matches: ["*://bandwagon.fm/*"],
    js: "bandwagon.js",
    id: "bandwagon"
  },
  {
    label: "Meloradio",
    matches: ["*://player.meloradio.pl/*"],
    js: "meloradio.js",
    id: "meloradio"
  },
  {
    label: "The Indie Beat Television",
    matches: ["*://tv.theindiebeat.fm/*"],
    js: "theindiebeat-owncast.js",
    id: "theindiebeat-tv"
  },
  {
    label: "escradio",
    matches: ["*://www.escradio.com/player/*"],
    js: "escradio.js",
    id: "escradio"
  },
  {
    label: "musicMe",
    matches: ["*://*.musicme.com/*"],
    js: "musicme.js",
    id: "musicme",
    allFrames: !0
  },
  {
    label: "zxART",
    matches: ["*://zxart.ee/*"],
    js: "zxart.js",
    id: "zxart"
  },
  {
    label: "DNA Lounge",
    matches: ["*://www.dnalounge.com/webcast/video.html"],
    js: "dnalounge.js",
    id: "dnalounge"
  },
  {
    label: "The Lot Radio",
    matches: ["*://www.thelotradio.com/shows/*"],
    js: "thelotradio.js",
    id: "thelotradio"
  },
  {
    label: "pixabay",
    matches: [
      "*://pixabay.com/music/*",
      "*://pixabay.com/users/*",
      "*://pixabay.com/playlists/*",
      "*://pixabay.com/accounts/playlists/*"
    ],
    js: "pixabay.js",
    id: "pixabay"
  }
];
function At(s) {
  return s.replace(/[$()*+.?[\\^{|}]/g, "\\$&");
}
function it(s) {
  return s.split("*").map(At).join(".*");
}
function xs(s) {
  if (typeof s != "string")
    return null;
  const e = /^(\*|https?):\/\/([^/]*)(\/.*)/.exec(s);
  if (!e)
    return null;
  const t = e[1], r = e[2], a = e[3];
  let i = "^";
  if (t === "*" ? i += "https?" : i += `${t}`, i += At("://"), r === "*")
    i += "[^\\/]+";
  else if (r) {
    let n = r;
    r.startsWith("*.") && (i += "([^\\/]+\\.|)", n = n.substr(2)), i += it(n);
  } else
    return null;
  return i += it(a), i += "$", new RegExp(i);
}
function Cs(s, e) {
  const t = xs(e);
  return t ? t.test(s) : !1;
}
function kt(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default") ? s.default : s;
}
var pe = { exports: {} }, Ps = pe.exports, ot;
function Ls() {
  return ot || (ot = 1, (function(s, e) {
    (function(t, r) {
      r(s);
    })(typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : Ps, function(t) {
      if (!(globalThis.chrome && globalThis.chrome.runtime && globalThis.chrome.runtime.id))
        throw new Error("This script should only be loaded in a browser extension.");
      if (globalThis.browser && globalThis.browser.runtime && globalThis.browser.runtime.id)
        t.exports = globalThis.browser;
      else {
        const r = "The message port closed before a response was received.", a = (i) => {
          const n = {
            alarms: {
              clear: {
                minArgs: 0,
                maxArgs: 1
              },
              clearAll: {
                minArgs: 0,
                maxArgs: 0
              },
              get: {
                minArgs: 0,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            bookmarks: {
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getChildren: {
                minArgs: 1,
                maxArgs: 1
              },
              getRecent: {
                minArgs: 1,
                maxArgs: 1
              },
              getSubTree: {
                minArgs: 1,
                maxArgs: 1
              },
              getTree: {
                minArgs: 0,
                maxArgs: 0
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeTree: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            browserAction: {
              disable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              enable: {
                minArgs: 0,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              getBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1
              },
              getBadgeText: {
                minArgs: 1,
                maxArgs: 1
              },
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              openPopup: {
                minArgs: 0,
                maxArgs: 0
              },
              setBadgeBackgroundColor: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setBadgeText: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            browsingData: {
              remove: {
                minArgs: 2,
                maxArgs: 2
              },
              removeCache: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCookies: {
                minArgs: 1,
                maxArgs: 1
              },
              removeDownloads: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFormData: {
                minArgs: 1,
                maxArgs: 1
              },
              removeHistory: {
                minArgs: 1,
                maxArgs: 1
              },
              removeLocalStorage: {
                minArgs: 1,
                maxArgs: 1
              },
              removePasswords: {
                minArgs: 1,
                maxArgs: 1
              },
              removePluginData: {
                minArgs: 1,
                maxArgs: 1
              },
              settings: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            commands: {
              getAll: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            contextMenus: {
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeAll: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            cookies: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 1,
                maxArgs: 1
              },
              getAllCookieStores: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              set: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            devtools: {
              inspectedWindow: {
                eval: {
                  minArgs: 1,
                  maxArgs: 2,
                  singleCallbackArg: !1
                }
              },
              panels: {
                create: {
                  minArgs: 3,
                  maxArgs: 3,
                  singleCallbackArg: !0
                },
                elements: {
                  createSidebarPane: {
                    minArgs: 1,
                    maxArgs: 1
                  }
                }
              }
            },
            downloads: {
              cancel: {
                minArgs: 1,
                maxArgs: 1
              },
              download: {
                minArgs: 1,
                maxArgs: 1
              },
              erase: {
                minArgs: 1,
                maxArgs: 1
              },
              getFileIcon: {
                minArgs: 1,
                maxArgs: 2
              },
              open: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              pause: {
                minArgs: 1,
                maxArgs: 1
              },
              removeFile: {
                minArgs: 1,
                maxArgs: 1
              },
              resume: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            extension: {
              isAllowedFileSchemeAccess: {
                minArgs: 0,
                maxArgs: 0
              },
              isAllowedIncognitoAccess: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            history: {
              addUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteAll: {
                minArgs: 0,
                maxArgs: 0
              },
              deleteRange: {
                minArgs: 1,
                maxArgs: 1
              },
              deleteUrl: {
                minArgs: 1,
                maxArgs: 1
              },
              getVisits: {
                minArgs: 1,
                maxArgs: 1
              },
              search: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            i18n: {
              detectLanguage: {
                minArgs: 1,
                maxArgs: 1
              },
              getAcceptLanguages: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            identity: {
              launchWebAuthFlow: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            idle: {
              queryState: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            management: {
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getSelf: {
                minArgs: 0,
                maxArgs: 0
              },
              setEnabled: {
                minArgs: 2,
                maxArgs: 2
              },
              uninstallSelf: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            notifications: {
              clear: {
                minArgs: 1,
                maxArgs: 1
              },
              create: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              getPermissionLevel: {
                minArgs: 0,
                maxArgs: 0
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            },
            pageAction: {
              getPopup: {
                minArgs: 1,
                maxArgs: 1
              },
              getTitle: {
                minArgs: 1,
                maxArgs: 1
              },
              hide: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setIcon: {
                minArgs: 1,
                maxArgs: 1
              },
              setPopup: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              setTitle: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              },
              show: {
                minArgs: 1,
                maxArgs: 1,
                fallbackToNoCallback: !0
              }
            },
            permissions: {
              contains: {
                minArgs: 1,
                maxArgs: 1
              },
              getAll: {
                minArgs: 0,
                maxArgs: 0
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              request: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            runtime: {
              getBackgroundPage: {
                minArgs: 0,
                maxArgs: 0
              },
              getPlatformInfo: {
                minArgs: 0,
                maxArgs: 0
              },
              openOptionsPage: {
                minArgs: 0,
                maxArgs: 0
              },
              requestUpdateCheck: {
                minArgs: 0,
                maxArgs: 0
              },
              sendMessage: {
                minArgs: 1,
                maxArgs: 3
              },
              sendNativeMessage: {
                minArgs: 2,
                maxArgs: 2
              },
              setUninstallURL: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            sessions: {
              getDevices: {
                minArgs: 0,
                maxArgs: 1
              },
              getRecentlyClosed: {
                minArgs: 0,
                maxArgs: 1
              },
              restore: {
                minArgs: 0,
                maxArgs: 1
              }
            },
            storage: {
              local: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              },
              managed: {
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                }
              },
              sync: {
                clear: {
                  minArgs: 0,
                  maxArgs: 0
                },
                get: {
                  minArgs: 0,
                  maxArgs: 1
                },
                getBytesInUse: {
                  minArgs: 0,
                  maxArgs: 1
                },
                remove: {
                  minArgs: 1,
                  maxArgs: 1
                },
                set: {
                  minArgs: 1,
                  maxArgs: 1
                }
              }
            },
            tabs: {
              captureVisibleTab: {
                minArgs: 0,
                maxArgs: 2
              },
              create: {
                minArgs: 1,
                maxArgs: 1
              },
              detectLanguage: {
                minArgs: 0,
                maxArgs: 1
              },
              discard: {
                minArgs: 0,
                maxArgs: 1
              },
              duplicate: {
                minArgs: 1,
                maxArgs: 1
              },
              executeScript: {
                minArgs: 1,
                maxArgs: 2
              },
              get: {
                minArgs: 1,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 0
              },
              getZoom: {
                minArgs: 0,
                maxArgs: 1
              },
              getZoomSettings: {
                minArgs: 0,
                maxArgs: 1
              },
              goBack: {
                minArgs: 0,
                maxArgs: 1
              },
              goForward: {
                minArgs: 0,
                maxArgs: 1
              },
              highlight: {
                minArgs: 1,
                maxArgs: 1
              },
              insertCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              move: {
                minArgs: 2,
                maxArgs: 2
              },
              query: {
                minArgs: 1,
                maxArgs: 1
              },
              reload: {
                minArgs: 0,
                maxArgs: 2
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              removeCSS: {
                minArgs: 1,
                maxArgs: 2
              },
              sendMessage: {
                minArgs: 2,
                maxArgs: 3
              },
              setZoom: {
                minArgs: 1,
                maxArgs: 2
              },
              setZoomSettings: {
                minArgs: 1,
                maxArgs: 2
              },
              update: {
                minArgs: 1,
                maxArgs: 2
              }
            },
            topSites: {
              get: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            webNavigation: {
              getAllFrames: {
                minArgs: 1,
                maxArgs: 1
              },
              getFrame: {
                minArgs: 1,
                maxArgs: 1
              }
            },
            webRequest: {
              handlerBehaviorChanged: {
                minArgs: 0,
                maxArgs: 0
              }
            },
            windows: {
              create: {
                minArgs: 0,
                maxArgs: 1
              },
              get: {
                minArgs: 1,
                maxArgs: 2
              },
              getAll: {
                minArgs: 0,
                maxArgs: 1
              },
              getCurrent: {
                minArgs: 0,
                maxArgs: 1
              },
              getLastFocused: {
                minArgs: 0,
                maxArgs: 1
              },
              remove: {
                minArgs: 1,
                maxArgs: 1
              },
              update: {
                minArgs: 2,
                maxArgs: 2
              }
            }
          };
          if (Object.keys(n).length === 0)
            throw new Error("api-metadata.json has not been included in browser-polyfill");
          class h extends WeakMap {
            constructor(o, f = void 0) {
              super(f), this.createItem = o;
            }
            get(o) {
              return this.has(o) || this.set(o, this.createItem(o)), super.get(o);
            }
          }
          const y = (u) => u && typeof u == "object" && typeof u.then == "function", A = (u, o) => (...f) => {
            i.runtime.lastError ? u.reject(new Error(i.runtime.lastError.message)) : o.singleCallbackArg || f.length <= 1 && o.singleCallbackArg !== !1 ? u.resolve(f[0]) : u.resolve(f);
          }, k = (u) => u == 1 ? "argument" : "arguments", P = (u, o) => function(p, ...w) {
            if (w.length < o.minArgs)
              throw new Error(`Expected at least ${o.minArgs} ${k(o.minArgs)} for ${u}(), got ${w.length}`);
            if (w.length > o.maxArgs)
              throw new Error(`Expected at most ${o.maxArgs} ${k(o.maxArgs)} for ${u}(), got ${w.length}`);
            return new Promise((S, m) => {
              if (o.fallbackToNoCallback)
                try {
                  p[u](...w, A({
                    resolve: S,
                    reject: m
                  }, o));
                } catch (l) {
                  console.warn(`${u} API method doesn't seem to support the callback parameter, falling back to call it without a callback: `, l), p[u](...w), o.fallbackToNoCallback = !1, o.noCallback = !0, S();
                }
              else o.noCallback ? (p[u](...w), S()) : p[u](...w, A({
                resolve: S,
                reject: m
              }, o));
            });
          }, ue = (u, o, f) => new Proxy(o, {
            apply(p, w, S) {
              return f.call(w, u, ...S);
            }
          });
          let K = Function.call.bind(Object.prototype.hasOwnProperty);
          const q = (u, o = {}, f = {}) => {
            let p = /* @__PURE__ */ Object.create(null), w = {
              has(m, l) {
                return l in u || l in p;
              },
              get(m, l, g) {
                if (l in p)
                  return p[l];
                if (!(l in u))
                  return;
                let d = u[l];
                if (typeof d == "function")
                  if (typeof o[l] == "function")
                    d = ue(u, u[l], o[l]);
                  else if (K(f, l)) {
                    let W = P(l, f[l]);
                    d = ue(u, u[l], W);
                  } else
                    d = d.bind(u);
                else if (typeof d == "object" && d !== null && (K(o, l) || K(f, l)))
                  d = q(d, o[l], f[l]);
                else if (K(f, "*"))
                  d = q(d, o[l], f["*"]);
                else
                  return Object.defineProperty(p, l, {
                    configurable: !0,
                    enumerable: !0,
                    get() {
                      return u[l];
                    },
                    set(W) {
                      u[l] = W;
                    }
                  }), d;
                return p[l] = d, d;
              },
              set(m, l, g, d) {
                return l in p ? p[l] = g : u[l] = g, !0;
              },
              defineProperty(m, l, g) {
                return Reflect.defineProperty(p, l, g);
              },
              deleteProperty(m, l) {
                return Reflect.deleteProperty(p, l);
              }
            }, S = Object.create(u);
            return new Proxy(S, w);
          }, H = (u) => ({
            addListener(o, f, ...p) {
              o.addListener(u.get(f), ...p);
            },
            hasListener(o, f) {
              return o.hasListener(u.get(f));
            },
            removeListener(o, f) {
              o.removeListener(u.get(f));
            }
          }), de = new h((u) => typeof u != "function" ? u : function(f) {
            const p = q(f, {}, {
              getContent: {
                minArgs: 0,
                maxArgs: 0
              }
            });
            u(p);
          }), me = new h((u) => typeof u != "function" ? u : function(f, p, w) {
            let S = !1, m, l = new Promise((ee) => {
              m = function(U) {
                S = !0, ee(U);
              };
            }), g;
            try {
              g = u(f, p, m);
            } catch (ee) {
              g = Promise.reject(ee);
            }
            const d = g !== !0 && y(g);
            if (g !== !0 && !d && !S)
              return !1;
            const W = (ee) => {
              ee.then((U) => {
                w(U);
              }, (U) => {
                let Le;
                U && (U instanceof Error || typeof U.message == "string") ? Le = U.message : Le = "An unexpected error occurred", w({
                  __mozWebExtensionPolyfillReject__: !0,
                  message: Le
                });
              }).catch((U) => {
                console.error("Failed to send onMessage rejected reply", U);
              });
            };
            return W(d ? g : l), !0;
          }), ge = ({
            reject: u,
            resolve: o
          }, f) => {
            i.runtime.lastError ? i.runtime.lastError.message === r ? o() : u(new Error(i.runtime.lastError.message)) : f && f.__mozWebExtensionPolyfillReject__ ? u(new Error(f.message)) : o(f);
          }, he = (u, o, f, ...p) => {
            if (p.length < o.minArgs)
              throw new Error(`Expected at least ${o.minArgs} ${k(o.minArgs)} for ${u}(), got ${p.length}`);
            if (p.length > o.maxArgs)
              throw new Error(`Expected at most ${o.maxArgs} ${k(o.maxArgs)} for ${u}(), got ${p.length}`);
            return new Promise((w, S) => {
              const m = ge.bind(null, {
                resolve: w,
                reject: S
              });
              p.push(m), f.sendMessage(...p);
            });
          }, be = {
            devtools: {
              network: {
                onRequestFinished: H(de)
              }
            },
            runtime: {
              onMessage: H(me),
              onMessageExternal: H(me),
              sendMessage: he.bind(null, "sendMessage", {
                minArgs: 1,
                maxArgs: 3
              })
            },
            tabs: {
              sendMessage: he.bind(null, "sendMessage", {
                minArgs: 2,
                maxArgs: 3
              })
            }
          }, c = {
            clear: {
              minArgs: 1,
              maxArgs: 1
            },
            get: {
              minArgs: 1,
              maxArgs: 1
            },
            set: {
              minArgs: 1,
              maxArgs: 1
            }
          };
          return n.privacy = {
            network: {
              "*": c
            },
            services: {
              "*": c
            },
            websites: {
              "*": c
            }
          }, q(i, be, n);
        };
        t.exports = a(chrome);
      }
    });
  })(pe)), pe.exports;
}
var Os = Ls();
const x = /* @__PURE__ */ kt(Os), vt = "*", Us = "[hidden]", Ms = 30, Rt = 50, _s = 30, Ds = 240;
function D(s, e = "log") {
  const t = console[e];
  if (typeof t != "function")
    throw new TypeError(`Unknown log type: ${e}`);
  t(s);
}
function Fs(s) {
  return s && typeof s == "number" && !isNaN(s) && isFinite(s) ? s : Rt;
}
function Ns(s, e) {
  if (Bs(s))
    return Ms;
  if (s < _s)
    return -1;
  const t = Math.round(s * e / 100);
  return Math.min(t, Ds);
}
function nt(s, e) {
  if (s && e) {
    const t = vt.repeat(s.length);
    return e.replace(s, t);
  }
  return e;
}
function Tt(s) {
  return s ? typeof s == "string" ? vt.repeat(s.length) : Array.isArray(s) ? `[Array(${s.length})]` : Us : s === null ? "null" : s?.toString() ?? "undefined";
}
function Bs(s) {
  return !s || typeof s != "number" || isNaN(s) || !isFinite(s);
}
function N(s, e) {
  return new Promise((t, r) => {
    const a = setTimeout(() => {
      r(new Error("promise timeout"));
    }, s);
    e.then(
      (i) => {
        clearTimeout(a), t(i);
      },
      (i) => {
        clearTimeout(a), r(i);
      }
    );
  });
}
function lt(s, e) {
  return s.some((t) => t === e);
}
function zs(s, e) {
  return s.length > 0 && s.every((t) => t === e);
}
function $s() {
  return !!(!self.window || (location.href.startsWith("safari-web-extension") || location.href.startsWith("moz-extension")) && location.href.endsWith("generated_background_page.html"));
}
async function qs(s) {
  const e = await fetch(s, {
    method: "GET"
  });
  return e.ok ? e.text() : null;
}
class Et {
  events = /* @__PURE__ */ new Map();
  /**
  * Attach event listener
  *
  * @param event - event to listen to
  * @param fn - callback function
  */
  on(e, t) {
    const r = this.events.get(e) || [];
    this.events.set(e, [...r, t]);
  }
  /**
  * Disconnect event listener
  *
  * @param event - event to disconnect from
  * @param fn - callback function to disconnect
  */
  off(e, t) {
    const r = this.events.get(e) || [];
    this.events.set(
      e,
      r.filter((a) => a !== t)
    );
  }
  /**
  * Emit event
  *
  * @param event - event type to emit
  * @param args - arguments to pass to callback functions
  */
  emit(e, ...t) {
    for (const r of this.events.get(e) || [])
      r(...t);
  }
}
function It(s) {
  const e = Object.entries(s).reduce(
    (t, [r, a]) => (typeof a == "string" ? t[r] = a : typeof a == "number" ? t[r] = a.toString() : (typeof a > "u" || a === null) && (t[r] = ""), t),
    {}
  );
  return new URLSearchParams(e).toString();
}
function Hs() {
  return x.runtime.getManifest().version;
}
function te(s, e) {
  return x.i18n.getMessage(s, e);
}
const fe = "Base", J = "Disallowed", ct = "Disabled", _e = "Error", Vs = "Ignored", ut = "Loading", Oe = "Playing", Gs = "Paused", Ue = "Scrobbled", Ks = "Skipped", xt = "Unknown", Ws = "Loved", Js = "Unloved";
function I(s) {
  return (e) => e(s);
}
function Ys(...s) {
  x.runtime.onMessage.addListener(
    (e, t) => {
      let r = !1;
      for (const a of s) {
        const i = a((n) => {
          if (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            e.type === n.type
          )
            return r = !0, n.fn(
              // eslint-disable-next-line
              e.payload,
              t
            );
        });
        if (r)
          return Promise.resolve(i);
      }
    }
  );
}
async function Qs(s, e) {
  return x.tabs.sendMessage(s, e);
}
function Zs(s) {
  return (e) => e(s);
}
function Xs(...s) {
  x.runtime.onMessage.addListener(
    (e, t) => {
      let r = !1;
      for (const a of s) {
        const i = a((n) => {
          if (
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            e.type === n.type
          )
            return r = !0, n.fn(
              // eslint-disable-next-line
              e.payload,
              t
            );
        });
        if (r)
          return Promise.resolve(i);
      }
    }
  );
}
async function v(s) {
  return x.runtime.sendMessage(s);
}
const er = Promise.resolve().then(() => ba);
class tr {
  queue = [];
  isActive = !1;
  shouldPrint = er.then(
    (e) => e.getOption(e.DEBUG_LOGGING_ENABLED)
  );
  /**
  * Enqueue a log message to be printed.
  * @param text - Debug message
  * @param logType - Log type
  */
  push(e, t) {
    this.queue.push({ text: e, logType: t }), this.start();
  }
  /**
  * Process the queue to print logs in order.
  */
  async start() {
    if (!this.isActive) {
      this.isActive = !0;
      try {
        for (let e = 0; e < 100 && this.queue.length > 0; e++) {
          const t = this.queue.shift();
          if (t && await this.shouldPrint) {
            const r = console[t.logType];
            if (typeof r != "function")
              throw new TypeError(
                `Unknown log type: ${t.logType}`
              );
            const a = `Web Scrobbler: ${t.text?.toString()}`;
            r(a);
          }
        }
        this.isActive = !1;
      } catch {
        this.isActive = !1;
      }
    }
  }
}
const sr = new tr();
function j(s, e = "log") {
  sr.push(s, e);
}
const Re = ", ", Ct = [
  " -- ",
  "--",
  " ~ ",
  " - ",
  " – ",
  " — ",
  " // ",
  "-",
  "–",
  "—",
  ":",
  "|",
  "///",
  "/",
  "~"
];
function Ve(s) {
  if (!s || !/^\s*-?((\d{1,2}:\d\d:\d\d)|(\d{1,2}:\d\d)|(\d{1,2}))\s*$/g.test(s))
    return 0;
  const t = /-/g, r = /\d{1,2}/g, a = s.match(r)?.reverse().map((i) => parseInt(i, 10)).reduce((i, n, h) => i + n * Math.pow(60, h));
  return a && t.test(s) ? -a : a ?? 0;
}
function Pt(s, e = null) {
  if (s === null || s.length === 0)
    return null;
  for (const t of e || Ct) {
    const r = s.indexOf(t);
    if (r > -1)
      return { index: r, length: t.length };
  }
  return null;
}
function rr(s) {
  return !s || s.length === 0 ? null : s.map((e) => e.textContent).join(Re);
}
function ar(s) {
  return s.join(Re);
}
function Ge(s, e = null, t = !1) {
  if (!s)
    return { artist: null, track: null };
  const [r, a] = Te(s, e, t);
  return { artist: r, track: a };
}
const Lt = /^[A-Z][1-9]\.? /;
function ir(s) {
  return s !== null ? s.replace(Lt, "") : null;
}
function or(s, e = null, t = !1) {
  const [r, a] = Te(s, e, t);
  return { artist: r, album: a };
}
function Ot(s, e = "/", t = !1) {
  if (s === null)
    return {
      currentTime: void 0,
      duration: void 0
    };
  const [r, a] = Te(s, [e], t).map(
    (i) => Ve(i)
  );
  return { currentTime: r, duration: a };
}
function Te(s, e, t = !1) {
  let r = null, a = null;
  if (s) {
    const i = Pt(s, e);
    i !== null && (r = s.substr(0, i.index), a = s.substr(i.index + i.length), t && ([a, r] = [r, a]));
  }
  return [r, a];
}
function Ut(s) {
  return typeof s != "number" || isNaN(s) || !isFinite(s) ? null : Math.round(s);
}
function Mt(s) {
  if (!s)
    return null;
  const e = /url\((["']?)(.*)\1\)/.exec(s);
  return e ? e[2].trim() : null;
}
function _t(s, e) {
  let t = 0, r = setTimeout(() => {
  }, 0);
  return () => {
    const a = Date.now(), i = e - (a - t);
    if (i <= 0)
      return t = a, s();
    clearTimeout(r), r = setTimeout(() => {
      t = Date.now(), s();
    }, i);
  };
}
function ye(s) {
  return !(s && s.artist && s.track);
}
function ae(s, e, t) {
  if (!e || !Array.isArray(t))
    return s;
  for (const r of t)
    !s[r] && e[r] && (s[r] = e[r]);
  return s;
}
function Dt(s) {
  if (!(s && s.metadata))
    return null;
  const { artist: e, album: t, title: r, artwork: a } = s.metadata, i = r;
  let n = null;
  if (a?.length > 0) {
    const { src: h } = a[a.length - 1];
    n = h;
  }
  return { artist: e, track: i, album: t, trackArt: n };
}
function M(s, e = null) {
  if (s === null)
    return e;
  const t = z(s);
  if (!t)
    return e;
  for (const r of t) {
    const a = r.innerText;
    if (a)
      return a;
  }
  return e;
}
function Ft(s, e, t = null) {
  if (s === null)
    return t;
  const r = z(s);
  if (r) {
    if (r.length === 1)
      return r[0].getAttribute(e);
    for (const a of r) {
      const i = a.getAttribute(e);
      if (i)
        return i;
    }
  }
  return t;
}
function nr(s, e, t) {
  const r = z(s);
  if (r)
    for (const a of r)
      if (typeof e == "string")
        a.addEventListener(e, t);
      else
        for (const i of e)
          a.addEventListener(i, t);
}
function we(s) {
  return Ve(M(s) ?? "");
}
function Nt(s) {
  if (s === null)
    return null;
  const e = z(s);
  if (!e || !e.length)
    return null;
  let t = e[0].getAttribute("src");
  if (!t) {
    const r = ["background-image", "background"], a = window.getComputedStyle(e[0]);
    for (const i of r) {
      const n = a.getPropertyValue(i);
      n && (t = Mt(n));
    }
  }
  return zt(t);
}
function lr(s, e) {
  const t = z(s);
  if (!t)
    return null;
  for (const r of t) {
    const a = Bt(r, e);
    if (a)
      return a;
  }
  return null;
}
function Bt(s, e) {
  return window.getComputedStyle(s).getPropertyValue(e);
}
function cr(s, e) {
  if (s === null)
    return !1;
  const t = z(s);
  if (!t)
    return !1;
  for (const r of t)
    if (r.classList.contains(e))
      return !0;
  return !1;
}
function ur(s) {
  for (const e of s)
    if (e.offsetWidth || e.offsetHeight || e.getClientRects().length)
      return !0;
  return !1;
}
function ie(s) {
  if (!s)
    return !1;
  const e = z(s);
  return (e && ur(e)) ?? !1;
}
function dr(s) {
  const e = z(s);
  return !e || !("value" in e) ? null : e.value;
}
function mr(s, e) {
  return Ft(s, `data-${e}`);
}
function z(s) {
  if (!s)
    return null;
  if (typeof s == "string")
    return document.querySelectorAll(s);
  if (!Array.isArray(s))
    throw new TypeError(`Unknown type of selector: ${typeof s}`);
  for (const e of s) {
    const t = document.querySelectorAll(
      e
    );
    if (t.length > 0)
      return t;
  }
  return null;
}
async function gr(s, e) {
  const t = await E(
    We
  ).get();
  return t && s in t && e in t[s] ? t[s][e] : (j(`Option ${e} for connector ${s} not found`, "warn"), !1);
}
function zt(s) {
  return s ? s.startsWith("//") ? location.protocol + s : s.match(/^\/(?!\/)/g) ? location.origin + s : s : null;
}
function $t(s) {
  const e = document.createElement("script");
  e.src = s, e.onload = function() {
    const t = this;
    t.parentNode?.removeChild(t);
  }, (document.head || document.documentElement).appendChild(e);
}
const qt = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?.*v=))([^#&?]*).*/, Ke = "Provided to YouTube", Ht = "Auto-generated by YouTube.", Vt = " · ", Gt = [
  // Artist "Track", Artist: "Track", Artist - "Track", etc.
  {
    pattern: /(.+?)([\s:—-])+\s*"(.+?)"/,
    groups: { artist: 1, track: 3 }
  },
  // Artist「Track」 (Japanese tracks)
  {
    pattern: /(.+?)[『｢「](.+?)[」｣』]/,
    groups: { artist: 1, track: 2 }
  },
  // Track (... by Artist)
  {
    pattern: /(\w[\s\w]*?)\s+\([^)]*\s*by\s*([^)]+)+\)/,
    groups: { artist: 2, track: 1 }
  }
];
function hr(s) {
  let e = null, t = null;
  if (!s)
    return { artist: e, track: t };
  let r = s.replace(/^((\[[^\]]+\])|(【[^】]+】))\s*-*\s*/i, "");
  r = r.replace(/^\s*([a-zA-Z]{1,2}|[0-9]{1,2})[1-9]?\.\s+/i, ""), r = r.replace(/-\s*([「【『])/, "$1"), r = r.replace(
    /[(［【][^(［【]*?((Music Video)|(MV)|(PV)).*?[】］)]/i,
    ""
  ), r = r.replace(/[(［【]((オリジナル)|(東方)).*?[】］)]+?/, ""), r = r.replace(/((?:Music Video)|MV|PV)([「［【『』】］」])/i, "$2"), r = r.replace(/\s+(MV|PV)$/i, "");
  for (const a of Gt) {
    const i = a.pattern.exec(r);
    if (i) {
      e = i[a.groups.artist], t = i[a.groups.track];
      break;
    }
  }
  if (ye({ artist: e, track: t }) && ({ artist: e, track: t } = Ge(r)), ye({ artist: e, track: t })) {
    const a = /(.+?)【(.+?)】/.exec(r);
    a && (e = a[1], t = a[2]);
  }
  return ye({ artist: e, track: t }) && (t = r), { artist: e, track: t };
}
function Kt(s) {
  return !!(s && (s.startsWith(Ke) || s.endsWith(Ht)));
}
function br(s) {
  if (!Kt(s))
    return null;
  const e = s.split(`
`).filter((k) => k.length > 0).filter((k) => !k.startsWith(Ke)), t = e[0], r = e[1], a = t.split(Vt), i = a.length, n = r;
  let h = null, y = null, A = null;
  if (i < 2)
    [y] = a;
  else if (i === 2)
    [y, h] = a;
  else if ([y, h, ...A] = a, !A.some(
    (P) => y?.includes(P)
  )) {
    const P = A.join(Re);
    y = `${y} (feat. ${P})`;
  }
  return { artist: h, track: y, album: n };
}
function fr(s) {
  if (!s)
    return null;
  const e = qt.exec(s);
  return e ? e[7] : null;
}
const Wt = /(.+)\s[:\u2013-\u2015-]\s(.+)/;
function pr(s) {
  if (!s)
    return { artist: null, track: null };
  const e = Wt.exec(s);
  return e && !/.*#\d+.*/.test(e[1]) ? {
    artist: e[1],
    track: e[2]
  } : { artist: null, track: s };
}
function yr(s) {
  const e = document.querySelector(s);
  return e === null ? (j("Failed to resolve originUrl"), document.location.href) : e.getAttribute("href")?.split("?")?.[0] ?? document.location.href;
}
function wr(s, e) {
  if (!s)
    return te("pageActionLoading");
  const t = `${e?.getArtist()} - ${e?.getTrack()}`;
  switch (s) {
    case J:
      return te("infoBoxStateDisallowed", t);
    case _e:
      return te("infoBoxStateError");
    case xt:
      return te("infoBoxStateUnknown");
    default:
      return te(`pageAction${s}`, t);
  }
}
async function jr(s, e, t) {
  const r = await v({
    type: "fetch",
    payload: {
      url: s,
      init: t
    }
  });
  if (!r.ok)
    return {
      ok: !1,
      content: null
    };
  switch (e) {
    case "text":
      return {
        ok: !0,
        content: r.content
      };
    case "json":
      return {
        ok: !0,
        content: JSON.parse(r.content)
      };
    case "html":
      return {
        ok: !0,
        content: new DOMParser().parseFromString(
          r.content,
          "text/html"
        )
      };
  }
}
const Sr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ARTIST_SEPARATOR: Re,
  RECORD_SIDE_REGEX: Lt,
  bindListeners: nr,
  debugLog: j,
  defaultSeparators: Ct,
  escapeBadTimeValues: Ut,
  extractImageUrlFromSelectors: Nt,
  extractUrlFromCssProperty: Mt,
  fetchFromServiceWorker: jr,
  fillEmptyFields: ae,
  findSeparator: Pt,
  getAttrFromSelectors: Ft,
  getCSSProperty: Bt,
  getCSSPropertyFromSelectors: lr,
  getDataFromSelectors: mr,
  getInfoBoxText: wr,
  getMediaSessionInfo: Dt,
  getOption: gr,
  getOriginUrl: yr,
  getSecondsFromSelectors: we,
  getTextFromSelectors: M,
  getValueFromSelectors: dr,
  getYtVideoIdFromUrl: fr,
  hasElementClass: cr,
  injectScriptIntoDocument: $t,
  isArtistTrackEmpty: ye,
  isElementVisible: ie,
  isYtVideoDescriptionValid: Kt,
  joinArtistStrings: ar,
  joinArtists: rr,
  normalizeUrl: zt,
  parseYtVideoDescription: br,
  processSoundCloudTrack: pr,
  processYtVideoTitle: hr,
  queryElements: z,
  removeRecordSide: ir,
  scArtistTrackRe: Wt,
  splitArtistAlbum: or,
  splitArtistTrack: Ge,
  splitString: Te,
  splitTimeInfo: Ot,
  stringToSeconds: Ve,
  throttle: _t,
  ytDescFirstLine: Ke,
  ytDescLastLine: Ht,
  ytDescSeparator: Vt,
  ytTitleRegExps: Gt,
  ytVideoIdRegExp: qt
}, Symbol.toStringTag, { value: "Module" }));
var b = /* @__PURE__ */ ((s) => (s.RESULT_OK = "ok", s.RESULT_IGNORE = "ignored", s.ERROR_AUTH = "error-auth", s.ERROR_OTHER = "error-other", s))(b || {}), De = /* @__PURE__ */ ((s) => (s.SUCCESSFUL = "success", s.IGNORED = "ignored", s.ERROR = "error", s.DISALLOWED = "disallowed", s.INVALID = "invalid", s))(De || {});
function Ar(s, e) {
  for (const t of s)
    if (t[e] === b.RESULT_IGNORE)
      return "ignored";
  for (const t of s)
    if (t[e] !== b.RESULT_OK)
      return "error";
  return "success";
}
const dt = 3e3;
class Jt {
  // V extends DataModels[K], T extends Record<K, V>
  storage;
  namespace;
  requests = [];
  autoIncrement = 0;
  emitter = new Et();
  /**
  * interval to ensure the locking doesnt get stuck permanently
  */
  interval = setInterval(() => {
    this.unlock();
  }, dt);
  /**
  * @param storage - StorageArea object
  * @param namespace - Storage namespace
  */
  constructor(e, t) {
    this.storage = e, this.namespace = t;
  }
  unlock() {
    this.requests = this.requests.slice(1), this.emitter.emit("updateLock", this.requests[0]), clearInterval(this.interval), this.interval = setInterval(() => {
      this.unlock();
    }, dt);
  }
  /**
  * Read data from storage, don't respect locking
  * @returns Storage data
  */
  async get() {
    const e = await this.storage.get();
    return e && this.namespace in e ? e[this.namespace] : null;
  }
  /**
  * Read data from storage, respect locking
  * @returns Storage data
  */
  async getLocking() {
    return await new Promise((t) => {
      const r = this.autoIncrement++;
      if (this.requests.push(r), this.requests[0] === r) {
        t(!0);
        return;
      }
      const a = (i) => {
        i === r && (t(!0), this.emitter.off("updateLock", a));
      };
      this.emitter.on("updateLock", a);
    }), this.get();
  }
  /**
  * Save data to storage, don't lock storage
  * @param data - Data to save
  */
  async set(e) {
    const t = {
      [this.namespace]: e
    };
    await this.storage.set(t);
  }
  /**
  * Save data to storage, and lock storage
  * @param data - Data to save
  */
  async setLocking(e) {
    try {
      await this.set(e);
    } catch (t) {
      j(t, "warn");
    }
    this.unlock();
  }
  /**
  * Extend saved data by given one.
  * @param data - Data to add
  */
  async update(e) {
    const t = await this.getLocking(), r = Object.assign(t ?? {}, e);
    await this.setLocking(r);
  }
  /**
  * Log storage data to console output.
  * @param hiddenKeys - Array of keys should be hidden
  */
  /* istanbul ignore next */
  async debugLog(e = []) {
    const t = await this.get(), a = JSON.stringify(t, (i, n) => e.includes(i) ? Tt(n) : n, 2);
    location?.protocol === "chrome-extension:" && j(`storage.${this.namespace} = ${a}`, "info");
  }
  /**
  * Clear storage.
  */
  async clear() {
    await this.storage.remove(this.namespace);
  }
}
const R = 0, Y = 1, We = "Connectors", Yt = "ConnectorsOverrideOptions", Qt = "customPatterns", kr = "Notifications", Zt = "BlockedTags", je = "LocalCache", vr = "NativeScrobblerNotification", Xt = "Blocklists", Je = "Options", Rr = "StateManagement", Ye = "DisabledTabs", Fe = "RegexEdits", Ne = "ScrobbleCache", Tr = "Core", Er = {
  [We]: Y,
  [Yt]: Y,
  [Qt]: Y,
  [kr]: Y,
  [Je]: Y,
  LastFM: R,
  LibreFM: R,
  ListenBrainz: R,
  Maloja: R,
  Webhook: R,
  Pleroma: R,
  [vr]: R,
  [Xt]: R,
  [je]: R,
  [Fe]: R,
  [Ne]: R,
  [Zt]: R,
  [Tr]: R,
  [Rr]: R,
  [Ye]: R
};
function E(s) {
  switch (Er[s]) {
    case Y:
      return xr(s);
    case R:
      return le(s);
    default:
      throw new Error(`Unknown storage namespace: ${s}`);
  }
}
function Ir(s) {
  return le(s);
}
function le(s) {
  const e = x.storage.local;
  return new Jt(e, s);
}
function xr(s) {
  const e = x.storage.sync || x.storage.local;
  return new Jt(e, s);
}
const Cr = E(Qt);
function Pr() {
  return Cr.get();
}
async function Lr(s) {
  const e = await Pr() || {};
  for (const t of He) {
    const r = t.matches || [];
    e[t.id] && r.push(...e[t.id]);
    for (const a of r)
      if (Cs(s, a))
        return t;
  }
  return null;
}
function Or(s) {
  if (!Array.isArray(s))
    throw new TypeError(`Invalid 'fields' argument: expected 'string[]', got '${typeof s}'`);
  if (s.length === 0)
    throw new Error("Invalid 'fields' argument: received an empty array");
  for (const e of s) {
    if (typeof e != "string")
      throw new TypeError(`Invalid field: expected 'string', got '${typeof e}'`);
    if (!e)
      throw new TypeError("Invalid field: expected 'string', got an empty string");
  }
}
function Ur(s) {
  if (!s)
    throw new TypeError("No filter set is specified!");
  if (typeof s != "object")
    throw new TypeError(`Invalid filter set: expected 'object', got '${typeof s}'`);
  for (const e in s)
    es(s[e]);
}
function es(s) {
  Array.isArray(s) ? Mr(s) : ts(s);
}
function Mr(s) {
  s.forEach(ts);
}
function ts(s) {
  if (typeof s != "function")
    throw new TypeError(`Invalid filter function: expected 'function', got '${typeof s}'`);
}
function ss(s) {
  return new $(s);
}
function rs(s, e) {
  return Or(s), es(e), s.reduce((t, r) => (t[r] = e, t), {});
}
class $ {
  /**
   * @constructor
   *
   * @param filterSet Set of filters
   *
   * @throws Throw an error if no filter set is specified
   */
  constructor(e) {
    this.mergedFilterSet = {}, this.appendFilters(e);
  }
  /**
   * Filter the field value using filters for the given field.
   *
   * @param field Metadata field
   * @param fieldValue Field value to be filtered
   *
   * @return Filtered string
   *
   * @throws Throw an error if an invalid field is specified
   */
  filterField(e, t) {
    if (e in this.mergedFilterSet)
      return this.filterText(t, this.mergedFilterSet[e]);
    throw new TypeError(`Invalid filter field: ${e}`);
  }
  /**
   * Append a new filter set.
   *
   * @param filterSet Set of filters
   *
   * @return Current instance
   */
  append(e) {
    return this.appendFilters(e), this;
  }
  /**
   * Extend the filter by a filter set from a given filter.
   *
   * @param filter Filter object
   *
   * @return Current instance
   */
  extend(e) {
    if (!e)
      throw new TypeError("No filter is specified!");
    if (!(e instanceof $))
      throw new TypeError(`Invalid filter: expected 'MetadataFilter', got '${typeof e}'`);
    return this.appendFilters(e.mergedFilterSet), this;
  }
  /**
   * Check if the filter contains filter functions for a given field.
   *
   * @param field Field to check
   *
   * @return Check result
   */
  canFilterField(e) {
    return e in this.mergedFilterSet;
  }
  /**
   * Return a list of fields that the filter can filter.
   *
   * @return List of fields
   */
  getFields() {
    return Object.keys(this.mergedFilterSet);
  }
  /**
   * Filter text using given filters.
   *
   * @param text String to be filtered
   * @param filters Array of filter functions
   *
   * @return Filtered string
   */
  filterText(e, t) {
    return e && t.reduce((r, a) => a(r), e);
  }
  /**
   * Wrap given filters into array of filters, if needed.
   *
   * @param filters Array of filter functions or filter function
   *
   * @return Array of filter functions
   */
  wrapFiltersIntoArray(e) {
    return Array.isArray(e) ? e : [e];
  }
  /**
   * Add given filters to current ones.
   *
   * @param filterSet Set of filters
   *
   * @throws Throw an error if a filter function is not a function
   */
  appendFilters(e) {
    Ur(e);
    for (const t in e) {
      t in this.mergedFilterSet || (this.mergedFilterSet[t] = []);
      const r = this.wrapFiltersIntoArray(e[t]);
      this.mergedFilterSet[t].push(...r);
    }
  }
}
const _r = [
  // (Explicit) or [Explicit]
  { source: /\s[([]Explicit[)\]]/i, target: "" },
  // (Clean) or [Clean]
  { source: /\s[([]Clean[)\]]/i, target: "" }
], Dr = [
  // [Feat. Artist] or (Feat. Artist)
  { source: /\s[([]feat. .+[)\]]/i, target: "" },
  { source: /\s(feat. .+)/i, target: "" }
], Fr = [
  // Track - Live
  // Track - Live at
  { source: /\s-\sLive(\s.+)?$/, target: "" },
  // Track (Live)
  { source: /\s[([]Live[)\]]$/, target: "" }
], Nr = [
  // [Feat. Artist] or (Feat. Artist) -> Feat. Artist
  { source: /\s[([](feat. .+)[)\]]/i, target: " $1" }
], Br = [
  // Party In the CIA (Parody of "Party In The U.S.A." by Miley Cyrus)
  { source: /\s\(Parody of ".*" by .*\)$/, target: "" },
  // White & Nerdy (Parody of "Ridin'" by Chamillionaire feat. Krayzie Bone)
  { source: /\s\(Parody of ".*" by .* feat\. .*\)$/, target: "" },
  // The Saga Begins (Lyrical Adaption of "American Pie")
  { source: /\s\(Lyrical Adaption of ".*"\)$/, target: "" }
], zr = [
  // Album Title Re-issue
  { source: /\sRe-?issue$/i, target: "" },
  // Album Title [Whatever Re-issue Whatever]
  { source: /\s\[.*?Re-?issue.*?\]/i, target: "" },
  // Album Title (Whatever Re-issue Whatever)
  { source: /\s\(.*?Re-?issue.*?\)/i, target: "" }
], $r = [
  // Ticket To Ride - Live / Remastered
  { source: /Live\s\/\sRemastered/, target: "Live" },
  // Mothership (Remastered)
  // Let It Be (Remastered 2009)
  // How The West Was Won [Remastered]
  // Ride the Lightning (Deluxe Remaster)
  // ...And Justice For All (Remastered Deluxe Box Set)
  { source: /\s[([].*Re-?[Mm]aster(ed)?.*[)\]]$/, target: "" },
  // Outside The Wall - 2011 - Remaster
  // China Grove - 2006 Remaster
  // Easy Living - 2003 Remastered
  // Learning To Fly - 2001 Digital Remaster
  // Red Right Hand - 2011 Remastered Version
  { source: /\s-\s\d{4}(\s-)?\s.*Re-?[Mm]aster(ed)?.*$/, target: "" },
  // Here Comes The Sun - Remastered
  // 1979 - Remastered 2012
  // 1979 - Remastered Version
  { source: /\s-\sRe-?[Mm]aster(ed)?.*$/, target: "" },
  // Wish You Were Here [Remastered] (Remastered Version)
  { source: /\s\[Remastered\]\s\(Remastered\sVersion\)$/, target: "" }
], qr = [
  // "- X Remix" -> "(X Remix)" and similar
  {
    source: /-\s(.+?)\s((Re)?mix|edit|dub|mix|vip|version)$/i,
    target: "($1 $2)"
  },
  { source: /-\s(Remix|VIP|Instrumental)$/i, target: "($1)" }
], Hr = [
  // Leftovers after e.g. (official video)
  { source: /\(+\s*\)+/, target: "" },
  // trim starting white chars and dash
  { source: /^[/,:;~\s"-]+/, target: "" },
  // trim trailing white chars and dash
  { source: /[/,:;~\s"-]+$/, target: "" },
  // remove multiple spaces
  { source: /\u0020{1,}/, target: " " }
], Vr = [
  { source: /(Various Artists).+/, target: "$1" }
], Gr = [
  // Love Will Come To You (Album Version)
  { source: /\s[([]Album Version[)\]]$/, target: "" },
  // I Melt With You (Rerecorded)
  // When I Need You [Re-Recorded]
  { source: /\s[([]Re-?recorded[)\]]$/, target: "" },
  // Your Cheatin' Heart (Single Version)
  { source: /\s[([]Single Version[)\]]$/, target: "" },
  // All Over Now (Edit)
  { source: /\s[([]Edit[)\]]$/, target: "" },
  // (I Can't Get No) Satisfaction - Mono Version
  { source: /\s-\sMono Version$/, target: "" },
  // Ruby Tuesday - Stereo Version
  { source: /\s-\sStereo Version$/, target: "" },
  // Pure McCartney (Deluxe Edition)
  { source: /\s\(Deluxe Edition\)$/, target: "" },
  // Ace of Spades (Expanded Edition)
  // Overkill (Expanded Bonus Track Edition)
  // On Parole (Expanded and Remastered)
  { source: /\s[([]Expanded.*[)\]]$/, target: "" },
  // Sound of White Noise - Expanded Edition
  { source: /\s-\sExpanded Edition$/, target: "" },
  // 6 Foot 7 Foot (Explicit Version)
  { source: /\s[([]Explicit Version[)\]]/i, target: "" },
  // No Remorse (Bonus Track Edition)
  { source: /\s[([]Bonus Track Edition[)\]]/i, target: "" },
  // Peace Sells...But Who's Buying (25th Anniversary)
  // Persistence of Time (30th Anniversary Remaster)
  { source: /\s[([]\d+th\sAnniversary.*[)\]]/i, target: "" },
  // 6 Foot 7 Foot - Original
  { source: /\s-\sOriginal$/i, target: "" },
  // California Love - Original Version
  // Personal Jesus - Original Single Version
  // Prince of the Moment - Original 7" Version
  // YMCA - Original Version 1978
  { source: /\s-\sOriginal.*Version(\s\d{4})?$/i, target: "" }
], Kr = [
  // Trim whitespaces
  { source: /^\s+|\s+$/g, target: "" },
  // **NEW**
  { source: /\*+\s?\S+\s?\*+$/, target: "" },
  // [Whatever]
  { source: /\[[^\]]+\]/, target: "" },
  // 【Whatever】
  { source: /【[^\]]+】/, target: "" },
  // （Whatever）
  { source: /（[^\]]+）/, target: "" },
  // (Whatever Version)
  { source: /\([^)]*version\)$/i, target: "" },
  // Video extensions
  { source: /\.(avi|wmv|mpg|mpeg|flv)$/i, target: "" },
  // (Lyrics Video)
  { source: /\(.*lyrics?\s*(video)?\)/i, target: "" },
  // ((Official)? (Track)? Stream)
  { source: /\((of+icial\s*)?(track\s*)?stream\)/i, target: "" },
  // ((Official)? (Music)? Video|Audio)
  { source: /\((of+icial\s*)?(music\s*)?(video|audio)\)/i, target: "" },
  // - (Official)? (Music)? Video|Audio
  { source: /-\s(of+icial\s*)?(music\s*)?(video|audio)$/i, target: "" },
  // ((Whatever)? Album Track)
  { source: /\(.*Album\sTrack\)/i, target: "" },
  // (Official)
  { source: /\(\s*of+icial\s*\)/i, target: "" },
  // (1999)
  { source: /\(\s*[0-9]{4}\s*\)/i, target: "" },
  // (HD) / (HQ)
  { source: /\(\s*(HD|HQ)\s*\)$/, target: "" },
  // HD / HQ
  { source: /(HD|HQ)\s?$/, target: "" },
  // Video Clip Officiel / Video Clip Official
  { source: /(vid[\u00E9e]o)?\s?clip\sof+ici[ae]l/i, target: "" },
  // Offizielles
  { source: /of+iziel+es\s*video/i, target: "" },
  // Video Clip
  { source: /vid[\u00E9e]o\s?clip/i, target: "" },
  // Clip
  { source: /\sclip/i, target: "" },
  // Full Album
  { source: /full\s*album/i, target: "" },
  // (Live)
  { source: /\(live.*?\)$/i, target: "" },
  // | Something
  { source: /\|.*$/i, target: "" },
  // Artist - The new "Track title" featuring someone
  { source: /^(|.*\s)"(.{5,})"(\s.*|)$/, target: "$2" },
  // 'Track title'
  { source: /^(|.*\s)'(.{5,})'(\s.*|)$/, target: "$2" },
  // (*01/01/1999*)
  { source: /\(.*[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2,4}.*\)/i, target: "" },
  // Sub Español
  { source: /sub\s*español/i, target: "" },
  // (Letra)
  { source: /\s\(Letra\)/i, target: "" },
  // (En vivo)
  { source: /\s\(En\svivo\)/i, target: "" },
  // Sub Español
  { source: /sub\s*español/i, target: "" }
], Wr = [
  { source: /\s(& .+)/i, target: "" },
  { source: /\s(x .+)/i, target: "" }
], mt = {
  "&": /&amp;/g,
  "<": /&lt;/g,
  ">": /&gt;/g,
  '"': /&quot;/g
};
function as(s) {
  return s.includes(" feat. ") ? s.split(" feat. ")[0] : s;
}
function is(s) {
  let e = s;
  for (const t in mt) {
    const r = mt[t];
    e = e.replace(r, t);
  }
  return e = e.replace(/&#x([a-fA-f0-9]+);/g, (t, r) => {
    const a = parseInt(r, 16);
    return String.fromCharCode(a);
  }), e = e.replace(/&#(\d+);/g, (t, r) => String.fromCharCode(r)), e;
}
function C(s, e) {
  return e.reduce((t, r) => {
    const { source: a, target: i } = r;
    return t.replace(a, i);
  }, s);
}
function V(s) {
  return C(s, qr);
}
function Jr(s) {
  return C(s, Vr);
}
function Be(s) {
  return C(s, Nr);
}
function ze(s) {
  return C(s, _r);
}
function os(s) {
  return C(s, Dr);
}
function Yr(s) {
  return C(s, Wr);
}
function G(s) {
  return C(s, Fr);
}
function ns(s) {
  return C(s, Br);
}
function ls(s) {
  return C(s, zr);
}
function B(s) {
  return C(s, $r);
}
function Z(s) {
  return C(s, Gr);
}
function Qr(s) {
  return s.replace(/[\u200B-\u200D\uFEFF]/g, "");
}
function cs(s) {
  return s.replace(/\u00a0/g, " ");
}
function us(s) {
  return C(s, [
    ...Kr,
    ...Hr
  ]);
}
function Zr(s) {
  return s.replace(/[\u2018\u2019]/g, "'").replace(/[\u201c\u201d]/g, '"');
}
function Xr() {
  return new $({ track: us });
}
function ea() {
  return new $({
    track: B,
    album: B
  });
}
function ta() {
  return new $({
    track: [B, ns, V, G],
    album: [
      B,
      V,
      G,
      ls,
      Z
    ]
  });
}
function sa() {
  return new $({
    artist: [Be],
    track: [
      ze,
      os,
      B,
      V,
      Z,
      G
    ],
    album: [
      is,
      ze,
      B,
      V,
      Z,
      G
    ],
    albumArtist: [Be, as]
  });
}
function ra() {
  return new $({
    track: [B, V, Z, G],
    album: [B, V, Z, G]
  });
}
const aa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  MetadataFilter: $,
  albumArtistFromArtist: as,
  createAmazonFilter: sa,
  createFilter: ss,
  createFilterSetForFields: rs,
  createRemasteredFilter: ea,
  createSpotifyFilter: ta,
  createTidalFilter: ra,
  createYouTubeFilter: Xr,
  decodeHtmlEntities: is,
  filterWithFilterRules: C,
  fixTrackSuffix: V,
  fixVariousArtists: Jr,
  normalizeFeature: Be,
  removeAdditionalArtists: Yr,
  removeCleanExplicit: ze,
  removeFeature: os,
  removeLive: G,
  removeParody: ns,
  removeReissue: ls,
  removeRemastered: B,
  removeVersion: Z,
  removeZeroWidth: Qr,
  replaceNbsp: cs,
  replaceSmartQuotes: Zr,
  youtube: us
}, Symbol.toStringTag, { value: "Module" }));
class ds {
  /**
  * Meta of connector
  */
  meta;
  /**
  * Selector of an element containing artist name.
  *
  * Only applies when default implementation of
  * `BaseConnector.getArtist` is used.
  */
  artistSelector = null;
  /**
  * Selector of an element containing track name.
  *
  * Only applies when default implementation of
  * `BaseConnector.getTrack` is used.
  */
  trackSelector = null;
  /**
  * Selector of an element containing album name.
  *
  * Only applies when default implementation of
  * `BaseConnector.getAlbum` is used.
  */
  albumSelector = null;
  /**
  * Selector of an element containing the album artist.
  *
  * Only applies when default implementation of
  * `BaseConnector.getAlbumArtist` is used.
  */
  albumArtistSelector = null;
  /**
  * Selector of an element containing track current time in h:m:s format.
  *
  * Only applies when default implementation of
  * `BaseConnector.getCurrentTime` is used.
  */
  currentTimeSelector = null;
  /**
  * Selector of an element containing track remaining time in h:m:s format.
  *
  * Note that the remaining time is not used directly, but is used for
  * calculating current time or duration (it depends on what is missing
  * on a website).
  *
  * Use this property if the website has either current time or duration.
  * Do not override this property if the website contains both current time
  * and duration.
  *
  * Only applies when default implementation of
  * `BaseConnector.getRemainingTime` is used.
  */
  remainingTimeSelector = null;
  /**
  * Selector of an element containing track duration in h:m:s format.
  *
  * Only applies when default implementation of
  * `BaseConnector.getDuration` is used.
  */
  durationSelector = null;
  /**
  * Selector of an element containing both current time and duration.
  * `BaseConnector.currentTimeSelector` and `BaseConnector.durationSelector`
  * properties have priority over this, and `BaseConnector.timeInfoSelector`
  * is used only if any of the previous returns empty result.
  *
  * Only applies when default implementation of
  * `BaseConnector.getTimeInfo` is used.
  */
  timeInfoSelector = null;
  /**
  * Selector of an element containing both artist and track name.
  *
  * `BaseConnector.artistSelector` and `BaseConnector.trackSelector`
  * properties have priority over this,
  * and `BaseConnector.artistTrackSelector` is used only if any of
  * the previous returns empty result.
  *
  * Only applies when default implementation of
  * `BaseConnector.getArtistTrack` is used.
  */
  artistTrackSelector = null;
  /**
  * Selector of a play button element. If the element is not visible,
  * the playback is considered to be playing.
  *
  * Should not be used if Connector#pauseButtonSelector is defined.
  *
  * Only applies when default implementation of
  * `BaseConnector.isPlaying` is used.
  */
  playButtonSelector = null;
  /**
  * Selector of a pause button element. If the element is visible,
  * the playback is considered to be playing.
  *
  * Should not be used if `Connector.playButtonSelector` is defined.
  *
  * Only applies when default implementation of
  * `BaseConnector.isPlaying` is used.
  */
  pauseButtonSelector = null;
  /**
  * Selector of a container closest to the player. Changes on this element
  * will be observed and dispatched to `BaseConnector.onStateChanged`.
  *
  * Set this selector to use with default observing or
  * set up some custom detection of player state changing.
  */
  playerSelector = null;
  /**
  * This selector is used to determine where to inject the infobox
  */
  scrobbleInfoLocationSelector = null;
  /**
  * Styles to apply to the infobox
  * this is in camelCase so its fontSize, not font-size
  */
  scrobbleInfoStyle = {
    display: "flex",
    gap: "0.5em",
    alignItems: "center"
  };
  /**
  * Function that gets a unique ID for channel/user blocklist.
  *
  * Has to be specified if usesBlocklist is set to true in connectors.ts.
  * If connectors.ts does not have usesBlocklist set to true, this should be null.
  */
  getChannelId = null;
  /**
  * Selector of an element containing channel label.
  *
  * Only applies when default implementation of
  * {@link getChannelLabel} is used.
  */
  channelLabelSelector = null;
  /**
  * Function that gets a label for the channel of ID fetched by {@link getChannelId}.
  *
  * This is the name that will be displayed to the user, and has no bearing on internal logic.
  * If not specified, {@link getChannelId} will be used.
  */
  getChannelLabel = () => M(this.channelLabelSelector);
  /**
  * Function that gets ID and label for a channel.
  *
  * A connector can specify this in lieu of {@link getChannelId}, as this is basically combo of
  * both {@link getChannelId} and {@link getChannelLabel}
  *
  * You may return null in this function, but if you return a result for one property,
  * you must return a result for both properties, even if the label is just
  * a duplicate of the id.
  */
  getChannelInfo = () => {
    const e = this.getChannelId?.();
    return e ? {
      id: e,
      label: this.getChannelLabel?.() || e
    } : null;
  };
  /**
  * Selector of element contains a track art of now playing song.
  * Default implementation looks for track art URL in `src` attribute or
  * `background-image` (`background`) CSS property of given element.
  *
  * Used for the notification service and "Now playing" popup.
  *
  * If not specified will fall back to Last.fm API.
  */
  trackArtSelector = null;
  /**
  * Priority of getters:
  * 1) getters (`Connector.getArtist` etc.);
  * 2) `Connector.getArtistTrack` and `Connector.getTimeInfo`;
  * 3) `Connector.getTrackInfo`.
  */
  /**
  * Default implementation of artist name lookup by selector.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Song artist
  */
  getArtist;
  /**
  * Default implementation of track name lookup by selector.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Song title
  */
  getTrack;
  /**
  * Default implementation of album name lookup by selector.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Song album
  */
  getAlbum;
  /**
  * Default implementation of album artist name lookup by selector.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Song album artist
  */
  getAlbumArtist;
  /**
  * Default implementation of track duration lookup. If this method returns
  * an empty result, the track duration loaded from L.FM will be used.
  *
  * While it's not generally needed, override this method for more
  * complex behaviour.
  *
  * @returns Track length in seconds
  */
  getDuration;
  /**
  * Default implementation of track current time lookup by selector with
  * some basic parsing.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Number of seconds passed from the beginning of the track
  */
  getCurrentTime;
  /**
  * Default implementation of track remaining time lookup by selector with
  * some basic parsing.
  *
  * Note that the remaining time is not used directly, but is used for
  * calculating current time or duration (it depends on what is missing
  * on a website).
  *
  * Use this property if the website has either current time or duration.
  * Do not override this property if the website contains both current time
  * and duration.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Number of remaining seconds
  */
  getRemainingTime;
  /**
  * Default implementation of current time and duration lookup by selector.
  * This method is called only when `BaseConnector.getCurrentTime` and
  * `BaseConnector.getDuration` return an empty result.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Object containing current time and duration info
  */
  getTimeInfo;
  /**
  * Default implementation of artist and track name lookup by selector.
  * This method is called only when either `BaseConnector.getArtist` or
  * `BaseConnector.getTrack` returns an empty result.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Object containing artist and track information
  */
  getArtistTrack;
  /**
  * Get object contains track info.
  * See documentation of `defaultState` variable for supported properties.
  *
  * Use this function to get several properties
  * from a single source per one call.
  *
  * @returns Track info
  */
  getTrackInfo = () => null;
  /**
  * Returns a unique identifier of current track. The identifier does not
  * have to be in any specific format. The uniqueness is only needed within
  * the scope of the connector (values are internally namespaced by connector
  * names).
  *
  * The value is used for storing the track metadata and reusing them later.
  * Connectors which will implement this method will allow its users to store
  * custom metadata where otherwise the track would be unrecognized.
  *
  * It is strongly recommended for connector authors to implement this method
  * when possible.
  *
  * @returns Song unique ID
  */
  getUniqueID = () => null;
  /**
  * Default implementation of check for active playback by play/pause button
  * selector. The state of playback allows the core to detect pauses.
  *
  * Override this method for custom behaviour.
  *
  * @returns True if song is now playing; false otherwise
  */
  isPlaying;
  /**
  * Default implementation to check whether a podcast is playing. Only has an
  * effect if the user has opted to disable podcast scrobbling.
  *
  * @returns True if the current track is a podcast; false otherwise
  */
  isPodcast = () => !1;
  /**
  * Default implementation used to get the track art URL from the selector.
  *
  * Override this method for more complex behaviour.
  *
  * @returns Track art URL
  */
  getTrackArt;
  /**
  * Default implementation of a check if given track art URL
  * equals default one. Default track arts are not used by the extension.
  *
  * Override this method to exclude default track arts.
  *
  * @param trackArtUrl - Track art URL
  * @returns Check result
  */
  isTrackArtDefault = () => !1;
  /**
  * Button to love/like a song on listening service.
  *
  * Note: for safety, you should generally implement BOTH loveButtonSelector AND unloveButtonSelector.
  * Ensure there is a direct transition between one to the other with zero time where neither matches.
  * Web scrobbler not discovering either for a bit will cause it not to to love/unlove.
  */
  loveButtonSelector = null;
  /**
  * Button to unlove/unlike a song on listening service.
  *
  * Note: for safety, you should generally implement BOTH loveButtonSelector AND unloveButtonSelector.
  * Ensure there is a direct transition between one to the other with zero time where neither matches.
  * Web scrobbler not discovering either for a bit will cause it not to to love/unlove.
  */
  unloveButtonSelector = null;
  /**
  * A check to see if song is loved or not.
  * If this changes from false to true or vice-versa the song
  * will be loved/unloved on scrobbling services.
  *
  * @returns True if song is liked; false otherwise
  */
  isLoved = () => {
    if (this.loveButtonSelector) {
      if (ie(this.loveButtonSelector))
        return !1;
      if (!this.unloveButtonSelector)
        return !0;
    }
    if (this.unloveButtonSelector) {
      if (ie(this.unloveButtonSelector))
        return !0;
      if (!this.loveButtonSelector)
        return !1;
    }
    return null;
  };
  /**
  * Default implementation of a check to see if a state change is allowed.
  * MutationObserver will ignore mutations while this function returns false.
  *
  * Override this method to allow certain states to be ignored, for example
  * if an advert is playing.
  *
  * @returns True if state change is allowed; false otherwise
  */
  isStateChangeAllowed = () => !0;
  /**
  * Default implementation of a check to see if scrobbling is allowed.
  * The connector resets current state if this function returns non-falsy state.
  * The string content of non-falsy state determines the reason to show user for non-scrobbling.
  *
  * Override this method to allow certain states to be reset.
  *
  * @returns null/undefined if state change is allowed; {@link DisallowedReason} otherwise
  */
  scrobblingDisallowedReason = () => null;
  /**
  * Function that will be called when the connector is injected and
  * the starter is configured to listen to state change.
  *
  * Override this method for more complex behaviour.
  */
  onReady = () => {
  };
  /**
  * Called then injected script emits event.
  * See `Connector.injectScript` for details.
  *
  * Override this method to get data from injected scripts.
  *
  * @param event - Event object
  */
  onScriptEvent = () => {
  };
  /**
  * Default metadata filter to be used if none other is specified
  */
  defaultFilter = ss(
    rs(
      ["artist", "track", "album", "albumArtist"],
      [(e) => e.trim(), cs]
    )
  );
  /**
  * Connectors can use, but must not override functions
  * and properties defined below.
  */
  /**
  * Add custom filter to default one. Use this method only to apply
  * custom metadata filters.
  *
  * The given filter will be used first to make sure the default filter
  * is executed after all other filters.
  *
  * @param filter - Filter object
  */
  applyFilter;
  /**
  * Send request to core to reset current state. Should be used if connector
  * has custom state change listener.
  */
  resetState;
  /**
  * Inject custom script into a page.
  *
  * Injected scripts communicate with content scripts
  * using `window.postMessage` function.
  *
  * The format of message is following:
  * \{
  * 	   // required fields
  *	   sender: 'web-scrobbler',
  *	   // optional fields used to exchange data
  *	   foo: bar,
  * 	   bar: baz,
  * \}
  *
  * @param scriptFile - Path to script file
  */
  injectScript = (e) => {
    if (window.webScrobblerScripts || (window.webScrobblerScripts = {}), window.webScrobblerScripts[e])
      return;
    const t = x.runtime.getURL(e);
    $t(t), j(`Injected ${e}`), window.addEventListener(
      "message",
      (r) => {
        typeof r.data != "object" || !("sender" in r.data) || r.data.sender !== "web-scrobbler" || this.onScriptEvent(r);
      }
    ), window.webScrobblerScripts[e] = !0;
  };
  /**
  * Listener for the player state changes. Automatically detects the state,
  * collects the track metadata and communicates with the background script
  * if needed.
  */
  onStateChanged;
  /**
  * Enable support for MediaSession API.
  *
  * The connector will use MediaMetadata to get track info,
  * if Media Session API is available, and MediaMetadata is filled.
  */
  useMediaSessionApi = () => {
    this.isMediaSessionAllowed = "mediaSession" in navigator;
  };
  /**
  * used by {@link BaseConnector.useTabAudibleApi} for async {@link BaseConnector.isPlaying} updates
  */
  isPlayingAsync = !0;
  /**
  * interval being used by {@link BaseConnector.useTabAudibleApi}
  */
  tabAudibleFetchingInterval = null;
  /**
  * Enable using tab audible function for deciding whether song is playing.
  *
  * Polls for audible once a second, this isn't expensive so it's fine.
  *
  * overrides {@link BaseConnector.isPlaying}
  */
  useTabAudibleApi = () => {
    this.isPlaying = () => this.isPlayingAsync, this.tabAudibleFetchingInterval !== null && clearInterval(this.tabAudibleFetchingInterval), this.tabAudibleFetchingInterval = setInterval(() => {
      v({
        type: "isTabAudible",
        payload: void 0
      }).then((e) => {
        this.isPlayingAsync = e, this.onStateChanged();
      }).catch(() => {
        this.isPlayingAsync = !0, this.onStateChanged();
      });
    }, 1e3);
  };
  /**
  * Internal functions, state & API.
  *
  * Connectors must not call functions defined below.
  * Connectors must not override functions and properties defined below.
  */
  /**
  * Default implementation for getting origin URL.
  *
  * @returns The source URL
  */
  getOriginUrl = () => document.location.href;
  /**
  * Boolean flag that indicates whether MediaSession API is supported.
  * This flag is set to true if connector calls `useMediaSessionApi` method.
  * Otherwise, it is set to false.
  */
  isMediaSessionAllowed = !1;
  /**
  * Filter object used to filter song metadata.
  */
  metadataFilter = this.defaultFilter;
  /**
  * Default values of state properties.
  */
  defaultState = {
    track: null,
    artist: null,
    album: null,
    albumArtist: null,
    uniqueID: null,
    duration: null,
    currentTime: null,
    isPlaying: !0,
    trackArt: null,
    isPodcast: !1,
    originUrl: null,
    scrobblingDisallowedReason: null
  };
  mediaSessionFields = [
    "artist",
    "track",
    "album",
    "trackArt"
  ];
  artistTrackFields = ["artist", "track"];
  timeInfoFields = ["duration", "currentTime"];
  /**
  * Gathered info about the current track for internal use.
  */
  currentState = Object.assign({}, this.defaultState);
  /**
  * Filtered info about the current track for internal use.
  */
  filteredState = Object.assign({}, this.defaultState);
  /**
  * Flag indicates the current state is reset by the connector.
  * Used to prevent spamming the controller by empty states.
  */
  isStateReset = !1;
  /**
  * Callback set by the controller to listen on state changes of this connector.
  */
  _controllerCallback = null;
  /**
  * Callback set by the controller to listen on state changes of this connector.
  */
  get controllerCallback() {
    return this._controllerCallback;
  }
  set controllerCallback(e) {
    e(this.getCurrentState()), this._controllerCallback = e;
  }
  /**
  * Callback set by the controller to listen on state changes of this connector.
  */
  _isLovedCallback = null;
  /**
  * Callback set by the controller to listen on state changes of this connector.
  */
  get isLovedCallback() {
    return this._isLovedCallback;
  }
  set isLovedCallback(e) {
    e(this.isLoved() ?? null), this._isLovedCallback = e;
  }
  /**
  * Function for all the hard work around detecting and updating state.
  */
  stateChangedWorker;
  /**
  * Get current state of connector.
  * @returns Current state
  */
  getCurrentState;
  /**
  * Filter changed fields.
  * @param changedFields - List of changed fields
  */
  filterState;
  /**
  * Throttled call for state changed worker.
  */
  stateChangedWorkerThrottled;
  constructor(e) {
    this.meta = e, this.getArtist = () => M(this.artistSelector), this.getTrack = () => M(this.trackSelector), this.getAlbum = () => M(this.albumSelector), this.getAlbumArtist = () => M(this.albumArtistSelector), this.getDuration = () => we(this.durationSelector), this.getCurrentTime = () => we(this.currentTimeSelector), this.getRemainingTime = () => we(this.remainingTimeSelector), this.getTimeInfo = () => Ot(
      M(this.timeInfoSelector)
    ), this.getArtistTrack = () => Ge(
      M(this.artistTrackSelector)
    ), this.isPlaying = () => this.playButtonSelector ? !ie(this.playButtonSelector) : this.pauseButtonSelector ? ie(this.pauseButtonSelector) : !0, this.getTrackArt = () => Nt(this.trackArtSelector), this.applyFilter = (t) => {
      this.metadataFilter = t.extend(this.defaultFilter);
    }, this.resetState = () => {
      this.isStateReset || (this.controllerCallback !== null && this.controllerCallback({}), this.isStateReset = !0);
    }, this.onStateChanged = () => {
      if (!this.isStateChangeAllowed())
        return;
      this.isPlaying() !== this.currentState.isPlaying ? this.stateChangedWorker() : this.stateChangedWorkerThrottled();
    }, this.stateChangedWorker = () => {
      this.isStateReset = !1;
      const t = [], r = this.getCurrentState();
      for (const a in this.currentState) {
        let i;
        const n = a;
        r[n] || r[n] === !1 ? i = r[n] : i = this.defaultState[n];
        const h = this.currentState[n];
        i !== h && (this.currentState[n] = i, t.push(n));
      }
      t.length > 0 && (this.filterState(t), this.controllerCallback !== null && this.controllerCallback(this.filteredState)), this.isLovedCallback?.(this.isLoved() ?? null);
    }, this.getCurrentState = () => {
      const t = {
        albumArtist: this.getAlbumArtist(),
        uniqueID: this.getUniqueID(),
        duration: this.getDuration(),
        currentTime: this.getCurrentTime(),
        isPlaying: this.isPlaying(),
        isPodcast: this.isPodcast(),
        originUrl: this.getOriginUrl(),
        scrobblingDisallowedReason: this.scrobblingDisallowedReason()
      };
      let r = null;
      if (this.isMediaSessionAllowed) {
        const { mediaSession: y } = navigator;
        r = Dt(y);
      }
      r || (r = {
        trackArt: this.getTrackArt(),
        artist: this.getArtist(),
        track: this.getTrack(),
        album: this.getAlbum()
      }), ae(
        t,
        r,
        this.mediaSessionFields
      );
      const a = Math.abs(this.getRemainingTime() ?? 0);
      a && (!t.currentTime && t.duration && (t.currentTime = t.duration - a), !t.duration && t.currentTime && (t.duration = t.currentTime + a));
      const i = this.getTimeInfo();
      ae(t, i, this.timeInfoFields);
      const n = this.getArtistTrack();
      ae(t, n, this.artistTrackFields);
      const h = this.getTrackInfo();
      return h !== null && ae(
        t,
        h,
        Object.keys(this.defaultState)
      ), t;
    }, this.filterState = (t) => {
      for (const r of t) {
        let a = this.currentState[r];
        switch (r) {
          case "albumArtist":
          case "artist":
          case "track":
          case "album": {
            if (a == null) {
              a = this.defaultState[r];
              break;
            }
            a = this.metadataFilter.filterField(
              r,
              a
            ) || this.defaultState[r];
            break;
          }
          case "currentTime":
          case "duration": {
            if (a == null) {
              a = this.defaultState[r];
              break;
            }
            a = Ut(a) || this.defaultState[r];
            break;
          }
          case "trackArt":
            a && this.isTrackArtDefault(a) && (a = null);
            break;
        }
        this.filteredState[r] = a;
      }
    }, this.stateChangedWorkerThrottled = _t(
      this.stateChangedWorker,
      500
    ), setTimeout(() => {
      this.onStateChanged();
    }, 1e3);
  }
}
const L = E(Je), Q = E(
  We
), ke = E(
  Yt
), Qe = "useNotifications", Ze = "useUnrecognizedSongNotifications", Ee = "showInfobox", Ie = "scrobblePodcasts", xe = "autoToggleLove", Ce = "forceRecognize", Xe = "scrobbleRecognizedTracks", Pe = "scrobbleEditedTracksOnly", et = "scrobblePercent", O = "disabledConnectors", ms = "debugLoggingEnabled", tt = "albumGuessingDisabled", gs = "albumGuessingUneditedOnly", st = "albumGuessingAllTracks", hs = {
  [Ce]: !1,
  [Ie]: !0,
  [Qe]: !0,
  [Ze]: !1,
  [Xe]: !0,
  [Pe]: !1,
  [ms]: !1,
  [et]: Rt,
  [Ee]: !0,
  [xe]: !0,
  [tt]: !1,
  [gs]: !0,
  [st]: !1,
  [O]: {}
}, ia = {
  [Ce]: !1,
  [Xe]: !0,
  [Pe]: !1,
  [Ie]: !0,
  [Qe]: !0,
  [Ze]: !1,
  [Ee]: !0,
  [xe]: !0
}, ne = {
  YouTube: {
    scrobbleMusicOnly: !1,
    scrobbleEntertainmentOnly: !1,
    scrobbleMusicRecognisedOnly: !1,
    enableGetTrackInfoFromYtMusic: !1
  }
};
async function oa() {
  const s = { ...hs, ...await L.get() };
  await L.set(s), L.debugLog([O]);
  const e = {
    ...ne,
    ...await Q.get()
  };
  for (const t in ne) {
    const r = t;
    e[r] = {
      ...ne[r],
      ...e[r]
    };
  }
  await Q.set(e), Q.debugLog(), ke.debugLog();
}
async function na() {
  const s = await L.get();
  if (!s)
    throw new Error("No options data found");
  for (const e of Object.keys(s[O])) {
    let t = !1;
    for (const r of He)
      if (r.id === e) {
        t = !0;
        break;
      }
    t || delete s[O][e];
  }
}
async function F(s, e) {
  if (fs(s), e !== void 0) {
    const r = await bs(e, s);
    if (r !== void 0)
      return r;
  }
  return (await L.get())?.[s];
}
async function la(s, e) {
  fs(s), await L.update({ [s]: e });
}
async function ca(s, e) {
  return ps(s), ys(s, e), (await Q.get())?.[s][e];
}
async function ua(s, e, t) {
  ps(s), ys(s, e);
  const r = await Q.get();
  if (!r?.[s])
    throw new Error(`Connector ${s} not found in storage`);
  r[s][e] = t, await Q.set(r);
}
async function bs(s, e) {
  return ma(e) ? (await ke.get())?.[s]?.[e] : void 0;
}
async function da(s, e, t) {
  const r = await ke.get();
  if (!r)
    throw new Error("No connectors override data found");
  r[s] || (r[s] = {}), r[s][e] = t, await ke.set(r);
}
function fs(s) {
  if (!(s in hs))
    throw new Error(`Unknown option key: ${s}`);
  return !0;
}
function ma(s) {
  return s in ia;
}
function ps(s) {
  if (!(s in ne))
    throw new Error(`Unknown connector: ${s}`);
  return !0;
}
function ys(s, e) {
  if (!(e in ne[s]))
    throw new Error(`Unknown connector option key: ${e}`);
  return !0;
}
async function ga(s) {
  const e = await L.get();
  if (!e)
    throw new Error("No options data found");
  return !e[O][s.id];
}
async function ws(s, e) {
  const t = await L.get();
  if (!t)
    throw new Error("No options data found");
  e ? delete t[O][s.id] : t[O][s.id] = !0, await L.set(t);
}
async function ha(s) {
  const e = await L.get();
  if (!e)
    throw new Error("No options data found");
  if (e[O] = {}, !s)
    for (const t of He)
      e[O][t.id] = !0;
  await L.set(e);
}
oa().then(na);
const ba = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ALBUM_GUESSING_ALL_TRACKS: st,
  ALBUM_GUESSING_DISABLED: tt,
  ALBUM_GUESSING_UNEDITED_ONLY: gs,
  AUTO_TOGGLE_LOVE: xe,
  DEBUG_LOGGING_ENABLED: ms,
  DISABLED_CONNECTORS: O,
  FORCE_RECOGNIZE: Ce,
  SCROBBLE_EDITED_TRACKS_ONLY: Pe,
  SCROBBLE_PERCENT: et,
  SCROBBLE_PODCASTS: Ie,
  SCROBBLE_RECOGNIZED_TRACKS: Xe,
  USE_INFOBOX: Ee,
  USE_NOTIFICATIONS: Qe,
  USE_UNRECOGNIZED_SONG_NOTIFICATIONS: Ze,
  getConnectorOption: ca,
  getConnectorOverrideOption: bs,
  getOption: F,
  isConnectorEnabled: ga,
  setAllConnectorsEnabled: ha,
  setConnectorEnabled: ws,
  setConnectorOption: ua,
  setConnectorOverrideOption: da,
  setOption: la
}, Symbol.toStringTag, { value: "Module" }));
class rt {
  /**
  * Get song artist.
  *
  * @returns Song artist
  */
  getArtist() {
    return this.processed.artist || this.parsed.artist;
  }
  /**
  * Get song title.
  *
  * @returns Song title
  */
  getTrack() {
    return this.processed.track || this.parsed.track;
  }
  /**
  * Get song album.
  *
  * @returns Song album
  */
  getAlbum() {
    return this.processed.album || this.parsed.album;
  }
  /**
  * Return song's album artist (Optional)
  * @returns Album artist
  */
  getAlbumArtist() {
    return this.processed.albumArtist || this.parsed.albumArtist;
  }
  /**
  * Returns song's processed or parsed duration in seconds.
  * Parsed duration (received from connector) is preferred.
  *
  * @returns Song duration
  */
  getDuration() {
    return this.parsed.duration || this.processed.duration;
  }
  /**
  * Return the track art URL associated with the song.
  * Parsed track art (received from connector) is preferred.
  *
  * @returns Track art URL
  */
  getTrackArt() {
    return this.parsed.trackArt || this.metadata.trackArtUrl || null;
  }
  /**
  * Get formatted "Artist - Track" string. Return null if song is empty.
  *
  * @returns Formatted string
  */
  getArtistTrackString() {
    return this.isEmpty() ? null : `${this.getArtist() ?? "undefined"} — ${this.getTrack() ?? "undefined"}`;
  }
  /**
  * Get song unique ID.
  *
  * @returns Unique ID
  */
  getUniqueId() {
    return this.parsed.uniqueID;
  }
  /**
  * Get song source URL.
  *
  * @returns source URL.
  */
  getOriginUrl() {
    return this.parsed.originUrl;
  }
  /**
  * Check if song is empty. Empty song means it's missing
  * either artist or track title.
  *
  * @returns True if song is empty; false otherwise
  */
  isEmpty() {
    return !(this.getArtist() && this.getTrack());
  }
  /**
  * Check if song is valid. The song means valid if it's known by
  * scrobbler service or is corrected by the user.
  *
  * @returns True if song is valid; false otherwise
  */
  isValid() {
    return this.flags.isValid || this.flags.isCorrectedByUser;
  }
  /**
  * Check if song equals another song.
  * @param song - Song instance to compare
  * @returns Check result
  */
  equals(e) {
    if (!e || !(e instanceof rt))
      return !1;
    const t = this.getUniqueId(), r = e.getUniqueId();
    return t || r ? t === r : this.getArtist() === e.getArtist() && this.getTrack() === e.getTrack() && this.getAlbum() === e.getAlbum();
  }
  /**
  * Get a string representing the song.
  *
  * @returns String representing the object.
  */
  toString() {
    return JSON.stringify(this, null, 2);
  }
  /**
  * Get song data to send it to different context.
  *
  * @returns Object contain song data
  */
  getCloneableData() {
    return {
      parsed: this.parsed,
      noRegex: this.noRegex,
      processed: this.processed,
      metadata: this.metadata,
      flags: this.flags,
      connector: this.connector
    };
  }
  /**
  * Set `Love` status of song.
  *
  * This function is supposed to be used by multiple scrobblers
  * (services). Each service can have different value of `Love` flag;
  * the behavior of the function is to set `Love` to true, if all
  * services have the song with `Love` set to true.
  * @param isLoved - Flag means song is loved or not
  * @param force - Force status assignment
  */
  setLoveStatus(e, t = !1) {
    if (t) {
      this.metadata.userloved = e;
      return;
    }
    e ? this.metadata.userloved === void 0 && (this.metadata.userloved = !0) : this.metadata.userloved = !1;
  }
  /**
  * Custom fields can be defined by user.
  */
  static get USER_FIELDS() {
    return ["artist", "track", "album", "albumArtist"];
  }
  /**
  * Fields used to identify song.
  */
  static get BASE_FIELDS() {
    return ["artist", "track", "album", "albumArtist"];
  }
  /**
  * Fields in a processed song.
  */
  static get PROCESSED_FIELDS() {
    return ["track", "album", "artist", "albumArtist", "duration"];
  }
}
class X extends rt {
  parsed;
  processed;
  noRegex;
  flags;
  metadata;
  connector;
  /**
  * @param parsedData - Current state received from connector
  * @param connector - Connector match object
  */
  constructor(e, t) {
    super(), this.parsed = Object.assign(
      {
        track: null,
        artist: null,
        albumArtist: null,
        album: null,
        duration: null
      },
      e
    ), this.processed = {
      track: null,
      artist: null,
      albumArtist: null,
      album: null,
      duration: null
    }, this.noRegex = {
      track: null,
      artist: null,
      albumArtist: null,
      album: null,
      duration: null
    }, this.flags = {
      /* Filled in `initFlags` method */
    }, this.metadata = {
      /* Filled in `initMetadata` method */
    }, this.connector = t, this.initSongData();
  }
  resetInfo() {
    this.initProcessedData();
  }
  resetData() {
    this.initFlags(), this.initMetadata();
  }
  /** Private methods. */
  initSongData() {
    this.initFlags(), this.initMetadata(), this.initProcessedData();
  }
  initFlags() {
    this.flags = {
      /**
      * Flag means song is scrobbled successfully.
      */
      isScrobbled: !1,
      /**
      * Flag indicated song info is changed or approved by user.
      */
      isCorrectedByUser: !1,
      /**
      * Flag indicating song info has been affected by a user regex/bulk edit
      */
      isRegexEditedByUser: {
        track: !1,
        artist: !1,
        album: !1,
        albumArtist: !1
      },
      /**
      * Flag indicating that the album of the current track was fetched from the Last.fm API
      */
      isAlbumFetched: !1,
      /**
      * Flag indicated song is known by scrobbling service.
      */
      isValid: !1,
      /**
      * Flag indicates song is marked as playing by controller.
      */
      isMarkedAsPlaying: !1,
      /**
      * Flag means song is ignored by controller.
      */
      isSkipped: !1,
      /**
      * Flag means song is replaying again.
      */
      isReplaying: !1,
      /**
      * Flag means song has blocked tag
      */
      hasBlockedTag: !1,
      /**
      * Flag means song has been liked/loved in the scrobbling service.
      * Is null until value has been read from the service page.
      * This is because we do not want to do anything when first setting from page,
      * but we do want to do something if the value changes afterwards.
      */
      isLovedInService: null,
      /**
      * finishedProcessing is set to true after done processing in pipelines.
      * While false don't set the song as playing while we wait for pipelines to finish.
      */
      finishedProcessing: !1
    };
  }
  initMetadata() {
    this.metadata = {
      /**
      * Flag indicates song is loved by used on service.
      */
      userloved: void 0,
      /**
      * Time when song is started playing in UNIX timestamp format.
      */
      startTimestamp: Math.floor(Date.now() / 1e3),
      label: this.connector.label
    };
  }
  initProcessedData() {
    for (const e of X.PROCESSED_FIELDS)
      this.processed[e] = null, this.noRegex[e] = null;
  }
}
class gt {
  targetSeconds = null;
  startedOn = null;
  pausedOn = null;
  spentPaused = 0;
  callback = null;
  hasTriggered = !1;
  timeoutId = null;
  constructor() {
    this.reset();
  }
  /**
  * Reset timer.
  */
  reset() {
    this.targetSeconds = null, this.startedOn = null, this.pausedOn = null, this.spentPaused = 0, this.callback = null, this.hasTriggered = !1, this.clearTrigger();
  }
  /**
  * Set timer and define trigger callback.
  * Use update function to define time to trigger.
  * @param cb - Function that will be called when timer is triggered
  */
  start(e) {
    this.reset(), this.startedOn = se(), this.callback = e;
  }
  /**
  * Pause timer.
  */
  pause() {
    this.startedOn !== null && this.pausedOn === null && (this.pausedOn = se(), this.clearTrigger());
  }
  /**
  * Unpause timer.
  */
  resume() {
    this.startedOn !== null && this.pausedOn !== null && (this.spentPaused += se() - this.pausedOn, this.pausedOn = null, !this.hasTriggered && this.targetSeconds !== null && this.targetSeconds !== void 0 && this.setTrigger(this.targetSeconds - this.getElapsed()));
  }
  /**
  * Update time for this timer before callback is triggered.
  * Already elapsed time is not modified and callback
  * will be triggered immediately if the new time is less than elapsed.
  *
  * Pass null to set destination time to 'never' - this prevents the timer from
  * triggering but still keeps it counting time.
  *
  * Intentionally does not check if the callback was already triggered.
  * This allows to update the timer after it went out once and still
  * be able to properly trigger the callback for the new timeout.
  *
  * @param seconds - Seconds
  */
  update(e) {
    this.startedOn !== null && (this.targetSeconds = e, this.targetSeconds !== null && this.targetSeconds !== void 0 ? this.pausedOn === null && this.setTrigger(this.targetSeconds - this.getElapsed()) : this.clearTrigger());
  }
  /**
  * Return remaining seconds or null if no destination time is set.
  * @returns Remaining seconds
  */
  getRemainingSeconds() {
    return this.targetSeconds === null || this.targetSeconds === void 0 ? null : this.targetSeconds - this.getElapsed();
  }
  /**
  * Check if timer is expired. Expired timer has negative remaining time.
  * @returns Check result
  */
  isExpired() {
    const e = this.getRemainingSeconds();
    return e !== null && e < 0;
  }
  /* Internal functions. */
  /**
  * Trigger timer in given seconds.
  * @param seconds - Seconds
  */
  setTrigger(e) {
    this.clearTrigger(), this.timeoutId = window.setTimeout(() => {
      this.callback && (this.callback(), this.hasTriggered = !0);
    }, e * 1e3);
  }
  /**
  * Clear internal timeout.
  */
  clearTrigger() {
    this.timeoutId && clearTimeout(this.timeoutId), this.timeoutId = null;
  }
  /**
  * Return seconds passed from the timer was started.
  * Time spent paused does not count
  * @returns Elapsed seconds
  */
  getElapsed() {
    if (this.startedOn === null)
      throw Error("elapsed time called before alarm started");
    let e = se() - this.startedOn - this.spentPaused;
    return this.pausedOn !== null && (e -= se() - this.pausedOn), e;
  }
}
function se() {
  return Math.round((/* @__PURE__ */ new Date()).valueOf() / 1e3);
}
var Se = { exports: {} }, fa = Se.exports, ht;
function pa() {
  return ht || (ht = 1, (function(s) {
    (function(e) {
      function t(c, u) {
        var o = (c & 65535) + (u & 65535), f = (c >> 16) + (u >> 16) + (o >> 16);
        return f << 16 | o & 65535;
      }
      function r(c, u) {
        return c << u | c >>> 32 - u;
      }
      function a(c, u, o, f, p, w) {
        return t(r(t(t(u, c), t(f, w)), p), o);
      }
      function i(c, u, o, f, p, w, S) {
        return a(u & o | ~u & f, c, u, p, w, S);
      }
      function n(c, u, o, f, p, w, S) {
        return a(u & f | o & ~f, c, u, p, w, S);
      }
      function h(c, u, o, f, p, w, S) {
        return a(u ^ o ^ f, c, u, p, w, S);
      }
      function y(c, u, o, f, p, w, S) {
        return a(o ^ (u | ~f), c, u, p, w, S);
      }
      function A(c, u) {
        c[u >> 5] |= 128 << u % 32, c[(u + 64 >>> 9 << 4) + 14] = u;
        var o, f, p, w, S, m = 1732584193, l = -271733879, g = -1732584194, d = 271733878;
        for (o = 0; o < c.length; o += 16)
          f = m, p = l, w = g, S = d, m = i(m, l, g, d, c[o], 7, -680876936), d = i(d, m, l, g, c[o + 1], 12, -389564586), g = i(g, d, m, l, c[o + 2], 17, 606105819), l = i(l, g, d, m, c[o + 3], 22, -1044525330), m = i(m, l, g, d, c[o + 4], 7, -176418897), d = i(d, m, l, g, c[o + 5], 12, 1200080426), g = i(g, d, m, l, c[o + 6], 17, -1473231341), l = i(l, g, d, m, c[o + 7], 22, -45705983), m = i(m, l, g, d, c[o + 8], 7, 1770035416), d = i(d, m, l, g, c[o + 9], 12, -1958414417), g = i(g, d, m, l, c[o + 10], 17, -42063), l = i(l, g, d, m, c[o + 11], 22, -1990404162), m = i(m, l, g, d, c[o + 12], 7, 1804603682), d = i(d, m, l, g, c[o + 13], 12, -40341101), g = i(g, d, m, l, c[o + 14], 17, -1502002290), l = i(l, g, d, m, c[o + 15], 22, 1236535329), m = n(m, l, g, d, c[o + 1], 5, -165796510), d = n(d, m, l, g, c[o + 6], 9, -1069501632), g = n(g, d, m, l, c[o + 11], 14, 643717713), l = n(l, g, d, m, c[o], 20, -373897302), m = n(m, l, g, d, c[o + 5], 5, -701558691), d = n(d, m, l, g, c[o + 10], 9, 38016083), g = n(g, d, m, l, c[o + 15], 14, -660478335), l = n(l, g, d, m, c[o + 4], 20, -405537848), m = n(m, l, g, d, c[o + 9], 5, 568446438), d = n(d, m, l, g, c[o + 14], 9, -1019803690), g = n(g, d, m, l, c[o + 3], 14, -187363961), l = n(l, g, d, m, c[o + 8], 20, 1163531501), m = n(m, l, g, d, c[o + 13], 5, -1444681467), d = n(d, m, l, g, c[o + 2], 9, -51403784), g = n(g, d, m, l, c[o + 7], 14, 1735328473), l = n(l, g, d, m, c[o + 12], 20, -1926607734), m = h(m, l, g, d, c[o + 5], 4, -378558), d = h(d, m, l, g, c[o + 8], 11, -2022574463), g = h(g, d, m, l, c[o + 11], 16, 1839030562), l = h(l, g, d, m, c[o + 14], 23, -35309556), m = h(m, l, g, d, c[o + 1], 4, -1530992060), d = h(d, m, l, g, c[o + 4], 11, 1272893353), g = h(g, d, m, l, c[o + 7], 16, -155497632), l = h(l, g, d, m, c[o + 10], 23, -1094730640), m = h(m, l, g, d, c[o + 13], 4, 681279174), d = h(d, m, l, g, c[o], 11, -358537222), g = h(g, d, m, l, c[o + 3], 16, -722521979), l = h(l, g, d, m, c[o + 6], 23, 76029189), m = h(m, l, g, d, c[o + 9], 4, -640364487), d = h(d, m, l, g, c[o + 12], 11, -421815835), g = h(g, d, m, l, c[o + 15], 16, 530742520), l = h(l, g, d, m, c[o + 2], 23, -995338651), m = y(m, l, g, d, c[o], 6, -198630844), d = y(d, m, l, g, c[o + 7], 10, 1126891415), g = y(g, d, m, l, c[o + 14], 15, -1416354905), l = y(l, g, d, m, c[o + 5], 21, -57434055), m = y(m, l, g, d, c[o + 12], 6, 1700485571), d = y(d, m, l, g, c[o + 3], 10, -1894986606), g = y(g, d, m, l, c[o + 10], 15, -1051523), l = y(l, g, d, m, c[o + 1], 21, -2054922799), m = y(m, l, g, d, c[o + 8], 6, 1873313359), d = y(d, m, l, g, c[o + 15], 10, -30611744), g = y(g, d, m, l, c[o + 6], 15, -1560198380), l = y(l, g, d, m, c[o + 13], 21, 1309151649), m = y(m, l, g, d, c[o + 4], 6, -145523070), d = y(d, m, l, g, c[o + 11], 10, -1120210379), g = y(g, d, m, l, c[o + 2], 15, 718787259), l = y(l, g, d, m, c[o + 9], 21, -343485551), m = t(m, f), l = t(l, p), g = t(g, w), d = t(d, S);
        return [m, l, g, d];
      }
      function k(c) {
        var u, o = "", f = c.length * 32;
        for (u = 0; u < f; u += 8)
          o += String.fromCharCode(c[u >> 5] >>> u % 32 & 255);
        return o;
      }
      function P(c) {
        var u, o = [];
        for (o[(c.length >> 2) - 1] = void 0, u = 0; u < o.length; u += 1)
          o[u] = 0;
        var f = c.length * 8;
        for (u = 0; u < f; u += 8)
          o[u >> 5] |= (c.charCodeAt(u / 8) & 255) << u % 32;
        return o;
      }
      function ue(c) {
        return k(A(P(c), c.length * 8));
      }
      function K(c, u) {
        var o, f = P(c), p = [], w = [], S;
        for (p[15] = w[15] = void 0, f.length > 16 && (f = A(f, c.length * 8)), o = 0; o < 16; o += 1)
          p[o] = f[o] ^ 909522486, w[o] = f[o] ^ 1549556828;
        return S = A(p.concat(P(u)), 512 + u.length * 8), k(A(w.concat(S), 640));
      }
      function q(c) {
        var u = "0123456789abcdef", o = "", f, p;
        for (p = 0; p < c.length; p += 1)
          f = c.charCodeAt(p), o += u.charAt(f >>> 4 & 15) + u.charAt(f & 15);
        return o;
      }
      function H(c) {
        return unescape(encodeURIComponent(c));
      }
      function de(c) {
        return ue(H(c));
      }
      function me(c) {
        return q(de(c));
      }
      function ge(c, u) {
        return K(H(c), H(u));
      }
      function he(c, u) {
        return q(ge(c, u));
      }
      function be(c, u, o) {
        return u ? o ? ge(u, c) : he(u, c) : o ? de(c) : me(c);
      }
      s.exports ? s.exports = be : e.md5 = be;
    })(fa);
  })(Se)), Se.exports;
}
var ya = pa();
const js = /* @__PURE__ */ kt(ya);
class at {
  storageRef;
  constructor() {
    this.storageRef = null;
  }
  _init(e) {
    this.storageRef = e;
  }
  /**
  * Remove all data from the storage.
  */
  async clear() {
    if (this.storageRef)
      return await this.storageRef.clear();
  }
  /**
  * Return data from the storage.
  *
  * @returns Storage data
  */
  async getData() {
    return this.storageRef ? await this.storageRef.get() : (D("Storage reference is not initialized", "warn"), null);
  }
  /**
  * Overwrite a given data to the storage.
  *
  * @param data - Data to save
  * @returns Storage data
  */
  async saveData(e) {
    if (!this.storageRef) {
      D("Storage reference is not initialized", "warn");
      return;
    }
    return await this.storageRef.set(e);
  }
  /**
  * Append a given data in the storage.
  *
  * @param data - Data to save
  * @returns Storage data
  */
  async updateData(e) {
    if (!this.storageRef) {
      D("Storage reference is not initialized", "warn");
      return;
    }
    return await this.storageRef.update(e);
  }
}
class _ extends at {
  /**
  * Public functions.
  */
  /**
  * Apply edited song info to a given song object.
  *
  * @param song - Song instance
  * @returns True if data is loaded; false otherwise
  */
  async loadSongInfo(e) {
    let t = _.getSongId(e);
    const r = await this.getSongInfoStorage();
    if ((!r || !(t in r)) && (t = _.makeSongId(e, [
      "artist",
      "track",
      "album"
    ])), (!r || !(t in r)) && (t = _.makeSongId(e, ["artist", "track"])), r && t in r) {
      const a = r[t];
      return _.applyLoadedInfo(e, a), !0;
    }
    return !1;
  }
  /**
  * Save custom song info to the storage.
  *
  * @param song - Song instance
  * @param dataToSave - User data
  */
  async saveSongInfo(e, t) {
    const r = _.getSongId(e), a = await this.getSongInfoStorage();
    if (a === null) {
      await this.saveSongInfoToStorage({
        [r]: t
      });
      return;
    }
    a[r] = {
      ...a[r],
      ...t
    }, await this.saveSongInfoToStorage(a);
  }
  /**
  * Remove song info from the storage.
  *
  * @param song - Song object
  */
  async removeSongInfo(e) {
    if (e === null)
      throw new Error("Song is null");
    const t = _.getSongId(e);
    await this.removeSongInfoById(t);
  }
  /**
  * Remove song info from the storage.
  *
  * @param songId - Song ID
  */
  async removeSongInfoById(e) {
    const t = await this.getSongInfoStorage();
    t !== null && (delete t[e], await this.saveSongInfoToStorage(t));
  }
  /**
  * Static functions.
  */
  /**
  * Apply loaded info to a given song.
  *
  * @param song - Song instance
  * @param loadedInfo - Object containing loaded song info
  */
  static applyLoadedInfo(e, t) {
    e.processed = {
      ...e.processed,
      ...t
    };
  }
  /**
  * Get a song ID. If a song internal unique ID is missing,
  * generate a new unique ID.
  *
  * @param song - Song instance
  *
  * @returns Song unique ID
  */
  static getSongId(e) {
    const t = e.getUniqueId();
    return t || _.makeSongId(e, X.BASE_FIELDS);
  }
  /**
  * Create an unique ID for a song based on song properties.
  *
  * @param song - Song instance
  * @param properties - Array of properties
  *
  * @returns Generated unique ID
  */
  static makeSongId(e, t) {
    let r = "";
    for (const a of t)
      e.parsed[a] && (r += e.parsed[a]);
    if (r)
      return js(r);
    throw new Error("Empty song");
  }
}
class wa extends _ {
  songInfoStorage = E(
    je
  );
  init() {
    this._init(le(je));
  }
  /** @override */
  async clear() {
    return await this.songInfoStorage.clear();
  }
  /** @override */
  async getSongInfoStorage() {
    return this.songInfoStorage.get();
  }
  /** @override */
  async saveSongInfoToStorage(e) {
    return await this.songInfoStorage.set(e);
  }
  /** @override */
  getStorage() {
    return E(je);
  }
}
const ve = new wa();
async function ja(s) {
  let e = !1;
  try {
    e = await ve.loadSongInfo(s);
  } catch (t) {
    j(t, "error");
  }
  s.flags.isCorrectedByUser = e;
}
const Sa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: ja
}, Symbol.toStringTag, { value: "Module" }));
function Aa(s) {
  for (const e of X.PROCESSED_FIELDS)
    s.processed[e] = s.parsed[e];
}
const ka = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: Aa
}, Symbol.toStringTag, { value: "Module" })), va = [
  "duration",
  "artist",
  "track"
], Ra = [
  "trackArtUrl",
  "artistUrl",
  "trackUrl",
  "albumUrl",
  "userPlayCount",
  "albumMbId"
];
async function Ta(s, e) {
  if (s.isEmpty())
    return;
  const t = await v({
    type: "getSongInfo",
    payload: {
      song: s.getCloneableData()
    }
  }), r = Ia(t), a = r !== null;
  if (a) {
    if (!s.flags.isCorrectedByUser)
      for (const h of va)
        r[h] && (s.processed[h] = r[h]);
    await Ea(s) && (s.processed.album = r.album, s.noRegex.album = r.album, s.flags.isAlbumFetched = !0);
    for (const h of Ra)
      s.metadata[h] = r[h];
  }
  const i = await F(
    Ce,
    e.id
  ), n = await F(
    Pe,
    e.id
  );
  s.flags.isValid = (a || !!i) && (s.flags.isCorrectedByUser || !n);
}
async function Ea(s) {
  return s.getAlbum() && !s.flags.isAlbumFetched || await F(tt) ? !1 : await F(st) ? !0 : !s.flags.isCorrectedByUser;
}
function Ia(s) {
  return s.length === 0 ? null : s.reduce((e, t) => t && (!e || bt(t) > bt(e)) ? t : e, {});
}
function bt(s) {
  let e = 0;
  if (s === null)
    return 0;
  for (const t in s)
    s[t] && ++e;
  return e;
}
const xa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: Ta
}, Symbol.toStringTag, { value: "Module" }));
function Ca(s) {
  for (const e of X.BASE_FIELDS) {
    const t = s.processed[e];
    typeof t == "string" && t && (s.processed[e] = t.normalize(), s.noRegex[e] = t.normalize());
  }
}
const Pa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: Ca
}, Symbol.toStringTag, { value: "Module" })), $e = (s) => ({
  isGlobal: s.isGlobal,
  isCaseInsensitive: s.isCaseInsensitive,
  isRegexDisabled: s.isRegexDisabled
}), Ss = (s) => s.replace(/[/\-\\^$*+?.()|[\]{}]/g, "\\$&");
function As(s) {
  let e = "";
  return s.isGlobal && (e += "g"), s.isCaseInsensitive && (e += "i"), e;
}
function La(s, e) {
  for (const [t, r] of Object.entries(s)) {
    const a = t;
    if (r !== null && e.flags.isRegexEditedByUser[a])
      return !0;
  }
  return !1;
}
function Oa(s, e) {
  if (La(s.replace, e))
    return !1;
  const t = $e(s);
  for (const [r, a] of Object.entries(s.search)) {
    const n = oe(e, r);
    if (!ks(a, n, t))
      return !1;
  }
  return !0;
}
function ks(s, e, t) {
  if (s === null)
    return !0;
  const r = t.isRegexDisabled ? Ss(s) : s;
  try {
    return new RegExp(
      t.isGlobal ? r : `^${r}$`,
      As(t)
    ).test(e);
  } catch {
    return !1;
  }
}
function Ua(s, e, t, r) {
  if (s === null || e === null)
    return t;
  const a = r.isRegexDisabled ? Ss(s) : s;
  try {
    const i = new RegExp(
      r.isGlobal ? a : `^${a}$`,
      As(r)
    );
    return t.replace(i, e);
  } catch {
    return t;
  }
}
function Ma(s, e) {
  const t = $e(s);
  for (const r of Object.keys(e)) {
    const a = r;
    if (!ks(s.search[a], e[a], t))
      return e;
  }
  for (const r of Object.keys(e)) {
    const a = r;
    e[a] = Ua(
      s.search[a],
      s.replace[a],
      e[a],
      $e(s)
    );
  }
  return e;
}
function _a(s) {
  return {
    track: oe(s, "track"),
    artist: oe(s, "artist"),
    album: oe(s, "album"),
    albumArtist: oe(s, "albumArtist")
  };
}
function Da(s, e) {
  const t = Ma(s, _a(e));
  for (const [r, a] of Object.entries(t)) {
    const i = r;
    s.search[i] && typeof s.replace[i] == "string" && (e.flags.isRegexEditedByUser[i] = !0, e.processed[i] = a);
  }
}
function Fa(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
function oe(s, e) {
  return s[`get${Fa(e)}`]() ?? "";
}
class Na extends at {
  /**
  * Apply regex edits to a given song object.
  *
  * @param song - Song instance
  */
  async loadSongInfo(e) {
    const t = await this.getRegexEditStorage();
    if (t)
      for (let r = t.length - 1; r >= 0; r--)
        Oa(t[r], e) && Da(t[r], e);
  }
  /**
  * Save custom regex edit to the storage.
  *
  * @param search - Search to save
  * @param replace - Replace to save
  */
  async saveRegexEdit(e) {
    e.search = {
      ...e.search
    }, e.replace = {
      ...e.replace
    };
    const t = await this.getRegexEditStorage();
    if (t === null) {
      await this.saveRegexEditToStorage([e]);
      return;
    }
    const r = [...t, e];
    await this.saveRegexEditToStorage(r);
  }
  async deleteRegexEdit(e) {
    const t = await this.getRegexEditStorage();
    t !== null && (t.splice(e, 1), await this.saveRegexEditToStorage(t));
  }
}
class Ba extends Na {
  regexEditStorage = this.getStorage();
  init() {
    this._init(le(Fe));
  }
  /** @override */
  async getRegexEditStorage() {
    return this.regexEditStorage.get();
  }
  /** @override */
  async saveRegexEditToStorage(e) {
    return await this.regexEditStorage.set(e);
  }
  /** @override */
  getStorage() {
    return E(Fe);
  }
}
const vs = new Ba();
async function za(s) {
  if (!s.flags.isCorrectedByUser)
    try {
      await vs.loadSongInfo(s);
    } catch (e) {
      j(e, "error");
    }
}
const ft = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: za
}, Symbol.toStringTag, { value: "Module" })), Rs = 5e3;
async function $a(s) {
  if (s.parsed.trackArt) {
    j("Using local/parsed artwork");
    return;
  } else if (s.metadata.trackArtUrl) {
    j("Found album artwork via LastFM");
    return;
  } else if (s.isEmpty())
    return;
  const e = ["release", "release-group"];
  for (const t of e) {
    let r = s.metadata.albumMbId, a = null;
    try {
      r || (r = await qa(t, s)), a = await Ha(r);
    } catch {
      continue;
    }
    if (a) {
      j("Found album artwork via MusicBrainz"), s.metadata.trackArtUrl = a;
      return;
    }
  }
}
async function qa(s, e) {
  const t = e.getArtist(), r = e.getTrack();
  if (t === null || r === null)
    throw new TypeError("artist or track is null");
  const a = `https://musicbrainz.org/ws/2/${s}?fmt=json&query=title:+"${r ?? ""}"^3 ${r ?? ""} artistname:+"${t ?? ""}"^4${t ?? ""}`, i = await N(Rs, fetch(a));
  if (!i.ok)
    throw new Error("Unable to fetch MusicBrainz ID");
  const n = await i.json();
  if (n.count === 0)
    throw new Error("Unable to fetch MusicBrainz ID");
  return "releases" in n ? n.releases[0].id : "release-groups" in n ? n["release-groups"][0].id : "";
}
async function Ha(s) {
  const e = `https://coverartarchive.org/release/${s}/front-500`;
  if ((await N(
    Rs,
    fetch(e, { method: "HEAD" })
  )).ok)
    return e;
  throw new Error("Unable to fetch cover art from MusicBrainz");
}
const Va = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: $a
}, Symbol.toStringTag, { value: "Module" }));
let Ga = class {
  storage = E(Zt);
  isReady;
  constructor() {
    this.isReady = this.init();
  }
  /**
  * Sets default values to blocklist if necessary
  */
  async setupDefaultBlocklist() {
    let e = await this.storage.getLocking();
    e || (e = {}), await this.storage.setLocking(e);
  }
  /**
  * Initializes the blocklist with default values
  */
  async init() {
    return await this.setupDefaultBlocklist(), !0;
  }
  /**
  * Adds a set of tags to blocklist
  *
  * @param type - type of tag to block
  * @param song - song to add
  */
  async addToBlocklist(e, t) {
    if (!t)
      return;
    await this.isReady;
    const r = await this.storage.getLocking(), a = t.getArtist(), i = t.getTrack();
    if (!r || !a || !i) {
      this.storage.unlock();
      return;
    }
    switch (r[a] || (r[a] = {
      tracks: {},
      albums: {}
    }), e) {
      case "artist": {
        r[a].disabled = !0;
        break;
      }
      case "album": {
        const n = t.getAlbum(), h = t.getAlbumArtist() || a;
        if (!n) {
          this.storage.unlock();
          return;
        }
        r[h] || (r[h] = {
          tracks: {},
          albums: {}
        }), r[h].albums[n] = !0;
        break;
      }
      case "track": {
        r[a].tracks[i] = !0;
        break;
      }
    }
    await this.storage.setLocking(r);
  }
  /**
  * Removes a set of tags from blocklist
  *
  * @param tags - Tags to remove
  */
  async removeFromBlocklist(e, t) {
    if (!t)
      return;
    const r = t.getArtist(), a = t.getTrack();
    if (!r || !a)
      return;
    const i = await this.storage.getLocking();
    if (!i) {
      this.storage.unlock();
      return;
    }
    switch (e) {
      case "artist": {
        delete i[r]?.disabled;
        break;
      }
      case "album": {
        const n = t.getAlbumArtist() || r, h = t.getAlbum();
        if (!h)
          return;
        delete i[n]?.albums[h];
        break;
      }
      case "track": {
        delete i[r]?.tracks[a];
        break;
      }
    }
    await this.storage.setLocking(i);
  }
  /**
  * @param song - song to check
  * @returns object of booleans saying whether each tag type is blocked for the song.
  */
  async getBlockedTypes(e) {
    const t = {
      artist: !1,
      album: !1,
      track: !1
    };
    if (!e)
      return t;
    await this.isReady;
    const r = await this.storage.get(), a = e.getArtist(), i = e.getTrack();
    if (!r || !a || !r[a] || !i)
      return t;
    r[a].disabled && (t.artist = !0), r[a].tracks[i] && (t.track = !0);
    const n = e.getAlbumArtist() || a, h = e.getAlbum();
    return !h || !r[n]?.albums[h] || (t.album = !0), t;
  }
  /**
  * @param song - song to check
  *
  * @returns true if song is blocklisted; false if it isn't
  */
  async hasBlockedTag(e) {
    const t = await this.getBlockedTypes(e);
    return t.artist || t.album || t.track;
  }
};
async function Ka(s) {
  const e = new Ga();
  try {
    s.flags.hasBlockedTag = await e.hasBlockedTag(s);
  } catch (t) {
    j(t, "error");
  }
}
const Wa = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  process: Ka
}, Symbol.toStringTag, { value: "Module" }));
class Ja {
  song = null;
  processors = [
    ka,
    Pa,
    Sa,
    ft,
    xa,
    ft,
    // Run regex edits again, as the regex edit might have caused an album to be found.
    Wa,
    Va
  ];
  constructor() {
    this.song = null;
  }
  async process(e, t) {
    this.song = e, this.song.flags.finishedProcessing = !1;
    try {
      for (const r of this.processors)
        await r.process(e, t);
      this.song.flags.finishedProcessing = !0;
    } catch (r) {
      throw this.song.flags.finishedProcessing = !0, r;
    }
    return e.equals(this.song);
  }
}
const pt = "ControllerReset", Me = "SongNowPlaying", yt = "SongUnrecognized";
class Ya extends at {
  MAX_SCROBBLE_CACHE_SIZE = 1e3;
  /**
  * Replace the data for a scrobble in the scrobble cache
  *
  * @param id - ID of the scrobble to modify
  * @param scrobble - data to replace it with
  */
  async replaceScrobble(e, t) {
    const r = await this.getScrobbleCacheStorageLocking();
    if (r) {
      for (let a = 0; a < r.length; a++)
        r[a].id === e && (r[a] = {
          ...t,
          id: e
        });
      await this.saveScrobbleCacheToStorageLocking(r);
    }
  }
  /**
  * Save scrobble to the storage.
  *
  * @param scrobble - {@link CacheScrobbleData} to save
  *
  * @returns the id of the new scrobble
  */
  async pushScrobble(e) {
    const t = await this.getScrobbleCacheStorageLocking();
    if (t === null)
      return await this.saveScrobbleCacheToStorageLocking([
        {
          ...e,
          id: 1
        }
      ]), 1;
    const r = (t.at(-1)?.id ?? 0) + 1;
    return t.push({
      ...e,
      id: r
    }), await this.saveScrobbleCacheToStorageLocking(
      t.slice(-this.MAX_SCROBBLE_CACHE_SIZE)
    ), r;
  }
  async deleteScrobbles(e) {
    const t = await this.getScrobbleCacheStorageLocking();
    if (!t)
      return;
    const r = /* @__PURE__ */ new Map();
    for (const a of e)
      r.set(a, !0);
    await this.saveScrobbleCacheToStorageLocking(
      t.filter((a) => r.get(a.id) !== !0)
    );
  }
}
class Qa extends Ya {
  scrobbleCacheStorage = this.getStorage();
  init() {
    this._init(
      le(Ne)
    );
  }
  /** @override */
  async getScrobbleCacheStorage() {
    return this.scrobbleCacheStorage.get();
  }
  /** @override */
  async getScrobbleCacheStorageLocking() {
    return this.scrobbleCacheStorage.getLocking();
  }
  /** @override */
  async saveScrobbleCacheToStorage(e) {
    return await this.scrobbleCacheStorage.set(e);
  }
  /** @override */
  async saveScrobbleCacheToStorageLocking(e) {
    return await this.scrobbleCacheStorage.setLocking(e);
  }
  /** @override */
  getStorage() {
    return E(Ne);
  }
}
const Ae = new Qa();
class Za {
  storage = E(Xt);
  connectorId;
  isReady;
  constructor(e) {
    this.connectorId = e, this.isReady = this.init();
  }
  /**
  * Sets default values to blocklist if necessary
  */
  async setupDefaultBlocklist() {
    let e = await this.storage.getLocking();
    e || (e = {}), (!(this.connectorId in e) || !e[this.connectorId]) && (e[this.connectorId] = {}), await this.storage.setLocking(e);
  }
  /**
  * Initializes the blocklist with default values
  */
  async init() {
    return await this.setupDefaultBlocklist(), !0;
  }
  /**
  * Adds a channel ID to blocklist
  *
  * @param id - ID of channel to add
  */
  async addToBlocklist(e) {
    if (!e?.id)
      return;
    await this.isReady;
    const t = await this.storage.getLocking();
    if (!t || !(this.connectorId in t) || !t[this.connectorId]) {
      this.storage.unlock();
      return;
    }
    t[this.connectorId] = {
      ...t[this.connectorId],
      [e.id]: e.label || e.id
    }, await this.storage.setLocking(t);
  }
  /**
  * Removes a channel ID from blocklist
  *
  * @param id - ID of channel to remove
  */
  async removeFromBlocklist(e) {
    if (!e)
      return;
    await this.isReady;
    const t = await this.storage.getLocking();
    if (!t || !(this.connectorId in t) || !t[this.connectorId]) {
      this.storage.unlock();
      return;
    }
    delete t[this.connectorId][e], this.storage.setLocking(t);
  }
  /**
  * @param id - ID of channel to check
  *
  * @returns label if channel is blocklisted; null if it isn't
  */
  async getChannelLabel(e) {
    if (!e)
      return null;
    await this.isReady;
    const t = await this.storage.get();
    return !t || !(this.connectorId in t) || !t[this.connectorId] ? null : t[this.connectorId][e];
  }
  /**
  * @param id - ID of channel to check
  *
  * @returns true if channel isn't blocklisted; false if it is.
  */
  async shouldScrobbleChannel(e) {
    return !await this.getChannelLabel(e);
  }
}
const Xa = ["artist", "track", "album", "uniqueID"], wt = E(Ye);
class ei {
  connector;
  isEnabled;
  mode;
  tempMode;
  timeoutId = void 0;
  pipeline = new Ja();
  playbackTimer = new gt();
  replayDetectionTimer = new gt();
  currentSong = null;
  isReplayingSong = !1;
  shouldScrobblePodcasts = !0;
  scrobbleCacheId = null;
  blocklist;
  isPaused = !1;
  forceScrobble = !1;
  shouldHaveScrobbled = !1;
  isEditing = !1;
  setNotEditingTimeout = setTimeout(() => {
  }, 0);
  eventEmitter = new Et();
  tabId = v({
    type: "getTabId",
    payload: void 0
  });
  /**
  * Mutates this.currentSong to sync disallowed reason, and returns whether song should scrobble
  *
  * @returns true if song should scrobble; false if disallowed.
  */
  async shouldScrobble() {
    return this.forceScrobble ? !0 : !this.currentSong || this.currentSong.parsed.scrobblingDisallowedReason ? !1 : await this.blocklist.shouldScrobbleChannel(
      this.connector.getChannelId?.()
    ) ? this.currentSong?.flags.hasBlockedTag ? (this.currentSong.parsed.scrobblingDisallowedReason = "ForbiddenTag", !1) : !0 : (this.currentSong.parsed.scrobblingDisallowedReason = "ForbiddenChannel", !1);
  }
  /**
  * Function that handles updating the scrobble info box
  */
  async getInfoBoxElement() {
    if (!this.connector.scrobbleInfoLocationSelector || // infobox is disabled in options
    !await F(
      Ee,
      this.connector.meta.id
    ))
      return null;
    const e = document.querySelector(
      this.connector.scrobbleInfoLocationSelector
    );
    if (!e)
      return null;
    let t = document.querySelector(
      "#scrobbler-infobox-el"
    );
    if (t)
      if (t.parentElement !== e)
        t.remove();
      else
        return t;
    t = document.createElement("div"), t.setAttribute("id", "scrobbler-infobox-el");
    for (const r in this.connector.scrobbleInfoStyle)
      t.style[r] = this.connector.scrobbleInfoStyle[r] ?? "";
    return e.appendChild(t), t;
  }
  async updateInfoBox() {
    let e = !1;
    const t = await this.getInfoBoxElement();
    if (!t) {
      const n = document.querySelector(
        "#scrobbler-infobox-el"
      );
      n && n.remove();
      return;
    }
    const r = t.querySelector("span");
    r && (e = r.innerText);
    const a = this.getMode(), i = Util.getInfoBoxText(a, this.currentSong);
    if (!e || i !== e) {
      const n = document.createElement("img");
      n.setAttribute(
        "src",
        x.runtime.getURL("./icons/icon_main_48.png")
      ), n.setAttribute("alt", "Web Scrobbler state:"), n.setAttribute("style", "height: 1.2em");
      const h = document.createElement("span");
      for (h.innerText = i; t.firstChild; )
        t.removeChild(t.firstChild);
      t.appendChild(n), t.appendChild(h);
    }
  }
  /**
  * @param tabId - Tab ID
  * @param connector - Connector match object
  * @param isEnabled - Flag indicates initial stage
  */
  constructor(e, t) {
    this.connector = e, this.blocklist = new Za(this.connector.meta.id), this.isEnabled = t, this.mode = t ? fe : ct, this.onModeChanged(), this.tempMode = null, F(Ie, e.meta.id).then((r) => {
      typeof r == "boolean" && (this.shouldScrobblePodcasts = r);
    }).catch((r) => {
      j(r, "error");
    }), this.debugLog(
      `Created controller for ${e.meta.label} connector`
    ), Ys(
      I({
        type: "skipCurrentSong",
        fn: () => {
          this.skipCurrentSong();
        }
      }),
      I({
        type: "toggleLove",
        fn: ({ isLoved: r, shouldShowNotification: a }) => {
          this.toggleLove(r, a);
        }
      }),
      I({
        type: "updateLove",
        fn: ({ isLoved: r }) => {
          this.currentSong?.setLoveStatus(r, !0);
        }
      }),
      I({
        type: "reprocessSong",
        fn: () => {
          this.reprocessSong();
        }
      }),
      I({
        type: "setEditState",
        fn: (r) => {
          this.isEditing = r, this.eventEmitter.emit("updateEditStatus", r), r && (clearTimeout(this.setNotEditingTimeout), this.setNotEditingTimeout = setTimeout(() => {
            this.isEditing = !1, this.eventEmitter.emit("updateEditStatus", !1);
          }, 5e3));
        }
      }),
      I({
        type: "resetData",
        fn: () => {
          this.resetSongData();
        }
      }),
      I({
        type: "setConnectorState",
        fn: (r) => {
          this.setConnectorState(r);
        }
      }),
      I({
        type: "disableConnectorUntilTabIsClosed",
        fn: () => this.disableUntilTabIsClosed()
      }),
      I({
        type: "getConnectorDetails",
        fn: () => ({
          mode: this.getMode(),
          permanentMode: this.mode,
          song: this.currentSong?.getCloneableData() ?? null
        })
      }),
      I({
        type: "forceScrobbleSong",
        fn: () => {
          this.forceScrobble = !0, this.shouldHaveScrobbled ? this.scrobbleSong() : this.setSongNowPlaying();
        }
      }),
      I({
        type: "getChannelDetails",
        fn: () => ({
          connector: this.connector.meta,
          channelInfo: this.connector.getChannelInfo?.()
        })
      }),
      I({
        type: "addToBlocklist",
        fn: async () => {
          await this.blocklist.addToBlocklist(
            this.connector.getChannelInfo?.() ?? null
          ), this.setMode(J);
        }
      }),
      I({
        type: "removeFromBlocklist",
        fn: async () => {
          await this.blocklist.removeFromBlocklist(
            this.connector.getChannelInfo?.()?.id ?? null
          ), this.shouldHaveScrobbled ? this.scrobbleSong() : this.setSongNowPlaying();
        }
      })
    );
  }
  /** Listeners. */
  /**
  * Called if current song is updated.
  */
  onSongUpdated() {
    this.updateInfoBox(), v({
      type: "songUpdate",
      payload: this.currentSong?.getCloneableData() ?? null
    });
  }
  /**
  * Called if a controller mode is changed.
  */
  onModeChanged() {
    this.updateInfoBox(), v({
      type: "controllerModeChange",
      payload: {
        mode: this.getMode(),
        permanentMode: this.mode
      }
    });
  }
  /**
  * Called if a new event is dispatched.
  *
  * @param event - Event generated by the controller.
  */
  async onControllerEvent(e) {
    switch (e) {
      case Me: {
        const t = this.getCurrentSong();
        if (!t || t.flags.isReplaying || !await this.shouldScrobble() || !this.currentSong?.isValid() || !await this.tabId)
          break;
        v({
          type: "showNowPlaying",
          payload: {
            song: t.getCloneableData(),
            connector: this.connector.meta
          }
        });
        break;
      }
      case pt: {
        const t = this.getCurrentSong();
        t && v({
          type: "clearNowPlaying",
          payload: {
            song: t.getCloneableData()
          }
        });
        break;
      }
      case yt: {
        const t = this.getCurrentSong();
        if (!t || !await this.shouldScrobble() || !await this.tabId)
          break;
        v({
          type: "showSongNotRecognized",
          payload: {
            song: t.getCloneableData(),
            connector: this.connector.meta
          }
        });
        break;
      }
    }
    this.updateInfoBox();
  }
  /** Public functions */
  /**
  * Switch the state of controller.
  * @param flag - True means enabled and vice versa
  */
  setEnabled(e) {
    this.isEnabled = e, e ? this.setMode(fe) : (this.resetState(), this.setMode(ct));
  }
  /**
  * Do finalization before unloading controller.
  */
  finish() {
    this.debugLog(
      `Remove controller for ${this.connector.meta.label} connector`
    ), this.resetState();
  }
  /**
  * Reset song data and process it again.
  */
  async resetSongData() {
    this.assertSongIsPlaying(), this.currentSong?.resetInfo(), await ve.removeSongInfo(this.currentSong), this.unprocessSong(), this.processSong();
  }
  /**
  * Make the controller to ignore current song.
  */
  skipCurrentSong() {
    this.assertSongIsPlaying(), T(this.currentSong) && (this.setMode(Ks), this.currentSong.flags.isSkipped = !0, this.shouldHaveScrobbled = !1, this.forceScrobble = !1, this.playbackTimer.reset(), this.replayDetectionTimer.reset(), this.onSongUpdated());
  }
  /**
  * Get connector match object.
  * @returns Connector
  */
  getConnector() {
    return this.connector.meta;
  }
  /**
  * Get current song as plain object.
  * @returns Song copy
  */
  getCurrentSong() {
    return this.currentSong;
  }
  /**
  * Get current controller mode.
  * @returns Controller mode
  */
  getMode() {
    const e = [
      Oe,
      Ue
    ];
    return this.tempMode !== null ? this.tempMode : e.includes(this.mode) && this.isPaused ? Gs : this.mode;
  }
  /**
  * Sets data for current song from user input
  * @param data - Object containing song data
  */
  async setUserSongData(e) {
    if (this.assertSongIsPlaying(), !!T(this.currentSong)) {
      if (this.currentSong.flags.isScrobbled)
        throw new Error("Unable to set user data for scrobbled song");
      await ve.saveSongInfo(this.currentSong, e), this.unprocessSong(), this.processSong();
    }
  }
  /**
  * Reprocess currently playing song without otherwise changing it.
  */
  reprocessSong() {
    this.assertSongIsPlaying(), T(this.currentSong) && (this.unprocessSong(), this.processSong());
  }
  /**
  * Send request to love or unlove current song.
  * @param isLoved - Flag indicated song is loved
  * @param shouldShowNotification - Flag indicating that a notification should show up
  */
  async toggleLove(e, t) {
    if (this.assertSongIsPlaying(), !!T(this.currentSong)) {
      if (!this.currentSong.isValid())
        throw new Error("No valid song is now playing");
      this.currentSong.setLoveStatus(e, !0), this.onSongUpdated();
      try {
        e ? this.setTempMode(Ws) : this.setTempMode(Js), await v({
          type: "toggleLove",
          payload: {
            song: this.currentSong.getCloneableData(),
            isLoved: e,
            shouldShowNotification: t
          }
        });
      } catch {
        this.currentSong.setLoveStatus(!e, !0);
      }
      this.onSongUpdated();
    }
  }
  /**
  * React on love/unlove.
  * @param isLoved - Whether song is now liked or unliked
  */
  async onLoveChanged(e) {
    if (!(!this.currentSong || ![
      Oe,
      Ue
    ].includes(this.mode))) {
      if (this.currentSong.flags.isLovedInService === null) {
        this.currentSong.flags.isLovedInService = e;
        return;
      }
      if (e === null) {
        this.currentSong.flags.isLovedInService = null;
        return;
      }
      if (this.currentSong.flags.isLovedInService !== e && (this.currentSong.flags.isLovedInService = e, await F(
        xe,
        this.connector.meta.id
      ))) {
        if (
          // do not show notification if:
          // 1. song is already loved and is being toggled to love status
          // 2. song is already unloved and is being toggled to unlove status
          this.currentSong.metadata.userloved === !0 && e || this.currentSong.metadata.userloved === !1 && !e
        )
          return;
        this.toggleLove(e, !0);
      }
    }
  }
  /**
  * React on state change.
  * @param newState - State of connector
  */
  onStateChanged(e) {
    if (!this.isEnabled)
      return;
    if (ti(e)) {
      this.currentSong && (this.debugLog("Received empty state - resetting"), this.reset()), e.isPlaying && this.debugLog(
        `State from connector doesn't contain enough information about the playing track: ${jt(
          e
        )}`,
        "warn"
      );
      return;
    }
    this.isSongChanged(e) || this.isReplayingSong ? e.isPlaying ? this.processNewState(e) : this.reset() : this.processCurrentState(e);
  }
  /** Internal functions */
  /**
  * Set the mode of the controller
  *
  * @param mode - new controller mode
  */
  setMode(e) {
    if (!e)
      throw new Error(`Unknown mode: ${e}`);
    this.mode = e, this.onModeChanged();
  }
  /**
  * Checks if the temp icon/mode is visible.
  */
  isTempIconVisible() {
    return this.timeoutId !== void 0;
  }
  /**
  * Temporarily set the mode of the controller,
  * then returns to previous mode after 5 seconds.
  *
  * @param newMode - new controller mode to be set
  *
  */
  setTempMode(e) {
    this.isTempIconVisible() && (clearTimeout(this.timeoutId), this.timeoutId = void 0);
    const t = 5e3;
    this.tempMode = e, this.onModeChanged(), this.timeoutId = setTimeout(() => {
      this.timeoutId = void 0, this.tempMode = null, this.onModeChanged();
    }, t);
  }
  dispatchEvent(e) {
    if (!e)
      throw new Error(`Unknown event: ${e}`);
    this.onControllerEvent(e);
  }
  /**
  * Process connector state as new one.
  * @param newState - Connector state
  */
  processNewState(e) {
    if (this.isPaused = !1, this.resetState(), this.currentSong = new X(e, this.connector.meta), this.currentSong.flags.isReplaying = this.isReplayingSong, this.debugLog(
      `New song detected: ${jt(
        e
      )}`
    ), !this.shouldScrobblePodcasts && e.isPodcast) {
      this.skipCurrentSong();
      return;
    }
    this.playbackTimer.start(() => {
      this.scrobbleSong();
    }), this.replayDetectionTimer.start(() => {
      this.debugLog("Replaying song..."), this.isReplayingSong = !0;
    }), e.isPlaying || this.setPaused(), this.processSong(), this.isReplayingSong = !1;
  }
  /**
  * Process connector state as current one.
  * @param newState - Connector state
  */
  async processCurrentState(e) {
    if (!T(this.currentSong) || this.currentSong.flags.isSkipped)
      return;
    const {
      currentTime: t,
      isPlaying: r,
      trackArt: a,
      duration: i,
      scrobblingDisallowedReason: n
    } = e, h = this.currentSong.parsed.isPlaying !== r;
    this.currentSong.parsed.currentTime = t, this.currentSong.parsed.isPlaying = r, this.currentSong.parsed.trackArt = a, this.currentSong.parsed.scrobblingDisallowedReason = n, this.isNeedToUpdateDuration(e) && i && this.updateSongDuration(i), h && r !== void 0 ? this.onPlayingStateChanged(r) : this.mode === J && await this.shouldScrobble() && r && this.setSongNowPlaying();
  }
  /**
  * Reset controller state.
  */
  resetState() {
    this.dispatchEvent(pt), this.playbackTimer.reset(), this.replayDetectionTimer.reset(), this.shouldHaveScrobbled = !1, this.forceScrobble = !1, this.currentSong = null;
  }
  /**
  * Process song using pipeline module.
  */
  async processSong() {
    T(this.currentSong) && (this.shouldHaveScrobbled = !1, this.forceScrobble = !1, await this.shouldScrobble() ? this.setMode(ut) : this.setMode(J), await this.pipeline.process(
      this.currentSong,
      this.connector.meta
    ) && (this.debugLog(
      `Song finished processing: ${this.currentSong.toString()}`
    ), this.currentSong.flags.isMarkedAsPlaying = !1, await this.updateTimers(this.currentSong.getDuration()), this.currentSong.isValid() ? await this.shouldScrobble() ? this.currentSong.parsed.isPlaying ? await this.shouldScrobble() ? this.currentSong.parsed.isPlaying ? this.playbackTimer.isExpired() ? this.dispatchEvent(Me) : this.setSongNowPlaying() : this.setMode(fe) : this.setMode(J) : this.setSongNotRecognized() : this.setMode(J) : this.setSongNotRecognized(), this.onSongUpdated()));
  }
  /**
  * Called when song was already flagged as processed, but now is
  * entering the pipeline again.
  */
  unprocessSong() {
    T(this.currentSong) && (this.debugLog(`Song unprocessed: ${this.currentSong.toString()}`), this.debugLog("Clearing playback timer destination time"), this.currentSong.resetData(), this.shouldHaveScrobbled = !1, this.forceScrobble = !1, this.playbackTimer.update(null), this.replayDetectionTimer.update(null));
  }
  /**
  * Called when playing state is changed.
  * @param value - New playing state
  */
  async onPlayingStateChanged(e) {
    if (this.debugLog(`isPlaying state changed to ${String(e)}`), e && this.currentSong) {
      this.setResumedPlaying(), this.playbackTimer.resume(), this.replayDetectionTimer.resume();
      const { isMarkedAsPlaying: t } = this.currentSong.flags;
      !t && this.currentSong.isValid() && await this.shouldScrobble() ? this.setSongNowPlaying() : this.onModeChanged();
    } else
      this.setPaused();
  }
  /**
  * Check if song is changed by given connector state.
  * @param newState - Connector state
  * @returns Check result
  */
  isSongChanged(e) {
    if (!T(this.currentSong))
      return !0;
    for (const t of Xa)
      if (t in e && t in this.currentSong.parsed && // @ts-expect-error We check that the fields exist, TS is just being difficult.
      e[t] !== this.currentSong.parsed[t])
        return !0;
    return !1;
  }
  /**
  * Check if song duration should be updated.
  * @param newState - Connector state
  * @returns Check result
  */
  isNeedToUpdateDuration(e) {
    return !!e.duration && this.currentSong?.parsed.duration !== e.duration;
  }
  /**
  * Update song duration value.
  * @param duration - Duration in seconds
  */
  updateSongDuration(e) {
    T(this.currentSong) && (this.debugLog(`Update duration: ${e}`), this.currentSong.parsed.duration = e, this.updateTimers(e));
  }
  /**
  * Update internal timers.
  * @param duration - Song duration in seconds
  */
  async updateTimers(e) {
    if (this.playbackTimer.isExpired()) {
      this.debugLog("Attempt to update expired timers", "warn");
      return;
    }
    const t = await F(
      et,
      this.connector.meta.id
    ), r = Fs(t), a = Ns(e, r);
    if (a !== -1) {
      this.playbackTimer.update(a), this.replayDetectionTimer.update(e);
      const i = this.playbackTimer.getRemainingSeconds();
      this.debugLog(
        `The song will be scrobbled in ${i ?? -999} seconds`
      ), this.debugLog(`The song will be repeated in ${e} seconds`);
    } else
      this.debugLog("The song is too short to scrobble");
  }
  /**
  * Contains all actions to be done when song is ready to be marked as
  * now playing.
  */
  async setSongNowPlaying() {
    if (!T(this.currentSong) || !this.currentSong.isValid() || !await this.shouldScrobble())
      return;
    if (!this.currentSong.flags.finishedProcessing) {
      this.debugLog("Song set as loading"), this.setMode(ut);
      return;
    }
    this.currentSong.flags.isMarkedAsPlaying = !0;
    const e = await v({
      type: "setNowPlaying",
      payload: {
        song: this.currentSong.getCloneableData()
      }
    });
    lt(e, b.RESULT_OK) ? (this.debugLog("Song set as now playing"), this.setMode(Oe)) : (this.debugLog("Song isn't set as now playing"), this.setMode(_e)), this.dispatchEvent(Me);
  }
  async setPaused() {
    this.playbackTimer.pause(), this.replayDetectionTimer.pause(), !(!T(this.currentSong) || !this.currentSong.isValid() || !await this.shouldScrobble()) && (this.isPaused = !0, this.onModeChanged(), await v({
      type: "setPaused",
      payload: {
        song: this.currentSong.getCloneableData()
      }
    }));
  }
  async setResumedPlaying() {
    this.isPaused = !1, !(!T(this.currentSong) || !this.currentSong.isValid() || !await this.shouldScrobble()) && (this.onModeChanged(), await v({
      type: "setResumedPlaying",
      payload: {
        song: this.currentSong.getCloneableData()
      }
    }));
  }
  /**
  * Notify user that song it not recognized by the extension.
  */
  setSongNotRecognized() {
    this.setMode(xt), this.dispatchEvent(yt);
  }
  /**
  * Enable or disable a connector
  *
  * @param isEnabled - Whether to enable or disable connector.
  */
  setConnectorState(e) {
    this.setEnabled(e), ws(this.getConnector(), e);
  }
  /**
  * Disable connector until tab is closed
  */
  async disableUntilTabIsClosed() {
    const e = await wt.get(), t = await this.tabId;
    wt.set({
      ...e,
      [t ?? -1]: {
        ...e?.[t ?? -1] ?? {},
        [this.connector.meta.id]: !0
      }
    }), this.setEnabled(!1);
  }
  /**
  * Tries to save failed scrobble due to disallowed/unrecognized.
  *
  * @returns true if scrobble is failed; false if should scrobble
  */
  async saveFailedScrobble() {
    return T(this.currentSong) ? await this.shouldScrobble() ? this.currentSong.isValid() ? !1 : (this.scrobbleCacheId = await Ae.pushScrobble({
      song: this.currentSong.getCloneableData(),
      status: De.INVALID
    }), this.shouldHaveScrobbled = !0, !0) : (this.scrobbleCacheId = await Ae.pushScrobble({
      song: this.currentSong.getCloneableData(),
      status: De.DISALLOWED
    }), this.shouldHaveScrobbled = !0, !0) : !0;
  }
  /**
  * Called when scrobble timer triggers.
  * The time should be set only after the song is validated and ready
  * to be scrobbled.
  */
  async scrobbleSong() {
    if (!T(this.currentSong) || await this.saveFailedScrobble())
      return;
    this.scrobbleCacheId && (Ae.deleteScrobbles([this.scrobbleCacheId]), this.scrobbleCacheId = null), this.isEditing && await new Promise((t) => {
      const r = (a) => {
        a || (this.eventEmitter.off("updateEditStatus", r), t(!0));
      };
      this.eventEmitter.on("updateEditStatus", r);
    });
    const e = await v({
      type: "scrobble",
      payload: {
        songs: [this.currentSong.getCloneableData()],
        currentlyPlaying: !0
      }
    });
    lt(e[0], b.RESULT_OK) ? (this.debugLog("Scrobbled successfully"), this.currentSong.flags.isScrobbled = !0, this.setMode(Ue), this.onSongUpdated()) : zs(e[0], b.RESULT_IGNORE) ? (this.debugLog("Song is ignored by service"), this.setMode(Vs)) : (this.debugLog("Scrobbling failed", "warn"), this.setMode(_e));
  }
  /**
  * Reset the state of the connector, removing currently playing song if there is one.
  */
  reset() {
    this.resetState(), this.setMode(fe);
  }
  /**
  * Assert whether there is a song playing right now
  */
  assertSongIsPlaying() {
    if (!this.currentSong)
      throw new Error("No song is now playing");
  }
  /**
  * Print debug message prefixed with controller.
  * @param text - Debug message
  * @param logType - Log type
  */
  debugLog(e, t = "log") {
    const r = `Controller: ${e}`;
    j(r, t);
  }
}
function ti(s) {
  return !(s.artist && s.track) && !s.uniqueID && !s.duration;
}
function jt(s) {
  return JSON.stringify(s, null, 2);
}
function T(s) {
  return !!s;
}
function si() {
  if (window.STARTER_LOADED) {
    j("Starter is already loaded", "warn");
    return;
  }
  if (ri()) {
    j(
      "You have overwritten or unset the Connector object",
      "warn"
    );
    return;
  }
  ai();
}
function ri() {
  return typeof Connector > "u" || !(Connector instanceof ds);
}
async function ai() {
  const e = await E(Je).get(), r = await E(
    Ye
  ).get(), a = await v({
    type: "getTabId",
    payload: void 0
  });
  if (ii(
    !r?.[a ?? -2]?.[Connector.meta.id] && (e === null || !e[O][Connector.meta.id])
  ), Connector.playerSelector === null) {
    j(
      "`Connector.playerSelector` is empty. The current connector is expected to manually detect state changes",
      "info"
    );
    return;
  }
  j("Setting up observer");
  const i = Es();
  i !== null ? Ts(i) : (j(
    `Element '${Connector.playerSelector.toString()}' is missing`,
    "warn"
  ), oi());
}
function ii(s) {
  const e = new ei(Connector, s);
  Connector.controllerCallback = e.onStateChanged.bind(e), Connector.isLovedCallback = e.onLoveChanged.bind(e);
}
function Ts(s) {
  const e = new MutationObserver(Connector.onStateChanged), t = {
    childList: !0,
    subtree: !0,
    attributes: !0,
    characterData: !0
  };
  e.observe(s, t), j(
    `Used '${Connector.playerSelector?.toString() ?? "errorPlayerSelectorNotDefined"}' to watch changes.`
  );
}
function oi() {
  const s = new MutationObserver(() => {
    const t = Es();
    t !== null && (s.disconnect(), Ts(t));
  }), e = {
    childList: !0,
    subtree: !0,
    attributes: !1,
    characterData: !1
  };
  s.observe(document, e);
}
function Es() {
  if (Connector.playerSelector === null)
    return null;
  if (typeof Connector.playerSelector == "object") {
    for (const s of Connector.playerSelector) {
      const e = document.querySelector(s);
      if (e !== null)
        return e;
    }
    return null;
  }
  return document.querySelector(Connector.playerSelector);
}
class ce {
  storage;
  userApiUrl = null;
  userToken = null;
  arrayProperties = null;
  constructor() {
    this.storage = this.initStorage(), this.initUserProps(), Xs(
      Zs({
        type: "updateScrobblerProperties",
        fn: () => {
          this.initUserProps();
        }
      })
    );
  }
  /**
  * Get user property values.
  *
  * Each property is a property used internally in scrobblers.
  * Users can edit custom properties in the extension settings.
  */
  async getUserProperties() {
    const e = await this.storage.get();
    return !e || !("properties" in e) || !e.properties ? {} : e.properties;
  }
  /**
  * Apply user properties.
  *
  * Each property is a property used internally in scrobblers.
  * Users can edit custom properties in the extension settings.
  *
  * @param props - Object contains user properties
  */
  async applyUserProperties(e) {
    this.applyProps(e, this.getUserDefinedProperties());
    let t = await this.storage.get();
    if (t || (t = {}), !t) {
      D("No data in storage", "error");
      return;
    }
    if ((!("properties" in t) || t.properties === void 0) && (t.properties = {}), !("properties" in t) || t.properties === void 0) {
      D("No properties in storage", "error");
      return;
    }
    for (const r in e) {
      const a = e[r];
      a ? t.properties[r] = a : r in t.properties && delete t.properties[r];
    }
    await this.storage.set(t);
  }
  /**
  * Return a list of user-defined scrobbler properties.
  *
  * @returns a list of user-defined scrobbler properties.
  */
  getUserDefinedProperties() {
    return [];
  }
  /**
  * Return a list of user-defined scrobbler array properties.
  *
  * @returns a list of user-defined scrobbler array properties.
  */
  getUserDefinedArrayProperties() {
    return [];
  }
  /**
  * Get array property values
  *
  * Each property is a property used internally in scrobblers.
  * Users can add and remove custom array properties in the extension settings.
  */
  async getArrayProperties() {
    const e = await this.storage.get();
    return !e || !("arrayProperties" in e) || !e.arrayProperties ? [] : e.arrayProperties;
  }
  /**
  * Add array property values
  *
  * Each property is a property used internally in scrobblers.
  * Users can add and remove custom array properties in the extension settings.
  *
  * @param props - The properties to add to the array.
  */
  async addUserArrayProperties(e) {
    let t = await this.storage.get();
    if ((!t || !("arrayProperties" in t) || !t.arrayProperties) && (t = {
      arrayProperties: []
    }), !t || !("arrayProperties" in t) || !t.arrayProperties) {
      D("No data in storage", "error");
      return;
    }
    t.arrayProperties.push(e), this.applyArrayProps(
      t.arrayProperties,
      this.getUserDefinedArrayProperties()
    ), await this.storage.set(t);
  }
  /**
  * Apply array property values
  *
  * Replaces the property array with the one supplied in parameters.
  *
  * @param props - property values to apply
  */
  async applyUserArrayProperties(e) {
    let t = await this.storage.get();
    if ((!t || !("arrayProperties" in t) || !t.arrayProperties) && (t = {
      arrayProperties: []
    }), !t || !("arrayProperties" in t) || !t.arrayProperties) {
      D("No data in storage", "error");
      return;
    }
    t.arrayProperties = e, this.applyArrayProps(
      t.arrayProperties,
      this.getUserDefinedArrayProperties()
    ), await this.storage.set(t);
  }
  /**
  * Remove session info.
  */
  async signOut() {
    const e = await this.storage.get();
    if (!e) {
      D("No data in storage", "error");
      return;
    }
    "sessionID" in e && delete e.sessionID, "sessionName" in e && delete e.sessionName, "arrayProperties" in e && delete e.arrayProperties, await this.storage.set(e);
  }
  /**
  * Get URL to profile page.
  * @returns Profile URL
  */
  async getProfileUrl() {
    const { sessionName: e } = await this.getSession();
    return `${this.getBaseProfileUrl()}${e ?? "undefined"}`;
  }
  /** Scrobbler features. */
  /**
  * Check if service supports loving songs.
  * @returns True if service supports that; false otherwise
  */
  canLoveSong() {
    return !1;
  }
  /**
  * Check if service supports retrieving of song info.
  * @returns True if service supports that; false otherwise
  */
  canLoadSongInfo() {
    return !1;
  }
  /**
  * Apply filters over song object. Override if scrobbler requires custom global filtering.
  *
  * @param song - the song about to be dispatched
  * @returns updated song
  */
  applyFilter(e) {
    return e;
  }
  /** Constants */
  /**
  * Get timeout of all API requests in milliseconds.
  */
  get REQUEST_TIMEOUT() {
    return 15e3;
  }
  /** Misc */
  /**
  * Helper function to show debug output.
  * @param text - Debug message
  * @param logType - Log type
  */
  debugLog(e, t = "log") {
    const r = `${this.getLabel()}: ${e}`;
    D(r, t);
  }
  /** Internal functions */
  initStorage() {
    const e = ["token", "sessionID", "sessionName"];
    e.push(...this.getUserDefinedProperties());
    const t = Ir(this.getStorageName());
    return t.debugLog(e), t;
  }
  async initUserProps() {
    const e = await this.storage.get();
    if (e && "properties" in e)
      for (const t in e.properties)
        t === "userApiUrl" && "userApiUrl" in e.properties && (this.userApiUrl = e.properties.userApiUrl), t === "userToken" && "userToken" in e.properties && (this.userToken = e.properties.userToken);
    e && "arrayProperties" in e && (this.arrayProperties = e.arrayProperties ?? []);
  }
  applyProps(e, t) {
    for (const r in e) {
      if (!t.includes(r))
        throw new Error(`Unknown property: ${r}`);
      const a = e[r];
      if (a === void 0)
        throw new Error(`Property is not set: ${r}`);
      a && r in this ? this[r] = e[r] : r in this && delete this[r];
    }
  }
  applyArrayProps(e, t) {
    if (!e)
      throw new Error("No props passed to applyArrayProps()");
    if (e.length === 0) {
      this.arrayProperties = [];
      return;
    }
    for (const r of e)
      for (const [a, i] of Object.entries(r)) {
        if (!t.includes(a))
          throw new Error(`Unknown property: ${a}`);
        if (i === void 0)
          throw new Error(`Property is not set: ${a}`);
      }
    this.arrayProperties = e;
  }
}
class Is extends ce {
  isLocalOnly = !1;
  /** @override */
  async getAuthUrl() {
    const e = {
      method: "auth.gettoken"
    };
    let t = null, r = await this.storage?.get();
    try {
      t = (await this.sendRequest(
        { method: "GET" },
        e,
        !1
      )).token;
    } catch {
      throw this.debugLog("Error acquiring a token", "warn"), new Error("Error acquiring a token");
    }
    return r || (r = { token: t }), r.token = t, "sessionID" in r && delete r.sessionID, "sessionName" in r && delete r.sessionName, await this.storage.set(r), `${this.getBaseAuthUrl()}?api_key=${this.getApiKey()}&token=${t || ""}`;
  }
  /** @override */
  async getSession() {
    const e = await this.storage.get();
    if (!e)
      throw new Error(b.ERROR_AUTH);
    if (!("token" in e)) {
      if (!("sessionID" in e))
        throw new Error(b.ERROR_AUTH);
      return {
        sessionID: e.sessionID ?? "undefined",
        sessionName: e.sessionName
      };
    }
    const t = e.token || null;
    if (t !== null)
      try {
        const r = await this.tradeTokenForSession(t);
        return delete e.token, e.sessionID = r.sessionID, e.sessionName = r.sessionName, await this.storage.set(e), r;
      } catch {
        throw this.debugLog("Failed to trade token for session", "warn"), await this.signOut(), new Error(b.ERROR_AUTH);
      }
    return {
      sessionID: e.sessionID,
      sessionName: e.sessionName
    };
  }
  /** @override */
  async isReadyForGrantAccess() {
    const e = await this.storage.get();
    return !e || !("token" in e) ? !1 : !!e.token;
  }
  /** @override */
  async sendNowPlaying(e) {
    const { sessionID: t } = await this.getSession(), r = {
      method: "track.updatenowplaying",
      track: e.getTrack(),
      artist: e.getArtist(),
      sk: t
    };
    e.getAlbum() && (r.album = e.getAlbum()), e.getAlbumArtist() && (r.albumArtist = e.getAlbumArtist()), e.getDuration() && (r.duration = `${e.getDuration() ?? ""}`);
    const a = await this.sendRequest({ method: "POST" }, r);
    return this.processResponse(a);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const { sessionID: t } = await this.getSession(), r = {
      method: "track.scrobble",
      sk: t
    };
    for (const [n, h] of e.slice(0, 50).entries())
      r[`timestamp[${n}]`] = h.metadata.startTimestamp.toString(), r[`track[${n}]`] = h.getTrack(), r[`artist[${n}]`] = h.getArtist(), h.getAlbum() && (r[`album[${n}]`] = h.getAlbum()), h.getAlbumArtist() && (r[`albumArtist[${n}]`] = h.getAlbumArtist());
    const a = await this.sendRequest(
      { method: "POST" },
      r
    ), i = this.processResponse(a);
    if (i === b.RESULT_OK) {
      const n = a.scrobbles;
      if (n) {
        const h = n["@attr"].ignored;
        if (Number(h) === 0)
          return new Array(
            Math.min(e.length, 50)
          ).fill(b.RESULT_OK);
        if (!Array.isArray(n.scrobble))
          return new Array(
            Math.min(e.length, 50)
          ).fill(b.RESULT_IGNORE);
        const y = {};
        for (const [k, P] of e.entries())
          y[P.metadata.startTimestamp.toString()] = k;
        const A = new Array(Math.min(e.length, 50));
        for (const k of n.scrobble)
          A[y[k.timestamp]] = k.ignoredMessage.code === "0" ? b.RESULT_OK : b.RESULT_IGNORE;
      } else
        return new Array(
          Math.min(e.length, 50)
        ).fill(b.ERROR_OTHER);
    }
    return new Array(Math.min(e.length, 50)).fill(
      i
    );
  }
  /** @override */
  async toggleLove(e, t) {
    const { sessionID: r } = await this.getSession(), a = {
      method: t ? "track.love" : "track.unlove",
      track: e.getTrack(),
      artist: e.getArtist(),
      sk: r
    }, i = await this.sendRequest({ method: "POST" }, a);
    return this.processResponse(i);
  }
  /** @override */
  canLoveSong() {
    return !0;
  }
  /** Internal functions. */
  /**
  * Execute asynchronous request.
  *
  * API key will be added to params by default and all parameters will be
  * encoded for use in query string internally.
  *
  * @param  options - Fetch options
  * @param  params - Object of key =\> value url parameters
  * @param  signed - Should the request be signed?
  * @returns Parsed response
  */
  async sendRequest(e, t, r = !0) {
    const a = this.makeRequestUrl(t, r), i = fetch(a, e), n = this.REQUEST_TIMEOUT;
    let h = null, y = null;
    try {
      h = await N(n, i), y = await h.json();
    } catch {
      throw new Error(b.ERROR_OTHER);
    }
    const A = JSON.stringify(y, null, 2), k = ni(y, A);
    if (!h.ok)
      throw this.debugLog(`${t.method} response:
${k}`, "error"), "error" in y && y.error === 9 && (await this.signOut(), this.debugLog(
        "error 9 received, triggering signOut so that user grant access again."
      )), new Error(b.ERROR_OTHER);
    return this.debugLog(`${t.method} response:
${k}`), y;
  }
  /**
  * Make a call to API to trade token for session ID.
  * Assume the token was authenticated by the user.
  *
  * @param token - Token provided by scrobbler service
  * @returns Session data
  */
  async tradeTokenForSession(e) {
    const t = { method: "auth.getsession", token: e }, r = await this.sendRequest(
      { method: "GET" },
      t
    );
    if (this.processResponse(r) !== b.RESULT_OK)
      throw new Error(b.ERROR_AUTH);
    const i = r.session.name;
    return { sessionID: r.session.key, sessionName: i };
  }
  /**
  * Create URL of API request based on API params.
  * @param params - Object of key =\> value url parameters
  * @param signed - Should the request be signed?
  * @returns URL of API request
  */
  makeRequestUrl(e, t) {
    e.api_key = this.getApiKey(), e.format = "json", t && (e.api_sig = this.generateSign(e));
    const r = It(e);
    return `${this.getApiUrl()}?${r}`;
  }
  /**
  * Compute string for signing request.
  * See http://www.last.fm/api/authspec#8
  * @param params - Parameters of API method
  * @returns Signed parameters
  */
  generateSign(e) {
    const t = Object.keys(e).sort();
    let r = "";
    for (const a of t)
      ["format", "callback"].includes(a) || (r += `${a}${e[a] || ""}`);
    return js(r + this.getApiSecret());
  }
  /**
  * Process response and return service call result.
  * @param responseData - Response data
  * @returns Response result
  */
  processResponse(e) {
    return e.error ? b.ERROR_OTHER : b.RESULT_OK;
  }
}
function ni(s, e) {
  let t = e;
  const r = [s.token], a = s.session;
  a && (r.push(a.name), r.push(a.key));
  for (const i of r)
    typeof i == "string" ? t = nt(i, t) : typeof i == "number" && (t = nt(i.toString(), t));
  return t;
}
class li extends Is {
  /** @override */
  getApiUrl() {
    return "https://ws.audioscrobbler.com/2.0/";
  }
  /** @override */
  getApiKey() {
    return "d9bb1870d3269646f740544d9def2c95";
  }
  /** @override */
  getApiSecret() {
    return "2160733a567d4a1a69a73fad54c564b2";
  }
  /** @override */
  getBaseAuthUrl() {
    return "https://www.last.fm/api/auth/";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://last.fm/user/";
  }
  /** @override */
  getId() {
    return "lastfm";
  }
  /** @override */
  getLabel() {
    return "Last.fm";
  }
  /** @override */
  getStatusUrl() {
    return "http://status.last.fm/";
  }
  /** @override */
  getStorageName() {
    return "LastFM";
  }
  /** @override */
  async getSongInfo(e) {
    const t = {
      track: e.getTrack(),
      artist: e.getArtist(),
      method: "track.getinfo"
    };
    try {
      const { sessionName: n } = await this.getSession();
      t.username = n;
    } catch {
    }
    e.getAlbum() && (t.album = e.getAlbum());
    const r = await this.sendRequest(
      { method: "GET" },
      t,
      !1
    );
    if (this.processResponse(r) !== b.RESULT_OK)
      throw new Error("Unable to load song info");
    const i = this.parseSongInfo(r);
    return this.canLoveSong() && i && Qs(e.controllerTabId, {
      type: "updateLove",
      payload: {
        isLoved: i.userloved || !1
      }
    }), i;
  }
  /** @override */
  canLoadSongInfo() {
    return !0;
  }
  /**
  * Parse service response and return parsed data.
  * @param responseData - Last.fm track.getInfo response data
  * @returns Parsed song info
  */
  parseSongInfo(e) {
    const t = {}, r = e.track, a = e.track.album, i = e.track.artist, n = r.userloved;
    if (n ? t.userloved = n === "1" : t.userloved = void 0, t.artist = i.name, t.artistUrl = i.url, t.track = r.name, t.trackUrl = r.url, t.duration = parseInt(r.duration) / 1e3 || null, a && (t.album = a.title, t.albumUrl = a.url, t.albumMbId = a.mbid, Array.isArray(a.image))) {
      const h = a.image.reduce(
        (A, k) => (A[k.size] = k["#text"], A),
        {}
      ), y = ["extralarge", "large", "medium"];
      for (const A of y) {
        const k = h[A];
        if (k) {
          t.trackArtUrl = k;
          break;
        }
      }
    }
    return t.userPlayCount = parseInt(r.userplaycount) || 0, t;
  }
  /** @override */
  applyFilter(e) {
    if (e.getAlbumArtist()) {
      const t = e.getAlbumArtist() || "";
      e.parsed.albumArtist = t.includes("Various Artists") ? "Various Artists" : t;
    }
    return e;
  }
}
class ci extends Is {
  /** @override */
  getApiUrl() {
    return "https://libre.fm/2.0/";
  }
  /** @override */
  getApiKey() {
    return "r8i1y91hz71tcx7vyrp9hk1alhqp1898";
  }
  /** @override */
  getApiSecret() {
    return "8187db5vg234yq6tm7o62q8mtl1niala";
  }
  /** @override */
  getBaseAuthUrl() {
    return "https://www.libre.fm/api/auth/";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://libre.fm/user/";
  }
  /** @override */
  getLabel() {
    return "Libre.fm";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getStorageName() {
    return "LibreFM";
  }
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  sendRequest(e, t, r) {
    return e.method?.toLowerCase() === "post" && (e.headers = {
      "Content-Type": "application/x-www-form-urlencoded"
    }, e.body = It(t)), super.sendRequest(e, t, r);
  }
}
const ui = "https://listenbrainz.org/settings/", qe = "https://api.listenbrainz.org/1", di = `${qe}/submit-listens`;
class mi extends ce {
  isLocalOnly = !1;
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  async getAuthUrl() {
    const e = await this.storage.get();
    let t;
    return e && "properties" in e && (t = e.properties), t ? await this.storage.set({ isAuthStarted: !0, properties: t }) : await this.storage.set({ isAuthStarted: !0 }), "https://listenbrainz.org/login/musicbrainz?next=%2Fsettings%2F";
  }
  /** @override */
  getBaseProfileUrl() {
    return "https://listenbrainz.org/user/";
  }
  /** @override */
  getLabel() {
    return "ListenBrainz";
  }
  /** @override */
  async getProfileUrl() {
    return this.userToken ? "" : await super.getProfileUrl();
  }
  /** @override */
  getStatusUrl() {
    return this.userToken ? "" : "https://listenbrainz.org/current-status";
  }
  /** @override */
  getStorageName() {
    return "ListenBrainz";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async signOut() {
    (this.userApiUrl || this.userToken) && await this.applyUserProperties({
      userApiUrl: null,
      userToken: null
    }), await super.signOut();
  }
  /** @override */
  async getSession() {
    if (this.userToken)
      return { sessionID: this.userToken };
    const e = await this.storage.get();
    if (!e)
      throw this.debugLog("no data", "error"), await this.signOut(), new Error(b.ERROR_AUTH);
    if ("isAuthStarted" in e && e.isAuthStarted)
      try {
        const t = await this.requestSession();
        return e.sessionID = t.sessionID, e.sessionName = t.sessionName, delete e.isAuthStarted, await this.storage.set(e), t;
      } catch {
        throw this.debugLog("Failed to get session", "warn"), await this.signOut(), new Error(b.ERROR_AUTH);
      }
    else if (!("sessionID" in e) || !e.sessionID)
      throw new Error(b.ERROR_AUTH);
    return {
      sessionID: e.sessionID,
      sessionName: e.sessionName
    };
  }
  /** @override */
  async isReadyForGrantAccess() {
    if (this.userToken)
      return !1;
    const e = await this.storage.get();
    return !e || !("isAuthStarted" in e) ? !1 : e.isAuthStarted ?? !1;
  }
  /** @override */
  async sendNowPlaying(e) {
    const { sessionID: t } = await this.getSession(), a = {
      listen_type: "playing_now",
      payload: [
        {
          track_metadata: this.makeTrackMetadata(e)
        }
      ]
    };
    return this.sendScrobbleRequest(a, t);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async scrobble(e, t) {
    const { sessionID: r } = await this.getSession(), a = {
      listen_type: t ? "single" : "import",
      payload: e.slice(0, 50).map((n) => ({
        listened_at: n.metadata.startTimestamp,
        track_metadata: this.makeTrackMetadata(n)
      }))
    }, i = await this.sendScrobbleRequest(a, r);
    return new Array(Math.min(e.length, 50)).fill(
      i
    );
  }
  /** @override */
  async toggleLove(e, t) {
    const r = e.getTrack(), a = e.getArtist();
    if (typeof r != "string" || typeof a != "string")
      throw new Error(
        `Invalid track ${JSON.stringify({ artist: a, track: r })}`
      );
    const i = new URLSearchParams({
      recording_name: r,
      artist_name: a
    });
    let n = {};
    try {
      n = await this.listenBrainzApi(
        "GET",
        `${qe}/metadata/lookup?${i.toString()}`,
        null,
        null
      );
    } catch {
    }
    if (this.debugLog(
      `lookup result: ${JSON.stringify(n, null, 2)}`
    ), !n.recording_mbid)
      return this.debugLog(
        `Could not lookup metadata for song: ${e.toString()}`
      ), {};
    const { sessionID: h } = await this.getSession(), y = {
      recording_mbid: n.recording_mbid,
      score: t ? 1 : 0
    }, A = await this.listenBrainzApi(
      "POST",
      `${qe}/feedback/recording-feedback`,
      y,
      h
    );
    return this.processResult(A);
  }
  /** @override */
  canLoveSong() {
    return !0;
  }
  /** Private methods. */
  async listenBrainzApi(e, t, r, a) {
    const i = {
      method: e,
      headers: {
        "Content-Type": "application/json; charset=UTF-8"
      }
    };
    r && (i.body = JSON.stringify(r)), a && i.headers && (i.headers.Authorization = `Token ${a}`);
    const n = fetch(t, i), h = this.REQUEST_TIMEOUT;
    let y = null, A = null;
    try {
      A = await N(h, n), y = await A.json();
    } catch {
      throw this.debugLog("Error while sending request", "error"), new Error(b.ERROR_OTHER);
    }
    switch (A.status) {
      case 400:
        throw this.debugLog("Invalid JSON sent", "error"), new Error(b.ERROR_AUTH);
      case 401:
        throw this.debugLog("Invalid Authorization sent", "error"), new Error(b.ERROR_AUTH);
    }
    return this.debugLog(JSON.stringify(y, null, 2)), y;
  }
  async sendScrobbleRequest(e, t) {
    const r = await this.listenBrainzApi(
      "POST",
      this.userApiUrl || di,
      e,
      t
    );
    return this.processResult(r);
  }
  async requestSession() {
    let e = null;
    try {
      e = await this.fetchSession(ui);
    } catch {
      this.debugLog("request session timeout", "warn");
    }
    if (e) {
      const t = Tt(e.sessionID);
      return this.debugLog(`Session ID: ${t}`), e;
    }
    throw new Error(b.ERROR_AUTH);
  }
  async fetchSession(e) {
    this.debugLog(`Use ${e}`);
    const t = $s() ? qs(e) : v({
      type: "sendListenBrainzRequest",
      payload: {
        url: e
      }
    }), r = this.REQUEST_TIMEOUT, a = await N(r, t);
    if (a !== null) {
      let i = null;
      const n = a.match(
        /<script id="global-react-props" type="application\/json">(.*?)<\/script>/
      )?.[1];
      n && (i = JSON.parse(
        n
      ));
      const h = i?.current_user.name, y = i?.current_user.auth_token;
      if (y && h)
        return { sessionID: y, sessionName: h };
    }
    return null;
  }
  processResult(e) {
    return e.status !== "ok" ? b.ERROR_OTHER : b.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const t = {
      artist_name: e.getArtist() ?? "",
      track_name: e.getTrack() ?? "",
      additional_info: {
        submission_client: "Web Scrobbler",
        submission_client_version: Hs(),
        music_service_name: e.metadata.label
      }
    }, r = e.getAlbum();
    r && (t.release_name = r);
    const a = e.getOriginUrl();
    a && (t.additional_info.origin_url = a);
    const i = e.getAlbumArtist();
    i && (t.additional_info.release_artist_name = i), a && e.metadata.label === "Spotify" && (t.additional_info.spotify_id = a);
    const n = e.getDuration();
    return n && (t.additional_info.duration = n), t;
  }
}
class gi extends ce {
  isLocalOnly = !0;
  /** @override */
  getStorageName() {
    return "Maloja";
  }
  /** @override */
  getLabel() {
    return "Maloja";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  async getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getSongInfo() {
    return Promise.resolve({});
  }
  toggleLove() {
    return Promise.resolve(b.ERROR_OTHER);
  }
  /** @override */
  async getSession() {
    if (!this.userToken)
      throw new Error(b.ERROR_AUTH);
    return Promise.resolve({ sessionID: this.userToken });
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  sendNowPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const t = [];
    for (const r of e.slice(0, 50)) {
      const a = this.makeTrackMetadata(r);
      t.push(this.sendRequest(a, this.userToken));
    }
    return Promise.all(t);
  }
  /** Private methods */
  async sendRequest(e, t) {
    e.key = t;
    const r = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    }, a = fetch(this.userApiUrl, r), i = this.REQUEST_TIMEOUT;
    let n = null;
    try {
      if (n = await N(i, a), n.status !== 200)
        return b.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), b.ERROR_OTHER;
    }
    return b.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const t = {
      artist: e.getArtist() ?? "",
      title: e.getTrack() ?? "",
      time: e.metadata.startTimestamp
    }, r = e.getAlbum();
    r && (t.album = r);
    const a = e.getAlbumArtist();
    return a && (t.albumartists = [a]), t;
  }
}
class hi extends ce {
  isLocalOnly = !0;
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getLabel() {
    return "Webhook";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getStorageName() {
    return "Webhook";
  }
  /** @override */
  getSession() {
    return !this.arrayProperties || this.arrayProperties.length === 0 ? Promise.reject(new Error("")) : Promise.resolve({ sessionID: "webhook" });
  }
  /** @override */
  getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getUserDefinedArrayProperties() {
    return ["applicationName", "userApiUrl"];
  }
  async getSongInfo() {
    return Promise.resolve({});
  }
  /** @override */
  async sendRequest(e) {
    if (!this.arrayProperties || this.arrayProperties.length === 0)
      return b.ERROR_AUTH;
    this.debugLog(
      `Webhook - sendRequest: ${JSON.stringify(e, null, 2)}`
    );
    const t = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(e)
    }, r = [];
    for (const i of this.arrayProperties)
      r.push(fetch(i.userApiUrl, t));
    const a = this.REQUEST_TIMEOUT;
    try {
      const i = await N(
        a,
        Promise.all(r)
      );
      for (const n of i)
        if (n.status !== 200)
          return this.debugLog(`Error in ${n.url}.`, "error"), b.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), b.ERROR_OTHER;
    }
    return b.RESULT_OK;
  }
  /** @override */
  async sendNowPlaying(e) {
    return this.sendRequest({
      eventName: "nowplaying",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async sendPaused(e) {
    return this.sendRequest({
      eventName: "paused",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async sendResumedPlaying(e) {
    return this.sendRequest({
      eventName: "resumedplaying",
      time: Date.now(),
      data: { song: e }
    });
  }
  /** @override */
  async scrobble(e, t) {
    const r = await this.sendRequest({
      eventName: "scrobble",
      time: Date.now(),
      // send the first song as a separate argument to avoid breaking older implementations
      data: {
        song: e[0],
        songs: e,
        currentlyPlaying: t
      }
    });
    return new Array(e.length).fill(r);
  }
  /** @override */
  toggleLove(e, t) {
    return this.sendRequest({
      eventName: "loved",
      time: Date.now(),
      data: { song: e, isLoved: t }
    });
  }
}
class bi extends ce {
  isLocalOnly = !0;
  /** @override */
  getStorageName() {
    return "Pleroma";
  }
  /** @override */
  getLabel() {
    return "Pleroma";
  }
  /** @override */
  getStatusUrl() {
    return "";
  }
  /** @override */
  getUserDefinedProperties() {
    return ["userApiUrl", "userToken"];
  }
  /** @override */
  async getProfileUrl() {
    return Promise.resolve("");
  }
  /** @override */
  async getAuthUrl() {
    return Promise.resolve("");
  }
  /** @override */
  getBaseProfileUrl() {
    return "";
  }
  /** @override */
  getSongInfo() {
    return Promise.resolve({});
  }
  toggleLove() {
    return Promise.resolve(b.ERROR_OTHER);
  }
  /** @override */
  async getSession() {
    if (!this.userToken)
      throw new Error(b.ERROR_AUTH);
    const e = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${this.userToken}`
      }
    }, t = `https://${this.userApiUrl}/api/v1/accounts/verify_credentials`, r = fetch(t, e), a = this.REQUEST_TIMEOUT;
    let i = null;
    try {
      if (i = await N(a, r), i.status !== 200)
        throw new Error(b.ERROR_AUTH);
      const n = await i.json(), h = n ? n.fqn : "";
      return { sessionID: this.userToken, sessionName: h };
    } catch {
      throw this.debugLog("Error while sending request", "error"), new Error(b.ERROR_AUTH);
    }
  }
  /** @override */
  isReadyForGrantAccess() {
    return Promise.resolve(!1);
  }
  /** @override */
  sendNowPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendResumedPlaying() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async sendPaused() {
    return Promise.resolve(b.RESULT_OK);
  }
  /** @override */
  async scrobble(e) {
    const t = [];
    for (const r of e.slice(0, 50)) {
      const a = this.makeTrackMetadata(r);
      t.push(this.sendRequest(a, this.userToken));
    }
    return Promise.all(t);
  }
  /** Private methods */
  async sendRequest(e, t) {
    const r = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${t}`
      },
      body: JSON.stringify(e)
    }, a = `https://${this.userApiUrl}/api/v1/pleroma/scrobble`, i = fetch(a, r), n = this.REQUEST_TIMEOUT;
    let h = null;
    try {
      if (h = await N(n, i), h.status !== 200)
        return b.ERROR_OTHER;
    } catch {
      return this.debugLog("Error while sending request", "error"), b.ERROR_OTHER;
    }
    return b.RESULT_OK;
  }
  makeTrackMetadata(e) {
    const t = {
      artist: e.getArtist() ?? "",
      title: e.getTrack() ?? "",
      length: e.getDuration(),
      url: e.parsed.originUrl ?? ""
    }, r = e.getAlbum();
    return r && (t.album = r), t;
  }
}
const re = [
  new li(),
  new ci(),
  new mi(),
  new gi(),
  new hi(),
  new bi()
];
function St(s, e) {
  return e.some((t) => t.getLabel() === s.getLabel());
}
class fi {
  /**
  * Scrobblers that are bound, meaning they have valid session IDs.
  */
  boundScrobblers = [];
  /**
  * Bind all registered scrobblers.
  * @returns Array of bound scrobblers
  */
  async bindAllScrobblers() {
    for (const e of re)
      try {
        await e.getSession(), this.bindScrobbler(e);
      } catch {
        j(`Unable to bind ${e.getLabel()}`, "warn");
      }
    return this.boundScrobblers;
  }
  /**
  * Bind given scrobbler.
  * @param scrobbler - Scrobbler instance
  */
  bindScrobbler(e) {
    St(e, this.boundScrobblers) || (this.boundScrobblers.push(e), j(`Bind ${e.getLabel()} scrobbler`));
  }
  /**
  * Unbind given scrobbler.
  * @param scrobbler - Scrobbler instance
  */
  unbindScrobbler(e) {
    if (St(e, this.boundScrobblers)) {
      const t = this.boundScrobblers.indexOf(e);
      this.boundScrobblers.splice(t, 1), j(`Unbind ${e.getLabel()} scrobbler`);
    } else
      j(`${e.getLabel()} is not bound`, "error");
  }
  /**
  * Retrieve song info using scrobbler APIs.
  * @param song - Song instance
  * @returns Promise resolved with array of song info objects
  */
  getSongInfo(e) {
    const t = re.filter((r) => r.canLoadSongInfo());
    return j(`Send "get info" request: ${t.length}`), Promise.all(
      t.map(async (r) => {
        try {
          return await r.getSongInfo(e);
        } catch {
          return j(
            `Unable to get song info from ${r.getLabel()}`,
            "warn"
          ), null;
        }
      })
    );
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendNowPlaying(e) {
    return j(`Send "now playing" request: ${this.boundScrobblers.length}`), Promise.all(
      this.boundScrobblers.map(async (t) => {
        try {
          return await t.sendNowPlaying(
            t.applyFilter(e)
          );
        } catch (r) {
          return this.processErrorResult(
            t,
            r
          );
        }
      })
    );
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendPaused(e) {
    const t = this.boundScrobblers.filter(
      (r) => typeof r.sendPaused == "function"
    );
    return t.length === 0 ? Promise.resolve([b.RESULT_OK]) : (j(`Send "paused" request: ${t.length}`), Promise.all(
      t.map(async (r) => {
        try {
          return await r.sendPaused(
            r.applyFilter(e)
          );
        } catch (a) {
          return this.processErrorResult(
            r,
            a
          );
        }
      })
    ));
  }
  /**
  * Send now playing notification to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  sendResumedPlaying(e) {
    const t = this.boundScrobblers.filter(
      (r) => typeof r.sendResumedPlaying == "function"
    );
    return t.length === 0 ? Promise.resolve([b.RESULT_OK]) : (j(`Send "paused" request: ${t.length}`), Promise.all(
      t.map(async (r) => {
        try {
          return await r.sendResumedPlaying(
            r.applyFilter(e)
          );
        } catch (a) {
          return this.processErrorResult(
            r,
            a
          );
        }
      })
    ));
  }
  /**
  * Scrobble song to each bound scrobbler.
  * @param song - Song instance
  * @returns Promise that will be resolved then the task will complete
  */
  async scrobble(e, t) {
    j(`Send "scrobble" request: ${this.boundScrobblers.length}`);
    const r = await Promise.all(
      this.boundScrobblers.map(async (a) => {
        try {
          return await a.scrobble(
            e.map(a.applyFilter),
            t
          );
        } catch (i) {
          return this.processScrobbleErrorResult(
            a,
            i
          );
        }
      })
    );
    for (let a = 0; a < r[0].length; a++)
      await Ae.pushScrobble({
        song: e[a].getCloneableData(),
        status: Ar(r, a)
      });
    return r;
  }
  /**
  * Toggle song love status.
  * @param song - Song instance
  * @param flag - Flag indicates song is loved
  * @returns Promise that will be resolved then the task will complete
  */
  async toggleLove(e, t) {
    const r = re.filter((i) => i.canLoveSong());
    return j(`Send "${t ? "love" : "unlove"}" request: ${r.length}`), Promise.all(
      r.map(async (i) => {
        try {
          return await i.toggleLove(e, t);
        } catch (n) {
          return this.processErrorResult(
            i,
            n
          );
        }
      })
    );
  }
  /**
  * Get all registered scrobblers.
  * @returns Array of bound scrobblers
  */
  getRegisteredScrobblers() {
    return re;
  }
  /**
  * Get scrobbler by label.
  * @param label - Scrobbler label
  * @returns Found scrobbler object
  */
  getScrobblerByLabel(e) {
    for (const t of re)
      if (t.getLabel() === e)
        return t;
    return null;
  }
  /**
  * Process result received from scrobbler.
  * @param scrobbler - Scrobbler instance
  * @param result - API call result
  * @returns Promise resolved with result object
  */
  async processErrorResult(e, t) {
    const r = t === b.ERROR_OTHER, a = t === b.ERROR_AUTH;
    if (!(r || a))
      throw new Error(`Invalid result: ${t}`);
    return a && (await e.isReadyForGrantAccess() || this.unbindScrobbler(e)), t;
  }
  /**
  * Process result received from scrobbler when scrobbling.
  * Scrobbling has array result so logic is slightly different
  * @param scrobbler - Scrobbler instance
  * @param result - API call result
  * @returns Promise resolved with result object
  */
  async processScrobbleErrorResult(e, t) {
    const r = t[0] === b.ERROR_OTHER, a = t[0] === b.ERROR_AUTH;
    if (!(r || a))
      throw new Error(`Invalid result: ${t[0]}`);
    return a && (await e.isReadyForGrantAccess() || this.unbindScrobbler(e)), t;
  }
}
const pi = new fi();
function yi() {
  const s = x.runtime.getURL(
    "connectors/webhook-auth-dom-inject.js"
  ), e = document.createElement("script");
  e.src = s, e.onload = function() {
    const t = this;
    t.parentNode?.removeChild(t);
  }, (document.head || document.documentElement).appendChild(e), window.addEventListener("message", (t) => {
    typeof t.data == "object" && t.data && "sender" in t.data && t.data.sender === "web-scrobbler" && "type" in t.data && t.data.type === "confirmLogin" && "applicationName" in t.data && typeof t.data.applicationName == "string" && "userApiUrl" in t.data && typeof t.data.userApiUrl == "string" && pi.getScrobblerByLabel("Webhook")?.addUserArrayProperties({
      applicationName: t.data.applicationName,
      userApiUrl: t.data.userApiUrl
    }).then(() => {
      v({
        type: "updateScrobblerProperties",
        payload: void 0
      });
    });
  });
}
wi();
async function wi() {
  Si();
  try {
    if (window.location.href.startsWith("https://webscrobbler.com/webhook")) {
      yi();
      return;
    }
    await ji(), si();
  } catch (s) {
    if (s instanceof Error && s.message === "dontlog")
      return;
    j(s, "error");
  }
}
async function ji() {
  const s = await Lr(window.location.href);
  if (!s)
    throw new Error("dontlog");
  if (window !== top && !s.allFrames)
    throw new Error("dontlog");
  window.Connector = new ds(s), window.Util = Sr, window.MetadataFilter = aa, window.webScrobblerScripts = {}, ve.init(), vs.init();
  try {
    await import(x.runtime.getURL(`connectors/${s?.js}`)), j(`Successfully loaded ${s.label} connector`);
  } catch (e) {
    throw j(
      `An error occurred while loading ${s.label} connector`,
      "error"
    ), e;
  }
}
function Si() {
  const s = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  v({
    type: "updateTheme",
    payload: s
  });
}
