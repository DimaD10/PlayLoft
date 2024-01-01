const sliderHero = document.querySelector(".cards-hero-slider");
const sliderCards = document.querySelector(".prod-list__slider");

const heroCards = new Swiper(".cards-hero-slider", {
  slidesPerView: 4,
  spaceBetween: 20,
  draggable: true,
  breakpoints: {
    320: {
      slidesPerView: "auto",
      spaceBetween: 15,
    },
    480: {
      spaceBetween: 20,
    },
    1282: {
      slidesPerView: 4,
    },
  },
  on: {
    slideChange: function (e) {
      if (
        !sliderHero.classList.contains("rightDecor") ||
        !sliderHero.classList.contains("leftDecor")
      ) {
        sliderHero.classList.add("rightDecor");
        sliderHero.classList.add("leftDecor");
      }
    },
    reachEnd: function (e) {
      window.setTimeout(() => {
        sliderHero.classList.remove("rightDecor");
      }, 100);
    },
    reachBeginning: function (e) {
      window.setTimeout(() => {
        sliderHero.classList.remove("leftDecor");
      }, 100);
    },
  },
});

const prodSliders = document.querySelectorAll(".prod-list__slider");

prodSliders.forEach((slider, index) => {
  new Swiper(slider, {
    spaceBetween: 20,
    slidesPerView: 4,

    navigation: {
      nextEl: `.prod-list__btn_next-${index}`,
      prevEl: `.prod-list__btn_prev-${index}`,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      667.98: {
        slidesPerView: 2,
      },
      991.98: {
        slidesPerView: 3,
      },
      1360: {
        slidesPerView: 4,
      },
    },
  });
});

const prodCard = new Swiper(".prod-preview-slider", {
  loop: true,
  spaceBetween: 0,

  navigation: {
    nextEl: ".prod-preview-slider__btn_next",
    prevEl: ".prod-preview-slider__btn_prev",
  },
});

const typeCards = new Swiper(".types__slider", {
  spaceBetween: 20,
  slidesPerView: 5,

  navigation: {
    nextEl: ".types__btn_next",
    prevEl: ".types__btn_prev",
  },
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    667.98: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991.98: {
      slidesPerView: 4,
    },
    1360: {
      slidesPerView: 5,
    },
  },
});
