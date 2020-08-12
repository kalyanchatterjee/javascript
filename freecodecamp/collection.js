// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    album: "ABBA Gold",
  },
};

// Only change code below this line
function updateRecords(id, prop, value) {
  switch (prop) {
    case "album":
      if (value !== "") {
        collection[id].album = value;
      } else {
        if (collection.hadOwnProperty[prop]) {
          delete collection[id][prop];
        }
      }
      break;
    case "artist":
      if (value !== "") {
        collection[id].artist = value;
      } else {
        if (collection[id].hasOwnProperty(prop)) {
          delete collection[id][prop];
        }
      }
      break;
    case "tracks":
      if (value !== "") {
        let currentTracksArray = [];
        if (collection[id].hasOwnProperty(prop)) {
          currentTracksArray = collection[id][prop];
          currentTracksArray.push(value);
          collection[id].tracks = currentTracksArray;
        } else {
          collection[id][prop] = [];
          collection[id][prop].push(value);
        }
        break;
      } else {
        if (collection[id].hasOwnProperty(prop)) {
          delete collection[id][prop];
        }
      }
      break;
  }
  return collection;
}
updateRecords(5439, "artist", "ABBA");
updateRecords(5439, "tracks", "Take a Chance on Me");
updateRecords(2548, "artist", "");
updateRecords(1245, "tracks", "Addicted to Love");
console.log(collection);
