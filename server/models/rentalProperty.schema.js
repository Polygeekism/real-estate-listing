var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

//create the schema
var rentalPropertySchema = new Schema({
    rent: {type: Number, required: true},
    sqft: {type: Number, require: true},
    city: {type: String, required: true}
});

module.exports = mongoose.model('RentalProperty', rentalPropertySchema)