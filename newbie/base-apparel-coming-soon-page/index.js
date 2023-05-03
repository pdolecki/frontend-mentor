const inputContainer = document.querySelector(".content__form");
const inputElement = document.querySelector('input[type="email"]');

inputElement.addEventListener("invalid", (e) => {
  e.preventDefault();
  console.log("dupa");
  inputContainer.classList.add("error");
});
