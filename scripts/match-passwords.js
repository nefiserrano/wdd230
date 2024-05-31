const password = document.querySelector("#password");
const password2 = document.querySelector("#passwordConfirmed");
const message = document.querySelector("#feedback");

password2.addEventListener('focusout', controlar)

function controlar() {
    if (password.value !== password2.value) {
        password.value = "";
        password2.value = "";
        password.focus();
        message.textContent = "Passwords do not match. Try again."
    } else {
        message.textContent = "";
    }
}