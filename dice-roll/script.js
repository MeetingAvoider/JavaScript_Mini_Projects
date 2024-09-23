const btnEl = document.getElementById("btn");
const diceEl = document.getElementById("dice");
const rollHistoryEl = document.getElementById("rollHistory"); // Corrected line
let rolled = [];
function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const setDice = unicode(rollResult);
  diceEl.innerHTML = setDice;
  rolled.push(setDice);
  const result = rolled.map((value, index) => {
    return ` <li>
        Roll: ${index + 1} <span>${value}</span>
      </li>`;
  });
  rollHistoryEl.innerHTML = result;
}
function unicode(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856";
    case 2:
      return "&#9857";
    case 3:
      return "&#9858";
    case 4:
      return "&#9859";
    case 5:
      return "&#9860";
    case 6:
      return "&#9861";
    default:
      return "";
  }
}

btnEl.addEventListener("click", () => {
  diceEl.classList.add("roll-animation");
  setTimeout(() => {
    diceEl.classList.remove("roll-animation");
    rollDice();
  }, 1000);
});
