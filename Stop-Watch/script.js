const resetBtn = document.getElementById("reset");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const display_txt = document.getElementById("display-txt");
let timer;
let count = 0;
//Event Listener Function
function listener() {
  //this is funtion statement
  setInterval(() => {
    count += 1;
    display_txt.innerText = count;
  }, 100);
}
let setId;
startBtn.addEventListener("click", () => {
  setId = setInterval(() => {
    count += 1;
    display_txt.innerText = count;
  }, 100);
});

stopBtn.addEventListener("click", () => {
  clearInterval(setId);
});

resetBtn.addEventListener("click", () => {
  clearInterval(setId);

  count = 0;
  display_txt.innerText = count;
});

// stopBtn.removeEventListener("click",()=>.)
