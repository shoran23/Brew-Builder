/* DEPENDENCIES *******************************************************/
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* SCHEMA *************************************************************/
const yeastSchema = new Schema ({
    name: {type: String, required: true},
    lab: {type: String, required: true},
    type: {type: String, required: true},
    temp: {type: Array, required: true},
    attenuation: {type: Number, required: true},
    flocculation: {type: String, required: true},
    notes: {type: String, required: false}
});

/* SET UP MODEL ********************************************************/
const Yeast = mongoose.model('Yeast',yeastSchema);

/* MODULE EXPORTS ******************************************************/
module.exports = Yeast;