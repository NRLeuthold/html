const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

function alignTemplatePage(){
    
    titleSTYLE = getComputedStyle(title);
    title.style.left = ((parseInt(mainContentSTYLE.width)) - parseInt(titleSTYLE.width))/2 + 'px';
}

var refresh = setInterval(function(){
    alignTemplatePage();
}, .1);
