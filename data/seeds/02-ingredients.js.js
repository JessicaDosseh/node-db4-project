
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert(
        [{
          "id": 1,
          "ingredient_name": "Potatoes - Mini Red",
          "quantity": 72.81,
          "measurement": "in"
        }, {
          "id": 2,
          "ingredient_name": "Pasta - Angel Hair",
          "quantity": 44.78,
          "measurement": "venenatis"
        }, {
          "id": 3,
          "ingredient_name": "Lemon Pepper",
          "quantity": 22.66,
          "measurement": "montes"
        }, {
          "id": 4,
          "ingredient_name": "Pork Backs - Boneless",
          "quantity": 11.95,
          "measurement": "nec"
        }, {
          "id": 5,
          "ingredient_name": "Corn Meal",
          "quantity": 34.74,
          "measurement": "massa"
        }, {
          "id": 6,
          "ingredient_name": "Salmon With BBQ",
          "quantity": 43.98,
          "measurement": "in"
        }, {
          "id": 7,
          "ingredient_name": "Chocolate",
          "quantity": 15.75,
          "measurement": "diam"
        }, {
          "id": 8,
          "ingredient_name": "Five Alive Citrus",
          "quantity": 43.79,
          "measurement": "sapien"
        }, {
          "id": 9,
          "ingredient_name": "Salmon",
          "quantity": 60.89,
          "measurement": "et"
        }, {
          "id": 10,
          "ingredient_name": "Venison - Ground",
          "quantity": 66.36,
          "measurement": "integer"
        }, {
          "id": 11,
          "ingredient_name": "Bagel",
          "quantity": 75.33,
          "measurement": "auctor"
        }, {
          "id": 12,
          "ingredient_name": "Bread Base",
          "quantity": 87.79,
          "measurement": "eros"
        }, {
          "id": 13,
          "ingredient_name": "Vanilla Extract",
          "quantity": 32.78,
          "measurement": "ut"
        }, {
          "id": 14,
          "ingredient_name": "Wine - Soave Folonari",
          "quantity": 88.65,
          "measurement": "non"
        }, {
          "id": 15,
          "ingredient_name": "Dill Weed - Fresh",
          "quantity": 19.57,
          "measurement": "lacinia"
        }, {
          "id": 16,
          "ingredient_name": "V8 Pet",
          "quantity": 31.04,
          "measurement": "sed"
        }, {
          "id": 17,
          "ingredient_name": "Rum",
          "quantity": 26.39,
          "measurement": "suspendisse"
        }, {
          "id": 18,
          "ingredient_name": "Cookie Dough",
          "quantity": 1.02,
          "measurement": "diam"
        }, {
          "id": 19,
          "ingredient_name": "Avocado",
          "quantity": 92.23,
          "measurement": "in"
        }, {
          "id": 20,
          "ingredient_name": "French Vanilla Yogurt",
          "quantity": 70.59,
          "measurement": "metus"
        }, {
          "id": 21,
          "ingredient_name": "Pork",
          "quantity": 81.86,
          "measurement": "pede"
        }, {
          "id": 22,
          "ingredient_name": "Cabbage Roll",
          "quantity": 16.87,
          "measurement": "sapien"
        }, {
          "id": 23,
          "ingredient_name": "Wine",
          "quantity": 86.91,
          "measurement": "etiam"
        }, {
          "id": 24,
          "ingredient_name": "Appetizer",
          "quantity": 56.04,
          "measurement": "in"
        }, {
          "id": 25,
          "ingredient_name": "Salmon - Sockeye Raw",
          "quantity": 8.63,
          "measurement": "sollicitudin"
        }, {
          "id": 26,
          "ingredient_name": "Juice - Grapefruit",
          "quantity": 13.85,
          "measurement": "Ml"
        }, {
          "id": 27,
          "ingredient_name": "Iced Tea",
          "quantity": 64.24,
          "measurement": "donec"
        }, {
          "id": 28,
          "ingredient_name": "Momiji Oroshi Chili Sauce",
          "quantity": 94.33,
          "measurement": "eu"
        }, {
          "id": 29,
          "ingredient_name": "Langers - Cranberry Cocktail",
          "quantity": 63.25,
          "measurement": "sapien"
        }, {
          "id": 30,
          "ingredient_name": "Lemonade",
          "quantity": 6.02,
          "measurement": "Ml"
        }]
      );
    });
};
