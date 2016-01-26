var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  db.Img_link.find(function(err, links) {
    if (err) return res.status(500).send(err);
    res.send(links);
  });
});

pictureAPI = function() {
	var req = {
		url: 'https://pixabay.com/api/?key=1957981-8991433880a207a37bf64bff4',
		method: 'GET',
	}
}

module.exports = router;