const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const colorGame = document.getElementById("colorGame");
var colorGameSTYLE = getComputedStyle(colorGame);


function alignGamePage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';

    colorGameSTYLE = getComputedStyle(colorGame);
    colorGame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(colorGameSTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);