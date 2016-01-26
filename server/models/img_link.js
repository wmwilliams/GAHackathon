var mongoose = require('mongoose');

var imgSchema = new mongoose.Schema({
	img_link: String
});

// var People = mongoose.model('People, peopleSchema');

// make this available to our other files
module.exports = imgSchema;