function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorEl.addEventListener('click', changeBgColorRandom);

function changeBgColorRandom() {
  document.body.style.background = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();

}