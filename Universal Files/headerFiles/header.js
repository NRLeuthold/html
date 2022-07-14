const header = document.getElementById("header");
const logo = document.getElementById("logo");

function alignHeader(){
    var headerSTYLE = getComputedStyle(header);
    var logoSTYLE = getComputedStyle(logo);

    header.style.left = (window.innerWidth/2) - (parseInt(headerSTYLE.width)/2) + "px";
    logo.style.left = (parseInt(headerSTYLE.height)-(parseInt(logoSTYLE.height)))/2 + "px";

}

var refresh = setInterval(function(){
    alignHeader();
}, .1);