/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){

  var rand = Math.random() * 100;

  db.Quote.find().skip

  db.Img_link.find(function(err, links) {
    if (err) return res.status(500).send(err);
    res.send(links);
  });
});

module.exports = router;