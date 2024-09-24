const buttonsEl = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const userScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

function computerPlay() {
  const item = ["rock", "paper", "scissors"];
  const value = Math.floor(Math.random() * 3);
  return item[value];
}

let userScore = 0;
let computerScore = 0;

buttonsEl.forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.id;
    const computerChoice = computerPlay();
    console.log(resultEl.innerHTML);
    if (userChoice === computerChoice) {
      resultEl.innerHTML = `Game Tied`;
    } else if (
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      userScore++;
      resultEl.innerHTML = `You win! ${userChoice} beats ${computerChoice}`;
    } else {
      computerScore++;
      resultEl.innerHTML = `You lose! ${computerChoice} beats ${userChoice}`;
    }

    userScoreEl.innerHTML = userScore;
    computerScoreEl.innerHTML = computerScore;

    if (userScore === 5 || computerScore === 5) {
      if (userScore === 5) {
        resultEl.innerHTML = `You win the game!`;
      } else {
        resultEl.innerHTML = `You lose the game!`;
      }
      userScore = 0;
      computerScore = 0;

      userScoreEl.innerHTML = userScore;
      computerScoreEl.innerHTML = computerScore;
    }
  });
});
