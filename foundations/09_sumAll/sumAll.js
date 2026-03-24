const sumAll = function (num1, num2) {
  if (
    num1 < 0 ||
    num2 < 0 ||
    !Number.isInteger(num1) ||
    !Number.isInteger(num1) ||
    typeof num1 !== 'number' ||
    typeof num2 !== 'number'
  )
    return 'ERROR';

  sum = 0;
  smallNum = Math.min(num1, num2);
  bigNum = Math.max(num1, num2);

  for (i = smallNum; i <= bigNum; i++) {
    sum += i;
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
