const nameInput = document.querySelector('#name-input');
const output = document.querySelector("#name-output");

nameInput.addEventListener('input', (event) => {
    output.textContent = event.currentTarget.value;
    if (output.textContent === '') {
        output.textContent = "Anonymous";
    }
  });
