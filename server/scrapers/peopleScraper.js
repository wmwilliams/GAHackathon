/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express'),
  $       = require('cheerio'),
  db      = require('../models/index'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res){

  var url = "http://www.biographyonline.net/people/famous/leaders.html";

  request(url, function(err, response, html){
    if(!err && response.statusCode == 200){
      var parsedHTML = $.load(html);


      //Save people
      var people = [];
      parsedHTML('p a strong').map(function(i, p){
        var person = $(p).text();
        if(!(person)) return;
        people.push(person);
      });

      //Save people
      people.forEach(function(person){
        var newPerson = db.People({
          full_name: person
        });

        newPerson.save(function(err) {
          if (err) console.log(err);
        });
      });

      res.send({people: people})
    } else {
      console.log("error: " + err)
    }
  })

});

module.exports = router;