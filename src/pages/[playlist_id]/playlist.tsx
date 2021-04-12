import React, { useEffect, useState } from 'react'
import { Container, SongTable } from '../../styles/components/playlist';
import useSWR from 'swr';
import { NextPageContext } from 'next';

interface Props {
  playlist_id: string,
}

const endpoint = `api/spotify`

const fetchData = async (playlist_id) => {
  return (await fetch(endpoint + '?playlist_id=' + playlist_id)).json()
}

export default function Playlist(props: Props) {
  const { playlist_id } = props
  // const [playlist, setPlaylist] = useState<[]>();

  // const playlist =
  // console.log({playlist})


  const { data: playlist, mutate } = useSWR(endpoint + '?playlist_id=' + playlist_id, fetchData)
  // console.log(result)

  const searchResult = [
    { id: "1", artist: "Metallica", song: "Enter Sandman" },
    { id: "2", artist: "Blind Guardian", song: "Into the Storm" },
  ]

  return (
    <Container>
      playlist Id: {playlist_id}
      <button>Sair</button>
      <div>
        <input placeholder="Buscar uma música" />
        <h2>Resultados</h2>
        <SongTable>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
            </tr>
          </thead>
          <tbody>
            {searchResult && searchResult.map(item => (
              <tr key={`result_${item.id}`}>
                <td>{item.artist}</td>
                <td>{item.song}</td>
              </tr>
            ))}
          </tbody>
        </SongTable>
        <hr />
        <h2>Músicas na playlist</h2>
        <SongTable>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
            </tr>
          </thead>
          {/* <tbody>
            {playlist && playlist.map(item => (
              <tr key={`playlist_${item.id}`}>
                <td>{item.artist}</td>
                <td>{item.song}</td>
              </tr>
            ))}
          </tbody> */}
        </SongTable>
      </div>
    </Container>
  )
}

// export const getServerSideProps = async (context: NextPageContext) => {
//   // const { playlist_id } = context.query;
//   const access_token = await SpotifyAuth.getSpotifyToken();

//   return {
//     props: {
//       access_token
//       // playlist,
//       // playlist_id
//     }
//   }
// }
