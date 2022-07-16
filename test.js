const fetch = import('node-fetch');

fetch('https://passwordwolf.com/api')
    .then(res => res.json())
    .then(data => console.log(data));

