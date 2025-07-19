const survey = document.querySelector(".survey");
const summary = document.querySelector(".summary");

const radioLabels = document.querySelectorAll("label");
const radioButtons = document.querySelectorAll("input[type='radio']");
const surveyForm = document.querySelector(".survey__form");

const submittedRating = document.querySelector("#submittedRating");

function getSelectedRating() {
  let selectedValue = null;
  radioButtons.forEach((btn) => {
    if (btn.checked) selectedValue = btn.value;
  });
  return selectedValue;
}

radioButtons.forEach((radioButton) => {
  radioButton.addEventListener("click", () => {
    const label = document.querySelector(`label[for="${radioButton.id}"]`);
    if (radioButton.checked) {
      radioLabels.forEach((label) => label.classList.remove("selected"));
      label.classList.add("selected");
    } else label.classList.remove("selected");
  });
});

surveyForm.addEventListener("submit", (e) => {
  const selectedRating = getSelectedRating();

  if (!selectedRating) return;
  e.preventDefault();

  survey.style.display = "none";
  summary.style.display = "flex";
  submittedRating.textContent = selectedRating;
});
