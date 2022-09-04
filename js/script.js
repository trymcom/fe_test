"use strict";

// .top__swiper
const swiper1 = new Swiper(".top__swiper", {
  loop: true,
  speed: 1000,
  slidesPerView: 1,
  spaceBetween: 80,
  breakpoints: {
    768: {
      slidesPerView: 1,
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
    768: {
      slidesPerView: 6,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
