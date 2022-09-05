"use strict";

// .top__swiper
const top_swiper = new Swiper(".top__swiper", {
  loop: true,
  speed: 1000,
  autoplay: {
    speed: 350,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  centeredSlides: true,
  breakpoints: {
    751: {
      slidesPerView: 1,
      spaceBetween: 80,
    },
  },
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// .recentry__swiper
const swiper = new Swiper(".recentry__swiper", {
  spaceBetween: 28,
  slidesPerView: 3,
  breakpoints: {
    751: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//スクロールイベント
window.onscroll = function (e) {
  const scroll = window.pageYOffset;
  if (scroll >= 300) {
    document.getElementById("page-top").classList.add("open");
  } else {
    document.getElementById("page-top").classList.remove("open");
  }
};

// ハンバーガー
$(function () {
  $(".header__hamburger").on("click", function () {
    $(".header__list , .hamburger__line").toggleClass("open");
  });
  $(".header__list a").on("click", function () {
    $(".header__list, .hamburger__line").removeClass("open");
  });
});

// スライド
$(".top__slider").slick({
  autoplay: true,
  autoplaySpeed: 3000,
  speed: 1000,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  pauseOnFocus: false,
  pauseOnHover: false,
  pauseOnDotsHover: false,
});
