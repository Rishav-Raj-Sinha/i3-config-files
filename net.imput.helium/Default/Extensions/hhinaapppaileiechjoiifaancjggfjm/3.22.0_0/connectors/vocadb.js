"use strict";
(() => {
  // src/connectors/vocadb.ts
  var filter = MetadataFilter.createFilter({
    artist: cleanupArtist
  });
  Connector.applyFilter(filter);
  function cleanupArtist(artist) {
    switch (location.hostname) {
      case "vocadb.net":
        return artist.replace(/(?<=feat. ).+$/, function(match) {
          const feat = match.split(", ");
          for (let i = 0; i < feat.length; i++) {
            feat[i] = feat[i].replace(/\s+\([^()]+\)/g, "").replace(
              /(\s(V\d+X?|Append|English|AI|NT|Sugar|Spicy|ROCKS|2S|Standard|II|TALK)\b.*)+$/gi,
              ""
            ).replace(/\s(ナチュラル|クール)$/gi, "").replace(/^(AI|V\d+X?)+\s/gi, "").replace(/^(VY\d+)V\d+\b/, "$1").replace(/^結月ゆかり.+$/, "\u7D50\u6708\u3086\u304B\u308A").replace(/^波音リツキレ$/, "\u6CE2\u97F3\u30EA\u30C4").replace(/^星尘Infinity$/, "\u661F\u5C18").replace(/^重音テトSV$/, "\u91CD\u97F3\u30C6\u30C8").replace(/^遙$/, "\u590F\u8A9E\u9059").replace(/^v flower|v4 flower|Ci flower$/, "flower").trim();
          }
          return [...new Set(feat)].join(", ");
        });
        break;
      case "utaitedb.net":
        return artist.replace(/^.+ feat\. /, "");
        break;
      default:
        return artist;
    }
  }
  Connector.playerSelector = "#app .css-1pm1wrk";
  Connector.trackArtSelector = ".css-1no5jxy";
  Connector.trackSelector = ".css-n3lbvk";
  Connector.artistSelector = ".css-molfmb";
  Connector.playButtonSelector = '.css-1lc7lii button[title="Play"]';
  Connector.getDuration = () => {
    const store = getPlayQueueStore();
    const current = store.items[store.currentIndex];
    return current.entry.pvs[0].length;
  };
  function getPlayQueueStore() {
    return JSON.parse(localStorage.PlayQueueStore);
  }
})();
