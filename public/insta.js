console.log(window.location.href);

const urlParams = new URLSearchParams(window.location.search);

const code = urlParams.get('code');

if (code) {
    console.log('working', code);
    getAccessToken(code);
}

function getAccessToken(code) {
    try {
        const response = axios.post("https://insta-a9e6.onrender.com/insta-access/", {code})
        console.log(response);
    } catch (error) {
        console.log(error, error.resposne);
    }
}
