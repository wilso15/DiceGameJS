"use strict";
var playerInput;
var playerDiceRoll;


var p1Message;
var p2Message;
var person1;
var person2;
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

var p1score;
var p2score;
p1score = addScore(diceRoll, scoreTotal);
p2score = addScore(diceRoll, scoreTotal);

function getRandomDiceRoll() {
	var randDice 
	randDice= 1 + Math.floor(Math.random()*6);
	return randDice; 
}

function addScore(diceRoll, scoreTotal) {
	var result; 
	result = scoreTotal += diceRoll;
	return result;
}

function runGame(){
	var totalScore;
	var diceRoll;
	var playTo;
	p1totalScore = 0;
	playTo = getWinningNumber();
	while (p1totalScore !== playTo){
		diceRoll = getRandomDiceRoll();
		p1totalScore += diceRoll;
		alert("You rolled a " + diceRoll". Turn over.");
	}
}
// need a loop that takes in add points within the main function
// create a function to reset to 0 with if else statement
// 2 players, alternating turns, 
// a function to see if you have won. 
