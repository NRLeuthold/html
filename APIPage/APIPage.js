const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const passwordAPI = document.getElementById("passwordAPI");
var passwordAPISTYLE = getComputedStyle(passwordAPI);

const APIOutput = document.getElementById("APIOutput");
var APIOutputSTYLE = getComputedStyle(APIOutput);

function alignAPIPage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(titleSTYLE.width)) / 2 +
        "px";

    passwordAPISTYLE = getComputedStyle(passwordAPI);
    passwordAPI.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(passwordAPISTYLE.width)) /
            2 +
        "px";
}

var refresh = setInterval(function () {
    alignAPIPage();
}, 0.1);


const Http = new XMLHttpRequest();

const url = "https://passwordwolf.com/api";
Http.open("GET", url);

request.onload = function () {
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((item) => {
            console.log(item);
        });
    } else {
        console.log("error");
    }
};

Http.send();

Http.onreadystatechange = (e) => {
    APIOutput.textContent = Http.responseText;
};



/*
var request = new XMLHttpRequest();

request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);

    if (request.status >= 200 && request.status < 400) {
        data.forEach((movie) => {
            console.log(movie.title);
        });
    } else {
        console.log("error");
    }
};

request.send();
*/