const title = document.getElementById("title");
var titleSTYLE = getComputedStyle(title);

////////////////////////////////////////////////////////////////////

const nameAPI = document.getElementById("nameAPI");
var nameAPISTYLE = getComputedStyle(nameAPI);

const nameTitleDIV = document.getElementById("nameTitleDIV");
var nameTitleDIVSTYLE = getComputedStyle(nameTitleDIV);

const yourName = document.getElementById("yourName");
var yourNameSTYLE = getComputedStyle(yourName);

const useNameAPI = document.getElementById("useNameAPI");
var useNameAPISTYLE = getComputedStyle(useNameAPI);

const nameAPIOutput = document.getElementById("nameAPIOutput");
var nameAPIOutputSTYLE = getComputedStyle(nameAPIOutput);

const nameAPIOutputERR = document.getElementById("nameAPIOutputERR");
var nameAPIOutputERRSTYLE = getComputedStyle(nameAPIOutputERR);

////////////////////////////////////////////////////////////////////

const jokeAPI = document.getElementById("jokeAPI");
var jokeAPISTYLE = getComputedStyle(jokeAPI);

const jokeTitleDIV = document.getElementById("jokeTitleDIV");
var jokeTitleDIVSTYLE = getComputedStyle(jokeTitleDIV);

const category = document.getElementById("category");
var categorySTYLE = getComputedStyle(category);

const safeMode = document.getElementById("safeMode");
var safeModeSTYLE = getComputedStyle(safeMode);

const type = document.getElementById("type");
var typeSTYLE = getComputedStyle(type);

function alignAPIPage() {
    title.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(titleSTYLE.width)) / 2 +
        "px";

    ////////////////////////////////////////////////////////////////////

    nameAPI.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(nameAPISTYLE.width)) / 2 +
        "px";

    nameTitleDIV.style.left =
        parseFloat(nameAPISTYLE.width) / 2 -
        parseInt(nameTitleDIVSTYLE.width) / 2 +
        "px";
    nameTitleDIV.style.top = 0 + "px";

    yourName.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(yourNameSTYLE.width) / 2 +
        "px";
    yourName.style.top = parseInt(nameTitleDIVSTYLE.height) + "px";

    useNameAPI.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(useNameAPISTYLE.width) / 2 +
        "px";
    useNameAPI.style.top =
        parseInt(yourNameSTYLE.top) +
        parseInt(yourNameSTYLE.height) +
        25 +
        "px";

    nameAPIOutput.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputSTYLE.width) / 2 +
        "px";
    nameAPIOutput.style.top =
        parseInt(useNameAPISTYLE.top) +
        parseInt(useNameAPISTYLE.height) +
        25 +
        "px";

    nameAPIOutputERR.style.left =
        parseInt(nameAPISTYLE.width) / 2 -
        parseFloat(nameAPIOutputERRSTYLE.width) / 2 +
        "px";
    nameAPIOutputERR.style.top =
        parseInt(useNameAPISTYLE.top) +
        parseInt(useNameAPISTYLE.height) +
        25 +
        "px";

    ////////////////////////////////////////////////////////////////////

    jokeAPI.style.left =
        (parseInt(mainContentSTYLE.width) - parseInt(jokeAPISTYLE.width)) / 2 +
        "px";

    jokeTitleDIV.style.left =
        parseFloat(nameAPISTYLE.width) / 2 -
        parseInt(jokeTitleDIVSTYLE.width) / 2 +
        "px";
    jokeTitleDIV.style.top = 0 + "px";

    category.style.top = parseFloat(jokeTitleDIVSTYLE.height) + "px";
    safeMode.style.top = parseFloat(jokeTitleDIVSTYLE.height) + "px";
    type.style.top = parseFloat(jokeTitleDIVSTYLE.height) + "px";

    category.style.width = "15%";
    safeMode.style.width = "15%";
    type.style.width = "15%";
    
}

var refresh = setInterval(function () {
    alignAPIPage();
}, 0.1);
