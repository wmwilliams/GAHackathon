var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  db.People.find(function(err, people) {
    if (err) return res.status(500).send(err);
    res.send(people);
  });
});

module.exports = router;