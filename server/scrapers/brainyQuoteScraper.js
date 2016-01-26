/**
 * Created by ReedK on 1/26/16.
 */
var express = require('express'),
  $       = require('cheerio'),
  db      = require('../models/index'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res){

  var url = "http://www.brainyquote.com/quotes/authors/b/barack_obama.html";

  request(url, function(err, response, html){
    if(!err && response.statusCode == 200){
      var parsedHTML = $.load(html);

      //Save all quotes from the scraped website to an array
      var quoteArray = [];
      parsedHTML('span.bqQuoteLink a').map(function(i, quote){
        var text = $(quote).text();
        if(!(text)) return;
        quoteArray.push(text);
      });

      //Save only one instance of the author, otherwise will return all copies
      var author = '';
        parsedHTML('div.bq-aut a').map(function(i, aut){
        var text = $(aut).text();
        if(!(text)) return;
        author = text;
          return;
      });

      //Save quote
      quoteArray.forEach(function(quote){
        var newQuote = db.Quote({
          quote: quote
        })

        newQuote.save(function(err) {
          if (err) console.log(err);
        });
      })

      //Save author
      var newAuthor = db.People({
        full_name: author
      });

      newAuthor.save(function(err){
        if(err) console.log(err)
      })

      res.send({author: author, quotes: quoteArray})
    } else {
      console.log("error: " + err)
    }
  })

});

module.exports = router;