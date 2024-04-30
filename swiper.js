new Swiper('.swiper', {
  spaceBetween: 10,
  initialSlide: 0,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1.5,
    }
  }
});
