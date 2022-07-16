var request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);

request.onload = function () {
    var data = JSON.parse(this.response);

    data.forEach((movie) => {
        APIOutput.textContent = movie.title;
    });
};

request.send();