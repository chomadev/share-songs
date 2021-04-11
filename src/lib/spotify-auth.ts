import { URLSearchParams } from 'url';

const SpotifyAuth = async () => {
  const form = new URLSearchParams()
  form.append('grant_type', 'client_credentials')

  const response = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Authorization': 'Basic ' + Buffer.from(process.env.ClientId + ':' + process.env.ClientSecret).toString('base64'),
      'Content-type': 'application/x-www-form-urlencoded'
    },
    body: form,
  });
  const { token } = await response.json();
  return token;
}

export default SpotifyAuth;