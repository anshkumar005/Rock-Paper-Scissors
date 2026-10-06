function playGame(){

    
    let humanScore = 0;
    let computerScore = 0;
    let tieScore = 0;
    for (let i=1; i<=5; i++){
        let humanSelection = getHumanChoice();
        let computerSeletion = getComputerChoice();
        playRound(humanSelection,computerSeletion);
    }
    function getComputerChoice(){
        let number = Math.random();
        if (number>=0 && number<=0.3){
            console.log("computer chose rock");
            return "rock";
        } else if (number>0.3 && number<=0.6){
            console.log("computer chose paper")
            return "paper";
        } else {
            console.log("computer chose scissors")
            return "scissors";
        }
    };

    function getHumanChoice() {
        let  userInput = prompt("choose one : rock paper scissors").toLowerCase();
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
            return getHumanChoice();
        }
    };

    function playRound(humanChoice,computerChoice){
        if(humanChoice==="rock" && computerChoice==="paper"){
                console.log("You lose! Paper beats Rock");
                computerScore += 1
        } else if(humanChoice==="rock" && computerChoice==="scissors"){
                console.log("You win! Rock beats Scissors");
                humanScore +=1;
        } else if(humanChoice==="paper" && computerChoice==="rock"){
                console.log("You win! Paper beats Rock");
                humanScore += 1;
        } else if(humanChoice==="paper" && computerChoice==="scissors"){
                console.log("You lose! Scissors beats Paper");
                computerScore += 1;
        } else if(humanChoice==="scissors" && computerChoice==="rock"){
                console.log("You lose! Rock beats Scissors");
                computerScore +=1;
        } else if(humanChoice==="scissors" && computerChoice==="paper"){
                console.log("You win! Scissors beats Paper");
                humanScore +=1;
        } else {
            console.log("its a tie! good luck");
            tieScore += 1;
        }
    };
    console.log(`your score : ${humanScore} and computer score : ${computerScore} ties : ${tieScore}`)
}
playGame();
