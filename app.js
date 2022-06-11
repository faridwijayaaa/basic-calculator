const calcuScreen = document.querySelector(".calcu-screen");

const updateScreen = (number) => {
    calcuScreen.value = number;
};

const numbers = document.querySelectorAll(".number");
const operatos = document.querySelectorAll(".operator");

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

operatos.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

let temp = '';
let prevNumber = '';
let calcuOperator = '';
let currentNumber = '0';

const equalSign = document.querySelector(".equal-sign"); 

equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentNumber);
    temp = currentNumber;
})

const inputNumber = (number) => {
    if (currentNumber === '0') {
        currentNumber = number;
    } else if (temp == currentNumber) {
        currentNumber = number;
    } else {
        currentNumber += number;
    }
}

const inputOperator = (operator) => {
    if (calcuOperator === '') {
        prevNumber = currentNumber;
    }

    calcuOperator = operator;
    currentNumber = '';
}

const calculate = () => {
    let result = '';
    switch (calcuOperator) {
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = parseFloat(prevNumber) - parseFloat(currentNumber);
            break;
        case "*":
            result = parseFloat(prevNumber) * parseFloat(currentNumber);
            break;
        case "/":
            result = parseFloat(prevNumber) / parseFloat(currentNumber);
        default:
            break;
    }
    currentNumber = result;
    calcuOperator = '';
}

const allClear = document.querySelector(".all-clear");

const clearAll = () => {
    prevNumber = ''
    calcuOperator = '';
    currentNumber = '0';
}

allClear.addEventListener("click", () => {
    clearAll();
    updateScreen(currentNumber);
})

const decimal = document.querySelector(".decimal");

const inputDecimal = (dot) => {
    if (currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}

decimal.addEventListener("click", (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})


// Masih belum sempurna, yang harus dikerjain:
// - setelah result kita mengeklik number baru 
//   seharusnya tampil number yang baru kita klik saja (DONE)
// - tidak bisa melakukan operator terus menerus, contoh
//   7 - 1 - 1 - 1
// - Memasukan operator kedalam Screen 