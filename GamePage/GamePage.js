const simonGame = document.getElementById("simonGame");
var simonGameSTYLE = getComputedStyle(simonGame);

const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

const simonTitle = document.getElementById("simonTitle");
var simonTitleSTYLE = getComputedStyle(simonTitle);

const simonDescription = document.getElementById("simonDescription");
var simonDescriptionSTYLE = getComputedStyle(simonDescription);

function alignGamePage() {
    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
    simonImg.style.left = parseFloat(simonImgSTYLE.top) + "px";

    simonTitle.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonTitleSTYLE.width)/2 + "px";
    
    simonDescription.style.width = parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width))
    simonDescription.style.left = parseFloat(simonImgSTYLE.left)*2 + parseFloat(simonImgSTYLE.width) + (parseFloat(simonGameSTYLE.width) - (parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.width)))/2 - parseFloat(simonDescriptionSTYLE.width)/2 + "px";

}

var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
