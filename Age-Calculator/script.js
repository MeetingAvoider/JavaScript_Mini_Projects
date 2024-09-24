const btnEl = document.getElementById("btn");
const resultEl = document.getElementById("result");
const userDOBEl = document.getElementById("user-dob");

btnEl.addEventListener("click", () => {
  const dob = userDOBEl.value;
  let age;
  if (dob === "") {
    alert("Please enter your dob");
  } else {
    let currentYear = new Date();
    let userAge = new Date(dob);
    age = currentYear.getFullYear() - userAge.getFullYear();
    const month = currentYear.getMonth() - userAge.getMonth();
    if (
      month < 0 ||
      (month === 0 && currentYear.getDate() < userAge.getDate())
    ) {
      age--;
    }
  }
  resultEl.innerHTML = `You age is ${age}`;
  resultEl.classList.remove("active");
});
