// FUNDAMENTALS EXERCISES
// functiom
function isDivisible(n, x, y) {
  return (n % x == 0 && n % y == 0)
};

// form arrow function
const isDivisible = (n, x, y) =>
  n % x === 0 && n % y === 0;

// Return negative
function makeNegative(num) {
  return (num > 0) ? -num : num
};
//arrow function
const makeNegative = (num) => (num > 0) ? -num : num
