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

  // queue in the market
  function queueTime(customers, n) {
    const tills = new Array(n).fill(0); // Create an array to track the time remaining for each till
    
    for (let customer of customers) {
      const minTime = Math.min(...tills); // Find the till with the minimum remaining time
      const minIndex = tills.indexOf(minTime); // Find the index of the till with the minimum remaining time
      tills[minIndex] += customer; // Add the current customer's time to the selected till
    }
    
    return Math.max(...tills); // Return the maximum time among all the tills
  }
  
  // Example usage:
  console.log(queueTime([5, 3, 4], 1)); // Output: 12
  console.log(queueTime([10, 2, 3, 3], 2)); // Output: 10
  console.log(queueTime([2, 3, 10], 2)); // Output: 12
  //Will you make it?
  const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    if (distanceToPump <= mpg * fuelLeft){
      return true;
    } else {
      return false;
    }
  };