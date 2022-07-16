import fetch from "http://10.0.0.101/node_modules/node-fetch";

const response = await fetch("https://passwordwolf.com/api/");

if (!response.ok) {
    throw new Error(`Error! status: ${response.status}`);
}

const result = await response.json();
console.log(result);

