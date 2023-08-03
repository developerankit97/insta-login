const btnInsta = document.querySelector('.btn-insta');

btnInsta.addEventListener('click', loginWithInstagram);

function loginWithInstagram () {
    console.log('working');
    let appId = "300029245736907";
	let redUri = window.location.origin + "/insta";
    // let redUri = 'https://google.com/'
	let url = `https://api.instagram.com/oauth/authorize?client_id=${appId}&redirect_uri=${redUri}&scope=user_profile,user_media&response_type=code`;
	console.log(url);
    window.open(url, "_blank").focus();
}


