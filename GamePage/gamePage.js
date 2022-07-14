const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const colorGame = document.getElementById("colorGame");
var colorGameSTYLE = getComputedStyle(colorGame);

const colorImg = document.getElementById("colorImg");
var colorImgSTYLE = getComputedStyle(colorImg);

const colorGameExplain = document.getElementById("colorGameExplain");
var colorGameExplainSTYLE = getComputedStyle(colorGameExplain);

function alignGamePage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';

    colorGameSTYLE = getComputedStyle(colorGame);
    colorGame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(colorGameSTYLE.width))/2 + 'px';

    colorGameExplainSTYLE = getComputedStyle(colorGameExplain);
    colorGameExplain.style.width = parseInt(colorGameSTYLE.width) - (parseInt(colorImgSTYLE.width) + 30) + "px";
    colorGameExplain.style.left = parseInt(colorGameSTYLE.width) - parseInt(colorGameExplainSTYLE.width) - 10 + "px";
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);