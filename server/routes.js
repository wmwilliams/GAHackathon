module.exports = {

  '/api/example': require('./controllers/ExampleController'),

  '/api/people' : require('./controllers/People'),

  '/api/images' : require('./controllers/Image'),

  '/api/quotes': require('./controllers/Quotes'),

  '/api/brainyQuoteScrape' : require('./scrapers/brainyQuoteScraper'),

<<<<<<< HEAD
  '/api/peopleScrape'   : require('./scrapers/peopleScraper'),

  '/api/sunnyScrape'  : require('./scrapers/sunnyQuoteScraper')
=======
  '/api/pics' : require('./scrapers/picsAPI')

  '/api/peopleScrape'   : require('./scrapers/peopleScraper')
>>>>>>> 9248f2ebfe3e9559da019fdd7cca1b9e99f56151



};