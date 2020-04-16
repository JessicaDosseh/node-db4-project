const express = require('express'); 

const Recipes = require('./recipe-model.js');

const router = express.Router(); 

// Get recipe master list
router.get('/', (req, res) => {

});

// Get a specific recipe
router.get('/:id', (req, res) => {

});

// Add a new recipe
router.post('/', (req, res) => {

}); 

// Updates a recipe
router.put('/:id', (req, res) => {

}); 

// Remove a given recipe
router.delete('/:id', (req, res) => {

}); 

module.exports = router;