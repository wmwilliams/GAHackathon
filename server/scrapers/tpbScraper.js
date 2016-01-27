var express = require('express'),
  $       = require('cheerio'),
  db      = require('../models/index'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res){

  var url = 'http://www.imdb.com/title/tt0290988/quotes';

  request(url, function(err, response, html) {
    if (!err && response.statusCode == 200) {
      var parsedHTML = $.load(html);

      //Save all quotes from the scraped website to an array
      var quoteArray = [];
      parsedHTML('.quote p').each(function (i, quote) {
        var text = $(quote).text();
        if (!(text)) return;
        splitText = text.split("  ");
        console.log(text);

      });

      //quoteArray.forEach(function(quote){
      //  var newQuote = db.Quote({
      //    quote: quote
      //  });
      //
      //  newQuote.save(function(err) {
      //    if (err) console.log(err);
      //  });
      //});
    }
  });

});


module.exports = router;
