// Abrebbiate a two word Name
function abbrevName(name){
    result = name.split(" ").map(function(ele){
          return ele[0].toUpperCase()       
    })
  return result.join('.')
  }

//   You only need one - Beginner
function check(a, x) {
    return a.includes(x)
  }