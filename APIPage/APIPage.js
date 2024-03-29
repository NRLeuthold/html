const content = document.getElementById("content");
var contentSTYLE = getComputedStyle(content);

const horizontal1 = document.getElementById("horizontal1");
var horizontal1STYLE = getComputedStyle(horizontal1);

///////////////////////////////////////////////////////////////////

const nameAPI = document.getElementById("nameAPI");
var nameAPISTYLE = getComputedStyle(nameAPI);

const nameTitle = document.getElementById("nameTitle");
var nameTitleSTYLE = getComputedStyle(nameTitle);

const yourName = document.getElementById("yourName");
var yourNameSTYLE = getComputedStyle(yourName);

const useNameAPI = document.getElementById("useNameAPI");
var useNameAPISTYLE = getComputedStyle(useNameAPI);

const nameAPIOutput = document.getElementById("nameAPIOutput");
var nameAPIOutputSTYLE = getComputedStyle(nameAPIOutput);

const nameAPIOutputERR = document.getElementById("nameAPIOutputERR");
var nameAPIOutputERRSTYLE = getComputedStyle(nameAPIOutputERR);

///////////////////////////////////////////////////////////////////
function alignAPIPage() {
    content.style.left =
        parseFloat(menuSTYLE.left) + parseFloat(menuSTYLE.width) + "px";
    content.style.width =
        window.innerWidth - parseFloat(contentSTYLE.left) + "px";

    horizontal1.style.top = parseInt(yourNameSTYLE.bottom) + 75 + "px";

    ////////////////////////////////////////////////////////////////////

    nameAPI.style.left =
        (parseInt(contentSTYLE.width) - parseInt(nameAPISTYLE.width)) / 2 +
        "px";

    nameTitle.style.left =
        parseFloat(nameAPISTYLE.width) / 2 -
        parseInt(nameTitleSTYLE.width) / 2 +
        "px";
    nameTitle.style.top = 0 + "px";

    yourName.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(yourNameSTYLE.width) / 2 +
        "px";
    yourName.style.top = parseInt(nameTitleSTYLE.height) + 10 + "px";

    useNameAPI.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(useNameAPISTYLE.width) / 2 +
        "px";
    useNameAPI.style.top =
        parseInt(yourNameSTYLE.top) +
        parseInt(yourNameSTYLE.height) +
        25 +
        "px";

    nameAPIOutput.style.top = parseInt(yourNameSTYLE.top) + 90 + "px";

    nameAPIOutput.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputSTYLE.width) / 2 +
        "px";

    nameAPIOutputERR.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputERRSTYLE.width) / 2 +
        "px";

    nameAPIOutputERR.style.top = parseInt(yourNameSTYLE.top) + 90 + "px";
}

var refresh = setInterval(function () {
    alignAPIPage();
}, 0.1);
