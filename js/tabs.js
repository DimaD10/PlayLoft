const stepList = document.querySelectorAll(".modal-filter__tab");
const contentList = document.querySelectorAll(
  ".modal-filter__category-content"
);

window.addEventListener("load", (e) => {
  contentList.forEach((el) => {
    el.classList.remove("modal-filter__category-content_current");
  });
  contentList[0].classList.add("modal-filter__category-content_current");
});
window.addEventListener("click", (e) => {
  if (
    !e.target.closest(".modal-filter__tab_current") &&
    e.target.closest(".modal-filter__tab")
  ) {
    modalFilter
      .querySelector(".modal-filter__categories-sections")
      .classList.remove("closed");
    stepList.forEach((el) => {
      el.classList.remove("modal-filter__tab_current");
    });
    e.target
      .closest(".modal-filter__tab")
      .classList.add("modal-filter__tab_current");

    var points = [...document.querySelectorAll(".modal-filter__tab")];
    var elPos = points.indexOf(e.target.closest(".modal-filter__tab"));
    contentList.forEach((el) => {
      el.classList.remove("modal-filter__category-content_current");
    });
    contentList[elPos].classList.add("modal-filter__category-content_current");
  }
});

window.addEventListener("resize", () => {
  if (!stepList || !contentList) return;
  const hasClass = Array.from(stepList).some((element) =>
    element.classList.contains("modal-filter__tab_current")
  );
  if (window.innerWidth > 767.98) {
    document.body.style.overflow = "";
  } else {
    if (modalFilter.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    }
  }
  if (window.innerWidth > 480 && !hasClass) {
    contentList.forEach((el) => {
      el.classList.remove("modal-filter__category-content_current");
    });
    stepList.forEach((el) => {
      el.classList.remove("modal-filter__tab_current");
    });
    contentList[0].classList.add("modal-filter__category-content_current");
    stepList[0].classList.add("modal-filter__tab_current");
    modalFilter
      .querySelector(".modal-filter__categories-sections")
      .classList.remove("closed");
  }
});
