function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

const changeColorEl = document.querySelector('.change-color');
const colorEl = document.querySelector('.color');

changeColorEl.addEventListener('click', changeBgColorRandom);

function changeBgColorRandom() {
  document.body.style.background = `${getRandomHexColor()}`;
  colorEl.textContent = getRandomHexColor();

}