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
    let numbers = str.split("").map((e,i,a) => parseInt(e))
    let total=0;
    for(let i = 0; i < numbers.length; i++) total+=numbers[i];
    return ( total % 3 == 0)
  }
  
//Filter of list
function filter_list(l) {
    return l.filter((e) => Number.isInteger(e))
  }

//Array deep count
function deepCount(array) {
  let count = 0;

  for (let element of array) {
    count++; // Incrementamos el contador por cada elemento en el arreglo

    if (Array.isArray(element)) {
      count += deepCount(element); // Llamada recursiva para contar los elementos del subarreglo
    }
  }

  return count;
}
//Remove all the market element of the list
Array.prototype.remove_ = function(integer_list, values_list){
  for (let arg of values_list){
     integer_list = integer_list.filter(ele => ele != arg)
  }
  return integer_list
}
//Buil Tower
function towerBuilder(nFloors) {
  let result = []
  let maxWidth = (nFloors * 2) - 1
  let maxSpaces = Math.floor(maxWidth / 2)
  for ( let i = 1 ; i <= maxWidth; i+=2){
    let element = `${" ".repeat(maxSpaces)}${"*".repeat(i)}${" ".repeat(maxSpaces)}`
    result.push(element)
    maxSpaces--
  }
  return result
}
//Fin the odd int
function findOdd(arr) {{
  var result = {}
  
  for (let i = 0; i < arr.length; i++){
    let num = arr[i]
    result[num] = (result[num] || 0) + 1
  }
  for (let key in result) {
    if (result[key] % 2 !== 0){
      return Number(key);
    }
  }
} 
}
//Persistent Bugger
function persistence(num) {
  let times = 0
  while (num >= 10) {
    let digits = num.toString().split("").map(Number); //["1","5"].map(Number) => [1,5]
    num = digits.reduce((a, b) => a * b);
    times++
  }
  return times
}
//Complementary DNA
function DNAStrand(dna) {
  let word = dna.split("");
  let result = word.map(function(ele) {
    switch(ele){
      case "A": return "T"
      case "T": return "A"
      case "G": return "C"
      case "C": return "G"
      default: return ele
    }    
  });
  return result.join("");
}
