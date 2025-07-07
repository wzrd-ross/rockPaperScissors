let humanScore = 0;
let computerScore = 0;
let roundCount = 1;

console.log("Game Start:");
console.log(playGame());

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors:").toLowerCase();
        if (humanChoice === "rock") {
            return "Rock";
        } else if (humanChoice === "paper") {
            return "Paper";
        } else if (humanChoice === "scissors"){
            return "Scissors";
        } else if (humanChoice === null || humanChoice === "") {
            console.log("Played: Nothing.");
        }
}

function getComputerChoice() {
    const computerChoice = ["Rock", "Paper", "Scissors"]
    const computerMath = Math.floor(Math.random() * computerChoice.length);
    return computerChoice[computerMath];
}

function playRound() {
let humanSelection = getHumanChoice();
console.log("Played: " + humanSelection.charAt(0).toUpperCase() + humanSelection.slice(1) + ".");
let computerSelection = getComputerChoice();
console.log("Computer played: " + computerSelection + ".");
    if (humanSelection === computerSelection) {
        return "Round Tied!";
    } else if  ((humanSelection === "Rock" && computerSelection === "Scissors") ||
                    (humanSelection === "Paper" && computerSelection === "Rock") ||
                    (humanSelection === "Scissors" && computerSelection === "Paper")) {
        return "Round Won!"
    } else {
        return "Round Lost!";
    }
}

function playGame(){
    while (humanScore < 5 && computerScore < 5) {
        console.log(`ROUND: ${roundCount}`);
        roundCount++;
        console.log(`SCORE: ${humanScore} -  ${computerScore}`);
        let round = playRound();
        if (round === "Round Won!") {
            console.log("Round Won!");
            humanScore++; 
        } else if (round === "Round Lost!") {
            console.log("Round Lost!");
            computerScore++;
        } else if (round === "Round Tied!") {
            console.log("Round tied!");
            continue;
        } else if (humanScore === 5 || computerScore === 5) {
            break;
        }
    } if (humanScore === 5) {
        console.log("Game over. You won!");
    } else if (computerScore === 5) {
        console.log("Game over. You lose!");
    }
}