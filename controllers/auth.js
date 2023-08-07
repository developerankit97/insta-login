const axios = require('axios');

exports.instaLogin = async (req, res, next) => {
  console.log('working', req.body);
    const {code} = req.body;
    console.log('working', code);
    try {
      const data = new URLSearchParams();
      data.append('code', code);
      data.append('client_id', "299541432560866"); // Instagram Client Id
      data.append('client_secret', "c47f80c1e8faa2372586dfd1cc9ac91b"); // Instagram Client Secret
      data.append('grant_type', 'authorization_code');
      data.append('redirect_uri', 'https://insta-a9e6.onrender.com/insta.html'); // Replace with your registered redirect URI

      // Requesting for Instagram Token (Short time 1 hour)
      const shortToken = await axios.post('https://api.instagram.com/oauth/access_token', data ); 
      console.log(shortToken.data);

      // Requesting for Instagram Token (Long time 60 days)
      let longToken = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=c47f80c1e8faa2372586dfd1cc9ac91b&access_token=${response.data.access_token}`)
      console.log(longToken.data, '***************************resp data***********');
      if (longToken.data) {
        return res.status(200).json({status: "success", data: code});
      }
      res.status(400).json({status: "failed"});
      // Refresh Token 
      // let oldAccessToken =  'XXXX'; // get from DB
      // let res = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldAccessToken}`)
      // if (resp.data.access_token) {
      //     let newAccessToken = resp.data.access_token;
      //     // save newAccessToken to DB
      // }
      // res.status(200).json({status: 'success'});

      // let instaAccessToken = "XXXXXX"; // get from DB
      // let res = await axios.get(`https://graph.instagram.com/me/media?fields=media_type,permalink,media_url&access_token=${instaAccessToken}`);
      // res = res.data;
      // let instaPhotos = res.data.filter(d => d.media_type === "IMAGE").map(d => d.media_url);
      // // Got insta photos
    } catch (error) {
      // Handle any errors that occurred during the POST request
      console.error(error);
      res.status(500).send('Error sending POST request');
    }
}

