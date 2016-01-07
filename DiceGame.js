function playerInput(people){
	var players;
	players = prompt(people);
	return players;
	}




var player1id;
var player2id;
var player1name;
var player2name;
player1id = "Player 1";
player2id = "Player 2";
player1name = playerInput(player1id);
player2name = playerInput(player2id);

console.log("Player 1", player1name);
console.log("Player 2", player2name);
}

function getWinningNumber() {
    var playTo;
    playTo = 13;
	return playTo;
}

function getRandomDiceRoll() {
	var randDice 
	randDice= 1 + Math.floor(Math.random()*6);
	return randDice; 
}

function addScore() {
	var result; 
	result = scoreTotal += diceRoll;
	return result;
}
 
 
 
function runGame(){
	var totalScore;
	var playTo;
	var p1totalScore;
	var p2totalScore;
	p2totalScore = 0;
	p1totalScore = 0;
	playTo = getWinningNumber();
	while (p1totalScore !== playTo && p2totalScore !== playTo){
		diceRoll = getRandomDiceRoll();
		console.log(diceRoll, "diceroll");
		console.log(p1totalScore, "p1totalscore");
		p1totalScore += diceRoll;
		console.log(p1totalScore, "p1totalscore, after");
		alert("Player 1 rolled a " + diceRoll + " your total is " + p1totalScore);
		p2totalScore += diceRoll;
		console.log (p2totalScore, "p2totalScore")
		alert("Player 2 rolled a " + diceRoll + " your total is " + p2totalScore);
		
	 }
	}

runGame();


// create a function to reset to 0 with if else statement
// 2 players, alternating turns, 
// a function to see if you have won. 
//player 1 
