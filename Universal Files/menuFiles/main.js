const body = document.getElementById("body");

const icon = document.getElementById("icon");
const iconLabel = document.getElementById("iconLabel");
const menu = document.getElementById("menu");

const playGame = document.getElementById("playGame");
const playGameLabel = document.getElementById("playGameLabel");
const playGameMenu = document.getElementById("playGameMenu");
const playGameDrop = document.getElementById("playGameDrop");

var menuSTYLE = getComputedStyle(menu);
var playGameMenuSTYLE = getComputedStyle(playGameMenu);
var playGameLabelSTYLE = getComputedStyle(playGameLabel);

const APIButton = document.getElementById("APIButton");
const APIButtonBack = document.getElementById("APIButtonBack");

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
    playGameLabel.addEventListener("change", function () {
        if (this.checked) {
            console.log("test");
            playGameLabel.style.transform = "rotate(0deg)";
            APIButtonBack.style.transform = "translate(0px, 75px)"; //moves to 225px
        } else {
            playGameLabel.style.transform = "rotate(-90deg)";
            APIButtonBack.style.transform = "translate(0px, 0px)"; //moves to 150px
        }
    });

    playGameLabel.addEventListener("mouseover", () => {
        playGame.style.fontSize = "22px";
        playGame.style.fontWeight = "bold";
    });

    playGameLabel.addEventListener("mouseout", () => {
        playGame.style.fontSize = "20px";
        playGame.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mousedown", () => {
        playGame.style.fontWeight = "normal";
    });

    playGameLabel.addEventListener("mouseup", () => {
        playGame.style.fontSize = "20px";
        playGame.style.fontWeight = "normal";
    });
    /////////////////////////////////////////////////////////
    playGame.addEventListener("mouseover", () => {
        playGame.style.fontSize = "22px";
        playGame.style.fontWeight = "bold";
    });

    playGame.addEventListener("mouseout", () => {
        playGame.style.fontSize = "20px";
        playGame.style.fontWeight = "normal";
    });

    playGame.addEventListener("mousedown", () => {
        playGame.style.fontWeight = "normal";
    });

    playGame.addEventListener("mouseup", () => {
        playGame.style.fontSize = "20px";
        playGame.style.fontWeight = "normal";
    });
}

function changePage() {
    playGame.addEventListener("change", function () {
        window.open("http://10.0.0.101/GamePage/gamePage.html", "_self")
    });

}

var refresh = setInterval(function () {
    moveMenu();
    moveDropdown();
    changePage();
}, 0.1);
