var sum = function (x,y){
    var number = x + y;
    number = number.toString(); //the server in it's message body cannot return a number - only strings
    return number;
};

var diff = function(x,y){
    var number = x - y;
    number = number.toString();
    return number
};

var mult = function (x,y){
    var number = x * y;
    number = number.toString(); //the server in it's message body cannot return a number - only strings
    return number;
};

var divide = function(x,y){
    var number = x / y;
    number = number.toString();
    return number
};



exports.sum = sum;
exports.diff = diff;
exports.mult = mult;
exports.divide = divide;
