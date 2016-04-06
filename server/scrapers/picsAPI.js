var express = require('express'),
  $       = require('cheerio'),
  db      = require('../models/index'),
  request = require('request'),
  router  = express.Router();

router.get('/', function(req, res) {
	var url = 'https://pixabay.com/api/?key=1957981-8991433880a207a37bf64bff4&per_page=200&orientation=horizontal';
	var req = {
		url: 'https://pixabay.com/api/?key=1957981-8991433880a207a37bf64bff4&per_page=200&orientation=horizontal',
		method: 'GET'
	}
	request(url, function(err, response, html){
		if(!err && response.statusCode == 200) {
			var images = JSON.parse(response.body).hits;
			images.forEach(function(image) {
				var newImage = db.Img_link({
					img_link : image.webformatURL
				});

				newImage.save(function(err) {
          			if (err) console.log(err);
    	   		});
			})
                                console.log('CHECK CEHCK Check');
                                res.redirect('/');
		} else {
			console.log('Error' + err)
		}
	})
});


module.exports = router;


