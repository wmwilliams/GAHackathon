var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  res.send({HI: db.Img_link.img_link });
});


module.exports = router;