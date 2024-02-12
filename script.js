playGame();


function computerSelection() {
    let rand = Math.floor(Math.random() * 3);

    if (rand == 0) 
        return "rock";
    if (rand == 1) 
        return "paper";
    if (rand == 2) 
        return "scissors";
}

function playerSelection() {
    let choice;
    do {
        choice = prompt("Choice?", "");
        choice = choice.toLowerCase();
    } while (choice !== "rock" && choice !== "paper" && choice !== "scissors");
    
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection)
        console.log("It's a draw!");
    
    else if (playerSelection === "rock" && computerSelection === "paper")
        console.log("You Win! Paper beats Rock");
    else if (computerSelection === "rock" && playerSelection === "paper")
        console.log("You Lose! Paper beats Rock");
    
    else if (playerSelection === "rock" && computerSelection === "scissors")
        console.log("You Win! Rock beats Scissors");
    else if (computerSelection === "rock" && playerSelection === "scissors")
        console.log("You Lose! Rock beats Scissors");
    
    else if (playerSelection === "scissors" && computerSelection === "paper")
        console.log("You Win! Scissors beats Paper");
    else if (computerSelection === "scissors" && playerSelection === "paper")
        console.log("You Lose! Scissors beats Paper");    
    
    // rock beats scissors    
    // paper beats rock      
    // scissors beats paper   
    }
    
function playGame() {
    for (let i = 0; i < 5; i++)
        playRound(playerSelection(), computerSelection());
}