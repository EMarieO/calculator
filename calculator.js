const calculator = document.querySelector('.container')
const display = document.querySelector('#display')
const numberBtn = document.querySelectorAll('.numbBtn')
const operatorBtn = document.querySelectorAll('.operator')
const clearBtn = document.querySelector('#clear')
const equalBtn = document.querySelector('#equals')
const backspace = document.querySelector('#backspace')
const decimal = document.querySelector('#decimal')

let current = '';
let previous = '';
let operator = '';
let total = '';
let currentOperator = false;

function add(x, y) {
    return x + y;
}

function subt(x, y) {
    return x - y;
}

function mult(x, y) {
    return x * y;
}

function div(x, y) {
    if (y === 0) {
        return 'No';
    } 
    return x / y;
}

function operate() {
    if (currentOperator === true && !current) {
        return
    }
    y = Number.parseFloat(current);
    x = Number.parseFloat(previous);
    
    if (operator ===  '+') {
        total = add(x, y);
    }
    else if (operator === '-') {
        total = subt(x, y);
    }
    else if (operator === '*') {
        total = mult(x, y);
    }
    else if (operator === '/') {
        total = div(x, y);
    } 

checkResult(total);
display.textContent = total.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
console.log(total);
current = '';
previous = '';
operator = '';
currentOperator = false;
}


operatorBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        getOp(e.target.textContent);
    })
})

numberBtn.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        getNum(e.target.textContent);
    })
})

window.addEventListener('keydown', keyboard)
clearBtn.addEventListener('click', clearButton)
equalBtn.addEventListener('click', operate)
backspace.addEventListener('click', backspaceB)
decimal.addEventListener('click', addDecimal)

function checkResult() {
    if(total.toString().indexOf('.')) {
        if(total.toString().length > 12) {
            total = total.toPrecision(2);
    }
  }
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
   if (display.textContent === 'No' || total !== '') {
    clearButton();
    }
   if (current.length > 10) {
       return;
    }
    current += number;
    display.textContent = current.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    console.log(current);
}

function addDecimal() {
    if (current === '') {
        current += '0.';
    }
    if (current.includes('.')) {
        decimal.disabled = true;
    } else {
        display.textContent += '.';
        current += '.';
        decimal.disabled = false;
    }  
}

function getOp(operatorVal) { 
    if (display.textContent === 'No') {
        clearButton();
    } 
    if (currentOperator === true && !current) {
        return;
    }
    if (previous && current) {
        operate();   
    }
    if (total) {
        current = total;
        total = ''; 
    }
    operator = operatorVal;
    console.log(operator);
    previous = current;
    display.textContent = previous.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');
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
    } else if (e.key === '.') {
        addDecimal();
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
         operate();
    } else if (e.key === 'Backspace') {
        backspaceB();
    } else if (e.key === 'Escape') {
        clearButton();
    } else if (e.key === '+' || e.key === '-' || e.key === '/' || e.key === '*') {
        getOp(e.key);     
    }
}
