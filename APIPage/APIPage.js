const content = document.getElementById("content");
var contentSTYLE = getComputedStyle(content);

function alignAPIPage() {
    content.style.left = parseFloat(menuSTYLE.left) + parseFloat(menuSTYLE.width) + "px";
    content.style.width = window.innerWidth - parseFloat(contentSTYLE.left) + "px";
}


var refresh = setInterval(function () {
    alignAPIPage();
}, 0.1);