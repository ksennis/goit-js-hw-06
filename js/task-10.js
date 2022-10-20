class Tabs {
    constructor({numberEl, btnCreate, btnDestroy, boxes}) {
        this.numberEl = numberEl;
        this.btnCreate = btnCreate;
        this.btnDestroy = btnDestroy;
        this.boxes = boxes;
    }

    init() {
        const destroyBoxes = () => {
            this.boxes.innerHTML = "";
        }
        
        const createBoxes = (amount) => {
            for (let i = 0; i < amount; i++) {
                const randomColor = getRandomHexColor();
                const box = `<div style="width: ${30+10*i}px; height: ${30+10*i}px; background: ${randomColor};" />`
                this.boxes.insertAdjacentHTML("beforeend", box);
            }
        }

        this.btnDestroy.addEventListener("click", () => {
            destroyBoxes()
        });
        
        this.btnCreate.addEventListener("click", () => {
            destroyBoxes()
            createBoxes(this.numberEl.value);
        });
        
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, 0)}`;
        }
    }
}
const refs = {
    numberEl: document.querySelector('#controls input'),
    btnCreate: document.querySelector('#controls button[data-create]'),
    btnDestroy: document.querySelector('#controls button[data-destroy]'),
    boxes: document.querySelector('#boxes'),
}

new Tabs(refs).init();