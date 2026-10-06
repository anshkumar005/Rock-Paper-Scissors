# Rock-Paper-Scissors
--- Step 1 ---
connect make the repo and connect the script file to the html
make it work on console only.

--- Step 2 ---
make a function - getComputerChoice will randomly return one of the following string values: “rock”, “paper” or “scissors”.
use Math.Random();

--- Step 3 ---
make another function - getHumanChoice()
getHumanChoice will return one of the valid choices depending on what the user inputs.
use prompt to get input

--- Step 4 ---
Declare players score variable- humanScore and computerScore in the global scope initial value 0;

--- Step 5 ---
game will be played round by round
create function playRound(humanChoice,computerChoice);
humanChoice is case insensitive
playRound function to console.log a string value representing the round winner, such as: “You lose! Paper beats Rock”.
Increment the humanScore or computerScore variable based on the round winner.

--- Step 6 ---
create function playGame()
Move your playRound function and score variables so that they’re declared inside of the new playGame function
playRound will be called 5 times so 5 rounds == 1 game;

