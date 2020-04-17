
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_steps').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_steps').insert(
        [{
          "id": 1,
          "recipe_id": 1,
          "step_number": 1,
          "description": "Quisque erat eros, viverra eget, congue eget, semper rutrum, nulla. Nunc purus. Phasellus in felis. Donec semper sapien a libero. Nam dui."
        }, {
          "id": 2,
          "recipe_id": 1,
          "step_number": 2,
          "description": "Nam ultrices, libero non mattis pulvinar, nulla pede ullamcorper augue, a suscipit nulla elit ac nulla."
        }, {
          "id": 3,
          "recipe_id": 1,
          "step_number": 3,
          "description": "Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat."
        }, {
          "id": 4,
          "recipe_id": 2,
          "step_number": 1,
          "description": "Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam."
        }, {
          "id": 5,
          "recipe_id": 2,
          "step_number": 2,
          "description": "In eleifend quam a odio. In hac habitasse platea dictumst. Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem."
        }, {
          "id": 6,
          "recipe_id": 2,
          "step_number": 3,
          "description": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante."
        }, {
          "id": 7,
          "recipe_id": 2,
          "step_number": 4,
          "description": "Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis."
        }, {
          "id": 8,
          "recipe_id": 2,
          "step_number": 5,
          "description": "Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl."
        }, {
          "id": 9,
          "recipe_id": 3,
          "step_number": 1,
          "description": "Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet."
        }, {
          "id": 10,
          "recipe_id": 3,
          "step_number": 2,
          "description": "Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam. Nam tristique tortor eu pede."
        }]
      );
    });
};
