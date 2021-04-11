import React from 'react'
import { Container, SongTable } from '../styles/components/playlist';
import useSWR from 'swr';

interface Props {
  playlistId: string
}

const endpoint = `api/spotify`

const fetchData = async () => {
  return (await fetch(endpoint)).json()
}

export default function Playlist(props: Props) {
  const { playlistId } = props

  const { data: result, mutate } = useSWR(endpoint, fetchData)
  console.log(result)

  const searchResult = [
    { id: "1", artist: "Metallica", song: "Enter Sandman" },
    { id: "2", artist: "Blind Guardian", song: "Into the Storm" },
  ]

  return (
    <Container>
      playlist Id: {playlistId}
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
          <tbody>
            {searchResult && searchResult.map(item => (
              <tr key={`playlist_${item.id}`}>
                <td>{item.artist}</td>
                <td>{item.song}</td>
              </tr>
            ))}
          </tbody>
        </SongTable>
      </div>
    </Container>
  )
}