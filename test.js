var request = new XMLHttpRequest();

var movies = [];

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach((movie) => {
        movies.push(movie.title);
    });
};

request.send();

APIOutput.textContent = movies;