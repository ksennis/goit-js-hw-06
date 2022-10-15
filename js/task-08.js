const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailValue = event.currentTarget.elements.email.value;
    const passwordValue = event.currentTarget.elements.password.value;

    if (emailValue === '' || passwordValue === '') {
        alert('Bсі поля повинні бути заповнені!');
        return;
    }

    const userData = {
        email: emailValue,
        password: passwordValue
    }

    event.currentTarget.reset();
    console.log(userData);
});
