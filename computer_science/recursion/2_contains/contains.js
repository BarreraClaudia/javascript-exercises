const contains = function (obj, targetValue) {
  for (const key in obj) {
    const val = obj[key];

    const match = Number.isNaN(targetValue)
      ? Number.isNaN(val)
      : val === targetValue;

    if (match) return true;

    if (typeof val === 'object' && val !== null) {
      if (contains(obj[key], targetValue)) return true;
    }
  }
  return false;
};

// Do not edit below this line
module.exports = contains;
