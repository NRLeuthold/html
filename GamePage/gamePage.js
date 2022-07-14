const colorGame = document.getElementById("colorGame");
var colorGameSTYLE = getComputedStyle(colorGame);

function alignGamePage() {
    colorGameSTYLE = getComputedStyle(colorGame);
    colorGame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(colorGameSTYLE.width))/2 + 'px';
    console.log(mainContentSTYLE.width, "\n", colorGameSTYLE.width);
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);