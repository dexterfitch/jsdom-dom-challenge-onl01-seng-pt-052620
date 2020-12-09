const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");

document.addEventListener("DomContentLoaded", (loaded) => {
  let counterText = counter.textContent;
  let counterNum = parseInt(counterText);

  for (i = 0; i >= 0; i++) {
    counterNum++;
    counter.textContent = counterNum;
  }
});



var intervalID = window.setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');

function countSeconds() {
}