const dataModel = require("./data-model.js");

const hasAllergens = (allergens, pizza) => {
  return allergens.every((allergen) => pizza.allergens.includes(allergen));
};
const hasFoodType = (foodType, pizza) => {
  return foodType.every((type) => pizza.ingredients.includes(type));
};
const removeIngredient = (ingredient, pizza) => {
  const newPizza = { ...pizza };
  ingredient.forEach((ing) => {
    newPizza.ingredients = newPizza.ingredients.filter(
      (ingredientPizza) => ingredientPizza !== ing
    );
  });
  return newPizza;
};
const removeFoodType = (foodType, pizza) => {
  const newPizza = { ...pizza };
  newPizza.ingredients = newPizza.ingredients.filter(
    (ingredientPizza) => ingredientPizza !== foodType
  );
  return newPizza;
};
const dobleIngredients = (ingredient, pizza) => {
  const newPizza = { ...pizza };
  newPizza.ingredients.push(ingredient);
  return newPizza;
};

const getCalories = (pizza) => {
  return pizza.ingredients.reduce((acc, ingredient) => {
    const foo = dataModel.ingredients.find(
      (ingredientPizza) => ingredient === ingredientPizza.name
    );
    if (foo) {
      return acc + foo.calories;
    }
  }, 0);
};
// console.log(hasAllergens(["Eggs"], dataModel.pizzas[0]));
// console.log(hasFoodType(["Ham"], dataModel.pizzas[0]));
// console.log(removeIngredient(["Cheese", "Ham", "Mushrooms"], dataModel.pizzas[0]));
// console.log(removeFoodType("Cheese", dataModel.pizzas[0]));
// console.log(dobleIngredients("Cheese", dataModel.pizzas[0]));
// console.log(getCalories(dataModel.pizzas[0]));
