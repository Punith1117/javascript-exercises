const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const sum = function(arr) {
  let sum = 0;
  arr.forEach(findSum);

  function findSum(item) {
    sum += item;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  arr.forEach(number => {
    product *= number;
  });

  return product;
};

const power = function(base, power) {
	let product = 1;
  for (i = 0; i < power; i++) {
    product *= base;
  }
  return product;
};

const factorial = function(max) {
  if (max === 0) return 1;
	let fac = 1;
  for ( i = max; i > 0; i--) {
    fac *= i;
  }
  return fac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
