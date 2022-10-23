const display = document.querySelector(".display-screen");
//const numButtons = document.getElementById("number");
const calcButtons = document.querySelectorAll('.calc-button');

calcButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (btn.innerText) {
            display.innerText += btn.innerText;
        } else if (btn.classList.contains('clear-btn')) {
            
        }
    })
})

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