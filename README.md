var express = require("express");
var url = require('url');
var app = express();
var request = require('request');
  
app.use(express.static(__dirname+'/public'));

//Gets data from youtube and return to client
app.get('/getyoutube', function(req, res) {
var url = 'https://gdata.youtube.com/feeds/api/videos?';
var query = req.param('q');
var params = 'q=' + query  +  'alt=json';
url = url + params;

console.log("query: "+  req.param('q'));

request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the google web page.
  }
  res.send(body);
});

//res.send(req.param('q'));
});

//app.get('/getwikipedia', function(req, res) {


//app.get('/getgiantbomb', function(req, res) {


var port = process.env.PORT;
app.listen(port);
