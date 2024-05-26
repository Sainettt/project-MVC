class RecipeModel {
    constructor() {
        this.recipes = [];
    }

    getAll() {
        return this.recipes;
    }

    getByIndex(index) {
        return this.recipes[index];
    }

    add(recipe) {
        this.recipes.push(recipe);
    }

    update(index, updatedRecipe) {
        this.recipes[index] = updatedRecipe;
    }

    delete(index) {
        this.recipes.splice(index, 1);
    }
}

module.exports = new RecipeModel();
