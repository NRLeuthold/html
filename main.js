const body = document.getElementById("body");

const icon = document.getElementById("icon");
const iconLabel = document.getElementById("iconLabel");
const menu = document.getElementById("menu");

const playGame = document.getElementById("playGame");
const playGameTitle = document.getElementById("playGameTitle");
const playGameLabel = document.getElementById("playGameLabel");
const playGameMenu = document.getElementById("playGameMenu");

var playGameMenuSTYLE = getComputedStyle(menu);
var playGameLabelSTYLE = getComputedStyle(playGameLabel);

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

            playGameLabel.style.transform = "rotate(-90deg)";
            playGameMenu.style.display = "none";
        }
    });
}

function moveDropdown1() {
    playGameTitle.style.width = parseFloat(playGameMenuSTYLE.width) - 65 - parseFloat(playGameLabelSTYLE.width) + "px"

    playGame.addEventListener("change", function () {
        if (this.checked) {
            playGame1Label.style.transform = "rotate(0deg)";
            playGameMenu.style.display = "inline";
        } else {
            playGame1Label.style.transform = "rotate(-90deg)";
            playGameMenu.style.display = "none";
        }
    });

    playGameLabel.addEventListener("mouseover", () => {
        playGame1Title.style.fontSize = "22px";
        playGame1Title.style.fontWeight = "bold";
    });

    playGameLabel.addEventListener("mouseout", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mousedown", () => {
        playGame1Title.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mouseup", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });
    /////////////////////////////////////////////////////////
    playGameTitle.addEventListener("mouseover", () => {
        playGame1Title.style.fontSize = "22px";
        playGame1Title.style.fontWeight = "bold";
    });

    playGameTitle.addEventListener("mouseout", () => {
        playGame1Title.style.fontSize = "20px";
        playGame1Title.style.fontWeight = "normal";
    });

    playGameTitle.addEventListener("mousedown", () => {
        playGame1Title.style.fontWeight = "normal";
    });

    playGameTitle.addEventListener("mouseup", () => {
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
