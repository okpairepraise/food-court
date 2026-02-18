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

  const slider = document.getElementById("slider");

  const mappedCards = [
    {
      mainImg: "./images/person1.webp",
      title: "janet arisah",
      subtitle: "engineering manager",
    },
    {
      mainImg: "./images/person2.webp",
      title: "Valantine okoli",
      subtitle: "Assistant manager",
    },
    {
      mainImg: "./images/person3.webp",
      title: "philip osilama",
      subtitle: "senior asset & facility manager",
    },
    {
      mainImg: "./images/person4.webp",
      title: "emmanuel adebayo",
      subtitle: "HR & admin manager",
    },
    {
      mainImg: "./images/person6.webp",
      title: "moyosore agibode",
      subtitle: "data team lead manager",
    },
    {
      mainImg: "./images/person5.webp",
      title: "uche ajodo",
      subtitle: "marketing operations manager",
    },
    {
      mainImg: "./images/img8.webp",
      title: "precious nnodim<",
      subtitle: "senior accountant",
    },
    {
      mainImg: "./images/person1.webp",
      title: "janet arisah",
      subtitle: "engineering manager",
    },
    {
      mainImg: "./images/person2.webp",
      title: "Valantine okoli",
      subtitle: "Assistant manager",
    },
    {
      mainImg: "./images/person3.webp",
      title: "philip osilama",
      subtitle: "senior asset & facility manager",
    },
  ];

  slider.innerHTML = mappedCards
    .map(
      (item) => `

       <div class="slide1">
         <div class="slide-img">
            <img src="${item.mainImg}" alt="${item.title}" />
         </div>
         <div class="slide-text">
            <h3>${item.title}</h3>
            <p>${item.subtitle}</p>
          </div>
        </div>
    `,
    )
    .join("");
});
