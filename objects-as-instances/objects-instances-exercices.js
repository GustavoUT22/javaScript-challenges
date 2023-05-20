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