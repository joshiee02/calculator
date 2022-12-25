let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;

function operator(calc){
    return +calc
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



