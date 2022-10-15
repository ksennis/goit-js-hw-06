const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];

const ingredientsList = document.querySelector('#ingredients');

const liElements = [];

ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    li.classList.add('item'); 
    liElements.push(li);
});

ingredientsList.append(...liElements);


