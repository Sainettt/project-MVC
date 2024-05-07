const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

// Define routes
router.get('/', (req, res) => {
    res.render('index');
});

router.get('/recipes', recipeController.getRecipes);
router.post('/recipes', recipeController.addRecipe);
router.get('/recipes/:index/edit', recipeController.getEditForm);
router.post('/recipes/:index/edit', recipeController.editRecipe);

module.exports = router;
