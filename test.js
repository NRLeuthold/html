import fetch from "http://10.0.0.101/node_modules/node-fetch";

const response = fetch("https://passwordwolf.com/api/");

if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
}

const result = response.json();
console.log(result);

