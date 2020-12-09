const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");
const play = document.getElementById("play");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");
let interval = setInterval(countNumbersUp, 1000);

function countNumbersUp() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

function countNumbersDown() {
  counter.textContent = parseInt(counter.textContent) - 1;
}

function minusClick() {
  if (counter.textContent > 0) {
    countNumbersDown();
  }
}

function plusClick() {
  countNumbersUp();
}

function toggleHidden() {
  pause.classList.toggle("hidden");
  play.classList.toggle("hidden");
}

function pauseClick() {
  clearInterval(interval);
  toggleHidden();
}

function playClick() {
  interval = setInterval(countNumbersUp, 1000);
  toggleHidden();
}

function heartClick() {
  console.log("heartClick");
}

document.addEventListener("click", (clickEvent) => {
  let clickedAreaID = clickEvent.target.id;

  if (clickedAreaID === minus.id) {
    minusClick();
  } else if (clickedAreaID === plus.id) {
    plusClick();
  } else if (clickedAreaID === pause.id) {
    pauseClick();
  } else if (clickedAreaID === play.id) {
    playClick();
  } else if (clickedAreaID === heart.id) {
    heartClick();
  }
});
