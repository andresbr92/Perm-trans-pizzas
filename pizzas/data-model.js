const dataModel = {
  pizzas: [
    {
      id: 0,
      name: "Pizza Hut",
      ingredients: ["Cheese", "Tomato", "Chicken", "Mushrooms"],
      allergens: ["Dairy", "Eggs"],
    },
    {
      id: 1,
      name: "Pizza Pilgrims",
      ingredients: ["Cheese", "Tomato", "Green Peppers", "Pepperoni"],
      allergens: ["Dairy"],
    },
    {
      id: 2,
      name: "Caspian Pizza",
      ingredients: ["Cheese", "Tomato", "Prawns", "Tuna", "Anchovies"],
      allergens: ["Dairy", "Eggs", "Fish"],
    },
    {
      id: 3,
      name: "Pizza Hawaii",
      ingredients: ["Cheese", "Tomato", "Ham", "Pineapple"],
      allergens: ["Dairy"],
    },
    {
      id: 4,
      name: "Pizza Margherita",
      ingredients: ["Cheese", "Tomato"],
      allergens: ["Dairy"],
    },
    {
      id: 5,
      name: "Pizza Capricciosa",
      ingredients: ["Cheese", "Tomato", "Ham", "Mushrooms"],
      allergens: ["Peanuts", "Dairy"],
    },
    {
      id: 6,
      name: "Pizza Quattro Formaggi",
      ingredients: ["Cheese", "Tomato", "Mozzarella", "Parmesan"],
      allergens: ["Dairy"],
    },
    {
      id: 7,
      name: "Pizza Quattro Stagioni",
      ingredients: ["Cheese", "Tomato", "Mozzarella", "Ham"],
      allergens: ["Peanuts", "Dairy", "Eggs", "Soy", "Fish"],
    },
  ],
  allergens: [
    "Peanuts",
    "Dairy",
    "Eggs",
    "Soy",
    "Fish",
    "Shellfish",
    "Tree Nuts",
    "Wheat",
  ],
  ingredients: [
    {
      name: "Cheese",
      calories: 23,
      allergens: ["Dairy"],
    },
    {
      name: "Tomato",
      calories: 132,
      allergens: [],
    },
    {
      name: "Green Peppers",
      calories: 421,
      allergens: [],
    },
    {
      name: "Prawns",
      calories: 126,
      allergens: ["Fish"],
    },
    {
      name: "Tuna",
      calories: 111,
      allergens: ["Fish"],
    },
    {
      name: "Anchovies",
      calories: 52,
      allergens: ["Fish"],
    },
    {
      name: "Pepperoni",
      calories: 89,
      allergens: ["Dairy"],
    },
    {
      name: "Mushrooms",
      calories: 32,
      allergens: [],
    },
    {
      name: "Chicken",
      calories: 213,
      allergens: [],
    },
    {
      name: "Sausage",
      calories: 847,
      allergens: ["Dairy"],
    },
    {
      name: "Ham",
      calories: 655,
      allergens: ["Dairy"],
    },
    {
      name: "Bacon",
      calories: 123,
      allergens: [],
    },
    {
      name: "Pineapple",
      calories: 123,
      allergens: [],
    },
    {
      name: "Mozzarella",
      calories: 123,
      allergens: ["Dairy"],
    },
    {
      name: "Parmesan",
      calories: 123,
      allergens: ["Dairy"],
    },
  ],
};
module.exports = dataModel;
