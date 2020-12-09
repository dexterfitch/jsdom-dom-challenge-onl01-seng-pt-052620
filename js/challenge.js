const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");

function countSecondsUp() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

function countSecondsDown() {
  counter.textContent = parseInt(counter.textContent) - 1;
}

function minusClick() {
  countSecondsDown();
}

function plusClick() {
  countSecondsUp();
}

function pauseClick() {
  console.log("pauseClick");
}

function heartClick() {
  console.log("heartClick");
}

document.addEventListener("click", (clickEvent) => {
  let clickedArea = clickEvent.target.id;

  if (clickedArea === minus.id) {
    minusClick();
  } else if (clickedArea === plus.id) {
    plusClick();
  } else if (clickedArea === pause.id) {
    pauseClick();
  } else if (clickedArea === heart.id) {
    heartClick();
  }
});

window.setInterval(countSecondsUp, 1000);
