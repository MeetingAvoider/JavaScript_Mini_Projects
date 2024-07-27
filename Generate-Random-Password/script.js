const inputField = document.getElementById("randomPass");
const btn = document.getElementById("btn");
console.log(inputField);
console.log(btn);

btn.addEventListener("click", () => {
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const number = "0123456789";
  const symbol = "!@#$%^&*()_+";
  const allChars = lowerCase + upperCase + number + symbol;
  let passowrd = "";
  passwordLength = 12;
  passowrd += upperCase[Math.floor(Math.random() * upperCase.length)];
  passowrd += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  passowrd += number[Math.floor(Math.random() * number.length)];
  passowrd += symbol[Math.floor(Math.random() * symbol.length)];

  while (passowrd.length < passwordLength) {
    passowrd += allChars[Math.floor(Math.random() * allChars.length)];
  }
  inputField.value = passowrd;
});
