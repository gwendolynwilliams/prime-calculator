var express = require('express');
var router = express.Router();
var path = require('path');
var math = require('./math');

router.post('/', function(req, res) {
    math.whichOperator(req, res);
});

module.exports = router;


