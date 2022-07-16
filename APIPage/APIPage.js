const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const nameAPI = document.getElementById("nameAPI");
var nameAPISTYLE = getComputedStyle(nameAPI);

const APIOutput = document.getElementById("APIOutput");
var APIOutputSTYLE = getComputedStyle(APIOutput);

const nameTitleDIV = document.getElementById("nameTitleDIV");
var nameTitleDIVSTYLE = getComputedStyle(nameTitleDIV);

function alignAPIPage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(titleSTYLE.width)) / 2 +
        "px";

    nameAPISTYLE = getComputedStyle(nameAPI);
    nameAPI.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(nameAPISTYLE.width)) /
            2 +
        "px";

    nameTitleDIV.style.left = parseFloat(nameAPISTYLE.width)/2 - parseInt(nameTitleDIVSTYLE.width)/2 + "px";
}

var refresh = setInterval(function () {
    alignAPIPage();
}, 0.1);

/*
const Http = new XMLHttpRequest();

const url = "https://passwordwolf.com/api";
Http.open("GET", url);

Http.onload = function () {
    var data = JSON.parse(this.response);

    if (Http.status >= 200 && Http.status < 400) {
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