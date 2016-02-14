$(document).ready(function() {
    $('#post-data').on('click', clickPostData);
    $('#clear').on('click', clearData);
    $('.operator-buttons').on('click', operatorButton);
});

var selectedOperatorButton;
var values = {};

function clickPostData() {
    event.preventDefault();
    console.log('send form');

    $.each($('#post-form').serializeArray(), function(i, field) {
        values[field.name] = field.value;

    });

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
            //clickGetData();
            $('.calculated-total').text(data);
        }

    });


}

//function clickGetData() {
//    event.preventDefault();
//    $.ajax({
//        type: 'GET',
//        url: '/data',
//        success: function(data) {
//            console.log('get data ' + data);
//            $('.calculated-total').append('hello!');
//        }
//    });
//}

function operatorButton() {
    event.preventDefault();
    selectedOperatorButton = this.id;
    console.log('selectedOperatorButton: ' + selectedOperatorButton);

    values.type = selectedOperatorButton;
    console.log(values);

}

function clearData() {
    event.preventDefault();
    console.log('clear form');
    $('#post-form').find('input[type=text]').val('');
    $('.calculated-total').text('');
}