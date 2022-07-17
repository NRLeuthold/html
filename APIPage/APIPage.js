const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const nameAPI = document.getElementById("nameAPI");
var nameAPISTYLE = getComputedStyle(nameAPI);

const nameTitleDIV = document.getElementById("nameTitleDIV");
var nameTitleDIVSTYLE = getComputedStyle(nameTitleDIV);

const yourName = document.getElementById("yourName");
var yourNameSTYLE = getComputedStyle(yourName);

const useNameAPI = document.getElementById("useNameAPI");
var useNameAPISTYLE = getComputedStyle(useNameAPI);

const nameAPIOutput = document.getElementById("nameAPIOutput");
var nameAPIOutputSTYLE = getComputedStyle(nameAPIOutput);

const nameAPIOutputERR = document.getElementById("nameAPIOutputERR");
var nameAPIOutputERRSTYLE = getComputedStyle(nameAPIOutputERR);

function alignAPIPage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(titleSTYLE.width)) / 2 +
        "px";

    nameAPISTYLE = getComputedStyle(nameAPI);
    nameAPI.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(nameAPISTYLE.width)) / 2 +
        "px";

    nameTitleDIV.style.left =
        parseFloat(nameAPISTYLE.width) / 2 -
        parseInt(nameTitleDIVSTYLE.width) / 2 +
        "px";
    nameTitleDIV.style.top = 0 + "px";

    yourName.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(yourNameSTYLE.width) / 2 +
        "px";
    yourName.style.top = parseInt(nameTitleDIVSTYLE.height) + "px";

    useNameAPI.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(useNameAPISTYLE.width) / 2 +
        "px";
    useNameAPI.style.top =
        parseInt(yourNameSTYLE.top) +
        parseInt(yourNameSTYLE.height) +
        25 +
        "px";

    nameAPIOutput.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputSTYLE.width) / 2 +
        "px";
    nameAPIOutput.style.top =
        parseInt(useNameAPISTYLE.top) +
        parseInt(useNameAPISTYLE.height) +
        25 +
        "px";

    nameAPIOutputERR.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputERRSTYLE.width) / 2 +
        "px";
    nameAPIOutputERR.style.top =
        parseInt(useNameAPISTYLE.top) +
        parseInt(useNameAPISTYLE.height) +
        25 +
        "px";
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
