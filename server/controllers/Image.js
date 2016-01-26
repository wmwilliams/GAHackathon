var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  res.send({HI: db.Img_link.img_link });
});

pictureAPI = function() {
	var req = {
		url: 'https://pixabay.com/api/?key=1957981-8991433880a207a37bf64bff4',
		method: 'GET',
	}
}

module.exports = router;