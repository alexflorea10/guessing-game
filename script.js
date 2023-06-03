"use strict";

let secretNumber = Math.trunc(Math.random() * 50) + 1;
let score = 10;
let highscore = 0;
// document.querySelector(".secret-number").textContent = secretNumber;

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".input").value);
  if (!guess) {
    displayMessage("That's not a number! 😡");
  } else if (guess === secretNumber) {
    displayMessage("Correct number! 😁😁😁");
    document.querySelector(".secret-number").textContent = secretNumber;
    document.querySelector(".secret-number").style.color = "#facc15";
    if (score > highscore) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess > 50) {
    displayMessage("Bro...between 0 and 50...😒");
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high! 😏" : "Too low! 😣");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You lost the game! 👎");
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 50) + 1;
  document.querySelector(".input").value = "";
  score = 10;
  document.querySelector(".score").textContent = 10;
  document.querySelector(".secret-number").textContent = "?";
  document.querySelector(".secret-number").style.color = "#a7f3d0";
  displayMessage("Start guessing...");
});
