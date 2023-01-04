const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsEl = document.querySelector("#ingredients");


const listRef = ingredients.map((ingredient) => {
  const elementRef = document.createElement("li");
  elementRef.textContent = ingredient;
  elementRef.classList.add("item");

  return elementRef;
});

ingredientsEl.append(...listRef);