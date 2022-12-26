let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;
let calcResult = 0;


function operate(calc, firstNum, secondNum){
    calcResult = calc(firstNum, secondNum);
}

let firstValue = '';
let operatorValue ='';
let secondValue ='';

let displayValue = '';
const display = document.querySelector('#displayValue');
const numButtons = document.querySelectorAll('.buttons');
    numButtons.forEach(button => button.onclick = () => {
        displayValue += button.value;
        display.textContent = displayValue;
        if(operatorValue){
            secondValue += +displayValue;
        }else firstValue += +displayValue;
    });

const operatorButtons = document.querySelectorAll('.operatorButtons')
    operatorButtons.forEach(operator => operator.onclick = () => {
        if(!operatorValue){
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
            operate(add, +firstValue, +secondValue);
            display.textContent = calcResult;
        }else if(operatorValue == 'subtract'){
            operate(subtract, +firstValue, +secondValue);
            display.textContent = calcResult;
        }else if(operatorValue == 'multiply'){
            operate(multiply, +firstValue, +secondValue);
            display.textContent = calcResult;
        }else if(operatorValue == 'divide'){
            operate(divide, +firstValue, +secondValue);
            display.textContent = calcResult;
        }
    };

const numDel = document.querySelector('.numDel');
    numDel.onclick = () => {
        displayValue = '';
        display.textContent = displayValue;
    };



