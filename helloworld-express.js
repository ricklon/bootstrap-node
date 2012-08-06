var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('Hello World: foo bar');
});

var port = process.env.PORT;
app.listen(port);
console.log('Listening on port:' + port);

