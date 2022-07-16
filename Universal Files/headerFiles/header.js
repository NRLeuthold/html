const header = document.getElementById("header");
var headerSTYLE = getComputedStyle(header);

const logo = document.getElementById("logo");
var logoSTYLE = getComputedStyle(logo);

const homePage = document.getElementById("homePage");
var homePageSTYLE = getComputedStyle(homePage);

const gamePage = document.getElementById("gamePage");
var gamePageSTYLE = getComputedStyle(gamePage);

const APIPage = document.getElementById("APIPage");
var APIPageSTYLE = getComputedStyle(APIPage);


function alignHeader(){
    headerSTYLE = getComputedStyle(header);
    header.style.left = (window.innerWidth/2) - (parseInt(headerSTYLE.width)/2) + "px";

    logoSTYLE = getComputedStyle(logo);
    logo.style.left = (parseInt(headerSTYLE.height)-(parseInt(logoSTYLE.height)))/2 + "px";

    homePageSTYLE = get(homePage);
    gamePageSTYLE = get(gamePage);
    APIPageSTYLE = get(APIPage);

    //homePage.style.left = parseInt(logoSTYLE.width) + (parseInt(logoSTYLE.left)*2) + "px";

}


var refresh = setInterval(function(){
    alignHeader();
}, .1);