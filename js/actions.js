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

document.addEventListener("change", (e) => {
  if (e.target.closest(".y-or-n")) {
    if (e.target.classList.contains("y-or-n__each")) {
      let checked = e.target.checked;

      e.target.closest(".y-or-n").querySelector(".y-or-n__y").checked = checked;
      e.target.closest(".y-or-n").querySelector(".y-or-n__n").checked = checked;
    }
    if (
      e.target.classList.contains("y-or-n__n") ||
      e.target.classList.contains("y-or-n__y")
    ) {
      if (
        e.target.closest(".y-or-n").querySelector(".y-or-n__y").checked &&
        e.target.closest(".y-or-n").querySelector(".y-or-n__n").checked
      ) {
        e.target
          .closest(".y-or-n")
          .querySelector(".y-or-n__each").checked = true;
      } else {
        e.target
          .closest(".y-or-n")
          .querySelector(".y-or-n__each").checked = false;
      }
    }
  }
});
