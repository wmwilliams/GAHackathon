var mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
	full_name: String
});

module.exports = peopleSchema;