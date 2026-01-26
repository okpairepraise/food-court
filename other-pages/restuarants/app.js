const slider = document.getElementById("slider");

const slidesData = [
  {
    mainImg: "./images/img1.webp",
    subImg: "./images/img1-1.webp",
    title: "Quick Eats",
    subtitle: "Quick Combo Meals",
  },
  {
    mainImg: "./images/img2.webp",
    subImg: "./images/img2-2.webp",
    title: "Jollof & co",
    subtitle: "Delicious Everyday Naija Food",
  },
  {
    mainImg: "./images/img3.webp",
    subImg: "./images/img3-3.webp",
    title: "Lagos Breakfast Club",
    subtitle: "Nigerian Breakfast Staples",
  },
  {
    mainImg: "./images/img4.webp",
    subImg: "./images/img4-4.webp",
    title: "Mama's Kitchen",
    subtitle: "Mama's Special native dishes",
  },
  {
    mainImg: "./images/img5.webp",
    subImg: "./images/img5-5.webp",
    title: "red pepper",
    subtitle: "affordable delicious nigerian staples",
  },
  {
    mainImg: "./images/img6.webp",
    subImg: "./images/img6-6.webp",
    title: "good greens",
    subtitle: "fuel your day with healthy eats!",
  },
  {
    mainImg: "./images/img7.webp",
    subImg: "./images/img7-7.webp",
    title: "the cocktail club",
    subtitle: "premium cocktails & mocktails",
  },
  {
    mainImg: "./images/img8.webp",
    subImg: "./images/img1-1.webp",
    title: "quick eats",
    subtitle: "set breakfast meals",
  },
  {
    mainImg: "./images/img9.gif",
    subImg: "./images/img9-9.webp",
    title: "big plate",
    subtitle: "permium blulk meals",
  },
  {
    mainImg: "./images/img10.webp",
    subImg: "./images/img10-10.webp",
    title: "mr eats",
    subtitle: "delicious & affordable nigerian favourites ",
  },
  {
    mainImg: "./images/img11.webp",
    subImg: "./images/img11-11.webp",
    title: "pop's small chops",
    subtitle: "small chops & finger foods ",
  },
  {
    mainImg: "./images/img12.webp",
    subImg: "./images/img12-12.webp",
    title: "big kala menu",
    subtitle: "serves street favourite ",
  },
  {
    mainImg: "./images/img13.webp",
    subImg: "./images/img13-13.webp",
    title: "freshly baked",
    subtitle: "fluffy banana breads and much more ",
  },
  {
    mainImg: "./images/img14.webp",
    subImg: "./images/img14-14.webp",
    title: "recess club",
    subtitle: "fresh and asorted kids meal pack ",
  },
  {
    mainImg: "./images/img15.webp",
    subImg: "./images/img15-15.webp",
    title: "chow asian",
    subtitle: "delicious & authentic asian flavours ",
  },
  {
    mainImg: "./images/img16.webp",
    subImg: "./images/img16-16.webp",
    title: "sunny side club",
    subtitle: "good food to start your day right ",
  },
  {
    mainImg: "./images/img18.webp",
    subImg: "./images/img18-18.webp",
    title: "the night train(TNT)",
    subtitle: "delicious late night carvings",
  },
  {
    mainImg: "./images/img19.webp",
    subImg: "./images/img19-19.webp",
    title: "suya central",
    subtitle: "savour the flavor of authenthic suya ",
  },
  {
    mainImg: "./images/img20.webp",
    subImg: "./images/img20-20.webp",
    title: "wing kings",
    subtitle: "good chicken and more ",
  },
  {
    mainImg: "./images/img21.webp",
    subImg: "./images/img21-21.webp",
    title: "frankie's",
    subtitle: "gourmet burgers, hotdogs & more"
  },
  {
    mainImg: "./images/img17.webp",
    subImg: "./images/img17-17.webp",
    title: "wrap city",
    subtitle: "delicious shawarma, wraps & more ",
  },
];

slider.innerHTML = slidesData
  .map(
    (item) => `
      <div class="sliding-images">
        <div class="img">
          <img src="${item.mainImg}" alt="${item.title}" />
          </div>
          <div class="sub-cont">
            <div class="sub-img">
              <img src="${item.subImg}" class="img1" alt="${item.title}" />
            </div>
        </div>

        <div class="sliding-text">
          <div class="txt1"><p>${item.title}</p></div>
          <div class="txt2">${item.subtitle}</div>
        </div>
      </div>
    `,
  )
  .join("");
