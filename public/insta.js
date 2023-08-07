const accessToken = document.querySelector('#access_token');
const expiresIn = document.querySelector('#expires_in');
const tokenType = document.querySelector('#token_type');

const urlParams = new URLSearchParams(window.location.search);
const code = urlParams.get('code');

if (code) {
    console.log('working', code);
    getAccessToken(code);
}

async function getAccessToken(code) {
    try {
        const response = await axios.post("https://insta-a9e6.onrender.com/insta-access/", {"code": `${code}`}, {headers: {
            'Content-Type': 'application/json'
          }});
        console.log(response);
        accessToken.innerHTML += response.data.data.access_token;
        expiresIn.innerHTML += response.data.data.expires_in;
        tokenType.innerHTML += response.data.data.token_type;
        let profileInfo = await axios.get(`https://graph.instagram.com/${shortToken.data.user_id}?fields=id,username&access_token=${longToken.data.access_token}`);
        console.log(profileInfo);
    } catch (error) {
        console.log(error, error.resposne);
    }
}

// async function getInfo(access_token) {
//     try {
//         const response = await axios
//     }
// }