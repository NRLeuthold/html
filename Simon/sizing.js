const game = document.getElementById("game");
const blackCircle = document.getElementById("blackCircle");
const centerCircle = document.getElementById("centerCircle");
const indicator = document.getElementById("indicator");
const endMenu = document.getElementById("endMenu");
const endMenuContent = document.getElementById("endMenuContent");
const finalRestart = document.getElementById("finalRestart");
const returnHome = document.getElementById("returnHome");

function resizing(){

    var gameSTYLE = getComputedStyle(game);
    var blackCircleSTYLE = getComputedStyle(blackCircle);
    var centerCircleSTYLE = getComputedStyle(centerCircle);
    var indicatorSTYLE = getComputedStyle(indicator);
    var endMenuSTYLE = getComputedStyle(endMenu);
    var endMenuContentSTYLE = getComputedStyle(endMenuContent);
    var finalRestartSTYLE = getComputedStyle(finalRestart);
    var returnHomeSTYLE = getComputedStyle(returnHome);


    if (gameSTYLE.width > gameSTYLE.height){
        blackCircle.style.height = parseInt(gameSTYLE.height) - (parseInt(gameSTYLE.height) * .06) + "px";
        blackCircle.style.width = blackCircleSTYLE.height;
        blackCircle.style.top = "3%";
        blackCircle.style.left = (parseInt(gameSTYLE.width)/2) - (parseInt(blackCircleSTYLE.width)/2) + "px";
    } else {
        blackCircle.style.width = parseInt(gameSTYLE.width) - (parseInt(gameSTYLE.width) * .06) + "px";
        blackCircle.style.height = blackCircle.style.width;
        blackCircle.style.left = "3%";
        blackCircle.style.top = (parseInt(gameSTYLE.height)/2) - (parseInt(blackCircleSTYLE.height)/2) + "px";

    }

    centerCircle.style.height = (parseInt(blackCircleSTYLE.height)*.35) + "px";
    centerCircle.style.width = (parseInt(blackCircleSTYLE.width)*.35) + "px";
    centerCircle.style.top = (parseInt(blackCircleSTYLE.height)/2) - (parseInt(centerCircleSTYLE.height)/2) + "px";
    centerCircle.style.left = (parseInt(blackCircleSTYLE.width)/2) - (parseInt(centerCircleSTYLE.width)/2) + "px";

    indicator.style.height = (parseInt(centerCircleSTYLE.height)*.85) + "px";
    indicator.style.width = (parseInt(centerCircleSTYLE.width)*.85) + "px";
    indicator.style.top = (parseInt(centerCircleSTYLE.height)/2) - (parseInt(indicatorSTYLE.height)/2) + "px";
    indicator.style.left = (parseInt(centerCircleSTYLE.width)/2) - (parseInt(indicatorSTYLE.width)/2) + "px";

    endMenu.style.top = (parseInt(gameSTYLE.height)/2) - (parseInt(endMenuSTYLE.height)/2) + "px";
    endMenu.style.left = (parseInt(gameSTYLE.width)/2) - (parseInt(endMenuSTYLE.width)/2) + "px";

    endMenuContent.style.top = (parseInt(endMenuSTYLE.height)/2) - (parseInt(endMenuContentSTYLE.height)/2) + "px";
    endMenuContent.style.left = (parseInt(endMenuSTYLE.width)/2) - (parseInt(endMenuContentSTYLE.width)/2) + "px";

    finalRestart.style.top = (parseInt(endMenuSTYLE.height)*.85) - (parseInt(finalRestartSTYLE.height)/2) + "px";
    finalRestart.style.left = (parseInt(endMenuSTYLE.width)/4) - (parseInt(finalRestartSTYLE.width)/2) + "px";

    returnHome.style.top = (parseInt(endMenuSTYLE.height)*.85) - (parseInt(returnHomeSTYLE.height)/2) + "px";
    returnHome.style.left = (parseInt(endMenuSTYLE.width)*.75) - (parseInt(returnHomeSTYLE.width)/2) + "px";
}

var refresh = setInterval(function(){
    resizing();
}, .1);