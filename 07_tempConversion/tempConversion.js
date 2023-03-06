const convertToCelsius = function(a) {
  let b = (a -32) * (5/9);
  return (Math.round(b * 10) / 10);
};

const convertToFahrenheit = function(c) {
  let d = ((c * (9/5) + 32));
  return (Math.round(d* 10) / 10);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
