
exports.up = function(knex) {
  return knex.schema
  
  // Manage recipes.
    .createTable('recipes', tbl => {
      tbl.increments(); 
      tbl.string('recipe_title', 128)
         .unique()
         .notNullable()
      tbl.text('description')
      tbl.integer('servings'); 
  
    })

  // Manage ingredients.  
    .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('ingredient_name', 128)
         .unique()
         .notNullable()
      tbl.float('quantity')
         .notNullable()
      tbl.string('measurement', 128)
         .notNullable();
    })

  // Manage recipes ingredients.
    .createTable('recipe_ingredients', tbl => {
      tbl.increments();
      tbl.integer('recipe_id') // reference to recipes
         .unsigned()
         .notNullable()
         .references('recipes.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.integer('ingredient_id') // reference to ingredients
         .unsigned()
         .notNullable()
         .references('ingredients.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE');
    })

  // Manage recipes steps. 
    .createTable('recipe_steps', tbl => {
      tbl.increments();
      tbl.integer('recipe_id') // reference to recipes
         .unsigned()
         .notNullable()
         .references('recipes.id')
         .onUpdate('CASCADE')
         .onDelete('CASCADE')
      tbl.integer('step_number')
         .notNullable()
      tbl.text('description')
         .notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema  
    .dropTableIfExists('recipe_steps')
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes');
};
