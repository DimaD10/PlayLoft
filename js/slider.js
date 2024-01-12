const sliderHero = document.querySelector(".cards-hero-slider");
const sliderCards = document.querySelector(".prod-list__slider");
let prodIndex = 0;

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
      slidesPerView: "auto",
    },
    1282: {
      slidesPerView: 4,
    },
  },
  on: {
    resize: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    sliderMove: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    slideChange: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    reachEnd: function (e) {
      sliderHero.classList.remove("rightDecor");
    },
  },
});
heroCards.snapGrid[heroCards.snapGrid.length - 1] =
  heroCards.slidesGrid[heroCards.slidesGrid.length - 1];

const prodSliders = document.querySelectorAll(".prod-list__slider");

prodSliders.forEach((slider) => {
  const swiperInstance = new Swiper(slider, {
    spaceBetween: 20,
    slidesPerView: 4,

    navigation: {
      nextEl: `.prod-list__btn_next-${prodIndex}`,
      prevEl: `.prod-list__btn_prev-${prodIndex}`,
    },

    breakpoints: {
      320: {
        slidesPerView: "auto",
      },
      1360: {
        slidesPerView: 4,
      },
    },
    on: {
      init: function (el) {
        el.snapGrid[el.snapGrid.length - 1] =
          el.slidesGrid[el.slidesGrid.length - 1];
      },
      resize: function () {
        if (!this.isEnd) {
          this.el.classList.add("rightDecor");
        }
      },
      sliderMove: function () {
        if (!this.isEnd) {
          this.el.classList.add("rightDecor");
        }
      },
      slideChange: function () {
        if (!this.isEnd) {
          this.el.classList.add("rightDecor");
        }
      },
      reachEnd: function () {
        this.el.classList.remove("rightDecor");
      },
    },
  });

  prodIndex + 1;
});

const prodCard = new Swiper(".prod-preview-slider", {
  loop: true,
  spaceBetween: 0,
  grabCursor: false,
  simulateTouch: false,

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
      slidesPerView: 2.1,
      spaceBetween: 10,
    },
    480: {
      slidesPerView: 2.4,
      spaceBetween: 10,
    },
    667.98: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    991.98: {
      slidesPerView: 4.2,
    },
    1360: {
      slidesPerView: 5,
    },
  },
  on: {
    init: function (el) {
      el.snapGrid[el.snapGrid.length - 1] =
        el.slidesGrid[el.slidesGrid.length - 1];
    },
    resize: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    sliderMove: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    slideChange: function () {
      if (!this.isEnd) {
        this.el.classList.add("rightDecor");
      }
    },
    reachEnd: function () {
      this.el.classList.remove("rightDecor");
    },
  },
});


const photos = new Swiper(".card-events__slider-list", {
  spaceBetween: 20,
  slidesPerView: 2,

  navigation: {
    nextEl: ".photos__btn_next",
    prevEl: ".photos__btn_prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 3,
    },
    991: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 5,
    },
  },
});
