const body = document.getElementById("body");

const icon = document.getElementById("icon");
const iconLabel = document.getElementById("iconLabel");
const menu = document.getElementById("menu");

const playGame = document.getElementById("playGame");
const playGameTitle = document.getElementById("playGameTitle");
const playGameLabel = document.getElementById("playGameLabel");
const playGameMenu = document.getElementById("playGameMenu");

var menuSTYLE = getComputedStyle(menu);
var playGame1LabelSTYLE = getComputedStyle(playGame1Label);

const button4 = document.getElementById("APIs");


function moveMenu() {
    icon.addEventListener("change", function () {
        if (this.checked) {
            menu.style.transform = "translate(250px, 0px)";
            icon.style.transform = "rotate(90deg)";
            iconLabel.style.transform = "rotate(90deg)";
        } else {
            menu.style.transform = "translate(0px, 0px)";
            icon.style.transform = "rotate(0deg)";
            iconLabel.style.transform = "rotate(0deg)";

            playGame1Label.style.transform = "rotate(-90deg)";
            playGameMenu.style.display = "none";
        }
    });
}

function moveDropdown1() {
    playGame1Title.style.width = parseFloat(menuSTYLE.width) - 65 - parseFloat(playGame1LabelSTYLE.width) + "px"

    playGame1.addEventListener("change", function () {
        if (this.checked) {
            playGame1Label.style.transform = "rotate(0deg)";
            playGameMenu.style.display = "inline";
        } else {
            playGame1Label.style.transform = "rotate(-90deg)";
            playGameMenu.style.display = "none";
        }
    });

    playGame1Label.addEventListener("mouseover", () => {
        playGame1Title.style.fontSize = "22px";
        playGame1Title.style.fontWeight = "bold";
    });

    playGame1Label.addEventListener("mouseout", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });

    playGame1Label.addEventListener("mousedown", () => {
        playGame1Title.style.fontWeight = "normal";
    });

    playGame1Label.addEventListener("mouseup", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });
    /////////////////////////////////////////////////////////
    playGame1Title.addEventListener("mouseover", () => {
        playGame1Title.style.fontSize = "22px";
        playGame1Title.style.fontWeight = "bold";
    });

    playGame1Title.addEventListener("mouseout", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });

    playGame1Title.addEventListener("mousedown", () => {
        playGame1Title.style.fontWeight = "normal";
    });

    playGame1Title.addEventListener("mouseup", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });
}

function moveButtons() {
    if (playGameMenu.style.display == "none") {
        button4.style.top = "230px";
        button5.style.top = "270px";
        button6.style.top = "310px";
    } else if (playGameMenu.style.display == "inline") {
        button4.style.top = "305px";
        button5.style.top = "345px";
        button6.style.top = "395px";
    }
}

var refresh = setInterval(function () {
    moveMenu();
    moveDropdown1();
    moveButtons();
}, 0.1);
