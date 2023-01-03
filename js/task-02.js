const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >.Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все < li > за одну операцию в список ul#ingredients.

const ingredientsEl = document.querySelector("#ingredients");

console.log(ingredientsEl);
console.log(ingredients);

const listRef = ingredients.map((ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");

  return elementRef;
});

ingredientsEl.append(...listRef);