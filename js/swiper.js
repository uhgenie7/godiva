let swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable : true
  },
  keyboard: true,
  touchRatio: 0,
  slidesPerView: 1,
  spaceBetween: 10,
  breakpointsInverse: true,
});