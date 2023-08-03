const axios = require('axios');

exports.instaLogin = async (req, res, next) => {
    const {code} = req.query;
    console.log('working', code);
    try {
        const data = new URLSearchParams();
        data.append('code', code);
        data.append('client_id', "299541432560866");
        data.append('client_secret', "c47f80c1e8faa2372586dfd1cc9ac91b");
        data.append('grant_type', 'authorization_code');
        data.append('redirect_uri', 'https://insta-a9e6.onrender.com/insta'); // Replace with your registered redirect URI
        const response = await axios.post('https://api.instagram.com/oauth/access_token', data );
        console.log(response.data,);
        let resp = await axios.get(`https://graph.instagram.com/access_token?grant_type=ig_exchange_token&client_secret=c47f80c1e8faa2372586dfd1cc9ac91b&access_token=${response.data.access_token}`)
        console.log(resp.data, '***************************resp data***********');
        res.send('POST request sent successfully');
      } catch (error) {
        // Handle any errors that occurred during the POST request
        console.error(error);
        res.status(500).send('Error sending POST request');
      }
      res.status(200).json({status: 'success'});
}