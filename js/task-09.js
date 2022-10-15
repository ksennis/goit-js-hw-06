function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const btnEl = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

btnEl.addEventListener('click', () => {
    const randomColor = getRandomHexColor();
    spanColor.textContent = randomColor;

    document.body.style.backgroundColor = randomColor;
});