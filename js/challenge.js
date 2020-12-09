const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");
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

function pauseClick() {

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
