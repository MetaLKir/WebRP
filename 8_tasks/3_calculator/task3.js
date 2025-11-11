const firstNumButton = document.querySelector('#firstNum');
const secondNumButton = document.querySelector('#secondNum');
const resultButton = document.querySelector('#resultNum');
const sumButton = document.querySelector('#sumBtn');
const subButton = document.querySelector('#subBtn');
const mulButton = document.querySelector('#mulBtn');
const divButton = document.querySelector('#divBtn');

const operators = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => {
        if (b === 0) return "Can't divide by 0";
        return a / b;
    },
}

sumButton.onclick = () => calculate(firstNumButton.value, secondNumButton.value, '+');
subButton.onclick = () => calculate(firstNumButton.value, secondNumButton.value, '-');
mulButton.onclick = () => calculate(firstNumButton.value, secondNumButton.value, '*');
divButton.onclick = () => calculate(firstNumButton.value, secondNumButton.value, '/');

function calculate(firstNum, secondNum, operator) {
    const operFunc = operators[operator];
    resultButton.value = operFunc(Number(firstNum), Number(secondNum));
}

