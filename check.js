var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  console.log('Application started');
});

server.listen(8000);
