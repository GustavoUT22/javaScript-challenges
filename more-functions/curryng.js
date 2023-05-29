//Curryng
function multiplyAll(a) {
    return function(b) {
      return a.map(function(element) {
        return element * b;
      });
    };
  }