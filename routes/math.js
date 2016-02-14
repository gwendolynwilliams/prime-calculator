var whichOperator = function(req, res) {
    req.body.numberOne = parseFloat(req.body.numberOne);
    req.body.numberTwo = parseFloat(req.body.numberTwo);

    if (req.body.type == 'plus') {
        console.log('sum!');
        sum = sum(req.body.numberOne, req.body.numberTwo);

        console.log(sum);
        res.send(sum);

    } else if (req.body.type == 'minus') {
        console.log('subtract!');
        diff = diff(req.body.numberOne, req.body.numberTwo);

        console.log(diff);
        res.send(diff);

    } else if (req.body.type == 'times') {
        console.log('multiply!');
        mult = mult(req.body.numberOne, req.body.numberTwo);

        console.log(mult);
        res.send(mult);

    } else if (req.body.type == 'dividedBy') {
        console.log('divide!');
        divide = divide(req.body.numberOne, req.body.numberTwo);

        console.log(divide);
        res.send(divide);
    }
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
