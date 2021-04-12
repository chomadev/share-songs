const getUserPlaylist = async (token, playlist_id) => {
  const endpoint = `https://api.spotify.com/v1/playlists/${playlist_id}`

  const playlist = (await fetch(endpoint, {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + token
    }
  })).json()

  return playlist
}

export default {
  getUserPlaylist
}
