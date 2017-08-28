var mongoose = require('mongoose');
var Schema =  mongoose.Schema;

//create the schema
console.log('did we make it to the listing schema');
var listingsSchema = new Schema({
    cost: {type: Number, required: true},
    sqft: {type: Number, require: true},
    city: {type: String, required: true}
});

module.exports = mongoose.model('Listings', listingsSchema);