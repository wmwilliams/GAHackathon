/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){

  var PQI = {};

  db.People.find({}, function(err, people){
    if (err) console.log(err);
    PQI.people = people;
  });
  db.Quote.find({}, function(err, quotes){
    if (err) console.log(err);
    PQI.quotes = quotes;
  });
  db.Img_link.find({}, function(err, imgLinks){
    if (err) console.log(err);
    PQI.imageLinks = imgLinks;
  });
  if(PQI.imageLinks && PQI.people && PQI.quotes) {
    return res.send(PQI);
  }
});

module.exports = router;

// modified by wmwilliams on 4/4/16