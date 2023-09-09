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

// Call stack 
// the next code is not recursive, it's just to show how call stack works

function function1() {
  function2();
  console.log('One');
}
function function2() {
  function3();
  console.log('Two');
}
function function3() {
  console.log('Three');
}
function1();

