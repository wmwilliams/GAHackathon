var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
	full_name: String
});
var People = mongoose.model('People', peopleSchema);


module.exports = People;