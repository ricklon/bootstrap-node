var express = require('express');
var app = express();



app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.get('/', function(req, res){
  res.render('index', {
    title: 'Node Test'
  });
});
 

app.get('/download', function(req, res){
  var filename = 'test.txt';
  res.attachment(filename);
  res.end('hello\\n,world\nke\nesun,hi', 'UTF-8'); //Actually, the data will be loaded form db.
});


var port = process.env.PORT;
app.listen(port);
console.log('Listening on port:' + port);


