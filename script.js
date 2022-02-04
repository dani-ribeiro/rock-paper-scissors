function computerPlay() {
    return pick = Math.floor(Math.random() * 3);   // picks and returns a random # between 0 and 2
}                                                  // Rock: 0       Paper: 1        Scissors: 2

function playRound(playerSelection, computerSelection){
    //player selects rock
    if(playerSelection === "rock" && computerSelection === 0){
        return "Tie. Rock draws Rock";
    }else if(playerSelection === "rock" && computerSelection === 1){
        return "You lose. Paper beats Rock";
    }else if(playerSelection === "rock" && computerSelection === 2){
        return "You win! Rock beats Scissors";
    //player selects paper
    }else if(playerSelection === "paper" && computerSelection === 0){
        return "You win!. Paper beats Rock";
    }else if(playerSelection === "paper" && computerSelection === 1){
        return "Tie. Paper draws Paper";
    }else if(playerSelection === "paper" && computerSelection === 2){
        return "You lose. Scissors beats Paper";
     //player selects scissors
    }else if(playerSelection === "scissors" && computerSelection === 0){
        return "You lose. Rock beats Scissors";
    }else if(playerSelection === "scissors" && computerSelection === 1){
        return "You win! Scissors beats Paper";
    }else if(playerSelection === "scissors" && computerSelection === 2){
        return "Tie. Scissors draws Scissors";
    }
}

function game(){
    for(let i=0; i<5;i++){
        let playerSelection = prompt("What will you choose? Rock, Paper, or Scissors").toLowerCase();
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
}

game();