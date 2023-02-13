function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}
function percent(a, b) {
  return a * 0.01 * b;
}
function opposite(a) {
  return a * -1;
}

function operate(operator, operand1, operand2) {
  switch (operator) {
    case "+":
      return add(operand1, operand2);
    case "-":
      return subtract(operand1, operand2);
    case "*":
      return multiply(operand1, operand2);
    case "/":
      return divide(operand1, operand2);
    case "%":
      return percent(operand1, operand2);
  }
}

const display = document.querySelector(".display");
const buttons = document.querySelector(".btn-container");
let operand1 = 0;
let operand2 = 0;
let operator = "";

buttons.addEventListener("click", (e) => {
  let btn = e.target;
  if (btn.className.includes("key")) {
    display.innerText += btn.value;
  } else if (btn.className.includes("operator")) {
    operand1 = +display.innerText;
    display.innerText = "";
    operator = btn.value;
  } else if (btn.id == "result") {
    operand2 = +display.innerText;
    display.innerText = operate(operator, operand1, operand2);
  } else if (btn.id == "clear") {
    display.innerText = "";
    operand1 = 0;
    operand2 = 0;
    operator = "";
  }else if (btn.id == "negative"){
    display.innerText = opposite(+display.innerText)
  }
});
