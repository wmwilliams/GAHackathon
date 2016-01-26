var mongoose = require('mongoose');

var imgSchema = new mongoose.Schema({
	img_link: String
});

var Img_link = mongoose.model('Img_link', imgSchema);

// make this available to our other files
module.exports = Img_link;