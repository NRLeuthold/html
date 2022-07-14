const colorGame = document.getElementById("colorGame");

function alignGamePage() {
    var colorGameSTYLE = getComputedStyle(colorGame);

    colorGame.style.left = (parseInt(mainContentSTYLE.width)/2) - parseInt(colorGameSTYLE.width/2) + 'px';
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);