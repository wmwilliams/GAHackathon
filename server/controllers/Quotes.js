var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  db.Quote.find(function(err, quotes) {
  	if (err) return res.status(500).send(err);
  	res.send(quotes);
  });
});

module.exports = router;