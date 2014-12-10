var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/static/index.html');
});
app.get('/robots.txt', function(req, res) {
  res.sendFile(__dirname + '/static/robots.txt');
});

app.use('/static', express.static(__dirname + '/static'));

var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port
  console.log('Listening at http://%s:%s', host, port)
});
