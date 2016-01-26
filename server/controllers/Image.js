var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
  db.Img_link.find(function(err, img_link) {
    if (err) return res.status(500).send(err);
    res.send(img_link);
  });
});


module.exports = router;