const db = require('../data/db-config.js');

module.exports = {
  getRecipes,
  getRecipesById,
  addRecipes,
  updateRecipes,
  removeRecipes
}; 

// RECIPES

/* 
GET /api/recipes
getRecipes(): should return a list of all recipes in the database.
*/

function getRecipes() {
  return db('recipes'); 
}

// GET /api/recipes/:id - get a specific recipe
function getRecipesById(id) {
  return db('recipes')
        .where({id})
        .first(); 
} 

// POST /api/recipes - add a new recipe
function addRecipes(recipe) {
  return db('recipes')
        .insert(recipe); 
}

// PUT /api/recipes/:id - updates a recipe
function updateRecipes(changes, id) {
  return db('recipes')
        .where({id})
        .update(changes);
}

// DELETE /api/recipes/:id - remove a given recipe
function removeRecipes(id) {
  return db('recipes')
        .where({id})
        .del();
}