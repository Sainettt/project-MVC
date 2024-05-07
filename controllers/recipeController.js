let recipes = [];

exports.getRecipes = (req, res) => {
    res.render('recipeListView', { recipes });
};

exports.addRecipe = (req, res) => {
    const { name, ingredients, instructions } = req.body;
    const newRecipe = { name, ingredients: ingredients.split(','), instructions };
    recipes.push(newRecipe);
    res.redirect('/recipes');
};

exports.getEditForm = (req, res) => {
    const recipeIndex = req.params.index;
    const recipe = recipes[recipeIndex];
    res.render('editRecipeForm', { recipeIndex, recipe });
};

exports.editRecipe = (req, res) => {
    const recipeIndex = req.params.index;
    const { name, ingredients, instructions } = req.body;
    recipes[recipeIndex] = { name, ingredients: ingredients.split(','), instructions };
    res.redirect('/recipes');
};
