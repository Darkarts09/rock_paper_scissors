const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a Tie!";
  } else {
    switch (playerChoice) {
      case "rock":
        result = computerChoice === "scissors" ? "You Win!" : "You Lose!";
        break;
      case "paper":
        result = computerChoice === "rock" ? "You Win!" : "You Lose!";
        break;
      case "scissors":
        result = computerChoice === "paper" ? "You Win!" : "You Lose!";
    }
  }
  playerDisplay.textContent = `Player: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");

  switch (result) {
    case "You Win!":
      resultDisplay.classList.add("greenText");
      playerScore++;
      playerScoreDisplay.textContent = playerScore;
      break;
    case "You Lose!":
      resultDisplay.classList.add("redText");
      computerScore++;
      computerScoreDisplay.textContent = computerScore;
      break;
  }
}

// function getComputerChoice() {
//   let choice = Math.floor(Math.random() * 3) + 1;
//   //   console.log(choice);

//   if (choice === 1) {
//     let choice = "rock";
//     console.log(choice);
//   } else if (choice === 2) {
//     let choice = "paper";
//     console.log(choice);
//   } else {
//     let choice = "scissors";
//     console.log(choice);
//   }
// }
// console.log(getComputerChoice());

// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//   let playerChoice = prompt("Enter Rock, Paper, or Scissors");
//   console.log(playerChoice);
// });

// console.log(playerChoice);

// // function roundOne(playerSelection, computerSelection) {
// //   let playerChoice = prompt("Enter Rock, Paper, or Scissors");
// //   alert(playerChoice);
// // }
