let bill = document.getElementById("bill");
let tip = document.getElementById("tip");
const totalEl = document.getElementById("total");
const btnEl = document.getElementById("btn");
btnEl.addEventListener("click", () => {
  const billValue = parseFloat(bill.value);
  const tipValue = parseFloat(tip.value);
  const total = billValue + (billValue * tipValue) / 100;
  totalEl.innerText = total.toFixed(2); //it is used to set the precision
});
