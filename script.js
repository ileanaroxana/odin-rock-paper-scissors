const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const results = document.querySelector("div");

rock.addEventListener("click", () => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "rock")
        results.textContent = "It's a draw!";
    else if (computerSelection === "paper")
        results.textContent = "You Lose! Paper beats Rock";
    else if (computerSelection === "scissors")
        results.textContent = "You Win! Rock beats Scissors";
});

paper.addEventListener("click", () => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "paper")
        results.textContent = "It's a draw!";
    else if (computerSelection === "scissors")
        results.textContent = "You Lose! Scissors beats Paper";
    else if (computerSelection === "rock")
        results.textContent = "You Win! Paper beats Rock";
});

scissors.addEventListener("click", () => {
    const computerSelection = getComputerSelection();
    if (computerSelection === "scissors")
        results.textContent = "It's a draw!";
    else if (computerSelection === "paper")
        results.textContent = "You Win! Scissors beats Paper";
    else if (computerSelection === "rock")
        results.textContent = "You Lose! Rock beats Scissors";
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