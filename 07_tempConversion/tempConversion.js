const convertToCelsius = function(fTemp) {
  let newTemp = (fTemp - 32) * (5/9);
  // round to 1 place with .toFixed() which returns a string and convert back to a number with +
  let cTemp = +newTemp.toFixed(1)
  return cTemp;
};

const convertToFahrenheit = function(cTemp) {
  let newTemp = (cTemp *9/5 + 32);
  // round to 1 place with .toFixed() which returns a string and convert back to a number with +
  let fTemp = +newTemp.toFixed(1)
  return fTemp;
  
  
  // return (cTemp *9/5 + 32);
};

convertToCelsius(100)
convertToFahrenheit(100)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
