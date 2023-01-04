
const inputTextEl = document.querySelector('#validation-input');

inputTextEl.addEventListener('blur', (event) => {
    if (Number(inputTextEl.getAttribute('data-length')) === event.currentTarget.value.length) {
        inputTextEl.classList.add('valid');
        inputTextEl.classList.remove('invalid');
        return;
    }
    inputTextEl.classList.add('invalid');
    inputTextEl.classList.remove('valid');
});






