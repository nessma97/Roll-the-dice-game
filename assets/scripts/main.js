"use strict";
let resetBtn = document.querySelector(".reset__btn");
let anonNum = document.querySelector(".anononmous__num");
let checkBtn = document.querySelector(".guess__btn");
let guessNum = document.querySelector(".check__number");
let guessingResult = document.querySelector(".guessing__result");
let scoreResult = document.querySelector(".score");
let highScoreResult = document.querySelector(".high__score");

// 1. create the random number from 1 to 50
// 2. input === guess >> correct number
// 3. reset btn reset the game to the game State
// 4. empty input should be handeled
// 5.change game style when winning
// 6.guessing too high or to low >> display message
//7. display the input number in ? position

let score = 20;
let highScore = 0;
const randomNumber = Math.floor(Math.random() * 20) + 1;
// console.log(randomNumber, typeof randomNumber);

let displayMessage = function (message) {
  guessingResult.innerHTML = message;
};

checkBtn.addEventListener("click", function () {
  // console.log(randomNumber);
  const numInput = Number(document.querySelector(".num__input").value);
  // console.log(numInput, typeof numInput);
  if (!numInput) {
    displayMessage("&#128531; Enter a Number!");
  } else if (numInput === randomNumber) {
    displayMessage("&#127881; correct number!");
    guessNum.innerHTML = randomNumber;
    document.body.style.backgroundColor = "#0bd6cf";
    if (score > highScore) {
      highScore = score;
      highScoreResult.innerHTML = highScore;
    }
  } else if (numInput !== randomNumber) {
    if (score > 0) {
      displayMessage(
        numInput > randomNumber ? "&#128531; Too high!" : "&#128531; Too low!"
      );
      score--;
      scoreResult.innerHTML = score;
    } else {
      displayMessage("&#128531; You lost the game!");
      document.body.style.backgroundColor = "#ff2e2eef";
    }
  }
});

resetBtn.addEventListener("click", function () {
  score = 20;
  highScore = 0;
  scoreResult.innerHTML = score;
  highScoreResult.innerHTML = highScore;
  guessNum.innerHTML = "?";
  displayMessage("&#10068; Start guessing...");
  document.body.style.backgroundColor = "#2a2e2d";
  document.querySelector(".num__input").value = "";
});
