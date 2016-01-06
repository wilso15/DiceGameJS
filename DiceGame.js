"use strict";

var human1;
var human2;
human1 = myPerson1();
human2 = myPerson2();
human1score = 
human2score = 
playerdiceroll = getRandomDiceRoll


function createPerson1(){
	var person1; 
	person1 = prompt("DiceGame: Player 1");
	return person1;
}

function createPerson2(){
	var person2;
	person2 = prompt("DiceGame: Player 2");
	return person2;
}

function getRandomDiceRoll() {
var randDice 
randDice= 1 + Math.floor(Math.random()*6);
return(randDice); 
}

function AddScorePlayer(randomrollplayer) {
    var scoreTotal 
	scoreTotal = 0;
    human1 = scoreTotal;
    scoreTotal += randomrollplayer;
}


function winningNumber() {
    var playTo;
    playTo = prompt("Play to 13, 21 or 35!");
    if (playTo == 13){
        alert("First to 13 wins! Good luck!");
        return playTo;
    } else if (playTo == 21) {
        alert("First to 21 wins! Good luck!");
        return playTo;
    } else if (playTo == 35) {
        alert("First to 35 wins! Good luck!");
        return playTo;
    } else {
        alert("FOLLOW DIRECTIONS!!");
        winningNumber();
    }
	}


game(){
while ()
}


randomrollplayer1 = diceroll()

/*function AddScorePlayer2(diceroll, playTo, myPerson1, myPerson2) {
    var scoreTotal2 = 0
    myPerson2 = scoreTotal2
*/

AddScorePlayer1();


