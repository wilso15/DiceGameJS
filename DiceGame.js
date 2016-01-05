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

}
/*----------------------- Nick ----------------------*/

function getRandomDiceRoll() {

}