// Abrebbiate a two word Name
function abbrevName(name){
    result = name.split(" ").map(function(ele){
          return ele[0].toUpperCase()       
    })
  return result.join('.')
  }

//   You only need one - Beginner || No Loops 2 - You only need one
function check(a, x) {
    return a.includes(x)
  }
//  Sum of two lowest positive integers
function sumTwoSmallestNumbers(numbers) {
    numbers.sort(function(a, b){return a - b})
    return numbers[0] + numbers[1]
  }
  
//By 3, or not by 3? That is the question . . .
  function divisibleByThree(str){
    let numbers = str.split("")
    let total=0;
    for(let i = 0; i < numbers.length; i++) total+=numbers[i];
    return ( total % 3 == 0)
  }
