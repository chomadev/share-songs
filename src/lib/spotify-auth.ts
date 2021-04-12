let access_token;

const getSpotifyToken = async () => {
  if (!access_token) {
    const form = new URLSearchParams()
    form.append('grant_type', 'client_credentials')
    console.log({basic: Buffer.from(process.env.ClientId + ':' + process.env.ClientSecret).toString('base64')})

    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Authorization': 'Basic ' + Buffer.from(process.env.ClientId + ':' + process.env.ClientSecret).toString('base64'),
        'Content-type': 'application/x-www-form-urlencoded'
      },
      body: form,
    });
    access_token = await response.json();
  }
  console.log({access_token});
  return access_token;
}

export default {
  getSpotifyToken
};
