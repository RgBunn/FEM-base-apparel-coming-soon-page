const emailInputEl = document.querySelector("#email");
const submitBtn = document.querySelector("#btn-submit");
const errorIcon = document.querySelector(".error-icon");
const errorMessage = document.querySelector(".error-message");
const form = document.querySelector("form");

form.addEventListener("submit", validateEmail);
submitBtn.addEventListener("click", validateEmail);

function validateEmail(e) {
  e.preventDefault();
  const inputValue = emailInputEl.value.trim();
  if (!isEmail(inputValue)) {
    errorIcon.classList.remove("hidden");
    errorMessage.classList.remove("hidden");
    emailInputEl.parentElement.style.borderColor = "hsl(0, 93%, 68%)";
  } else {
    errorIcon.classList.add("hidden");
    errorMessage.classList.add("hidden");
    emailInputEl.parentElement.style.borderColor = "hsl(0, 36%, 70%)";
  }
}

function isEmail(inputValue) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputValue);
}
