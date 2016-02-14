var whichOperator = function(req, res) {
    req.body.numberOne = parseFloat(req.body.numberOne);
    req.body.numberTwo = parseFloat(req.body.numberTwo);

    var result;

    if (req.body.type == 'plus') {
        console.log('sum!');
        result = sum(req.body.numberOne, req.body.numberTwo);

    } else if (req.body.type == 'minus') {
        console.log('subtract!');
        result = diff(req.body.numberOne, req.body.numberTwo);

    } else if (req.body.type == 'times') {
        console.log('multiply!');
        result = mult(req.body.numberOne, req.body.numberTwo);

    } else if (req.body.type == 'dividedBy') {
        console.log('divide!');
        result = divide(req.body.numberOne, req.body.numberTwo);
    }

    console.log(result);
    res.send(result);
};

var sum = function(x,y) {
    var number = x + y;
    number = number.toString();
    return number;
};

var diff = function(x,y) {
    var number = x - y;
    number = number.toString();
    return number
};

var mult = function(x,y) {
    var number = x * y;
    number = number.toString();
    return number;
};

var divide = function(x,y) {
    var number = x / y;
    number = number.toString();
    return number
};



exports.sum = sum;
exports.diff = diff;
exports.mult = mult;
exports.divide = divide;
exports.whichOperator = whichOperator;
