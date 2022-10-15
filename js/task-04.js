let counterValue = 0;
let valueEL = document.querySelector('#value');

const decrementBtn = document.querySelector('button[data-action="decrement"]');
// console.log(decrementBtn.dataset.action); 

const incrementBtn = document.querySelector('button[data-action="increment"]');
// console.log(incrementBtn.dataset.action); 

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueEL.textContent = counterValue;
    // console.log(counterValue);
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueEL.textContent = counterValue;
    // console.log(counterValue);
});
