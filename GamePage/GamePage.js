const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

const simonTitle = document.getElementById("simonTitle");
var simonTitleSTYLE = getComputedStyle(simonTitle);

function alignGamePage() {
    simonImg.style.width = parseFloat(simonImgSTYLE.height) + "px";
    simonImg.style.left = parseFloat(simonImgSTYLE.top) + "px";

    simonTitle.style.left = parseFloat(simonImgSTYLE.left) + parseFloat(simonImgSTYLE.right) + "px";

}

var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
