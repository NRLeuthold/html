const mainContent = document.getElementById("mainContent");
var mainContentSTYLE = getComputedStyle(mainContent);

function alignMainContent(){
    mainContentSTYLE = getComputedStyle(mainContent);

    mainContent.style.left = (window.innerWidth/2) - (parseInt(mainContentSTYLE.width)/2) + "px";

}

var refresh = setInterval(function(){
    alignMainContent();
}, .1);