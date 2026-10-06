
function playGame(){
    for (let i=1; i<=5; i++){
        getHumanChoice();
    }
}
playGame();


function playRound(){
    console.log("working")
};


function getComputerChoice(){
    let number = Math.random();
    if (number>=0 && number<=0.3){
        return "rock";
    } else if (number>0.3 && number<=0.6){
        return "paper";
    } else {
        return "scissors";
    }
};

function getHumanChoice() {
    userInput = prompt("choose one : rock paper scissors").toLowerCase();
    if (userInput==="rock") {
        console.log("you have chosen ROCK");
        return "rock";
    } else if (userInput==="paper"){
        console.log("you have chosen PAPER");
        return "paper";
    } else if (userInput==="scissors"){
        console.log("you have chosen SCISSORS");
        return "scissors";
    } else {
        alert("invalid input write only rock paper scissors");
        getHumanChoice();
    }

};

