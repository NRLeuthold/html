var apiUrl = "https://agify.io/";
fetch(apiUrl)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // Work with JSON data here
        console.log(data);
    })
    .catch((err) => {
        // Do something for an error here
    });


//This script pulls the names from the url and adds them to an array and then puts them on the screen on APIPage
// TODO: Find an API that meets CORS standards
// TODO: Replace the current url with new API
// TODO: Find a way to implement API into APIPage depending on API uses

