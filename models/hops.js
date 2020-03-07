/* DEPENDENCIES *******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA *************************************************************/
const hopsSchema = new Schema ({
    name: {type: String, require: true},
    type: {type: String, require: true},
    alpha: {type: Number, require: true},
    beta: {type: Number, require: true},
    description: {type: String, require: false}
});

/* SET UP MODEL ********************************************************/
const Hop = mongoose.model('Hop',hopsSchema);

/* MODULE EXPORTS ******************************************************/
module.exports = Hop;