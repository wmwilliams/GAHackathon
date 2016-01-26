var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  res.send({HI: db.People.full_name });
});

module.exports = router;