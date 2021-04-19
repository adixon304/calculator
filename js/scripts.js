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

function clearDisplay() {
    document.getElementById('display').value = '';
}

function setNumber(numberValue) {
    if (number1 == 0 && number2 == 0) {
        document.getElementById('display').value = document.getElementById('display').value + numberValue;
    } else {
        document.getElementById('display').value = numberValue;
    };
}

function setDecimal(decimalValue) {
    document.getElementById('display').value = document.getElementById('display').value + decimalValue;
    document.getElementById('decimal').disabled = true;
}

function backSpace() {
    let displayValue = document.getElementById('display').value;
    document.getElementById('display').value = displayValue.substr(0, displayValue.length - 1);
}


function clearValues() {
    number1 = 0;
    number2 = 0;
    operator = '';
    document.getElementById('decimal').disabled = false;
    clearDisplay();
}

function setOperator(operatorValue) {

    if (number1 == 0) {
        number1 = Number(document.getElementById('display').value);
    } else if (number2 == 0) {
        number2 = Number(document.getElementById('display').value);
    };

    if (number1 !==0 && number2 !==0 && operator !== '' ) {
        calculate();
     } 
     else {
        clearDisplay();
    };

    operator = operatorValue;

    document.getElementById('decimal').disabled = false;
}

function calculate() {

    //Set 2nd number to evaluate
    number2 = Number(document.getElementById('display').value);

    //Sanity check: can't divide by 0
    if (number2 == 0 && operator == "/") {
        alert("You can't divide by 0!");
        clearValues();
        return;
    };

    //Sanity check: make sure all values are set
    if (number1 == 0 || number2 == 0 || operator == '') {
        return;
    };

    //Run operate function and round to nearest 2 decimal values to display
    let calculation = operate(operator, number1, number2);
    document.getElementById('display').value =  Math.round((calculation + Number.EPSILON) * 100) / 100

    //Reset all default values and set number1 to our calculation to allow for multiple operands
    number1 = calculation;
    number2 = 0;
    operator = '';
    document.getElementById('decimal').disabled = false;

}