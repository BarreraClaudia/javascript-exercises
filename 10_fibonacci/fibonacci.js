const fibonacci = (num) => {
  num = Number(num);

  if (num === 0) return 0;
  if (num < 0) return 'OOPS';

  let fib = [1, 1];

  for (i = 1; i <= num - 2; i++) {
    fib.push(fib[i] + fib[i - 1]);
  }

  return fib.pop();
};

// Do not edit below this line
module.exports = fibonacci;
