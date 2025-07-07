
let humanScore = 0;
let computerScore = 0;

playGame();


function getHumanChoice() {
let humanChoice = prompt();
 if (humanChoice === "paper") {
        return "paper"; 
    } else if (humanChoice === "rock") {
        return "rock";
    } else (humanChoice === "scissors") 
        return "scissors";
}


function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

let playerSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
         return `It's a tie! Both chose ${getComputerChoice}.`;
    } else if 
        ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
) {
        return "You win!";
 } else {
        return "You lose!";
    }
}


function playGame(humanScore, computerScore) {
    while (humanScore < 5 && computerScore < 5) {
        playRound(playerSelection, computerSelection);
            if (playRound = "You win!") {
                humanScore++;
            }
            else if (playRound = "You lose!") {
                computerScore++;
            }
    }
} 