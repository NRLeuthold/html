const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

function alignGamePage() {
    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
}

var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
