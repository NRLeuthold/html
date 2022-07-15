const question = document.getElementById('RGB');

const choice1 = document.getElementById('choice1');
const choice2 = document.getElementById('choice2');
const choice3 = document.getElementById('choice3');
const choice4 = document.getElementById('choice4');
const choice5 = document.getElementById('choice5');
const choice6 = document.getElementById('choice6');

const scoreboard = document.getElementById('score');
const lifeCount = document.getElementById('lives');

const endMenu = document.getElementById("endMenu");
const endMenuContent = document.getElementById("endMenuContent");
const finalRestart = document.getElementById("finalRestart");
const finalReturnHome = document.getElementById("finalReturnHome");
const finalScoreCount = document.getElementById("finalScoreCount");

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


		var endMenuSTYLE = getComputedStyle(endMenu);
		var endMenuContentSTYLE = getComputedStyle(endMenuContent);
		var finalRestartSTYLE = getComputedStyle(finalRestart);
		var finalReturnHomeSTYLE = getComputedStyle(finalReturnHome);

		endMenu.style.top = (window.innerHeight/2) - (parseInt(endMenuSTYLE.height)/2) + "px";
		endMenu.style.left = (window.innerWidth/2) - (parseInt(endMenuSTYLE.width)/2) + "px";

		endMenuContent.style.top = (parseInt(endMenuSTYLE.height)/2) - (parseInt(endMenuContentSTYLE.height)/2) + "px";
		endMenuContent.style.left = (parseInt(endMenuSTYLE.width)/2) - (parseInt(endMenuContentSTYLE.width)/2) + "px";

		finalRestart.style.top = (parseInt(endMenuSTYLE.height)*.85) - (parseInt(finalRestartSTYLE.height)/2) + "px";
		finalRestart.style.left = (parseInt(endMenuSTYLE.width)/4) - (parseInt(finalRestartSTYLE.width)/2) + "px";

		finalReturnHome.style.top = (parseInt(endMenuSTYLE.height)*.85) - (parseInt(finalReturnHomeSTYLE.height)/2) + "px";
		finalReturnHome.style.left = (parseInt(endMenuSTYLE.width)*.75) - (parseInt(finalReturnHomeSTYLE.width)/2) + "px";


		answer.onclick = function() {
			score += 1;
			console.log('Score:', score);

			main();
		}
		
		for (var j in choices){
			choices[j].onclick = function() {
				lives -= 1;
				if (lives < 1){
					finalScoreCount.textContent = score;
					lifeCount.textContent = '0';
					
					endMenu.style.display = "inline";

					finalReturnHome.addEventListener('click', () => {
						window.open("http://10.0.0.101", "_self");
					});
		
					finalRestart.addEventListener('click', () => {
						window.location.reload();
					});

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
