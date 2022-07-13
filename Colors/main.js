const question = document.getElementById('RGB');

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const choice5 = document.getElementById('choice5');
const choice6 = document.getElementById('choice6');

const scoreboard = document.getElementById('score');
const lifeCount = document.getElementById('lives');

var score = 0;
var lives = 3;


function genRGB(){
	var gR = Math.round(Math.random() * 255);
	var gG = Math.round(Math.random() * 255);
	var gB = Math.round(Math.random() * 255);
	
	return `rgb(${gR}, ${gG}, ${gB})`
}

var code;
var ans;
var answer;
var choices;

function main(){

	code = genRGB();
	
	question.textContent = code;
	scoreboard.textContent = score;
	lifeCount.textContent = lives;
	
	choices = [choice1, choice2, choice3, choice4, choice5, choice6];

	ans = Math.round(Math.random() * 5);
	answer = choices[ans];
	answer.style.background = code;
	choices.splice(ans, 1);

	for (var i in choices){
		choices[i].style.background = genRGB();
	}


	function checkWin(){
		answer.onclick = function() {
			score += 1;
			console.log('Score:', score);

			main();
		}
		
		for (var j in choices){
			choices[j].onclick = function() {
				lives -= 1;
				if (lives < 1){
					console.log(`Game Over\nCorrect answer`, answer, `Your score is:`, score);					
					lifeCount.textContent = '0';
					window.close();
					window.open("http://10.0.0.101");
				} else {
					console.log(`Lives remaining:`, lives, `\nCorrect answer:`, answer);
					main();
				}
			}
		}
		
	}

	var refresh = setInterval(function(){
		checkWin();
	}, .1);
}



main();
