const add = (num1, num2) => num1 + num2;

const subtract = (num1, num2) => num1 - num2;

const sum = (numArr) => numArr.reduce((acc, cv) => acc + cv, 0);

const multiply = (numArr) => numArr.reduce((acc, cv) => acc * cv, 1);

const power = (num, power) => num ** power;

const factorial = (num) => (num === 0 ? 1 : factorial(num - 1) * num);

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
