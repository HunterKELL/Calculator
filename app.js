const display = document.querySelector('.display-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
const clear = document.querySelector('.clear-btn');
const equal = document.querySelector('.equal-btn');
//const numButtons = document.getElementById("number");
//const calcButtons = document.querySelectorAll('.calc-button');
console.log(numberBtn);
console.log(operatorBtn);
console.log(clear);
console.log(equal);


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
numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        //console.log(number)
        if (currentNum.length < 10)
        currentNum += e.target.textContent
        display.textContent = currentNum
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
operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
        //console.log(operator);
        operator += e.target.textContent
        previousNum = currentNum
        currentNum = ''
        if (currentNum){
            display.textContent = previousNum + ' ' + operator
            display.textContent = currentNum
        }
        
        console.log(display)
    })
})

clear.addEventListener('click', () => {
    previousNum = ''
    currentNum = ''
    operator = ''
    display.textContent = ''
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
    } else if (operator === '*') {
        previousNum *= currentNum;
    } else if (operator === '/' && b != 0) {
        previousNum /= currentNum;
    }
    console.log(previousNum)
    //display.textContent = ''
    //console.log(addNum(num1, num2));
}
equal.addEventListener('click', () => {
    calculate();
})
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