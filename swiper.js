new Swiper(".swiper", {
  spaceBetween: 10,
  initialSlide: 0,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    },
  },
});

new Swiper(".swiper-testimonials", {
  initialSlide: 0,
  //direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: -50,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
