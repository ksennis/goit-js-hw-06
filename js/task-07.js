let fontGradiation = document.querySelector('#font-size-control');
let textSpan = document.querySelector('#text');

textSpan.style.fontSize = `${fontGradiation.value}px`;

fontGradiation.addEventListener('input', (event) => {
    textSpan.style.fontSize = `${event.currentTarget.valueAsNumber}px`;
});

  
