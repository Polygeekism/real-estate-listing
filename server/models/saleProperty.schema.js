var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

//create the schema
var salePropertySchema = new Schema({
    cost: {type: Number, required: true},
    sqft: {type: Number, require: true},
    city: {type: String, required: true}
});

module.exports = mongoose.model('SaleProperty', salePropertySchema)