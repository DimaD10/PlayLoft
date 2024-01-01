document.addEventListener("click", (e) => {
  if (e.target.closest(".password-block__btn")) {
    e.target.closest(".password-block").classList.toggle("active");

    if (e.target.closest(".password-block").classList.contains("active")) {
      e.target
        .closest(".password-block")
        .querySelector("input")
        .setAttribute("type", "text");
    } else {
      e.target
        .closest(".password-block")
        .querySelector("input")
        .setAttribute("type", "password");
    }
  }
});
