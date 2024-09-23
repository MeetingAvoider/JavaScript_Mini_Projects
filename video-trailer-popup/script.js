const btnEL = document.getElementById("btn");
const closeEl = document.getElementById("close");
const trailerVideoEl = document.getElementsByClassName("trailer-container")[0];
const mainEl = document.getElementsByClassName("main-container")[0];
const videoEl = document.querySelector("video");

btnEL.addEventListener("click", () => {
  trailerVideoEl.classList.remove("active");
  mainEl.classList.add("active");
});

closeEl.addEventListener("click", () => {
  trailerVideoEl.classList.add("active");
  mainEl.classList.remove("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
