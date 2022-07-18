const body = document.getElementById("body");

const icon = document.getElementById("icon");
const iconLabel = document.getElementById("iconLabel");
const menu = document.getElementById("menu");

const playGame = document.getElementById("playGame");
const playGameTitle = document.getElementById("playGameTitle");
const playGameLabel = document.getElementById("playGameLabel");
const playGameMenu = document.getElementById("playGameMenu");

var playGameMenuSTYLE = getComputedStyle(playGameMenu);
var playGameLabelSTYLE = getComputedStyle(playGameLabel);

const APIButton = document.getElementById("APIButton");
const APIButtonBack = document.getElementById("APIButtonBack");

console.log("test");

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

    playGameLabel.addEventListener("change", function () {
        if (this.checked) {
            playGameLabel.style.transform = "rotate(0deg)";
            APIButtonBack.style.transform = "translate(0px, 75px)"; //moves to 225px
        } else {
            playGameLabel.style.transform = "rotate(-90deg)";
            APIButtonBack.style.transform = "translate(0px, 0px)"; //moves to 150px
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

function changePage() {
    playGameTitle.addEventListener("change", function () {
        window.open("http://10.0.0.101/GamePage/gamePage.html", "_self")
    });

}

var refresh = setInterval(function () {
    moveMenu();
    moveDropdown();
}, 0.1);
