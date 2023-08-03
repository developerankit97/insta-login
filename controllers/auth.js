const axios = require('axios');

exports.instaLogin = async (req, res, next) => {
    const {code} = req.query;
    console.log('working', code);
    try {
        const data = new URLSearchParams();
        data.append('code', code);
        data.append('client_id', "299541432560866"); // Instagram Client Id
        data.append('client_secret', "c47f80c1e8faa2372586dfd1cc9ac91b"); // Instagram Client Secret
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', 'https://insta-a9e6.onrender.com/insta'); // Replace with your registered redirect URI

        // Requesting for Instagram Token (Short time 1 hour)
        const response = await axios.post('https://api.instagram.com/oauth/access_token', data ); 
        console.log(response.data);

        // Requesting for Instagram Token (Long time 60 days)
        let resp = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=c47f80c1e8faa2372586dfd1cc9ac91b&access_token=${response.data.access_token}`)
        console.log(resp.data, '***************************resp data***********');

        // Refresh Token 
        // let oldAccessToken =  'XXXX'; // get from DB
        // let res = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldAccessToken}`)
        // if (resp.data.access_token) {
        //     let newAccessToken = resp.data.access_token;
        //     // save newAccessToken to DB
        // }
        // res.status(200).json({status: 'success'});
      } catch (error) {
        // Handle any errors that occurred during the POST request
        console.error(error);
        res.status(500).send('Error sending POST request');
      }
}