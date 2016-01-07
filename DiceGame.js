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


"use strict";

function main(){
    var p1Message;
    var p2Message;

    var person1;
    var person2;
   
    var diceRoll;
    var goalMessage;
    var playTo;

    var p1diceRoll
    var p2diceRoll
    p1diceRoll = getRandomDiceRoll();
    p2diceRoll = getRandomDiceRoll();
    p1Message = "Player 1";
    p2Message = "Player 2";
    goalMessage = "What number would you like to play to??";
    person1 = getPlayerInput(p1Message);
    person2 = getPlayerInput(p2Message);
    playTo = getPlayerInput(goalMessage);
    console.log("   ## Get "+playTo+" to Win! ##   ");
    console.log("%c      ** Good Luck! **  ", "color: green; font-style: italic");
    runGame(playTo, person1, person2, p1diceRoll, p2diceRoll);
}

main();

function getPlayerInput(ask){
    var playerInput;
    playerInput= prompt(ask);
    return playerInput;
}

function getWinningNumber(playTo) {
    return playTo;
}

function getRandomDiceRoll() {
    var randDice;
    randDice= 1 + Math.floor(Math.random()*6);
    return randDice; 
}
 
function runGame(playTo, person1, person2, p1diceRoll, p2diceRoll){
    var p1totalScore;
    var p2totalScore;
    p1totalScore = 0;
    p2totalScore = 0;
    while (p1totalScore < playTo && p2totalScore < playTo){
        p1diceRoll = getRandomDiceRoll();
        p2diceRoll = getRandomDiceRoll();
        
        p1totalScore += p1diceRoll;
        console.log("* Dice Roll: "+ p1diceRoll +"   "+ person1+"'s Total Score:", p1totalScore);
        alert(person1+" rolled a " + p1diceRoll + ". The total is now " + p1totalScore+".");

        p2totalScore += p2diceRoll;
        console.log("* Dice Roll: "+ p2diceRoll +"   "+ person2+"'s Total Score:", p2totalScore);
        alert(person2+" rolled a " + p2diceRoll + ". The total is now " + p2totalScore+".");
     }
    
     if (p1totalScore > playTo || p2totalScore > playTo) {
        if (p1totalScore > playTo && p2totalScore > playTo) {
            console.log(" * * BOTH Went over Limit of "+playTo+" * * ");
        } else if (p1totalScore > playTo) {
            console.log(person1+" went over Limit of "+playTo+" * * ");
        } else {
            console.log(person2+" went over Limit of "+playTo+" * * ");
        }
        alert("*** The Limit of "+playTo+" exceeded. Both Players Start Over!***");
        runGame(playTo, person1, person2, p1diceRoll, p2diceRoll);
     }

     if (p1totalScore == playTo || p2totalScore == playTo) {
        if (p1totalScore == playTo) {
            console.log("* * Winner is "+person1+"!! * *");
            alert("Good Job " + person1 +"! You Win!");
            console.log("%c   Thanks For Playing!", "color: green; font-style: italic");
        } else if(p2totalScore == playTo) {
            console.log("* * Winner is "+person2+"!!");
            alert("Good Job " + person2 +"! You Win!");
            console.log("%c   Thanks For Playing!", "color: red; font-style: italic");
        }

     }
}