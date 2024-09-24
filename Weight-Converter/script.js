const poundsEl = document.getElementById("pounds");
const resultEl = document.getElementById("result");
poundsEl.addEventListener("input", () => {
  const pounds = parseFloat(poundsEl.value);
  if (!isNaN(pounds)) {
    const final = pounds * 0.45;
    resultEl.innerHTML = final.toFixed(2);
  } else {
    resultEl.innerHTML = "Invalid input";
  }
});
