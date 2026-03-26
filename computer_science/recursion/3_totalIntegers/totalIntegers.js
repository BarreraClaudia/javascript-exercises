const isObject = (obj) => typeof obj === 'object' && obj !== null;

const totalIntegers = function (obj) {
  if (!isObject(obj)) return;

  let integers = 0;

  let objValues = Object.values(obj);

  for (const val of objValues) {
    if (Number.isInteger(val)) {
      integers++;
    } else if (isObject(val)) {
      integers += totalIntegers(val);
    }
  }

  return integers;
};

// Do not edit below this line
module.exports = totalIntegers;
