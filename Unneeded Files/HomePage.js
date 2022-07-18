const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

function alignHomePage(){
    
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignHomePage();
}, .1);
