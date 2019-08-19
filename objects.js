var playlist = new Object({artistName: 'songTitle'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  return Object.assign({}, playlist, {artistName})
}

// function deleteFromObjectByKey(object, key) {
//   return Object.assign({}, object, {key})
// }


// function deleteFromObjectByKey(object, key) {
//   var newObject = Object.assign({}, object)
//   delete newObject[key]
//   return newObject
// }