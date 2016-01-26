var express = require('express'),
  $       = require('cheerio'),
  db      = require('../models/index'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res){

  var url = 'http://www.mandatory.com/2013/02/28/the-100-greatest-quotes-from-its-always-sunny-in-philadelphia/';

  request(url, function(err, response, html) {
    if (!err && response.statusCode == 200) {
      var parsedHTML = $.load(html);

      //Save all quotes from the scraped website to an array
      var quoteArray = [];
      parsedHTML('#show-post .post').map(function (i, quote) {
        var text = $(quote).text();
        if (!(text)) return;
        quoteArray.push(text);
        //console.log(text);
        console.log(quoteArray);
      });
    }
  });


});


module.exports = router;