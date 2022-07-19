const header = document.getElementById("header");
const logo = document.getElementById("logo");
const mainContent = document.getElementById("mainContent");

function refreshing(){
    var mainContentSTYLE = getComputedStyle(mainContent);
    var headerSTYLE = getComputedStyle(header);

    var logoSTYLE = getComputedStyle(logo);



    mainContent.style.left = (window.innerWidth/2) - (parseInt(mainContentSTYLE.width)/2) + "px";
    header.style.left = (window.innerWidth/2) - (parseInt(headerSTYLE.width)/2) + "px";

    logo.style.left = (parseInt(headerSTYLE.height)-(parseInt(logoSTYLE.height)))/2 + "px";

}

var refresh = setInterval(function(){
    refreshing();
}, .1);