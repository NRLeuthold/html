const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

const colorgame = document.getElementById("colorgame");
var colorgameSTYLE = getComputedStyle(colorgame);


function alignGamePage() {
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';

    colorgameSTYLE = getComputedStyle(colorgame);
    colorgame.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(colorgameSTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignGamePage();
}, .1);