const display = document.querySelector('.display-screen');
const numberBtn = document.querySelectorAll('.number');
const operatorBtn = document.querySelectorAll('.operator');
//const numButtons = document.getElementById("number");
//const calcButtons = document.querySelectorAll('.calc-button');
console.log(numberBtn);
console.log(operatorBtn);

numberBtn.forEach(number => {
    number.addEventListener('click', (e) => {
        if(e.target.innerText === '1') {
            display.innerText += '1'
        }
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