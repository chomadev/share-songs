import { NextApiRequest, NextApiResponse } from "next";
import SpotifyAuth from "../../lib/spotify-auth";

const handler = (request: NextApiRequest, response: NextApiResponse) => {
  const { method } = request;

  switch (method) {
    case 'GET':
      return response.status(200).json({ message: 'ok' });
    default:
      return response.status(404).send({});
  }
}

export async function getServerSideProps(context) {
  const token = await SpotifyAuth();
  return {
    props: {
      playlistId: 'abc',
      token
    }
  }
}

export default handler;