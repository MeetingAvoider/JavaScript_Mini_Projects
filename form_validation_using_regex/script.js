function validation(event) {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let confirm_password = document.getElementById("confirm_password").value;
  let email = document.getElementById("email").value;
  let mobile_number = document.getElementById("mobile_number").value;
  event.preventDefault();
  const userCheck = /^[A-Za-z._]{3,30}$/;
  const passCheck = /^(?=.*[0-9])(?=.*[!@#$^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
  const emailCheck = /^[a-zA-Z_]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/;
  const mobileCheck = /^[789]{1}[0-9]{9}$/;
  if (userCheck.test(username)) {
    document.getElementById("errorUsername").innerHTML = " ";
  } else {
    document.getElementById("errorUsername").innerHTML =
      "**username is invalid";
    return false;
  }

  if (passCheck.test(password)) {
    document.getElementById("errorPassword").innerHTML = " ";
  } else {
    document.getElementById("errorPassword").innerHTML =
      "**password is invalid";
    return false;
  }

  if (password === confirm_password) {
    document.getElementById("errorConfirmPassword").innerHTML = " ";
  } else {
    document.getElementById("errorConfirmPassword").innerHTML =
      "**passwords do not match";
    return false;
  }


  if (emailCheck.test(email)) {
    document.getElementById("errorEmail").innerHTML = " ";
  } else {
    document.getElementById("errorEmail").innerHTML = "**email is invalid";
    return false;
  }
  if (mobileCheck.test(mobile_number)) {
    document.getElementById("errorNumber").innerHTML = " ";
  } else {
    document.getElementById("errorNumber").innerHTML =
      "**mobile number is invalid";
    return false;
  }
  return true;
}
