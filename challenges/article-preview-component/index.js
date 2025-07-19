const shareButton = document.getElementsByClassName("share")[0];
const ctaSection = document.getElementsByClassName("cta")[0];

let modalOpened = false;

shareButton.addEventListener("click", () => {
  ctaSection.style.display = modalOpened ? "none" : "flex";
  modalOpened = !modalOpened;
});
