const firstDisplay = document.querySelector('.bottom-screen');
const secondDisplay = document.querySelector('.top-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear-btn');
const equal = document.querySelector('.equal-btn');
const decimalBtn = document.querySelector('.decimal-btn');
const squareRoot = document.querySelector('.square-root');

let currentNum = ''
let previousNum = ''
let operator = ''
//let decimal = ''

// Event listener for all number buttons. Found it easier to keep the logic of displaying numbers all within instead of within another function.
numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        //console.log(number)
        if (currentNum.length < 10){
            currentNum += e.target.textContent;
            firstDisplay.textContent = currentNum;  
        } 
    })
});

// Event listener for all operator buttons. Displays numbers with operators to create equations with the help of a another function. I was not able to cram everything within itself and get it functioning properly. Opted to use another function with some help.
operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        //console.log(operator);
        logOperator(e.target.textContent);
        secondDisplay.textContent = previousNum + ' ' + e.target.textContent;
        firstDisplay.textContent = currentNum;
    })
});
const logOperator = (oper) => {
    operator = oper;
    previousNum = currentNum;
    secondDisplay.textContent = previousNum;
    currentNum = '';
    firstDisplay.textContent = '';
};

const logDecimal = (dot) => {
    //console.log(dot)
    if (!currentNum.includes('.')){
        currentNum += '.';
        firstDisplay.textContent = currentNum;
    }
};
decimalBtn.addEventListener('click', (e) => {
    //console.log(e.target.textContent)
    logDecimal(e.target.textContent);

});

const roundNum = (num) => {
    return Math.round(num * 1000) / 1000;
};

clear.addEventListener('click', () => {
    previousNum = '';
    currentNum = '';
    operator = '';
    firstDisplay.textContent = '0';
    secondDisplay.textContent = '0';
});

calculate = () => {
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    if (operator === '+') {
        previousNum += currentNum;
    } else if (operator === '-') {
        previousNum -= currentNum;
    } else if (operator === 'x') {
        previousNum *= currentNum;
    } else if (operator === '/' && previousNum != 0) {
        previousNum /= currentNum;
    } else if (operator === '%') {
        previousNum = (parseFloat(previousNum * currentNum) / 100);
    }
    
    previousNum = roundNum(previousNum);
    secondDisplay.textContent = '';
    firstDisplay.textContent = previousNum;
    console.log(previousNum);
};

equal.addEventListener('click', () => {
    if(currentNum != '' && previousNum != ''){
        calculate();
        secondDisplay.textContent = '';
        if (previousNum.length < 6){
            firstDisplay.textContent = previousNum;
        }
    }
})

const findSqRt = () => {
    if(!currentNum) return
    currentNum = Math.sqrt(currentNum);
    currentNum = roundNum(currentNum);
    firstDisplay.textContent = currentNum;
}
squareRoot.addEventListener('click', findSqRt);