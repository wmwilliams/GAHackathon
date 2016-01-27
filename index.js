var express         = require('express');
var mongoose        = require('mongoose');
var request         = require('request');
var _               = require('lodash');
var path 			      = require('path');

var app = express();


mongoose.connect('mongodb://localhost/gahackathon' || 'mongodb://@ds051585.mongolab.com:51585/heroku_6spv5l5r');
mongoose.connection.once('open', function(){

  //Load DB models
  app.models = require('./server/models/index');

  app.use(express.static(path.join(__dirname, 'client')));

  // Load the routes.
  var routes = require('./server/routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller);
  });

  console.log("RUNNING");
  app.listen(process.env.PORT || 3000);
});