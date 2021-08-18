const swiper1 = new Swiper(".slider-1", {
  autuplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  grapbCursor: true,
  effect: "fade",
  loop: true,
  navigator: {
    nextEl: ".swiper-next",
    pervEl: ".swiper-prev",
  },
});
const swiper2 = new Swiper(".slider-2", {
  grapbCursor: true,
  spaceBetween: 30,
  natigation: {
    nextEl: ".swiper-next",
    pervEl: ".swiper-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});
