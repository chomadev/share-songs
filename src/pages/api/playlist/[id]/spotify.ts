import { NextApiRequest, NextApiResponse } from "next";
import SpotifyAuth from "../../../../lib/spotify-auth";
import SpotifyPlaylist from '../../../../lib/spotify-playlist';

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;
  const { playlist_id } = request.query;
  console.log({playlist_id});

  switch (method) {
    case 'GET':
      const token = await SpotifyAuth.getSpotifyToken()
      const playlist = await SpotifyPlaylist.getUserPlaylist(token.access_token, playlist_id)

      return response.status(200).json({ playlist });
    default:
      return response.status(404).send({});
  }
}

export default handler;
