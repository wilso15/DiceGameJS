"use strict";

var p1score;
var p2score;

var p1Message;
var p2Message;

var person1;
var person2;

var diceRoll 
diceRoll = getRandomDiceRoll();

person1 = getPlayerInput("Player 1");
person2 = getPlayerInput("Player 2");


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
