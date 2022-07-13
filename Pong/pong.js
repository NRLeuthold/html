const canvas = document.getElementById("canvas");
canvas.width=500;

const ctx = canvas.getContext("2d");
var paused = false;

class Paddle{
    constructor(x, y, width, height, player, color){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.player = player;
        this.color = color

        this.#addKeyboardListeners();

        this.up = false;
        this.down = false;
        this.speedUp = 3;
        this.speedDown = 3;

        this.score = 0
    }

    draw(ctx){
        ctx.beginPath();

        ctx.moveTo(this.x-(this.width/2), this.y-(this.height/2)); //move to the TOP LEFT of the paddle
        ctx.lineTo(this.x+(this.width/2), this.y-(this.height/2)); //make a line to the TOP RIGHT of the paddle
        ctx.lineTo(this.x+(this.width/2), this.y+(this.height/2)); //make a line to the BOTTOM RIGHT of the paddle
        ctx.lineTo(this.x-(this.width/2), this.y+(this.height/2)); //make a line to the BOTTOM LEFT of the paddle
        ctx.lineTo(this.x-(this.width/2), this.y-(this.height/2)); //make a line to the TOP LEFT of the paddle
        
        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        
        ctx.stroke();
        ctx.fill();

    }

    #addKeyboardListeners(){
        
        if(this.player == "LEFT"){
            document.addEventListener("keydown", (event)=>{
                switch(event.key){
                    case "w":
                        this.up = true;
                        break;
                    case "s":
                        this.down = true;
                        break;
                }
            });
            document.addEventListener("keyup", (event)=>{
                switch(event.key){
                    case "w":
                        this.up = false;
                        break;
                    case "s":
                        this.down = false;
                        break;
                }
            });
        }

        if(this.player == "RIGHT"){
            document.addEventListener("keydown", (event)=>{
                switch(event.key){
                    case "ArrowUp":
                        this.up = true;
                        break;
                    case "ArrowDown":
                        this.down = true;
                        break;
                }
            });
            document.addEventListener("keyup", (event)=>{
                switch(event.key){
                    case "ArrowUp":
                        this.up = false;
                        break;
                    case "ArrowDown":
                        this.down = false;
                        break;
                }
            });
        }
    }

    move(){
        if (this.up == true){
            if (this.y - (this.height/2) < 0){
                this.speedUp = 0;
            }
            if (this.y - (this.height/2) > 0){
                this.speedUp = 3;
            }


            this.y -= this.speedUp;
        }

        if (this.down == true){
            if (this.y + (this.height/2) > window.innerHeight){
                this.speedDown = 0;
            }
            if (this.y + (this.height/2) < window.innerHeight){
                this.speedDown = 3;
            }
            this.y += this.speedDown;
        }
        return this.y;
    }


}

class Ball{
    constructor(x, y, radius){
        this.x = x;
        this.y = y;
        this.radius = radius;

        
        var speeds = [1, -1];
        var randomSpeedVertical = speeds[Math.floor(Math.random()*speeds.length)];
        var randomSpeedHorizontal = speeds[Math.floor(Math.random()*speeds.length)]; //pluck a random color

        this.speedVertical = randomSpeedVertical;
        this.speedHorizontal = randomSpeedHorizontal;

    }

    draw(ctx){
        ctx.beginPath();
        /* ctx.arc(x, y, radius, startAngle, endAngle[, counterclockwise] */
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);

        ctx.strokeStyle = "#FFFFFF";
        ctx.fillStyle = "#FFFFFF";

        ctx.stroke();
        ctx.fill();
    }

    move(){
        if (this.x - this.radius < 0){                                          //Passes leftPaddle
            rightPaddle.score += 1;
            mainBall = new Ball(window.innerWidth/2, window.innerHeight/2, 10);
        }

        if (this.x + this.radius > window.innerWidth){                          //Passes rightPaddle
            leftPaddle.score += 1;
            mainBall = new Ball(window.innerWidth/2, window.innerHeight/2, 10);
        }

        if (this.y - this.radius < 0){                                          //Hits top wall
            this.speedVertical = -this.speedVertical;
        }

        if (this.y + this.radius > window.innerHeight){                         //Hits bottom wall
            this.speedVertical = -this.speedVertical;
        }

        
        this.x -= this.speedHorizontal;
        this.y -= this.speedVertical;
    }

    
}
A
leftPaddle = new Paddle(25, (window.innerHeight/2), 15, 100, "LEFT", "#FFFFFF");
rightPaddle = new Paddle((window.innerWidth-25), (window.innerHeight/2), 15, 100, "RIGHT", "#FFFFFF");

mainBall = new Ball(window.innerWidth/2, window.innerHeight/2, 7.5);

function paddleCollisions(){
    if (mainBall.x - mainBall.radius < 25){
        if (mainBall.y < leftPaddle.y + (leftPaddle.height/2)){
            if (mainBall.y > leftPaddle.y - (leftPaddle.height/2)){
                mainBall.speedHorizontal = -mainBall.speedHorizontal;
            }
        }
    }

    if (mainBall.x - mainBall.radius > window.innerWidth - (25 + rightPaddle.width)){
        if (mainBall.y < rightPaddle.y + (rightPaddle.height/2)){
            if (mainBall.y > rightPaddle.y - (rightPaddle.height/2)){
                mainBall.speedHorizontal = -mainBall.speedHorizontal;
            }
        }
    }
}

function checkWinner(){
    if (leftPaddle.score > 2){
        gameOver("The Left Paddle Wins!!!");
    }

    if (rightPaddle.score > 2){
        gameOver("The Right Paddle Wins!!!");
    }
}

function gameOver(winner){
    clearInterval(refresh);
    blankScreen = new Paddle((window.innerWidth/2), (window.innerHeight/2), window.innerWidth, window.innerHeight, "BLANK", "#000000");
    blankScreen.draw(ctx);

    var text = ctx.measureText(winner);
    ctx.font = "bold 35pt Tahoma";
    ctx.fillStyle = "#FFFFFF";
    ctx.fillText(winner, window.innerWidth/2 - text.width/2, window.innerHeight/2);

    setTimeout(reLoad, 5000);
}

function reLoad(){
    window.location.reload();
}

function main() {
    canvas.height=window.innerHeight;
    canvas.width=window.innerWidth;
    ctx.fillStyle = "#000000";
    ctx.fillRect(0,0,canvas.width,canvas.height);

    leftPaddle.move();
    rightPaddle.move();

    mainBall.move();

    paddleCollisions()

    leftPaddle.draw(ctx);
    rightPaddle.draw(ctx);

    mainBall.draw(ctx);

    ctx.font = "bold 35pt Tahoma";
    ctx.fillText(leftPaddle.score, (window.innerWidth/2 - 80), 80);
    ctx.fillText(rightPaddle.score, ((window.innerWidth/2) + 45), 80);

    ctx.moveTo((window.innerWidth/2), 0);
    ctx.lineTo((window.innerWidth/2), window.innerHeight);
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();

    checkWinner();

    ctx.save();

}

var refresh = setInterval(function(){
    main();
}, .1);
