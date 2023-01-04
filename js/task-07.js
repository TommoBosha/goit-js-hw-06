
const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');

inputEl.addEventListener('input', fontControl);
function fontControl(e) {
    textEl.style.fontSize = `${e.target.value}px`;
}