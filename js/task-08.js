

const formEl = document.querySelector('.login-form');

formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === "" || password.value === "") {
        return alert("Please, fill all fields.");
    }
    const dataEl = { email: email.value, password: password.value };
    event.currentTarget.reset();
    console.log(dataEl);

})
