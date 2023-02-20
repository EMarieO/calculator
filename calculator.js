const calculator = document.querySelector('.container');
const display = document.querySelector('#display');
const numberBtn = document.querySelectorAll('.numbBtn');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equals');
const backspace = document.querySelector('#backspace');
const decimal = document.querySelector('#decimal');

let current = '';
let previous = '';
let operator = '';
let total = '';
let currentOperator = false;

function add(x, y) {
    return x + y;
};

function subt(x, y) {
    return x - y;
};

function mult(x, y) {
    return x * y;
};

function div(x, y) {
    if (y === 0) {
        return "No";
        
    } else {
    return x / y;
  }
};

function operate() {
    y = parseFloat(current);
    x = parseFloat(previous);
    
    if (operator ===  '+') {
        current = (add(x, y)).toFixed(8);
    }
    else if (operator === '-') {
        current = subt(x, y);
    }
    else if (operator === '*') {
        current = (mult(x, y)).toFixed(8);
    }
    else if (operator === '/') {
        current = div(x, y);
    } 
roundToTwo(current);
console.log(current);
previous = '';
operator = '';
currentOperator = false;
};

operatorBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        getOp(e.target.textContent);
    });
});

numberBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        getNum(e.target.textContent);
    });
});


window.addEventListener("keydown", keyboard);
clearBtn.addEventListener("click", clearButton);
equalBtn.addEventListener("click", operate);
backspace.addEventListener("click", backspaceB);
decimal.addEventListener("click", addDecimal);

function roundToTwo(num) {
    display.textContent = +(Math.round(num + "e+2")  + "e-2");
}

function clearButton() {
    operator = '';
    current = '';
    previous = '';
    total = '';
    display.textContent = '';
    decimal.disabled = false;
    console.log('clear!');
}

function getNum(number) {
    // if (display.textContent === "No" || Number.isNaN(current)) {
    //     clearButton();
    // }
    if (current.length > 10) {
        return;
    }
    current += number;
    display.textContent = current;
    console.log(current);
}

function addDecimal() {
    if (current.includes('.')) {
        decimal.disabled = true;
    } else {
        display.textContent += ".";
        current += ".";
        decimal.disabled = false;
    }  
}

function getOp(operatorVal) { 
    if (display.textContent === "No" || Number.isNaN(current)) {
        clearButton();
    } 
    if (currentOperator = true && !current) {
        return;
    }
    if (previous && current) {
        operate();
        
    }
    operator = operatorVal;
    console.log(operator);
    previous = current;
    display.textContent = previous;
    current = '';
    decimal.disabled = false;
    currentOperator = true;
}

function backspaceB() {
    current = current.substring(0, current.length - 1);
    display.textContent = current;
    console.log(current);
}

function keyboard(e) {
    if (e.key >= 0 && e.key <= 9) {
        getNum(e.key);
 } 
    else if (e.key === ".") {
        addDecimal();
 }
    else if (e.key === "Enter") {
         operate();
 }
    else if (e.key === "Backspace") {
        backspaceB();
 }
    else if (e.key === "Escape") {
        clearButton();
 }
    else if (e.key === "+" || "-" || "/" || "*") {
        getOp(e.key);     
 }
}
