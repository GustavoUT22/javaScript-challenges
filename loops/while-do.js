//SUM MULTIPLIES
function sumMul(n, m) {
    if (n <= 0 || m <= 0) {
      return "INVALID";
    }
    let sum = 0
    let i = n;
    do {
      sum += i;
      i += n;
    } while ( i < m)
    return sum
  }