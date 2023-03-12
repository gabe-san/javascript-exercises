const add = function(a,b) {
	return a + b
};

const subtract = function(a,b) {
	return b > a ? b - a : a - b
};
//forEach or for loop (array[i] iterations)
const sum = function(array) {
  let ini = 0;
  array.forEach(item => {
    ini += item;
  });
  return ini
}
//forEach or for loop (array[i] iterations)
const multiply = function(array) {
  let init= 1;
  array.forEach(item => {
    init *= item;
  });
  return init;
};

const power = function(a,b) {
	return a**b;
};

//recursive or for loop?
const factorial = function(a) {
  if (a === 0 || a === 1) {
    return 1 
  };
	for (let i = a - 1; i >= 1; i--) {
      a *= i;
    }
  return a;
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
