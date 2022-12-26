let add = (x, y) => x + y;
let subtract = (x, y) => x - y;
let multiply = (x, y) => x * y;
let divide = (x, y) => x / y;

function operator(calc, firstNum, secondNum){
    return calc(firstNum, secondNum);
}
let currentValue = '';

const displayValue = document.querySelector('#displayValue');
const allButtons = document.querySelectorAll('.buttons');
    allButtons.forEach(button => button.onclick = () => {
        currentValue += button.value
        displayValue.textContent = currentValue;
    });
const numAddition = document.querySelector('.numAddition');
const numSubtract = document.querySelector('.numSubtract');
const numMultiply = document.querySelector('.numMultiply');
const numDivide = document.querySelector('.numDivide');
const numEquals = document.querySelector('.numEquals');
const numDel = document.querySelector('.numDel');
    numDel.onclick = () => {
        currentValue = '';
        displayValue.textContent = currentValue;
    };



