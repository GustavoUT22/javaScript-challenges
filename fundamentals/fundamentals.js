// FUNDAMENTALS EXERCISES
// functiom
function isDivisible(n, x, y) {
  return (n % x == 0 && n % y == 0)
};
// form arrow function
const isDivisible = (n, x, y) =>
  n % x === 0 && n % y === 0;


// RETURN NEGATIVE 
function makeNegative(num) {
  return (num > 0) ? -num : num
};
//arrow function
const makeNegative = (num) => (num > 0) ? -num : num


// YOUR'RE SQUARE
var isSquare = function(n){
    return Number.isInteger(Math.sqrt(n)) ?  true : false  
   }
   
function isSquare(n) {
     return Number.isInteger(Math.sqrt(n))
}
   
const isSquare = (n) => Number.isInteger(Math.sqrt(n)) ?  true : false
