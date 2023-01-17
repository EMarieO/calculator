const display = document.querySelector('#display');
const numberbtn = document.querySelectorAll('.numbtn');
const addbtn = document.querySelector('#addition');

let firstVari;   

// const subbtn = document.querySelector('#subtract');
// const multbtn = document.querySelector('#multiply');
// const divbtn = document.querySelector('#divide');
// const clearbtn = document.querySelector('#clear');
// const equalbtn = document.querySelector('#equals');


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

addbtn.addEventListener("click", () => {
    console.log('clicked!');
});

numberbtn.forEach((btn) => {
    btn.addEventListener("click", firstVariable);
})

 function firstVariable() {
      display.textContent += this.textContent;
      console.log(this.textContent);
      
    }


