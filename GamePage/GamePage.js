const content = document.getElementById("content");
var contentSTYLE = getComputedStyle(content);

/////////////////////////////////////////////////////////////////////////////////

const simonGame = document.getElementById("simonGame");
var simonGameSTYLE = getComputedStyle(simonGame);

const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

const simonTitle = document.getElementById("simonTitle");
var simonTitleSTYLE = getComputedStyle(simonTitle);

const simonBlurb = document.getElementById("simonBlurb");
var simonBlurbSTYLE = getComputedStyle(simonBlurb);

const simonPlay = document.getElementById("simonPlay");
var simonPlaySTYLE = getComputedStyle(simonPlay);

/////////////////////////////////////////////////////////////////////////////////

const colorGame = document.getElementById("colorGame");
var colorGameSTYLE = getComputedStyle(colorGame);

const colorImg = document.getElementById("colorImg");
var colorImgSTYLE = getComputedStyle(colorImg);

const colorTitle = document.getElementById("colorTitle");
var colorTitleSTYLE = getComputedStyle(colorTitle);

const colorBlurb = document.getElementById("colorBlurb");
var colorBlurbSTYLE = getComputedStyle(colorBlurb);

const colorPlay = document.getElementById("colorPlay");
var colorPlaySTYLE = getComputedStyle(colorPlay);

function alignGamePage() {
    content.style.left = parseFloat(menuSTYLE.left) + parseFloat(menuSTYLE.width) + "px";
    content.style.width = window.innerWidth - parseFloat(contentSTYLE.left) + "px";

    /////////////////////////////////////////////////////////////////////////////////

    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
    simonImg.style.left = parseFloat(simonImgSTYLE.top) + "px";

    simonTitle.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonTitleSTYLE.width)/2 + "px";
    simonTitle.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 25 - 10))/2 + "px";

    simonBlurb.style.width = parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width))
    simonBlurb.style.left = parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonBlurbSTYLE.width)/2 + "px";
    simonBlurb.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 25))/2 + parseFloat(simonTitleSTYLE.height) + 8 + "px";

    simonPlay.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonPlaySTYLE.width)/2 + "px";
    simonPlay.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 25))/2 + parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 26 + "px";

    /////////////////////////////////////////////////////////////////////////////////

    //colorImg.style.width = parseFloat(colorImgSTYLE.height) + "px";
    colorImg.style.right = parseFloat(simonImgSTYLE.top) + "px";

    colorTitle.style.right = parseFloat(colorImgSTYLE.right) + parseFloat(colorImgSTYLE.width) + (parseFloat(colorGameSTYLE.width) - (parseFloat(colorImgSTYLE.right) + parseFloat(colorImgSTYLE.width)))/2 - parseFloat(colorTitleSTYLE.width)/2 + "px";
    colorTitle.style.top = (parseFloat(colorGameSTYLE.height) - (parseFloat(colorTitleSTYLE.height) + parseFloat(colorBlurbSTYLE.height) + 25 - 10))/2 + "px";

    colorBlurb.style.width = parseFloat(colorGameSTYLE.width) - (parseFloat(colorImgSTYLE.right)*2 + parseFloat(colorImgSTYLE.width))
    colorBlurb.style.right = parseFloat(colorImgSTYLE.right)*2 + parseFloat(colorImgSTYLE.width) + (parseFloat(colorGameSTYLE.width) - (parseFloat(colorImgSTYLE.right) + parseFloat(colorImgSTYLE.width)))/2 - parseFloat(colorBlurbSTYLE.width)/2 + "px";
    colorBlurb.style.top = (parseFloat(colorGameSTYLE.height) - (parseFloat(colorTitleSTYLE.height) + parseFloat(colorBlurbSTYLE.height) + 25))/2 + parseFloat(colorTitleSTYLE.height) + 8 + "px";

    colorPlay.style.right = parseFloat(colorImgSTYLE.right) + parseFloat(colorImgSTYLE.width) + (parseFloat(colorGameSTYLE.width) - (parseFloat(colorImgSTYLE.right) + parseFloat(colorImgSTYLE.width)))/2 - parseFloat(colorPlaySTYLE.width)/2 + "px";
    colorPlay.style.top = (parseFloat(colorGameSTYLE.height) - (parseFloat(colorTitleSTYLE.height) + parseFloat(colorBlurbSTYLE.height) + 25))/2 + parseFloat(colorTitleSTYLE.height) + parseFloat(colorBlurbSTYLE.height) + 26 + "px";

}


var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
