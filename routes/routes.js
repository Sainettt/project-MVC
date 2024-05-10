const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/recipes', recipeController.getRecipes);
router.post('/recipes', recipeController.addRecipe);
router.get('/recipes/:index/edit', recipeController.getEditForm);
router.post('/recipes/:index/edit', recipeController.editRecipe);

module.exports = router;
