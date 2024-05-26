const RecipeModel = require('../models/RecipeModel');

exports.getRecipes = (req, res) => {
    const recipes = RecipeModel.getAll();
    res.render('recipeListView', { recipes });
};

exports.getEditForm = (req, res) => {
    const recipeIndex = req.params.index;
    const recipe = RecipeModel.getByIndex(recipeIndex);
    res.render('editRecipeForm', { recipe, recipeIndex });
};

exports.addRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;
    RecipeModel.add({ name, ingredients: ingredients.split(','), instructions });
    res.redirect('/recipes');
};

exports.editRecipe = (req, res) => {
    const recipeIndex = req.params.index;
    const { name, ingredients, instructions } = req.body;
    RecipeModel.update(recipeIndex, { name, ingredients: ingredients.split(','), instructions });
    res.redirect('/recipes');
};

exports.deleteRecipe = (req, res) => {
    const recipeIndex = req.params.index;
    RecipeModel.delete(recipeIndex);
    res.redirect('/recipes');
};
