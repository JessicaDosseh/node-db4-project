const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}; 

// GET /api/recipes - get recipe master list
function find() {
  return db('recipes'); 
}

// GET /api/recipes/:id - get a specific recipe
function findById(id) {
  return db('recipes')
        .where({id})
        .first(); 
} 

// POST /api/recipes - add a new recipe
function add(recipe) {
  return db('recipes')
        .insert(recipe); 
}

// PUT /api/recipes/:id - updates a recipe
function update(changes, id) {
  return db('recipes')
        .where({id})
        .update(changes);
}

// DELETE /api/recipes/:id - remove a given recipe
function remove(id) {
  return db('recipes')
        .where({id})
        .del();
}