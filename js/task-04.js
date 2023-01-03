// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

const currentValue = document.querySelector('#value');
const decrementButton = document.querySelector('[data-action = "decrement"]');
const incrementButton = document.querySelector('[data-action = "increment"]');

let counterValue = 0;

const decrement = () => {
    counterValue -= 1;
    return (currentValue.textContent = counterValue);
};

const increment = () => {
    counterValue += 1;
    return (currentValue.textContent = counterValue);
};

decrementButton.addEventListener('click', decrement);
incrementButton.addEventListener('click', increment);
