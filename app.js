const display = document.querySelector('.display-screen');
const firstDisplay = document.querySelector('.bottom-screen');
const secondDisplay = document.querySelector('.top-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear-btn');
const equal = document.querySelector('.equal-btn');
//const decimal = document.querySelector('.decimal-btn');
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
//console.log(decimal)


let currentNum = ''
let previousNum = ''
let operator = ''
//let dot = false
/*const logNumber = (number) => {
    if (num1.length < 10) {
        num1 += number;
        display.textContent = num1
    } else if (num1 === Number) {
        num2 += number
        display.textContent = num2
    }
}*/
//console.log(logNumber())
// Event listener for all number buttons. Found it easier to keep the logic of displaying numbers all within instead of within another function.
numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        //console.log(number)
        if (currentNum.length < 12){
            currentNum += e.target.textContent
            firstDisplay.textContent = currentNum    
        } else if (!e.target.textContent.includes('.')){
            currentNum = e.target.textContent
            currentNum += '.'
            firstDisplay.textContent = currentNum
        }   
    })
})
/*numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '.' && !dot ){
            dot = true;
        } else if (e.target.innerText === '.' && dot){
            return
        }
        num1 += e.target.innerText;
        display.innerText = num1
    })
})*/
// Event listener for all operator buttons. Displays numbers with operators to create equations with the help of a another function. I was not able to cram everything within itself and get it functioning properly. Opted to use another function with some help.
operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        //console.log(operator);
        logOperator(e.target.textContent)
        secondDisplay.textContent = previousNum + ' ' + e.target.textContent
        firstDisplay.textContent = currentNum

        //operator += e.target.textContent
        //previousNum = currentNum
        //firstDisplay.textContent = currentNum
        //currentNum = ''
        //if (currentNum){
          //  secondDisplay.textContent = previousNum + ' ' + operator
           // firstDisplay.textContent = ''
        //}
        
        //console.log(display)
    })
})

const logOperator = (oper) => {
    operator = oper
    previousNum = currentNum
    secondDisplay.textContent = previousNum
    currentNum = ''
    firstDisplay.textContent = ''
}

const roundNum = (num) => {
    return Math.round(num * 1000) / 1000
}

/*const logPercent = (currentNum, previousNum) => {
    return (previousNum * 100) / currentNum;
    
}*/

//percent.addEventListener('click', () => {
    
//})

//console.log(logPercent(100, 10));

clear.addEventListener('click', () => {
    previousNum = ''
    currentNum = ''
    operator = ''
    firstDisplay.textContent = ''
    secondDisplay.textContent = ''
})
/*calcButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if (e.target.innerText) {
            display.innerText += e.target.innerText;
        } else if (e.target.id === 'clear-btn') {
            display.innerText = '';
        }
    })
})*/

/*const clearDisplay = () => {
    display.innerText = ' ';
}*/
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
/*addSum = (b) => {
    let sum = 0;
    for (let a = 0; a < b; a++) {
        sum+=b[a];
    }
    return sum;
}
console.log(addSum(4))*/

/*calculate = (operator, a, b) => {
    if (operator === '+') {
        return addNum(a, b);
    } else if (operator === '-') {
        return minusNum(a, b);
    } else if (operator === '*') {
        return multiplyNum(a, b);
    } else if (operator === '/' && b != 0) {
        return divideNum(a, b);
    }
    //display.textContent = ''
    //console.log(addNum(num1, num2));
}*/
/*equal.addEventListener('click', () => {
    if (operator && num1 && num2) {
        calculate()
    }
})*/
//equal.addEventListener('click', (calculate))
//console.log(operator, num1, num2);
/*calculate = (num1, operator, num2) => {
    num1 = Number(num1)
    num2 = Number(num2)
    if (operator === '+') {
        return num1 + num2
    } else if (operator === '-') {
        return num1 - num2
    } else if (operator === '*') {
        
    } else if (operator === '/' && b != 0) {
        
    } 
    display.textContent = ''
    //operator = operator.toString();
    //console.log(addNum(num1, num2));
}*/
/*console.log(calculate('+', 1, 1));
console.log(calculate('-', 2, 1));
console.log(calculate('*', 2, 3));
console.log(calculate('/', 100, 2));
//console.log(calculate(1, '+', 1));
/*if (num1 === '' || operator === '' || num2 === '') return;
    let result = calculate(num1, operator, num2);
    result = result.toString();*/