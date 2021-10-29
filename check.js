/*
var http = require('http');
var url = require('url');

console.log('Start');

var server = http.createServer(function(req, res) {
  console.log('Application started');
});
*/
//sserver.listen(8000);


console.log('1');

var http = require('http');
var querystring = require('querystring');

console.log('2');

var options = {
//  hostname: 'localhost',
//  port: 9000,
  path: '',
  method: 'GET',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
console.log('3');

var data = querystring.stringify({
    'status_code': '200',
    'method': 'GET'
});
console.log(data);

var req = http.request(options, function(res) {

console.log('4');
  var body = '';
  res.setEncoding('utf8');

console.log('5');
  res.on('data', function(chunk) {
    body += chunk;
  });

  res.on('end', function() {
    var name = JSON.parse(body).name;
    console.log(name);
  });

}).on('error', function(e) {
  console.log(e.message);
});

req.write(data);
req.end();
