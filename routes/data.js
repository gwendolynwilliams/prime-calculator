var express = require('express');
var router = express.Router();
var path = require('path');

var mult;
var sum;
var diff;
var divide;

router.get('/', function(req, res) {
    res.send({message: 'hello'});
});

router.post('/', function(req, res) {

    req.body.numberOne = parseInt(req.body.numberOne);
    req.body.numberTwo = parseInt(req.body.numberTwo);


    if (req.body.type == 'add') {
        console.log('sum!');
        sum = sum(req.body.numberOne, req.body.numberTwo);

        console.log(sum);
        res.send(sum);

    } else if (req.body.type == 'subtract') {
        console.log('subtract!');
        diff = diff(req.body.numberOne, req.body.numberTwo);

        console.log(diff);
        res.send(diff);

    } else if (req.body.type == 'multiply') {
        console.log('multiply!');
        mult = mult(req.body.numberOne, req.body.numberTwo);

        console.log(mult);
        res.send(mult);

    } else if (req.body.type == 'divide') {
        console.log('divide!');
        divide = divide(req.body.numberOne, req.body.numberTwo);

        console.log(divide);
        res.send(divide);
    }
});



function sum(x,y) {
    var number = x + y;
    number = number.toString(); //the server in it's message body cannot return a number - only strings
    return number;
}

function diff(x,y) {
    var number = x - y;
    number = number.toString();
    return number
}

function mult(x,y) {
    var number = x * y;
    number = number.toString(); //the server in it's message body cannot return a number - only strings
    return number;
}

function divide(x,y) {
    var number = x / y;
    number = number.toString();
    return number
}

exports.sum = sum;
exports.diff = diff;
exports.mult = mult;
exports.divide = divide;

module.exports = router;


