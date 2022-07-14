const mainContent = document.getElementById("mainContent");

function alignMainContent(){
    var mainContentSTYLE = getComputedStyle(mainContent);

    mainContent.style.left = (window.innerWidth/2) - (parseInt(mainContentSTYLE.width)/2) + "px";

}

var refresh = setInterval(function(){
    alignMainContent();
}, .1);