const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

function alignAPiPage(){
    
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';
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
    console.log(Http.responseText);
};
*/