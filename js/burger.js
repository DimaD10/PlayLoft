const menuBurger = document.querySelector(".header-nav");

document.addEventListener("click", (e) => {
  if (e.target.closest(".burger-btn")) {
    e.target.closest(".burger-btn").classList.toggle("active");
    menuBurger.classList.toggle("active");

    if (menuBurger.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }
});
