/* DEPENDENCIES *******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA *************************************************************/
const recipeSchema = new Schema ({
    name: {type: String, required: true},
    fermentables: {type: Array, required: true},
    hops: {type: Array, required: true},
    yeast: {type: Object, required: true},
    notes: {type: Array, require: false}
});
/* SET UP MODEL ********************************************************/
const Recipe = mongoose.model('Recipe',recipeSchema);

/* MODULE EXPORTS ******************************************************/
module.exports = Recipe;