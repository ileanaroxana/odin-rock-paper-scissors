const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("div");

let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", (e) => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "rock") 
        draw();
    else if (computerSelection === "paper")
        computerWin(computerSelection, e.target.id);
    else if (computerSelection === "scissors")
        playerWin(computerSelection, e.target.id);

    if (playerScore == 5 || computerScore == 5)
        gameOver();
});

paper.addEventListener("click", (e) => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "paper")
        draw();
    else if (computerSelection === "scissors")
        computerWin(computerSelection, e.target.id);
    else if (computerSelection === "rock")
        playerWin(computerSelection, e.target.id);

    if (playerScore == 5 || computerScore == 5)
        gameOver();
});

scissors.addEventListener("click", (e) => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "scissors")
        draw();
    else if (computerSelection === "paper")
        playerWin(computerSelection, e.target.id);
    else if (computerSelection === "rock")
        computerWin(computerSelection, e.target.id);

    if (playerScore == 5 || computerScore == 5)
        gameOver();
});

function getComputerSelection() {
    let rand = Math.floor(Math.random() * 3);

    switch (rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function draw() {
    playerScore++;
    computerScore++;

    results.textContent =  
        `It's a draw!
        You: ${playerScore}
        Computer: ${computerScore}`;

}

function playerWin(computerSelection, playerSelection) {
    playerScore++;

    computerSelection = capitalizeFirstLetter(computerSelection);
    playerSelection = capitalizeFirstLetter(playerSelection);

    results.textContent = 
        `You Win! ${playerSelection} beats ${computerSelection}.
        You: ${playerScore}
        Computer: ${computerScore}`;
    
}

function computerWin(computerSelection, playerSelection) {
    computerScore++;

    computerSelection = capitalizeFirstLetter(computerSelection);
    playerSelection = capitalizeFirstLetter(playerSelection);

    results.textContent = 
        `You Lose! ${computerSelection} beats ${playerSelection}.
        You: ${playerScore}
        Computer: ${computerScore}`;
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase().concat(string.slice(1));
}

function gameOver() {
    if (playerScore == 5)
        results.textContent = 
            `CONGRATULATIONS! You Won the Game!
            Your score: ${playerScore}
            Computer score: ${computerScore}`;
    else if (computerScore == 5) 
        results.textContent = 
            `THIS TIME the Computer Won the Game!
            Your score: ${playerScore}
            Computer score: ${computerScore}`;
    
    playerScore = 0;
    computerScore = 0;
}