const display = document.querySelector('.display-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
//const numButtons = document.getElementById("number");
//const calcButtons = document.querySelectorAll('.calc-button');
console.log(numberBtn);
console.log(operatorBtn);

let num1 = ''
let num2 = ''
let operator = ''
//let dot = false
const logNumber = (number) => {
    if (num1.length < 10) {
        num1 += number;
        display.textContent = num1
    }
}

numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        logNumber(e.target.textContent)
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
const logOperator = (op) => {
    operator = op
    display.textContent = num1
    num1 = ''
    //display.textContent = ''
}

operatorBtn.forEach(operator => {
    operator.addEventListener('click', (e) => {
         logOperator(e.target.textContent);
    })
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
    if (result = a + b) {
        return result;
    }
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

/*addSum = (b) => {
    let sum = 0;
    for (let a = 0; a < b; a++) {
        sum+=b[a];
    }
    return sum;
}
console.log(addSum(4))*/

operate = (operator, a, b) => {
    a = num(a)
    b = num(b)
    if (operator === '+') {
        return addNum(a, b);
    } else if (operator === '-') {
        return minusNum(a, b);
    } else if (operator === '*') {
        return multiplyNum(a, b);
    } else if (operator === '/' && b != 0) {
        return divideNum(a, b);
    }
}