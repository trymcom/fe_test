"use strict";

// .top__image slick
$(".top__list").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<div class="top__button-prev"></div>',
  nextArrow: '<div class="top__button-next"></div>',
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  centerMode: true,
  centerPadding: "10%",
});

//スマホ用：スライダーをタッチしても止めずにスライドをさせたい場合
$(".top__list").on(
  "touchmove",
  function (event, slick, currentSlide, nextSlide) {
    $(".top__list").slick("slickPlay");
  }
);

// swiper
const swiper = new Swiper(".swiper", {
  spaceBetween: 28,
  slidesPerView: 3,
  breakpoints: {
    // 768px以上の場合
    768: {
      slidesPerView: 6,
    },
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
