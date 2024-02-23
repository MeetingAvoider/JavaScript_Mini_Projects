const form_id = document.getElementById("form");
const userName = document.getElementById("username");
const phoneNumber = document.getElementById("phoneNumber");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
//add event
form_id.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("hello");
  validate();
});
//validate function
const validate = () => {
  const userNameVal = username.value.trim();
  const phoneNumberVal = phoneNumber.value.trim();
  const emailVal = email.value.trim();
  const passwordVal = password.value.trim();
  const confirmPasswordVal = confirmPassword.value.trim();

  //validate username
  if (userNameVal === "") {
    setErrormsg(username, "username cannot be blank");
  } else if (userNameVal.length <= 2)
    setErrormsg(username, "Username cannot be less than 2");
  else {
    setSuccessmsg(username);
  }


  //validate email
  if(!)

};
