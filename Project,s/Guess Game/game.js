"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "🎉 Correct Number!";
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;
// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

// const x = function () {
//   console.log(23);
// };
let Secretnumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
// console.log(`my secret number ${Secretnumber}`);
document.querySelector(".btn check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when There is No Input
  if (!guess) {
    // document.querySelector(".message").textContent = "❌ No Number!";
    displayMessage("❌ No Number!");
  }
  // When player win
  else if (guess === Secretnumber) {
    // document.querySelector(".message").textContent = "🎉 Correct Number!";
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").style.left = "60rem";
    document.querySelector(".number").textContent = Secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } // when guess is wrong
  else if (guess != Secretnumber) {
    console.log("here im ");
    if (score > 1) {
      // document.querySelector(".message").textContent =
      //   guess > Secretnumber ? " 💹 Too high!" : " ⛔ Too small!";
      displayMessage(guess > Secretnumber ? " 💹 Too high!" : " ⛔ Too small!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      // document.querySelector(".message").textContent = " 💥 You lose!";
      displayMessage(" 💥 You lose!");
      document.querySelector(".score").textContent = 0;
    }
  }

  //when guess is to high
  // else if (guess > Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " 💹 Too high!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " 💥 You lose!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < Secretnumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = " ⛔ Too small!";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = " 💥 You lose!";
  //     document.querySelector(".score").textContent = 0;
  //   }
  //   document.querySelector(".message").textContent = " ⛔ Too small!";
  //   score--;
  //   document.querySelector(".score").textContent = score;
  // }
});
document.querySelector(".btn-again").addEventListener("click", function () {
  score = 20;
  Secretnumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector(".message").textContent = "Start guessing....";
  displayMessage("Start guessing....");
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").style.left = "70rem";
});
