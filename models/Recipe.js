const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    ingredients: { type: [String], required: true },
    instructions: { type: String, required: true },
    rating: { type: Number, default: 0 },
    comments: [{ type: String }],
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;