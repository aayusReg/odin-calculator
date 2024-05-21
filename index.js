const digits = document.querySelector(".left");
const operators = document.querySelector(".right");
const operatorsBtn = operators.querySelectorAll("button");
const digitBtn = digits.querySelectorAll("button");
const displayCurrent = document.querySelector(".current");
const displayPrevious = document.querySelector(".previous");
const clearBtn = document.querySelector(".clear");
const equalsBtn = document.querySelector(".equal");
let currentNumber = "";
let previousNumber = "";
let operator = null;

const add = function (num1, num2) {
  return num1 + num2;
};
const subtract = function (num1, num2) {
  return num1 - num2;
};
const multiply = function (num1, num2) {
  return num1 * num2;
};
const divide = function (num1, num2) {
  return num1 / num2;
};
const clear = function () {
  currentNumber = "";
  previousNumber = "";
  displayCurrent.textContent = null;
  displayPrevious.textContent = null;
  operator = undefined;
};
const displaySecondNumber = function (operat) {
  operator = operat;
  if (previousNumber !== "") {
    operate();
  }
  previousNumber = currentNumber;
  currentNumber = "";
  displayCurrent.textContent = "";
  displayPrevious.textContent = `${previousNumber} ${operator}`;
};

const displayFirstNumber = function (number) {
  if (number === "." && currentNumber.includes(".")) return;
  currentNumber = currentNumber.toString() + number.toString();
  displayCurrent.textContent = currentNumber;
};

const operate = function () {};

digitBtn.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.textContent === "Clear") {
      clear();
      return;
    }
    let number = button.textContent;

    displayFirstNumber(number);
  });
});

operatorsBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent === "=") return;
    displaySecondNumber(btn.textContent);
  });
});

equalsBtn.addEventListener("click", () => {
  operate();
});
