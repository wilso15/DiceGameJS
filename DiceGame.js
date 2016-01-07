"use strict";

var p1score;
var p2score;

var p1Message;
var p2Message;

var person1;
var person2;

var diceRoll
diceRoll = getRandomDiceRoll();

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



function playerInput(people){
	var players;
	players = prompt(people);
	return players;
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

function overLimit(playTo){
    var resetZero = 0;
    if(playerScore > playTo){
        playerScore = resetZero;
        console.log("YOU WENT OVER 13. YOUR SCORE IS RESET TO ZERO!");
        return resetZero;
    }
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
		var p1diceRoll
		var p2diceRoll
		p1diceRoll = getRandomDiceRoll();
		p2diceRoll = getRandomDiceRoll();
		
		p1totalScore += p1diceRoll;

		alert("Player 1 rolled a " + p1diceRoll + " your total is " + p1totalScore);

		p2totalScore += p2diceRoll;

		alert("Player 2 rolled a " + p2diceRoll + " your total is " + p2totalScore);
		
	 }
	}

runGame();


// create a function to reset to 0 with if else statement
// 2 players, alternating turns, 
// a function to see if you have won. 
//player 1 
