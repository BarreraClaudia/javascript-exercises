const convertToCelsius = function (tempInF) {
  // Formula: °C = (°F - 32) ÷ (9/5)
  let tempInC = (tempInF - 32) / (9 / 5);

  if (!Number.isInteger(tempInC)) {
    tempInC = Number(tempInC.toFixed(1));
  }

  return tempInC;
};

const convertToFahrenheit = function (tempInC) {
  // Formula: °F = (°C × 9/5) + 32
  let tempInF = tempInC * (9 / 5) + 32;

  if (!Number.isInteger(tempInF)) {
    tempInF = Number(tempInF.toFixed(1));
  }

  return tempInF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
