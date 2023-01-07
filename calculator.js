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
    return x / y;
};


function operate(operator, x, y) {
    
    
    if (operator ==  '+') {
        return add(x, y);
    }
    else if (operator == '-') {
        return subt(x, y);
    }
    else if (operator == '*') {
        return mult(x, y);
    }
    else if (operator == '/') {
        return div(x, y);
    };
};

