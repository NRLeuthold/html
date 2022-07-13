const start = document.getElementById("start");
const reset = document.getElementById("reset");

const yellow = document.getElementById("yellow");
const blue = document.getElementById("blue");
const green = document.getElementById("green");
const red = document.getElementById("red");

const scoreCount = document.getElementById("scoreCount");

var colors = [yellow, blue, green, red];
var colorsStr = ["yellow", "blue", "green", "red"];

var order = [];
var orderStr = [];

var selected = [];

var running;

var correct;
var incorrect;

var score = 0;

function play() {
    yellow.addEventListener('click', () => {
        if (!running) return;
        selected.push("yellow");
        checkWin();
    });

    yellow.addEventListener('mouseover', () => {
        yellow.style.fill = "darkgoldenrod";
    })

    yellow.addEventListener('mouseout', () => {
        yellow.style.fill = "yellow";
    })

    blue.addEventListener('click', () => {
        if (!running) return;
        selected.push("blue");
        checkWin();
    });

    blue.addEventListener('mouseover', () => {
        blue.style.fill = "darkblue";
    })

    blue.addEventListener('mouseout', () => {
        blue.style.fill = "blue";
    })


    green.addEventListener('click', () => {
        if (!running) return;
        selected.push("green");
        checkWin();
    });

    green.addEventListener('mouseover', () => {
        green.style.fill = "darkgreen";
    })

    green.addEventListener('mouseout', () => {
        green.style.fill = "green";
    })

    red.addEventListener('click', () => {
        if (!running) return;
        selected.push("red");
        checkWin();
    });

    red.addEventListener('mouseover', () => {
        red.style.fill = "darkred";
    })

    red.addEventListener('mouseout', () => {
        red.style.fill = "red";
    })

}

function randColor(){
    selected = [];


    var next = Math.round(Math.random() * 4);
    console.log("colors[next]: ", colors[next], "\norder[-1]: ", order[order.length - 1]);
    
    if (colors[next] == undefined){
        randColor();
    } else if (colors[next] == order[order.length - 1]){
        randColor();
    } else if (colors[next] != undefined){
        order.push(colors[next]);
        orderStr.push(colorsStr[next]);
    }

    showPattern();
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }


function showPattern(){
    if (running){
        for (let i = 0; i < order.length; i++){

            delay(((i + 1) * 1000)).then(() => order[i].style.fill = "white");
            delay(((i + 2) * 1000)).then(() => order[i].style.fill = orderStr[i]);
        }
    } else if (!running) {return;}
}

function checkWin(){
    if (selected.length == orderStr.length){
        for (let i=0; i<selected.length; i++){
            if (selected[i] == orderStr[i]){
                correct = true;
            } else if (selected[i] != orderStr[i]){
                incorrect = true;
            }
        }

        if(incorrect){
            indicator.style.backgroundColor = "red";
            setTimeout(() => indicator.style.backgroundColor = "rgb(34, 34, 34)", 500);

            endMenu.style.display = "inline";
            finalScoreCount.textContent = score;

            returnHome.addEventListener('click', () => {
                window.open("http://10.0.0.101", "_self");
            });

            finalRestart.addEventListener('click', () => {
                window.location.reload();
            });

        } else if (correct){
            score += 1;
            scoreCount.textContent = score;
            indicator.style.backgroundColor = "green";
            setTimeout(() => indicator.style.backgroundColor = "rgb(34, 34, 34)", 500);
            randColor();
        }

    }
}

start.addEventListener('click', () => {
    if (running) {return;}
    running = true;
    randColor();
});

reset.addEventListener('click', () => {
    window.location.reload();


});

play();