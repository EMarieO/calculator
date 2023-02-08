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
    if (x === 0) {
        return "BeReal";
    }
    return y / x;
};


function operate() {
    x = parseFloat(current);
    y = parseFloat(previous);
    
    if (operator ===  '+') {
        current = add(x, y);
    }
    else if (operator === '-') {
        current = subt(y, x);
    }
    else if (operator === '*') {
        current = mult(x, y);
    }
    else if (operator === '/') {
        current = div(x, y);
    };

roundToTwo(current);
 //   display.textContent = current;
    console.log(current);
};

function roundToTwo(num) {
    display.textContent = +(Math.round(num + "e+2")  + "e-2");
    console.log(current);
}

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

clearBtn.addEventListener("click", clearButton);
equalBtn.addEventListener("click", operate);
backspace.addEventListener("click", backspaceB);
// decimal.addEventListener("click", decimalB);

function clearButton() {
    current = '';
    previous = '';
    display.textContent = '';
    console.log('clear!');
}

function getNum(number) {
    if (display.textContent === "BeReal") {
        clearButton();
    }
    if (current.includes('.')) {
        decimal.disabled = true;
    } else {
        decimal.disabled = false;
    }

    
    current += number;
    display.textContent = current;
    console.log(current);
}

function getOp(operatorVal) {
    if (display.textContent === "BeReal") {
        clearButton();
    }
    if (previous && current !== '') {
        operate();
    }
    operator = operatorVal;
    console.log(operator);
    previous = current;
    display.textContent = previous;
    current = '';
    decimal.disabled = false;
}

function backspaceB() {
    current = current.substring(0, current.length - 1);
    display.textContent = current;
    console.log(current);
}

