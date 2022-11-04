const display = document.querySelector('.display-screen');
const firstDisplay = document.querySelector('.bottom-screen');
const secondDisplay = document.querySelector('.top-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear-btn');
const equal = document.querySelector('.equal-btn');
const decimalBtn = document.querySelector('.decimal-btn');
const percent = document.querySelector('.percent-btn');
const squareRoot = document.querySelector('.square-root');
//const numButtons = document.getElementById("number");
//const calcButtons = document.querySelectorAll('.calc-button');
console.log(numberBtn);
console.log(operatorBtn);
console.log(clear);
console.log(equal);
console.log(firstDisplay);
console.log(secondDisplay);
console.log(decimalBtn)


let currentNum = ''
let previousNum = ''
let operator = ''
//let decimal = ''

//console.log(logNumber())
// Event listener for all number buttons. Found it easier to keep the logic of displaying numbers all within instead of within another function.
numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        //console.log(number)
        if (currentNum.length < 10){
            currentNum += e.target.textContent
            firstDisplay.textContent = currentNum    
        } 
    })
})

// Event listener for all operator buttons. Displays numbers with operators to create equations with the help of a another function. I was not able to cram everything within itself and get it functioning properly. Opted to use another function with some help.
operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        //console.log(operator);
        logOperator(e.target.textContent)
        secondDisplay.textContent = previousNum + ' ' + e.target.textContent
        firstDisplay.textContent = currentNum
    })
})

const logOperator = (oper) => {
    operator = oper
    previousNum = currentNum
    secondDisplay.textContent = previousNum
    currentNum = ''
    firstDisplay.textContent = ''
}

const logDecimal = (dot) => {
    console.log(dot)
    if (!firstDisplay.textContent.indexOf(dot)){
        firstDisplay.textContent = 0 + dot
    } else if (dot.length < 1){
        firstDisplay.textContent = dot
    }
}
decimalBtn.addEventListener('click', (e) => {
    //console.log(e.target.textContent)
    logDecimal(e.target.textContent)

})

const roundNum = (num) => {
    return Math.round(num * 1000) / 1000
}

clear.addEventListener('click', () => {
    previousNum = ''
    currentNum = ''
    operator = ''
    firstDisplay.textContent = ''
    secondDisplay.textContent = ''
})

addNum = (a, b) => {
    return a + b
}

minusNum = (a, b) => {
    if (result = a - b) {
        return result;
    }
}

multiplyNum = (a, b) => {
    if (result = a * b) {
        return result;
    }
}

divideNum = (a, b) => {
    if (result = a / b) {
        return result;
    }
}
console.log(addNum(2, 2));
console.log(minusNum(4, 2));
console.log(multiplyNum(3, 2));
console.log(divideNum(6, 2));

calculate = () => {
    previousNum = Number(previousNum)
    currentNum = Number(currentNum)
    if (operator === '+') {
        previousNum += currentNum;
    } else if (operator === '-') {
        previousNum -= currentNum;
    } else if (operator === 'x') {
        previousNum *= currentNum;
    } else if (operator === '/' && previousNum != 0) {
        previousNum /= currentNum;
    } else if (operator === '%') {
        previousNum = (parseFloat(previousNum * currentNum) / 100)
    }
    
    previousNum = roundNum(previousNum)
    //previousNum = previousNum.toString()
    //currentNum = previousNum.toString()
    //secondDisplay.textContent = ''
    //firstDisplay.textContent = previousNum
    secondDisplay.textContent = ''
    firstDisplay.textContent = previousNum
    console.log(previousNum)
    //display.textContent = ''
    //console.log(addNum(num1, num2));
}
equal.addEventListener('click', () => {
    if(currentNum != '' && previousNum != ''){
        calculate();
        secondDisplay.textContent = ''
        if (previousNum.length < 6){
            firstDisplay.textContent = previousNum
        }
    }
   
})

const findSqRt = () => {
    if(!currentNum) return
    currentNum = Math.sqrt(currentNum);
    currentNum = roundNum(currentNum)
    firstDisplay.textContent = currentNum;
}
squareRoot.addEventListener('click', findSqRt)