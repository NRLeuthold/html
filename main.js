const body = document.getElementById("body");

const icon = document.getElementById("icon");
const iconLabel = document.getElementById("iconLabel");
const menu = document.getElementById("menu");

const dropdown1 = document.getElementById("dropdown1");
const dropdown1Title = document.getElementById("dropdown1Title");
const dropdown1Label = document.getElementById("dropdown1Label");
const dropdownMenu = document.getElementById("dropdownMenu");

var menuSTYLE = getComputedStyle(menu);
var dropdown1LabelSTYLE = getComputedStyle(dropdown1Label);

const button4 = document.getElementById("button4");
const button5 = document.getElementById("button5");
const button6 = document.getElementById("button6");

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

            dropdown1Label.style.transform = "rotate(-90deg)";
            dropdownMenu.style.display = "none";
        }
    });
}

function moveDropdown1() {
    dropdown1Title.style.width = parseFloat(menuSTYLE.width) - 65 - parseFloat(dropdown1LabelSTYLE.width) + "px"

    dropdown1.addEventListener("change", function () {
        if (this.checked) {
            dropdown1Label.style.transform = "rotate(0deg)";
            dropdownMenu.style.display = "inline";
        } else {
            dropdown1Label.style.transform = "rotate(-90deg)";
            dropdownMenu.style.display = "none";
        }
    });

    dropdown1Label.addEventListener("mouseover", () => {
        dropdown1Title.style.fontSize = "22px";
        dropdown1Title.style.fontWeight = "bold";
    });

    dropdown1Label.addEventListener("mouseout", () => {
        dropdown1Title.style.fontSize = "20px";
        dropdown1Title.style.fontWeight = "normal";
    });

    dropdown1Label.addEventListener("mousedown", () => {
        dropdown1Title.style.fontWeight = "normal";
    });

    dropdown1Label.addEventListener("mouseup", () => {
        dropdown1Title.style.fontSize = "20px";
        dropdown1Title.style.fontWeight = "normal";
    });
    /////////////////////////////////////////////////////////
    dropdown1Title.addEventListener("mouseover", () => {
        dropdown1Title.style.fontSize = "22px";
        dropdown1Title.style.fontWeight = "bold";
    });

    dropdown1Title.addEventListener("mouseout", () => {
        dropdown1Title.style.fontSize = "20px";
        dropdown1Title.style.fontWeight = "normal";
    });

    dropdown1Title.addEventListener("mousedown", () => {
        dropdown1Title.style.fontWeight = "normal";
    });

    dropdown1Title.addEventListener("mouseup", () => {
        dropdown1Title.style.fontSize = "20px";
        dropdown1Title.style.fontWeight = "normal";
    });
}

function moveButtons() {
    if (dropdownMenu.style.display == "none") {
        button4.style.top = "230px";
        button5.style.top = "270px";
        button6.style.top = "310px";
    } else if (dropdownMenu.style.display == "inline") {
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
