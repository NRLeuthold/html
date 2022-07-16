import fetch from "http://10.0.0.101/node_modules/node-fetch";

fetch('https://passwordwolfcom/api')
    .then(res => res.text())
    .then(text => console.log(text));

