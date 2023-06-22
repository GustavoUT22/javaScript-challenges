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

//GRASSHOPPER- SUMMARY
const summation = function (num) {
  let sum = 0
  for (i=0; i<=num; i++){
    sum = sum + i
  }
  return sum
}

//BASIC MATHEMATICAL OPERATIONS
function basicOp(operation, value1, value2){
  return eval( value1 + operation + value2)
  }
//Range in array
  function between(a, b) {
    const result = [];
    
    for (let i = a; i <= b; i++) {
      result.push(i);
    }
    
    return result;
  }

  //Catch first element of array
  function getAge(inputString){
    let string = inputString.split(" ")
    return parseInt(string[0])
   }