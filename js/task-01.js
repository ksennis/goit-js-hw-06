let categories = document.querySelectorAll('li.item');
console.log('Number of categories: ', categories.length);

categories.forEach((category) => {
    console.log('');
    let categoryName = category.querySelector('h2');
    console.log('Category:', categoryName.textContent);

    let subCateegoryCount = category.querySelectorAll('li');
    console.log('Elements:', subCateegoryCount.length);
});

