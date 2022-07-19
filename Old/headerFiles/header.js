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

const headerButtons = document.getElementById("headerButtons");
var headerButtonsSTYLE = getComputedStyle(headerButtons);


function alignHeader(){
    headerSTYLE = getComputedStyle(header);
    homePageSTYLE = getComputedStyle(homePage);
    gamePageSTYLE = getComputedStyle(gamePage);
    APIPageSTYLE = getComputedStyle(APIPage);
    logoSTYLE = getComputedStyle(logo);

    header.style.left = (window.innerWidth/2) - (parseInt(headerSTYLE.width)/2) + "px";
    logo.style.left = (parseInt(headerSTYLE.height)-(parseInt(logoSTYLE.height)))/2 + "px";

    
    var logoAreaWidth = (parseFloat(logoSTYLE.width) + (parseFloat(logoSTYLE.left)*2));

    headerButtons.style.left = logoAreaWidth + "px";
    headerButtons.style.width = parseFloat(headerSTYLE.width) - logoAreaWidth - parseFloat(logoSTYLE.left) + "px";

    
    var buttonSpacing = ((parseFloat(headerButtonsSTYLE.width) - ((parseInt(homePageSTYLE.width))*3)) / 3);

    homePage.style.left = buttonSpacing/2 + "px";
    gamePage.style.left = buttonSpacing*1.5 + parseFloat(homePageSTYLE.width) + "px";
    APIPage.style.left = buttonSpacing*2.5 + parseFloat(gamePageSTYLE.width)*2 + "px";

}


var refresh = setInterval(function(){
    alignHeader();
}, .1);