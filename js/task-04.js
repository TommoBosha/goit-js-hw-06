
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
