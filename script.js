console.log("connected");
userInput = prompt("choose: rock paper scissors");
console.log(userInput)


function playGame(){
    for (let i=1; i<=5; i++){
        getComputerChoice();
    }
}
playGame();


function getComputerChoice(){
    let number = Math.random();
    if (number>=0 && number<=0.3){
        console.log('1/3');
    } else if (number>0.3 && number<=0.6){
        console.log("2/3")
    } else {
        console.log("3/3")
    }
}

function playRound(){
    console.log("working")
};

