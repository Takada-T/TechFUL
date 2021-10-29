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

var request = require('request');

console.log('2');

request.post('/', function(error, response, body){

  console.log('3');

  if (!error && response.statusCode == 200) {
    console.log(body.name);
  } else {
    console.log('error: '+ response.statusCode);
  }
});
