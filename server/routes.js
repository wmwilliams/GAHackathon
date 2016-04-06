var path = require('path')
module.exports = {

  '/api/getAll' : require('./controllers/MainCtrl'),

  '/api/people' : require('./controllers/People'),

  '/api/images' : require('./controllers/Image'),

  '/api/quotes' : require('./controllers/Quotes'),

  '/api/picErase' : require('./controllers/pics'),

  // '/api/brainyQuoteScrape' : require('./scrapers/brainyQuoteScraper'),

  // '/api/peopleScrape'   : require('./scrapers/peopleScraper'),

  // '/api/sunnyScrape'  : require('./scrapers/sunnyQuoteScraper'),

  // '/api/tpbScrape' : require('./scrapers/tpbScraper'),

  '/api/pics' : require('./scrapers/picsAPI'),

  '/' : function(req, res){
	res.sendFile(path.join(__dirname, '../client/index.html'));
  }
};