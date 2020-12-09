const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.querySelector(".likes");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");

function countSeconds() {
  let counterText = counter.textContent;
  let counterNum = parseInt(counterText);
  counterNum++;
  counter.textContent = counterNum;
}

document.addEventListener("click", (clickEvent) => {
  if (clickEvent.target.id === minus.id) {
    console.log("minusClick");
  } else if (clickEvent.target.id === plus.id) {
    console.log("plusClick");
  }
});

window.setInterval(countSeconds, 1000);
