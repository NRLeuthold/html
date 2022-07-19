const simonImg = document.getElementById("simonImg");

function alignGamePage() {
    simonImg.style.width = simon.style.height;
}

var refresh = setInterval(function () {
    alignGamePage();
}, 0.1);
