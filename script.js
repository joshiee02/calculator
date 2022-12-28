let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

let calcValues = {
    firstValue: '',
    operator: '',
    secondValue: '',
}

let displayValue = '';
let calcResult = 0;


function calc(operator, firstNum, secondNum){
    calcResult = operator(firstNum, secondNum);
    displayValue = calcResult;
    display.textContent = displayValue;
}

const display = document.querySelector('#displayValue');
const numButtons = document.querySelectorAll('.buttons');
    numButtons.forEach(button => button.onclick = () => {
        displayValue += button.value;
        display.textContent = displayValue;
        if(calcValues.operator){
            calcValues.secondValue = displayValue;
        }else calcValues.firstValue = displayValue;
    });


const operatorButtons = document.querySelectorAll('.operatorButtons')
    operatorButtons.forEach(operator => operator.onclick = () => {
    if(calcValues.operator && calcValues.firstValue && calcValues.secondValue){
        if(calcResult){
            calc(calcValues.operator, calcResult, calcValues.secondValue);
        }else calc(calcValues.operator, calcValues.firstValue, calcValues.secondValue)
    }
    else if(!calcValues.operator){
        calcValues.operator = operator.value;
    }else{
        calcValues.operator = undefined;
        calcValues.operator = operator.value;
    }
    displayValue = '';
});

const numEquals = document.querySelector('.numEquals');
    numEquals.onclick = () => {
        if(calcResult){
            calc(calcValues.operator, calcResult, +secondValue);
        }else calc(calcValues.operator, calcValues.firstValue, calcValues.secondValue)
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



