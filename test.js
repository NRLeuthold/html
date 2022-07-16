var apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto/";
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

/*var request = new XMLHttpRequest();
var url = "https://spotify.com/"

request.open("GET", url);

request.onload = function () {
    var data = JSON.parse(this.response);
    var movies = [];

    data.forEach((movie) => {
        movies.push(movie.title);
    });
    APIOutput.textContent = movies;
};

request.send();



//This script pulls the names from the url and adds them to an array and then puts them on the screen on APIPage
// TODO: Find an API that meets CORS standards
// TODO: Replace the current url with new API
// TODO: Find a way to implement API into APIPage depending on API uses
*/
