const popups = document.querySelectorAll('.popup')

document.addEventListener("click", (e) => {
  if (
    e.target.getAttribute("data-modal-selector") &&
    e.target.getAttribute("data-modal-selector") === "dialog-login"
  ) {
    document.querySelector(".login").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  if (e.target.closest(".popup__close-btn")) {
    closePopup(e.target);
  }
  if (e.target.closest(".popup") && !e.target.closest(".popup__body")) {
    closePopup(e.target);
  }
});
document.addEventListener("keydown", function (event) {
  if (event.key == "Escape") {
    if (popups.length > 0) {
        popups.forEach(el => {
            el.classList.remove('open')
        })
    }

    document.body.style.overflow = "";
  }
});

function closePopup(target) {
  target.closest(".popup").classList.remove("open");
  document.body.style.overflow = "";
}
