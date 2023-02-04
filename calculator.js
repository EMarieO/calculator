const display = document.querySelector('#display');
const numberBtn = document.querySelectorAll('.numbBtn');
const operatorBtn = document.querySelectorAll('.operator');
const clearBtn = document.querySelector('#clear');
const equalBtn = document.querySelector('#equals');

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
    display.textContent = current;
    console.log(current);
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

clearBtn.addEventListener("click", clearButton);

equalBtn.addEventListener("click", operate);


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
}