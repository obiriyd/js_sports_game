//Declare and Assign Global Variables
const shotsTeamOne = document.querySelector('#teamone-numshots');
const shotsTeamTwo = document.querySelector('#teamtwo-numshots');
const goalsTeamOne = document.querySelector('#teamone-numgoals');
const goalsTeamTwo = document.querySelector('#teamtwo-numgoals');
const resetCount = document.querySelector('#num-resets');
let gameWinner;
let gamePlayed = false;

//Get Button Elements
const shootButtonTeamOne = document.querySelector('#teamone-shoot-button');
const shootButtonTeamTwo = document.querySelector('#teamtwo-shoot-button');
const resetButton = document.querySelector('#reset-button');

//Add Event Listener for Team One
shootButtonTeamOne.addEventListener("click", function() {
    //Update Click Count
    shotsTeamOne.innerHTML = Number(shotsTeamOne.innerHTML) + 1;
    //Goals Logic
    if (Math.random() < 0.5) {
        //Won, Update Goals for Team One
        goalsTeamOne.innerHTML = Number(goalsTeamOne.innerHTML) + 1;
    } 
})

//Add Event Listener for Team Two
shootButtonTeamTwo.addEventListener("click", function() {
    //Update Click Count
    shotsTeamTwo.innerHTML = Number(shotsTeamTwo.innerHTML) + 1;
    //Goals Logic
    if (Math.random() < 0.5) {
        //Won, Update Goals for Team One
        goalsTeamTwo.innerHTML = Number(goalsTeamTwo.innerHTML) + 1;
    } 
})

//Add Event Listener for Reset Button
resetButton.addEventListener("click", function() {
    //Check if Game Was Played
    if (Number(goalsTeamOne.innerHTML) > 0 || Number(goalsTeamTwo.innerHTML) > 0) { 
        gamePlayed = true;
    }
    //Check Who Won
    if (Number(goalsTeamOne.innerHTML) > Number(goalsTeamTwo.innerHTML)) {
        gameWinner = 'Team 1';
    } else {
        gameWinner = 'Team 2';
    }
    //Reset Counters
    shotsTeamOne.innerHTML = 0;
    shotsTeamTwo.innerHTML = 0;
    goalsTeamOne.innerHTML = 0;
    goalsTeamTwo.innerHTML = 0;
    //Increment Reset Counter
    resetCount.innerHTML = Number(resetCount.innerHTML) + 1;
    //Display Winner
    if (gamePlayed) {
        alert('Game Over! \nAnd the winner is: ' + gameWinner);
    }
})