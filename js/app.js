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

  const observer = new IntersectionObserver(obsFunction, { threshold: 0.1 });
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

  const slider = document.getElementById("slider");

  const mappedCards = [
    {
      mainImg: "./images/quick-eats.webp",
      title: "Quick Eats - BreaKfast",
      subtitle: "Set Breakfast Meals",
    },
    {
      mainImg: "./images/Beaakfast-club.webp",
      title: "Lagos Breakfast Club",
      subtitle: "Nigerian Breakfast Staples",
    },
    {
      mainImg: "./images/quick-combo.webp",
      title: "Quick Eats",
      subtitle: "Quick Combo Meals",
    },
    {
      mainImg: "./images/jollof.webp",
      title: "Jollof & Co",
      subtitle: "Delicious Everyday Naija Foods",
    },
    {
      mainImg: "./images/mama-kitchen.webp",
      title: "Mama's Kitchen",
      subtitle: "Mama's Famous Native Dish",
    },
    {
      mainImg: "./images/red-pepper.webp",
      title: "Red Pepper",
      subtitle: "Afordable Delicious Nigerian Staples",
    },
    {
      mainImg: "./images/green-food.webp",
      title: "Good Greens",
      subtitle: "Fuel Your Day With Healthy Eats",
    },
    {
      mainImg: "./images/fresh-press.webp",
      title: "Fresh press",
      subtitle: "100% Natural, Freshhly Pressed Daily",
    },
    {
      mainImg: "./images/quick-eats.webp",
      title: "Quick Eats - BreaKfast",
      subtitle: "Quick Eats - BreaKfast",
    },
    {
      mainImg: "./images/Beaakfast-club.webp",
      title: "Lagos Breakfast Club",
      subtitle: "Nigerian Breakfast Staples",
    },
    {
      mainImg: "./images/quick-eats.webp",
      title: "Quick Eats - BreaKfast",
      subtitle: "Set Breakfast Meals",
    },
    {
      mainImg: "./images/Beaakfast-club.webp",
      title: "Lagos Breakfast Club",
      subtitle: "Nigerian Breakfast Staples",
    },
    {
      mainImg: "./images/quick-combo.webp",
      title: "Quick Eats",
      subtitle: "Quick Combo Meals",
    },
    {
      mainImg: "./images/jollof.webp",
      title: "Jollof & Co",
      subtitle: "Delicious Everyday Naija Foods",
    },
    {
      mainImg: "./images/mama-kitchen.webp",
      title: "Mama's Kitchen",
      subtitle: "Mama's Famous Native Dish",
    },
    {
      mainImg: "./images/red-pepper.webp",
      title: "Red Pepper",
      subtitle: "Afordable Delicious Nigerian Staples",
    },
    {
      mainImg: "./images/green-food.webp",
      title: "Good Greens",
      subtitle: "Fuel Your Day With Healthy Eats",
    },
    {
      mainImg: "./images/fresh-press.webp",
      title: "Fresh press",
      subtitle: "100% Natural, Freshhly Pressed Daily",
    },
    {
      mainImg: "./images/quick-eats.webp",
      title: "Quick Eats - BreaKfast",
      subtitle: "Quick Eats - BreaKfast",
    },
    {
      mainImg: "./images/Beaakfast-club.webp",
      title: "Lagos Breakfast Club",
      subtitle: "Nigerian Breakfast Staples",
    },
  ];

  slider.innerHTML = mappedCards
    .map(
      (item) => `


          <div class="card">
            <img src="${item.mainImg}" alt="${item.title}" />
             <p id="text1">${item.title}</p>
             <p id="text">${item.subtitle}</p>
        </div>
    `,
    )
    .join("");
});
