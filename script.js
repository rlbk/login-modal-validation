const username = document.querySelector(".name");
const password = document.querySelector(".password");
const btn = document.querySelector(".btn");

const mainContent = document.querySelector(".main");
const sucessContent = document.querySelector(".sucess-page");
const sucessMessage = document.querySelector(".message");
const signup = document.querySelector(".sign-up");
const backLink = document.querySelector(".back");

const errName = document.querySelector(".invalid-name");
const errPassword = document.querySelector(".invalid-pass");

let isNameValid = true;
let isPwdValid = true;

//function for validating username
function checkUsername(arg) {
  if (arg === "user") return true;
  else return false;
}

//function for validating username
function checkPassword(arg) {
  if (arg === "password") return true;
  else return false;
}

//function for showing error for incorrect username
function nameErrMessage() {
  username.classList.add("error");
  errName.style.display = "block";
  isNameValid = false;
}

//function for showing error for incorrect password
function nameValid() {
  username.classList.remove("error");
  errName.style.display = "none";
  isNameValid = true;
}

// function for removing error if correct username
function passwordErMessage() {
  password.classList.add("error");
  errPassword.style.display = "block";
  isPwdValid = false;
}

//function for removing error if correct password
function pwdValid() {
  password.classList.remove("error");
  errPassword.style.display = "none";
  isPwdValid = true;
}

btn.addEventListener("click", () => {
  //checking username and password
  let correctUser = checkUsername(username.value);
  let correctPassword = checkPassword(password.value);

  //condition checking to print error message
  !correctUser && nameErrMessage();
  !correctPassword && passwordErMessage();

  //condition checking to remove error message
  correctUser && !isNameValid && nameValid();
  correctPassword && !isPwdValid && pwdValid();

  //login success action
  if (correctUser && correctPassword) {
    mainContent.style.display = "none";
    sucessContent.style.display = "block";
    sucessMessage.innerText = "Sucessfully Login...!";
    username.value = "";
    password.value = "";
  }
});

//signup action
signup.addEventListener("click", function () {
  mainContent.style.display = "none";
  sucessContent.style.display = "block";
  sucessMessage.innerText = "Sign up form will  appear here";
});

//back action
backLink.addEventListener("click", function () {
  mainContent.style.display = "block";
  sucessContent.style.display = "none";
  sucessMessage.innerText = "";
});
