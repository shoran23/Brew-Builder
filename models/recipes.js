/* DEPENDENCIES *******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA *************************************************************/
const recipeSchema = new Schema ({
    name: {type: String, required: true},
    // targets
    startingGravity: {type: Number, required: true},
    batchVolume: {type: Number, required: true},
    brewEfficiency: {type: Number, required: true},
    // fermentables
    selectedFermentable: {type: Array, required: true},
    percentFermentable: {type: Array, required: true},
    amountFermentable: {type: Array, required: true},
    // hops
    selectedHop: {type: Array, required: true},
    timeHop: {type: Array, required: true},
    amountHop: {type: Array, required: true},
    // yeast
    selectedYeast: {type: Array},
    // stats
    finalGravity: {type: Number, required: true}
});


/* SET UP MODEL ********************************************************/
const Recipe = mongoose.model('Recipe',recipeSchema);

/* MODULE EXPORTS ******************************************************/
module.exports = Recipe;