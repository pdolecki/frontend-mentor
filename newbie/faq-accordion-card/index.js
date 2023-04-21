const sectionElements = document.querySelectorAll(".section");
const boxElement = document.querySelector(".box");

function removeActive() {
  sectionElements.forEach((section) => section.classList.remove("active"));
}

function addActive(section) {
  removeActive();
  section.classList.add("active");
}

sectionElements.forEach((section) => {
  section.addEventListener("click", () => {
    section.classList.contains("active") ? removeActive() : addActive(section);
  });
  section.addEventListener("mouseenter", () => {
    boxElement.classList.add("active");
  });
  section.addEventListener("mouseleave", () => {
    boxElement.classList.remove("active");
  });
});
