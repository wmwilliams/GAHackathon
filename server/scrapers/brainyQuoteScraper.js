/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express'),
  $       = require('cheerio'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res){

  var url = "http://www.brainyquote.com/quotes/authors/d/donald_trump.html";

  request(url, function(err, response, html){
    if(!err && response.statusCode == 200){
      var parsedHTML = $.load(html);

      var quoteArray = [];
      parsedHTML('span.bqQuoteLink a').map(function(i, quote){
        var text = $(quote).text();
        if(!(text)) return;
        quoteArray.push(text);
      });

      var author = '';
        parsedHTML('div.bq-aut a').map(function(i, aut){
        var text = $(aut).text();
        if(!(text)) return;
        author = text;
          return;
      });


      res.send({author: author, quotes: quoteArray})
    } else {
      console.log("error: " + err)
    }
  })


});

module.exports = router;