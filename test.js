import fetch from "http://10.0.0.101/node_modules/node-fetch";

async function getUser() {
    try {
        const response = await fetch("https://passwordwolf.com/api/");

        if (!response.ok) {
            throw new Error(`Error! status: ${response.status}`);
        }

        const result = await response.json();
        return result;
    } catch (err) {
        console.log(err);
    }
}

console.log(await getUser());
