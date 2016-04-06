var express = require('express');
var router = express.Router();
var db = require('../models/index');

router.get('/', function(req, res){
    console.log('bakEnd');
    db.Img_link.remove(function(err, img_link) {
        if (err) return res.status(500).send(err);
        res.redirect('/api/pics');
  });
});


module.exports = router;