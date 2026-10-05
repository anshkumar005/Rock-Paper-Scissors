console.log("connected");
userInput = prompt("choose: rock paper scissors");
console.log(userInput)
function playGame(){
    for (let i=1; i<=5; i++){
        playRound();
        getComputerChoice();
    }
}

function getComputerChoice(){
    let number = Math.random(100);
    if (number % 1 && number % number){
        console.log('prime number');
    } else if (number % 2){
        console.log("even number")
    } else {
        console.log("odd number")
    }
}

function playRound(){
    console.log("working")
};
playGame();