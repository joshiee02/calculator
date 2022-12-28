let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let calcResult = 0;
let firstValue = '';
let operatorValue ='';
let secondValue ='';

let displayValue = '';


function operate(calc, firstNum, secondNum){
    calcResult = calc(firstNum, secondNum);
    displayValue = calcResult;
    display.textContent = displayValue;
}

const display = document.querySelector('#displayValue');
const numButtons = document.querySelectorAll('.buttons');
    numButtons.forEach(button => button.onclick = () => {
        displayValue += button.value;
        display.textContent = displayValue;
        if(operatorValue){
            secondValue = displayValue;
        }else firstValue = displayValue;
    });

const operatorButtons = document.querySelectorAll('.operatorButtons')
    operatorButtons.forEach(operator => operator.onclick = () => {
        if(operatorValue ='add' && firstValue && secondValue){
            if(calcResult) {
                operate(add, calcResult, +secondValue);
            }else operate(add, +firstValue, +secondValue);
        }
        else if(operatorValue ='subtract' && firstValue && secondValue){
            if(calcResult) {
                operate(subtract, calcResult, +secondValue);
            }else operate(subtract, +firstValue, +secondValue);
        }
        else if(operatorValue ='multiply' && firstValue && secondValue){
            if(calcResult) {
                operate(multiply, calcResult, +secondValue);
            }else operate(multiply, +firstValue, +secondValue);
        }
        else if(operatorValue ='divide' && firstValue && secondValue){
            if(calcResult) {
                operate(divide, calcResult, +secondValue);
            }else operate(divide, +firstValue, +secondValue);
        }
        else if(!operatorValue){
            operatorValue += operator.value;
        }else{
            operatorValue = '';
            operatorValue += operator.value;
        }
        displayValue = '';   
});
const numEquals = document.querySelector('.numEquals');
    numEquals.onclick = () => {
        if(operatorValue == 'add'){
            if(calcResult) {
                operate(add, calcResult, +secondValue);
            }else operate(add, +firstValue, +secondValue);
        }else if(operatorValue == 'subtract'){
            if(calcResult) {
                operate(subtract, calcResult, +secondValue);
            }else operate(subtract, +firstValue, +secondValue);
        }else if(operatorValue == 'multiply'){
            if(calcResult) {
                operate(multiply, calcResult, +secondValue);
            }else operate(multiply, +firstValue, +secondValue);
        }else if(operatorValue == 'divide'){
            if(calcResult) {
                operate(divide, calcResult, +secondValue);
            }else operate(divide, +firstValue, +secondValue);
        }
    };

const numDel = document.querySelector('.numDel');
    numDel.onclick = () => {

        //reset 
        displayValue = '';
        display.textContent = displayValue;
        firstValue = '';
        secondValue = '';
        operatorValue = '';
        calcResult = 0;

    };



