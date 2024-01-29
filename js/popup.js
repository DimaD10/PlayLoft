const popups = document.querySelectorAll(".popup");
const modalFilter = document.querySelector(".modal-filter");
const header = document.querySelector(".header");

document.addEventListener("click", (e) => {
  if (
    e.target.getAttribute("data-modal-selector") &&
    e.target.getAttribute("data-modal-selector") === "dialog-login"
  ) {
    document.querySelector(".login").classList.add("open");
    document.body.style.overflow = "hidden";
    if (menuBurger.classList.contains("active")) {
         menuBurger.classList.remove("active");
         document.querySelector(".burger-btn").classList.remove('active');
    }
  }
  if (
    modalFilter &&
    modalFilter.classList.contains("active") &&
    !e.target.closest(".modal-filter") &&
    !e.target.closest(".call-filter")
  ) {
    modalFilter.classList.remove("active");
  }
  if (modalFilter && e.target.closest(".call-filter")) {
    if (!modalFilter.classList.contains("active")) {
      modalFilter.classList.add("active");
      if (window.innerWidth < 767.98) {
        document.body.style.overflow = "hidden";
        header.style.zIndex = "-1";
      }
    } else {
      modalFilter.classList.remove("active");
      document.body.style.overflow = "";

      if (window.innerWidth < 767.98) {
        header.style.zIndex = "9";
      }
    }
  }
  if (e.target.closest(".modal-filter__close-btn")) {
    modalFilter.classList.remove("active");
    document.body.style.overflow = "";
    header.style.zIndex = "9";
  }
  if (e.target.closest(".modal-filter__close-content-btn")) {
    modalFilter
      .querySelector(".modal-filter__categories-sections")
      .classList.remove("closed");

    modalFilter.querySelectorAll(".modal-filter__tab").forEach((el) => {
      el.classList.remove("modal-filter__tab_current");
    });
  }
  if (
    e.target.closest(".modal-filter__categories-sections") &&
    !e.target.closest(".modal-filter__body")
  ) {
    modalFilter
      .querySelector(".modal-filter__categories-sections")
      .classList.remove("closed");

    modalFilter.querySelectorAll(".modal-filter__tab").forEach((el) => {
      el.classList.remove("modal-filter__tab_current");
    });
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
      popups.forEach((el) => {
        el.classList.remove("open");
      });
    }
    if (modalFilter) {
      modalFilter.classList.remove("active");
    }

    document.body.style.overflow = "";
  }
});

function closePopup(target) {
  target.closest(".popup").classList.remove("open");
  document.body.style.overflow = "";
}
