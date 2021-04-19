let number1 = 0
let number2 = 0
let operator

function add(number1, number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1 * number2;
}

function divide(number1, number2){
    return number1 / number2;
}

function operate(operator, number1, number2){
    switch(operator){
        case "+":
            return add(number1, number2);
            break;
        case "-":
            return subtract(number1, number2);
            break;
        case "*":
            return multiply(number1, number2);
            break;
        case "/":
            return divide(number1, number2);
            break;
    }
}

function setNumber(numberValue) {
    document.getElementById('display').value = document.getElementById('display').value + numberValue;
}

function clearValues() {
    number1 = 0;
    number2 = 0;
    operator = '';
    clearDisplay();
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function setOperator(operatorValue) {
    number1 = Number(document.getElementById('display').value);
    operator = operatorValue;
    clearDisplay();
}

function equals() {
    number2 = Number(document.getElementById('display').value);
    let calculation = operate(operator, number1, number2);
    document.getElementById('display').value = calculation;
}