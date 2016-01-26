var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.send({HI: "HI"});
});

module.exports = router;
