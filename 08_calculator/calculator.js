const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
	
};

const sum = function(args) {
  let sum = 0;

  for (let i = 0; i < args.length; i++) {
    if(typeof args[i] === "number") {
      sum += args[i];
    }
  }
  return sum;
  
};

const multiply = function(args) {
  let a = 1;
  for (let i = 0; i < args.length; i++) {
    a *= args[i];
  }
  return a;
};

const power = function(a, p) {
  return a ** p;
	
};

const factorial = function(a) {
  if (a === 0) {
    return 1;
  }
  
  if (a < 0) {
    return "undefined";
  }

  let result = 1;
  for (let i = 1; i <= a; i++) {
    result = result * i;
  }

  return result;
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
