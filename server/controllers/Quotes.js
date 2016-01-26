var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  Quote.find(function(err, quotes) {
  	if (err) return res.status(500).send(err);
  	res.send(quotes);
  });
  // res.send({HI: db.Quote.quote });
});

// router.post('/', function(req, res) {
// 	Quote.create(req, function(err, quotes) {
// 		if (err) return res.status(500).send(err);
// 		res.send(quotes);
// 	})
// })

module.exports = router;