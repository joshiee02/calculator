let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

const display = document.querySelector('#displayValue');
let displayValue = '';

const numButtons = document.querySelectorAll('.buttons'); //each button to be inserted in a variable and 
numButtons.forEach(button => button.onclick = () => { //show the value currently being used in screen 
    displayValue += button.value;                     
    display.textContent = displayValue;               

    if(calcValues.operator){ 
        calcValues.secondValue = displayValue;
    }else calcValues.firstValue = displayValue; 
});

let calcValues = {
    firstValue: null,
    operator: null,
    secondValue: null,
};

let calcResult = 0;
function calc(operator, firstNum, secondNum){   //use to calculate using the values and operators set by the user
    calcResult = operator(firstNum, secondNum); //also shows the calculated result in the screen
    displayValue = calcResult;
    display.textContent = displayValue;
}

let calcOperators = [];
const operatorButtons = document.querySelectorAll('.operatorButtons')
operatorButtons.forEach(operator => operator.onclick = () => { //a conveyor type array where previous operator and current operator are recycled through
    calcValues.operator = (operator.value == '+') ? add:        //which is needed for concatenating operators, for example 2 + 3 - 5 * 6
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
        calcOperators.shift();
        calc(calcOperators[0], calcResult, +calcValues.secondValue);
    }else calc(calcOperators[0], +calcValues.firstValue, +calcValues.secondValue);

    calcValues.secondValue = '';
};

const numDel = document.querySelector('.numDel'); 
numDel.onclick = () => {    //removes all values
    displayValue = '';
    display.textContent = displayValue;
    calcValues.firstValue = null;
    calcValues.secondValue = null;
    calcValues.operator = null;
    calcResult = 0;
    calcOperators = [];
};

