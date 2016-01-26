var mongoose = require('mongoose');

var quoteSchema = new mongoose.Schema({
	quote: String
});

// var People = mongoose.model('People, peopleSchema');

// make this available to our other files
module.exports = quoteSchema;