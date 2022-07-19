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

function alignGamePage() {
    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
    simonImg.style.left = parseFloat(simonImgSTYLE.top) + "px";

    simonTitle.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonTitleSTYLE.width)/2 + "px";

    simonBlurb.style.width = parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width))
    simonBlurb.style.left = parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonBlurbSTYLE.width)/2 + "px";

    simonPlay.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonPlaySTYLE.width)/2 + "px";


    
    simonTitle.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + parseFloat(simonPlaySTYLE.height) - 10))/2 + "px";
    simonBlurb.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 25))/2 + parseFloat(simonTitleSTYLE.height) + 8 + "px";
    simonPlay.style.top = (parseFloat(simonGameSTYLE.height) - (parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 25))/2 + parseFloat(simonTitleSTYLE.height) + parseFloat(simonBlurbSTYLE.height) + 26 + "px";


}


var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
