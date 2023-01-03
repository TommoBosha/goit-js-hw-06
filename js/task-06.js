// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное количество введённых символов.

//     Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.

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






