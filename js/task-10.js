function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  input: document.querySelector("input"),
  buttonCreate: document.querySelector("[data-create]"),
  buttonDestroy: document.querySelector("[data-destroy]"),
  container: document.querySelector("#boxes"),
};

refs.buttonCreate.addEventListener("click", createBoxes);
refs.buttonDestroy.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  amount = refs.input.value;
  let markup = "";
  let size = 30;
  for (let i = 1; i <= amount; i++) {
    markup += `<div style="width:${size}px;height:${size}px; background:${getRandomHexColor()}"></div>`;
    size += 10;
  }

  boxes.insertAdjacentHTML("beforeend", markup);
}

function destroyBoxes() {
  boxes.innerHTML = "";
  refs.input.value = "";
}




