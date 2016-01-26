var express         = require('express');
var mongoose        = require('mongoose');
var request         = require('request');
var _               = require('lodash');

var app = express();


mongoose.connect('mongodb://localhost/watch_it');
mongoose.connection.once('open', function(){

  //Load DB models
  app.models = require('./models/index');

  // Load the routes.
  var routes = require('./routes');
  _.each(routes, function(controller, route) {
    app.use(route, controller);
  });

  console.log("RUNNING");
  app.listen(process.env.PORT || 3000);
});