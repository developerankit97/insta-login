const axios = require('axios');

exports.instaLogin = async (req, res, next) => {
    const {code} = req.query;
    console.log('working', req.params, code);
    try {
        const response = await axios.post('https://your-server-url/init-insta', {
            url: 'https://api.instagram.com/oauth/access_token',
            form: {
                client_id: 299541432560866,
                client_secret: c47f80c1e8faa2372586dfd1cc9ac91b,
                grant_type: 'authorization_code',
                redirect_uri: 'https://google.com/',
                code: code
            }
        });
    
        // Handle the response from your server as needed
        console.log(response.data, response);
        res.send('POST request sent successfully');
      } catch (error) {
        // Handle any errors that occurred during the POST request
        console.error(error);
        res.status(500).send('Error sending POST request');
      }
    res.status(200).json({status: 'success'});
}