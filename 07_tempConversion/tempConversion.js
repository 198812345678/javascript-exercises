const convertToCelsius = function(f) {
  return roundHalfUp((f - 32) * (5/9), 1);
};

const convertToFahrenheit = function(c) {
  return roundHalfUp(c * (9/5) + 32, 1);
};

function roundHalfUp(num, decimal) {
  return Math.round(num * 10**decimal) / 10**decimal;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
