"use strict";

function nameEntry() {

}


function totalScore() {

}

/*vvvvvvvvvvvvvvvvvvv Dan vvvvvvvvvvvvvv-Choose a number to play to-vvvvvvvvvvvvvvvv*/
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
};
/*^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ Dan ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^*/

/*----------------------- Nick ----------------------*/

function decideFirstRoller() {
test
test
test
test

}
/*----------------------- Nick ----------------------*/

function getRandomDiceRoll() {
var randDice 
randDice= 1 + Math.floor(Math.random()*6);
return(randDice); 
}



}

function AddScorePlayer1(randomrollplayer1) {
    var scoreTotal1 = 0;
    myPerson1() = scoreTotal1;
    scoreTotal1 += randomrollplayer1;
}

randomrollplayer1 = diceroll()

/*function AddScorePlayer2(diceroll, playTo, myPerson1, myPerson2) {
    var scoreTotal2 = 0
    myPerson2 = scoreTotal2
*/

AddScorePlayer1();