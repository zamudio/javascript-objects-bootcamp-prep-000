var playlist = new Object({artistName: 'songTitle'})

function updatePlaylist(playlist, artistName, songTitle) {
  playlist[artistName] = songTitle
  return playlist
}

function removeFromPlaylist(playlist, artistName) {
  delete playlist.artistName
  return playlist
}

return Object.assign({}, obj, { [key]: value })
}