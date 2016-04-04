/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express');
var router = express.Router();
var async = require('async');
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
        console.log(PQI);
        return res.send(PQI);
      });



  //   getPeople(PQI),
  //   getQuotes(PQI),
  //   getImages(PQI)],
  //   function(err, results){
  //     if (err) console.log("error: " + err);
  // });


});

module.exports = router;