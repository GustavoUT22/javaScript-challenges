// FUNDAMENTALS EXERCISES
// functiom
function IsDivisible(n, x, y) {
  return (n % x == 0 && n % y == 0)
};

// form arrow function
const isDivisible = (n, x, y) =>
  n % x === 0 && n % y === 0;