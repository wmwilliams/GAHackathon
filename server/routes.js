var path = require('path')
module.exports = {

  '/api/getAll' : require('./controllers/MainCtrl'),

  '/api/people' : require('./controllers/People'),

  '/api/images' : require('./controllers/Image'),

  '/api/quotes': require('./controllers/Quotes'),

// this works!
  '/api/brainyQuoteScrape' : require('./scrapers/brainyQuoteScraper'),

//this works!
  '/api/peopleScrape'   : require('./scrapers/peopleScraper'),

//last time this crashed app
  '/api/sunnyScrape'  : require('./scrapers/sunnyQuoteScraper'),

// this works!
  '/api/tpbScrape' : require('./scrapers/tpbScraper'),

// this works!
  '/api/pics' : require('./scrapers/picsAPI'),

  '/' : function(req, res){
	res.sendFile(path.join(__dirname, '../client/index.html'));
  }
};