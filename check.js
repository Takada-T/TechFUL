/*
var http = require('http');
var url = require('url');

console.log('Start');

var server = http.createServer(function(req, res) {
  console.log('Application started');
});
*/
//sserver.listen(8000);


var http = require('http');
console.log('1');
var querystring = require('querystring');
console.log('2');

var options = {
  hostname: 'localhost',
  port: 9000,
  path: '',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};
console.log('3');

request.http('/', function(error, response, body){

  console.log('4');

  if (!error && response.statusCode == 200) {
    console.log(body.name);
  } else {
    console.log('error: '+ response.statusCode);
  }
});
