let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let calcValues = {
    firstValue: undefined,
    operator: '',
    secondValue: undefined,
}


const display = document.querySelector('#displayValue');
let displayValue = '';

let calcResult = 0;
function calc(operator, firstNum, secondNum){
    calcResult = operator(firstNum, secondNum);
    displayValue = calcResult;
    display.textContent = displayValue;
}

const numButtons = document.querySelectorAll('.buttons');
    numButtons.forEach(button => button.onclick = () => {
        displayValue += button.value;
        display.textContent = displayValue;

        calcValues.operator ? calcValues.secondValue = displayValue :  calcValues.firstValue = displayValue;
        
    });

let calcOperators = [];
const operatorButtons = document.querySelectorAll('.operatorButtons')
operatorButtons.forEach(operator => operator.onclick = () => {

calcValues.operator = (operator.value == '+') ? add:
    (operator.value == '-') ? subtract:
    (operator.value == '*') ? multiply:
    divide;
calcOperators.push(calcValues.operator);
if(calcValues.operator && calcValues.firstValue && calcValues.secondValue){
    if(calcResult){
        calcOperators.shift();
        calc(calcOperators[0], calcResult, +calcValues.secondValue);
    }else calc(calcOperators[0], +calcValues.firstValue, +calcValues.secondValue); 
}
displayValue = '';
});

const numEquals = document.querySelector('.numEquals');
    numEquals.onclick = () => {
        if(calcResult){
            calc(calcValues.operator, calcResult, +calcValues.secondValue);
        }else calc(calcValues.operator, +calcValues.firstValue, +calcValues.secondValue)
    };

const numDel = document.querySelector('.numDel');
    numDel.onclick = () => {

        //reset 
        displayValue = '';
        display.textContent = displayValue;
        calcValues.firstValue = undefined;
        calcValues.secondValue = undefined;
        calcValues.operator = '';
        calcResult = 0;
        calcOperators = [];

    };

