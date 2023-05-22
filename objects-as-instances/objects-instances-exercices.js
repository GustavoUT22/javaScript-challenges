//Regular Ball Super Ball
const Ball = function(ballType = "regular") {
    this.ballType = ballType
  };
  
  const ball1 = new Ball()
  const ball2 = new Ball("super")
  ball1.ballType // it would be regular by default
  ball2.ballType  // it would be super because if they pass argument

//Convert Hash to an Array
function convertHashToArray(hash){
    const resultado = Object.entries(hash).sort((a, b) => a[0].localeCompare(b[0]));
    return resultado
  }
//Who like this?
function likes(names) {
    if (names.length == 0){ 
      return "no one likes this"
    }else if (names.length == 1){
      return `${names[0]} likes this`
    }else if (names.length == 2){
      return `${names[0]} and ${names[1]} like this`
    }else if (names.length == 3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }else{
      return `${names[0]}, ${names[1]} and ${(names.length - 2)} others like this`
    }
  }
  //Fix my method
  function myFunction() {
    var myObject = {
      objProperty: "string",
      objMethod: function objMethod() {
        return myObject.objProperty
      }
    };
    
    return myObject;
  }
// Merged objects
//#1
function objConcat(objects){
  return objects.reduce((acum, obj) => acum = {...acum, ...obj} , {})
}
//#2
  let result = {}
  for ( let obj of objects){
      result = {...result, ...obj}
  }
  return result

