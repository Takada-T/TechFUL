var express = require('express');
var router = express.Router();

// Hello World��ԋp����API
router.get('/', function(req, res, next) {
  res.json({'message': '200', 'method': 'GET'})
})

module.exports = router;

