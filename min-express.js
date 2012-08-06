var express = require("express");
var app = express();
  
app.use(express.static(__dirname+'/public'));

app.get('/download', function(req, res){
  var filename = 'test.txt';
  res.attachment(filename);
  res.end('hello\\n,world\nke\nesun,hi', 'UTF-8'); //Actually, the data will be loaded form db.
});

var port = process.env.PORT;
app.listen(port);
