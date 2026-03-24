const palindromes = (string) => {
  string = string
    .replace(/[^\w\s]|_/g, '')
    .toLowerCase()
    .replaceAll(' ', '');

  const reversed = string.split('').reverse().join('');

  return string === reversed;
};

// Do not edit below this line
module.exports = palindromes;
