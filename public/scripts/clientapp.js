$(document).ready(function() {
    $('#post-data').on('click', clickPostData); //equals - change name
    $('#clear').on('click', clearData);
    $('.operator-buttons').on('click', operatorButton);
    $('.number-buttons').on('click', numberButton);
});

var operator;
var selectedNumberButton = '';
var values = {};

function clickPostData() {
    event.preventDefault();
    values.numberTwo = selectedNumberButton;
    console.log(values);

    $.ajax({
        type: 'POST',
        url: '/data',
        data: values,
        beforeSend: function() {
            console.log('before!');
        },
        success: function(data) {
            console.log('From Server: ', data);
            console.log(data);
            $('.calculated-total').text(data);
        }

    });

}

function operatorButton() {
    event.preventDefault();
    operator = this.id;
    console.log('Operator: ' + operator);
    values.numberOne = selectedNumberButton;
    values.type = operator;
    selectedNumberButton = '';
    console.log(values);
    $('.calculated-total').text(operator + ' ');
}

function numberButton() {
    event.preventDefault();
    selectedNumberButton += this.id;
    console.log(selectedNumberButton);
    if(values.type) {
        values.numberTwo = selectedNumberButton;
    } else {
        values.numberOne = selectedNumberButton;
    }
    console.log(values);
    $('.calculated-total').text(selectedNumberButton + ' ');
}

function clearData() {
    event.preventDefault();
    console.log('clear form');
    $('#post-form').find('input[type=text]').val('');
    $('.calculated-total').text('');
    selectedNumberButton = '';
    values = {};
}