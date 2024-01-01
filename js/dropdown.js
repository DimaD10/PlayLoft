const sliders = document.querySelectorAll(".slider-parent");

document.addEventListener("click", (e) => {
  if (e.target.closest(".dropdown__header")) {
    if (!e.target.closest(".dropdown").classList.contains("active")) {
      document.querySelectorAll(".dropdown").forEach((el) => {
        el.classList.remove("active");
      });
      e.target.closest(".dropdown").classList.add("active");
      hideSliders(0);
    } else {
      e.target.closest(".dropdown").classList.remove("active");
      hideSliders(1);
    }
  }
  if (e.target.closest(".dropdown__item")) {
    let parent = e.target.closest(".dropdown");
    let newItem = e.target.closest(".dropdown__item").innerHTML;
    let current = parent.querySelector(".dropdown__current");
    let select = e.target.closest(".dropdown").querySelector("select");

    current.innerHTML = newItem;
    if (select) {
      select.querySelectorAll("option").forEach((el) => {
        if (el.textContent === current.textContent) {
          el.selected = true;
        } else {
          el.selected = false;
        }
      });
    }
    if (!parent.classList.contains("choosen")) {
      parent.classList.add("choosen");
    }

    e.target.closest(".dropdown").classList.remove("active");
    hideSliders(1);
  }

  if (!e.target.closest(".dropdown")) {
    document.querySelectorAll(".dropdown").forEach((el) => {
      el.classList.remove("active");
    });
    hideSliders(1);
  }
});

function hideSliders(index) {
  if (sliders.length > 0) {
    sliders.forEach((slider) => {
      slider.style.zIndex = index === 0 ? "-1" : "";
    });
  }
}
