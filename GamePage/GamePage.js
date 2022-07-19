const simonGame = document.getElementById("simonGame");
var simonGameSTYLE = getComputedStyle(simonGame);

const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

const simonTitle = document.getElementById("simonTitle");
var simonTitleSTYLE = getComputedStyle(simonTitle);

function alignGamePage() {
    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
    simonImg.style.left = parseFloat(simonImgSTYLE.top) + "px";

    simonTitle.style.left = parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 + "px";
    console.log(simonGameSTYLE.left);
}

var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
