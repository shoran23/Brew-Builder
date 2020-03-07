/* DEPENDENCIES *******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA *************************************************************/
const fermentablesSchema = new Schema ({
    name: {type: String, required: true},
    potential: {type: Number, required: true},
    color: {type: Number, required: true},
    description: {type: String, required: false}
});

/* SET UP MODEL ********************************************************/
const Fermentable = mongoose.model('Fermentable',fermentablesSchema);

/* MODULE EXPORTS ******************************************************/
module.exports = Fermentable;