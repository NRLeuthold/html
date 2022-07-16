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

    homePageSTYLE = getComputedStyle(homePage);
    gamePageSTYLE = getComputedStyle(gamePage);
    APIPageSTYLE = getComputedStyle(APIPage);

    var logoAreaWidth = (parseFloat(logoSTYLE.width) + (parseFloat(logoSTYLE.left)*2));
    var buttonAreaWidth = ((parseFloat(headerSTYLE.width) - logoAreaWidth));
    var buttonSpacing = ((buttonAreaWidth - ((parseInt(homePageSTYLE.width))*3)) / 3);

    //homePage.style.left = parseInt(logoSTYLE.width) + (parseInt(logoSTYLE.left)*2) + "px";
    //homePage.style.left = ((parseFloat(headerSTYLE.width) + (parseFloat(logoSTYLE.width) + parseFloat(logoSTYLE.left) - (parseFloat(homePageSTYLE.width) + parseFloat(gamePageSTYLE.width) + parseFloat(APIPageSTYLE.width)))))/3 + "px";
    //homePage.style.left = (((parseFloat(headerSTYLE.width) - (parseFloat(logoSTYLE.width) + (parseFloat(logoSTYLE.left)*2)))) / 3) + (parseFloat(logoSTYLE.width) + (parseFloat(logoSTYLE.left)*2));
    
    homePage.style.left = buttonSpacing + logoAreaWidth + "px";
    gamePage.style.left = parseInt(homePageSTYLE.left) + parseFloat(homePageSTYLE.width) + "px";
    //APIPage.style.right = parseFloat(logoSTYLE.left) + "px";
    APIPage.style.left = parseInt(gamePageSTYLE.left) + parseFloat(homePageSTYLE.width) + "px"
    console.log(buttonAreaWidth, homePageSTYLE.left);

}


var refresh = setInterval(function(){
    alignHeader();
}, .1);