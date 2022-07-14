const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

///////////////////////////////////////////////////////////////////////////////////////////////

const colorGame = document.getElementById("colorGame");
var colorGameSTYLE = getComputedStyle(colorGame);

const colorImg = document.getElementById("colorImg");
var colorImgSTYLE = getComputedStyle(colorImg);

const colorGameExplain = document.getElementById("colorGameExplain");
var colorGameExplainSTYLE = getComputedStyle(colorGameExplain);

const colorGameButton = document.getElementById("colorGameButton");
var colorGameButtonSTYLE = getComputedStyle(colorGameButton);

///////////////////////////////////////////////////////////////////////////////////////////////

const simonGame = document.getElementById("simonGame");
var simonGameSTYLE = getComputedStyle(simonGame);

const simonImg = document.getElementById("simonImg");
var simonImgSTYLE = getComputedStyle(simonImg);

const simonGameExplain = document.getElementById("simonGameExplain");
var simonGameExplainSTYLE = getComputedStyle(simonGameExplain);

const simonGameButton = document.getElementById("simonGameButton");
var simonGameButtonSTYLE = getComputedStyle(simonGameButton);



function alignGamePage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';

    ///////////////////////////////////////////////////////////////////////////////////////////////

    colorGameSTYLE = getComputedStyle(colorGame);
    colorGame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(colorGameSTYLE.width))/2 + 'px';

    colorGameExplainSTYLE = getComputedStyle(colorGameExplain);
    colorGameExplain.style.width = parseInt(colorGameSTYLE.width) - (parseInt(colorImgSTYLE.width) + 30) + "px";
    colorGameExplain.style.left = parseInt(colorGameSTYLE.width) - parseInt(colorGameExplainSTYLE.width) - 10 + "px";

    colorGameButtonSTYLE = getComputedStyle(colorGameButton);
    colorGameButton.style.left = (parseInt(colorGameExplainSTYLE.width) - parseInt(colorGameButtonSTYLE.width))/2 + "px";

    ///////////////////////////////////////////////////////////////////////////////////////////////
    
    simonGameSTYLE = getComputedStyle(simonGame);
    simonGame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(simonGameSTYLE.width))/2 + 'px';

    simonGameExplainSTYLE = getComputedStyle(simonGameExplain);
    simonGameExplain.style.width = parseInt(simonGameSTYLE.width) - (parseInt(simonImgSTYLE.width) + 30) + "px";

    simonImg.style.left = parseInt(simonGameSTYLE.width) - parseInt(simonImgSTYLE.width) - 10 + "px";

    simonGameButtonSTYLE = getComputedStyle(simonGameButton);
    simonGameButton.style.left = (parseInt(simonGameExplainSTYLE.width) - parseInt(simonGameButtonSTYLE.width))/2 + "px";
}


var refresh = setInterval(function(){
    alignGamePage();
}, .1);