// Global variables 
let humanScore = 0;
let computerScore = 0;
let tieScore = 0;
// DOM
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const div = document.querySelector("#console-div");
//Event handlers
rock.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("rock",computerSelection);
});
paper.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("paper",computerSelection);
});
scissors.addEventListener("click", () => {
    let computerSelection = getComputerChoice();
    playRound("scissors",computerSelection);
});


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



function playRound(humanChoice,computerChoice){
    let roundMessage = "";
    if(humanChoice == computerChoice){
        tieScore += 1;
        roundMessage = `its a tie you both chose ${humanChoice}`;
    } else if(
        humanChoice==="rock" && computerChoice==="scissors" ||
        humanChoice==="paper" && computerChoice==="rock" ||
        humanChoice==="scissors" && computerChoice==="paper"
    ){
        roundMessage= `You win! ${humanChoice} beats ${computerChoice}`;
        humanScore +=1;
    } else {
        roundMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore +=1;
    }
    if (humanScore===5){
        div.textContent=`you win the game you scored 5 points first. Total: you-${humanScore},computer-${computerScore}`;
        tieScore=0;
        humanScore=0;
        computerScore=0;
    }
    else if (computerScore===5){
        div.textContent=`you lost the game, computer scored 5 points first!. Total: you-${humanScore},computer-${computerScore}`;
        tieScore=0;
        humanScore=0;
        computerScore=0;
    }
    else{
        div.textContent=`${roundMessage} | your score : ${humanScore} and computer score : ${computerScore} ties : ${tieScore}`;
    }
};


