"use strict";

document.addEventListener("DOMContentLoaded", function () {
  let scroll2 = 0;
  window.addEventListener("scroll", () => {
    const scroll = window.scrollY || window.pageYOffset;
    const header = document.querySelector("header");

    if (scroll < scroll2) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
    scroll2 = scroll;
  });

  const bars = document.querySelector(".bars");
  const navMenu = document.querySelector(".nav-links");
  const headerEl = document.querySelector(".header");
  const body = document.querySelector("body");

  bars.addEventListener("click", () => {
    bars.classList.toggle("active");
    navMenu.classList.toggle("active");
    headerEl.classList.toggle("active");
    body.classList.toggle("active");
  });
});

// https://github.com/okpairepraise/food-court.git