
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert(
        [{
          "id": 1,
          "recipe_title": "Pot Dinner",
          "description": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede. Morbi porttitor lorem id ligula.",
          "servings": 3
        }, {
          "id": 2,
          "recipe_title": "French Onion Soup",
          "description": "Cras non velit nec nisi vulputate nonummy.",
          "servings": 1
        }, {
          "id": 3,
          "recipe_title": "Meatloaf",
          "description": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl.",
          "servings": 5
        }, {
          "id": 4,
          "recipe_title": "White Bottom Cupcakes",
          "description": "Etiam justo. Etiam pretium iaculis justo.",
          "servings": 4
        }, {
          "id": 5,
          "recipe_title": "Sub Sandwich",
          "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante.",
          "servings": 3
        }, {
          "id": 6,
          "recipe_title": "Dough Cookies",
          "description": "Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis.",
          "servings": 2
        }, {
          "id": 7,
          "recipe_title": "Margarita Bread",
          "description": "Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis.",
          "servings": 4
        }, {
          "id": 8,
          "recipe_title": "Point Soup (Crock Pot)",
          "description": "Morbi non quam nec dui luctus rutrum. Nulla tellus.",
          "servings": 4
        }, {
          "id": 9,
          "recipe_title": "Asian Noodle Salad",
          "description": "Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.",
          "servings": 3
        }, {
          "id": 10,
          "recipe_title": "Stuffed Onions",
          "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla. Sed vel enim sit amet nunc viverra dapibus.",
          "servings": 4
        }]
      );
    });
};
