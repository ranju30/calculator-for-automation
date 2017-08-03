var add = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    $.post('add', {number1: num1, number2: num2}, function (data) {
        $('#result').text(data);
    })
};

var sub = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    $.post('sub', {number1: num1, number2: num2}, function (data) {
        $('#result').text(data);
    })
};

var mul = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    $.post('mul', {number1: num1, number2: num2}, function (data) {
        $('#result').text(data);
    })
};

var div = function () {
    var num1 = $("#num1").val();
    var num2 = $("#num2").val();
    $.post('div', {number1: num1, number2: num2}, function (data) {
        $('#result').text(data);
    })
};