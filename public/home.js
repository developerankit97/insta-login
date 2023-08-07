const btnInsta = document.querySelector('.btn-insta');

btnInsta.addEventListener('click', loginWithInstagram);

function loginWithInstagram () {
    console.log('working');
    let appId = "299541432560866";
	let redUri = window.location.origin + "/insta.html";
    // let redUri = 'https://google.com/'
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
    window.open(url, "_blank").focus();
}

