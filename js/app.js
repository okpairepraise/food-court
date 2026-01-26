"use script";

document.addEventListener("DOMContentLoaded", function () {
  const sliderContainer = document.querySelector(".slider-container");
  const slides = document.querySelectorAll(".slide");
  const prevBtn = document.querySelector(".prev-btn");
  const nextBtn = document.querySelector(".next-btn");

  let slideIndex = 0;
  const totalSlides = slides.length;
  let heroInterval;

  function updateHeroSlider() {
    sliderContainer.style.transform = `translateX(-${slideIndex * 100}%)`;
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    updateHeroSlider();
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + totalSlides) % totalSlides;
    updateHeroSlider();
  }

  nextBtn.addEventListener("click", nextSlide);
  prevBtn.addEventListener("click", prevSlide);

  heroInterval = setInterval(nextSlide, 5000);

  const productCards = document.querySelector(".product-cards");
  const cards = document.querySelectorAll(".prod-card");
  const productDots = document.querySelectorAll(".product-dots .dot");

  let productIndex = 0;
  const totalCards = cards.length;
  const visibleCards = 4;
  const cardWidth = cards[0].offsetWidth + 34;
  let productInterval;
  let product_slide = true;

  function updateslider() {
    if (!product_slide) return;
    productCards.style.transform = `translateX(-${productIndex * cardWidth}px)`;
    updateDots();
  }

  function updateDots() {
    productDots.forEach((dot, i) => {
      dot.classList.toggle("active", i === productIndex);
    });
  }

  function nextProduct() {
    if (!product_slide) return;

    if (productIndex < totalCards - visibleCards) {
      productIndex++;
    } else {
      productIndex = 0;
    }
    updateslider();
  }

  productDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (!product_slide) return;
      productIndex = index;
      updateslider();
    });
  });

  function startProductSlider() {
    productInterval = setInterval(nextProduct, 5000);
  }

  function stopProductSlider() {
    clearInterval(productInterval);
  }

  function mediaProductSlider() {
    if (window.innerWidth <= 500) {
      product_slide = false;
      stopProductSlider();

      productCards.style.transform = "translateX(0)";
    } else {
      if (!product_slide) {
        product_slide = true;
        startProductSlider();
      }
    }
  }

  startProductSlider();
  mediaProductSlider();
  window.addEventListener("resize", mediaProductSlider);

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

  const items = document.querySelectorAll("#style");

  function obsFunction(entries) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("active", entry.isIntersecting);

      if (entry.isIntersecting) {
        observer.unobserve(entry.target);
      }
    });
  }

  const observer = new IntersectionObserver(obsFunction, { threshold: 0.10 });
  items.forEach(function (item) {
    observer.observe(item);
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
