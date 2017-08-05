const add = () => {
    const num1 = $("#num1").val();
    const num2 = $("#num2").val();
    $.post('add', {number1: num1, number2: num2}, (data) => {
        $('#result').text(data);
    })
};

const sub = () => {
    const num1 = $("#num1").val();
    const num2 = $("#num2").val();
    $.post('sub', {number1: num1, number2: num2}, (data) => {
        $('#result').text(data);
    })
};

const mul = () => {
    const num1 = $("#num1").val();
    const num2 = $("#num2").val();
    $.post('mul', {number1: num1, number2: num2}, (data) => {
        $('#result').text(data);
    })
};

const div = () => {
    const num1 = $("#num1").val();
    const num2 = $("#num2").val();
    $.post('div', {number1: num1, number2: num2}, (data) => {
        $('#result').text(data);
    })
};