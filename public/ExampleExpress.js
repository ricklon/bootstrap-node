
/**
 * Module dependencies.
 */
 
var express = require('express');
var app = express();

 
// Configuration
 
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.static(__dirname + '/public'));
  app.use(app.router);
});
 
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});
 
app.configure('production', function(){
  app.use(express.errorHandler()); 
});
 
// Routes
 
app.get('/', function(req, res){
  res.render('index', {
    title: 'Node Test'
  });
});
 
var port = process.env.PORT || 3000;
app.listen(port);
//console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);