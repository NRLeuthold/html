const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

function alignGamePage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);