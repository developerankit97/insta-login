console.log(window.location.href);

const urlParams = new URLSearchParams(window.location.search);

const code = urlParams.get('code');
console.log(code);