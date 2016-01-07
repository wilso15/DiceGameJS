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