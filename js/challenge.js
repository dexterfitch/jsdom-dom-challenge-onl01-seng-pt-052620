const counter = document.getElementById("counter");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const pause = document.getElementById("pause");
const heart = document.getElementById("heart");
const likes = document.querySelector(".likes");
const commentBox = document.getElementById("comment-input");
const submitButton = document.getElementById("submit");

function countSeconds() {
  counter.textContent = parseInt(counter.textContent) + 1;
}

function minusClick() {
  console.log("minusClick");
}

function plusClick() {
  console.log("plusClick");
}

document.addEventListener("click", (clickEvent) => {
  let clickedArea = clickEvent.target.id;
  if (clickedArea === minus.id) {
    minusClick();
  } else if (clickedArea === plus.id) {
    plusClick();
  } else if (clickedArea === pause.id) {
    
  } else if (clickedArea === heart.id) {
    
  }
});

window.setInterval(countSeconds, 1000);
