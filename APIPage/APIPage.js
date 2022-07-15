

const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const passwordAPI = document.getElementById("passwordAPI");
var passwordAPISTYLE = getComputedStyle(passwordAPI);

const APIOutput = document.getElementById("APIOutput");
var APIOutputSTYLE = getComputedStyle(APIOutput);

function alignAPIPage(){
    
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';

    passwordAPISTYLE = getComputedStyle(passwordAPI);
    passwordAPI.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(passwordAPISTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignAPIPage();
}, .1);

/*
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const Http = new XMLHttpRequest();

const url = "https://passwordwolf.com/api";
Http.open("GET", url);
Http.send();

Http.onreadystatechange = (e) => {
    APIOutput.textContent = Http.responseText;
};
*/