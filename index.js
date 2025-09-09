const randomColorBtn = document.querySelector(".color-button");
const cardFront = document.querySelectorAll(".card-front");
const cardBack = document.querySelectorAll(".card-back");

const gradients = [
  "--card-gradient-pink",
  "--card-gradient-orange",
  "--card-gradient-green",
  "--card-gradient-yellow",
];

randomColorBtn.addEventListener("click", () => {
  cardFront.forEach((cardFront) => {
    const randomGradientColor =
      gradients[Math.floor(Math.random() * gradients.length)];

    const gradientValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue(randomGradientColor);

    cardFront.style.background = gradientValue;
  });

  cardBack.forEach((cardBack) => {
    const randomGradientColor =
      gradients[Math.floor(Math.random() * gradients.length)];

    const gradientValue = getComputedStyle(
      document.documentElement
    ).getPropertyValue(randomGradientColor);

    cardBack.style.background = gradientValue;
  });
});
