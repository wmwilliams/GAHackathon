/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express');
var router = express.Router();
var async = require('async');
var db = require('../models/index');

router.get('/', function(req, res){

  var PQI = {};

  var getPeople = function(PQI) {
    db.People.find({}, function(err, people){
      if (err) console.log(err);
      PQI.people = people;
      return true;
    })
  };

  var getQuotes = function(PQI) {
    db.Quote.find({}, function(err, quotes){
      if (err) console.log(err);
      PQI.quotes = quotes;
      return true;
    })
  };

  var getImages = function(PQI) {
    db.Img_link.find({}, function(err, imgLinks){
      if (err) console.log(err);
      PQI.imageLinks = imgLinks;
      return true;
    })
  };

  async.series([
      function(PQI) {
        db.People.find({}, function(err, people){
          if (err) console.log(err);
          PQI.people = people;
          return true;
        })
      },
      function(PQI) {
        db.Quote.find({}, function(err, quotes){
          if (err) console.log(err);
          PQI.quotes = quotes;
          return true;
        })
      },
      function(PQI) {
        db.Img_link.find({}, function(err, imgLinks){
          if (err) console.log(err);
          PQI.imageLinks = imgLinks;
          return true;
        })
      }
  ],
    function(err, results){
      if (err) console.log("error: " + err);
      res.send(PQI);
  });


});

module.exports = router;