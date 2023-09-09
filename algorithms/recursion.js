// Recursion

// factorial: best example for recursion

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n-1);
}

console.log(factorial(4));

function sum(number) {
  if (number === 1) {
    return 1;
  }
  return number + sum(number - 1);
}

console.log(sum(4));
