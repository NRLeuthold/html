const header = document.getElementById("header");
var headerSTYLE = getComputedStyle(header);

const logo = document.getElementById("logo");
var logoSTYLE = getComputedStyle(logo);

function alignHeader(){
    headerSTYLE = getComputedStyle(header);
    header.style.left = (window.innerWidth/2) - (parseInt(headerSTYLE.width)/2) + "px";

    logoSTYLE = getComputedStyle(logo);
    logo.style.left = (parseInt(headerSTYLE.height)-(parseInt(logoSTYLE.height)))/2 + "px";

}


var refresh = setInterval(function(){
    alignHeader();
}, .1);