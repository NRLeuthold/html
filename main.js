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

const APIButton = document.getElementById("APIButton");


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

function moveDropdown() {
    playGameTitle.style.width = parseFloat(playGameMenuSTYLE.width) - 65 - parseFloat(playGameLabelSTYLE.width) + "px"

    playGame.addEventListener("change", function () {
        if (this.checked) {
            playGameLabel.style.transform = "rotate(0deg)";
            playGameMenu.style.display = "inline";
        } else {
            playGameLabel.style.transform = "rotate(-90deg)";
            playGameMenu.style.display = "none";
        }
    });

    playGameLabel.addEventListener("mouseover", () => {
        playGameTitle.style.fontSize = "22px";
        playGameTitle.style.fontWeight = "bold";
    });

    playGameLabel.addEventListener("mouseout", () => {
        playGameTitle.style.fontSize = "20px";
        playGameTitle.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mousedown", () => {
        playGameTitle.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mouseup", () => {
        playGameTitle.style.fontSize = "20px";
        playGameTitle.style.fontWeight = "normal";
    });
    /////////////////////////////////////////////////////////
    playGameTitle.addEventListener("mouseover", () => {
        playGameTitle.style.fontSize = "22px";
        playGameTitle.style.fontWeight = "bold";
    });

    playGameTitle.addEventListener("mouseout", () => {
        playGameTitle.style.fontSize = "20px";
        playGameTitle.style.fontWeight = "normal";
    });

    playGameTitle.addEventListener("mousedown", () => {
        playGameTitle.style.fontWeight = "normal";
    });

    playGameTitle.addEventListener("mouseup", () => {
        playGameTitle.style.fontSize = "20px";
        playGameTitle.style.fontWeight = "normal";
    });
}

function moveButtons() {
    if (playGameMenu.style.display == "none") {
        APIButton.style.top = "150px";

    } else if (playGameMenu.style.display == "inline") {
        APIButton.style.transform = "translate(20px, 75px)"; //moves to 225px

    }
}

var refresh = setInterval(function () {
    moveMenu();
    moveDropdown();
    moveButtons();
}, 0.1);
