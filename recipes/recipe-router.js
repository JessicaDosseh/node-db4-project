const express = require('express'); 

const Recipes = require('./recipe-model.js');

const router = express.Router(); 

// Get recipe master list
router.get('/', (req, res) => {
  Recipes.getRecipes()
        .then(recipes => {
          if (recipes) {
            res.status(200).json({ RecipeBook: recipes }); 
          } else {
            res.status(404).json({ message: 'Could not retrive Recipe Book.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get Recipe Book', error });
        });
});

// Get a specific recipe
router.get('/:id', (req, res) => {
  const id = req.params.id; 

  Recipes.getRecipesById(id)
        .then(recipe => {
          if (recipe) {
            res.status(201).json(recipe); 
          } else {
            res.status(404).json({ message: 'Could not find recipe with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to get resipe.', error });
        });
});

// Add a new recipe
router.post('/', (req, res) => {
  const recipeData = req.body;

  Recipes.addRecipes(recipeData)
        .then(count => {
          if (count) {
            res.status(201).json({ added_recipe: count });
          } else {
            res.status(404).json({ message: 'Could not add recipe.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to create new recipe.', error });
        });
}); 

// Updates a recipe
router.put('/:id', (req, res) => {
  const id = req.params.id;
  const changes = req.body;

  Recipes.getRecipesById(id)
        .then(recipe => {
          if (recipe) {
            Recipes.updateRecipes(changes, id)
                  .then(updateRecipe => {
                    if (updateRecipe) {
                      res.status(201).json({ updated_recipe: id, status: updateRecipe });
                    } else {
                      res.status(404).json({ message: 'Could not update recipe.' });
                    }
                  })
                  .catch(error => {
                    res.status(500).json({ message: 'Failed to update recipe.', error });
                  })
          } else {
            res.status(404).json({ message: 'Could not find recipe with given id.' });
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to find recipe to update.', error });
        });
}); 

// Remove a given recipe
router.delete('/:id', (req, res) => {
  const id = req.params.id;

  Recipes.removeRecipes(id)
        .then(deleted => {
          if (deleted) {
            res.status(200).json({ deleted_recipes: id, status: deleted })
          } else {
            res.status(404).json({ message: 'Could not find recipe with given id.' })
          }
        })
        .catch(error => {
          res.status(500).json({ message: 'Failed to delete recipe.', error }); 
        }); 
}); 

module.exports = router;