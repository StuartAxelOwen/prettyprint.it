var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});
app.get('/robots.txt', function(req, res) {
  res.sendFile(__dirname + '/static/robots.txt');
});

app.use('/static', express.static(__dirname + '/static'));

var port = 8080, ip = "0.0.0.0";
var server = app.listen(port, ip, function() {
	console.log("Listening on " + ip + ":" + port + "...");
});
