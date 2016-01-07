"use strict";

var p1score;
var p2score;

var p1Message;
var p2Message;

var person1;
var person2;

var diceRoll 
diceRoll = getRandomDiceRoll();

person1 = getPlayerInput(p1Message);
person2 = getPlayerInput(p2Message);

p1Message = "Dice Game Player 1";
p2Message = "Dice Game Player 2";

function getPlayerInput(ask){
	var playerInput;
	playerInput= prompt(ask);
	return playerInput;
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
	p1totalScore = 0;
	playTo = getWinningNumber();
	console.log(playTo, "playto");
	while (p1totalScore !== playTo){
		diceRoll = getRandomDiceRoll();
		console.log(diceRoll, "diceroll");
		console.log(p1totalScore, "p1totalscore");
		p1totalScore += diceRoll;
		console.log(p1totalScore, "p1totalscore, after");
		alert("You rolled a " + diceRoll + " your total is " + p1totalScore);

		
	 }
	}

runGame();


// create a function to reset to 0 with if else statement
// 2 players, alternating turns, 
// a function to see if you have won. 
