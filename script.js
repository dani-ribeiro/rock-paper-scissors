const winnerText = document.getElementById("result");
const playerScoreText = document.getElementById("playerScoreText");
const compScoreText = document.getElementById("compScoreText");
const buttons = document.querySelectorAll(".btn");
let playerSelection;
let computerSelection;
let playerScore = 0;
let compScore = 0;

buttons.forEach((button) => {button.addEventListener('click', () => {
    let playerSelection = button.id;
    let computerSelection = computerPlay();
    game(playerSelection, computerSelection);
})});


function computerPlay() {
    return pick = Math.floor(Math.random() * 3);   // picks and returns a random # between 0 and 2
}                                                  // Rock: 0       Paper: 1        Scissors: 2

function playRound(playerSelection, computerSelection){
    winnerText.style.backgroundColor = "transparent";
    winnerText.style.color = "#9E9E9E";
    //player selects rock
    if(playerSelection === "rock" && computerSelection === 0){
        return "Tie. Rock draws Rock";
    }else if(playerSelection === "rock" && computerSelection === 1){
        ++compScore;
        return "You lose. Paper beats Rock";
    }else if(playerSelection === "rock" && computerSelection === 2){
        ++playerScore;
        return "You win! Rock beats Scissors";
    //player selects paper
    }else if(playerSelection === "paper" && computerSelection === 0){
        ++playerScore;
        return "You win! Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === 1){
        return "Tie. Paper draws Paper";
    }else if(playerSelection === "paper" && computerSelection === 2){
        ++compScore;
        return "You lose. Scissors beats Paper";
     //player selects scissors
    }else if(playerSelection === "scissors" && computerSelection === 0){
        ++compScore;
        return "You lose. Rock beats Scissors";
    }else if(playerSelection === "scissors" && computerSelection === 1){
        ++playerScore;
        return "You win! Scissors beats Paper";
    }else if(playerSelection === "scissors" && computerSelection === 2){
        return "Tie. Scissors draws Scissors";
    }
}

function game(playerSelection, computerSelection){
    winnerText.textContent = playRound(playerSelection, computerSelection);
    playerScoreText.textContent = `Player Score: ${playerScore}`;
    compScoreText.textContent = `Computer Score: ${compScore}`;
    if(playerScore === 5){
        winnerText.textContent = "YOU WIN!!!";
        winnerText.style.backgroundColor = "#13ae4b";
        winnerText.style.color = "#F5F5F5";
        playerScore = 0;
        compScore = 0;
    }else if(compScore === 5){
        winnerText.textContent = "You lose";
        winnerText.style.backgroundColor = "red";
        winnerText.style.color = "#F5F5F5";
        playerScore = 0;
        compScore = 0;
    }
}