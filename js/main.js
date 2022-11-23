const button = document.querySelector(".form__button");
const input = document.querySelector(".form__email");

button.addEventListener("submit", () => {
    errorMessage();
});

input.addEventListener("input", () => {
    input.checkValidity();
    input.setCustomValidity("");
});

input.addEventListener("invalid", () => {
    errorMessage();
});

let errorMessage = () => {
    if (input.value === "") {
        input.setCustomValidity("Please enter an email address");
    } else {
        input.setCustomValidity("Please provide a valid email address");
    }
};
