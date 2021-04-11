import Head from 'next/head';
import { useState } from 'react';
import Playlist from '../components/playlist';
import SpotifyAuth from '../lib/spotify-auth';
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  let [playlistText, setPlaylistText] = useState('');
  const [playlistId, setPlaylistId] = useState('');

  return (
    <Container>
      <Head>
        <title>Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {!playlistId && (
        <div>
          <input placeholder="id da playlist"
            onChange={(e) => setPlaylistText(e.target.value)} />
          <button onClick={() => setPlaylistId(playlistText)}>Entrar</button>
          <p>{playlistText}</p>
        </div>
      )}
      {playlistId && <Playlist playlistId={playlistId} />}
    </Container>
  )
}

export const getServerSideProps = async (context) => {
  const response = await SpotifyAuth();
  return {
    props: {
      token: 'abc',
      // data: response
    }
  }
}

export default Home
