import Head from 'next/head'
import { useState } from 'react'
import Playlist from './[playlist_id]/playlist'
import { Container } from '../styles/pages/Home'

interface IProps {
  playlist: []
}

const Home: React.FC<IProps> = (props: IProps) => {
  let [playlistText, setPlaylistText] = useState('');
  const [playlist_id, setPlaylistId] = useState(process.env.PLAYLIST_ID);

  return (
    <Container>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!playlist_id && (
        <div>
          <input placeholder="id da playlist"
            onChange={(e) => setPlaylistText(e.target.value)} />
            <input onClick={() => setPlaylistId(playlistText)} />
          <p>{playlistText}</p>
        </div>
      )}
      {playlist_id && <Playlist playlist_id={playlist_id} />}
    </Container>
  )
}
export default Home
