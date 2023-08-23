// O(n)
function logItem(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
logItem(5);

// Drop constants
// our code runs n+n or 2n times for two for loops.
// we don't say o(2n), we simply drop constant and we say o(n)

function logItem2(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
  for (let j = 0; j < n; j++){
    console.log(j);
  }
}
logItem2(7);

// O(n) squared (o(n^2))

function logItem3(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++){
      console.log(i, j);
    }
  }
}
logItem3(8);

// Different terms for inputs
// We can simplify this o(a+b)
// For nested loop we can sya o(a*b)

function logItem4(a, b) {
  for (let i = 0; i < a; i++) {
    console.log(i);
  }
  for (let j = 0; j < b; j++){
    console.log(j);
  }
}
logItem4(10, 20);

function logItem5(a, b) {
  for (let i = 0; i < a; i++) {
    for (let j = 0; j < b; j++){
      console.log(i, j);
    }
  }
}
logItem5(10, 20);

// Drop non-dominant
// nested for run o(n^2) times
// the second one run o(n) times
// the wohle thing becomes o(n^2 + n)
// then we remove the non-dominant n and we say o(n^2)
function logItem6(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++){
      console.log(i, j);
    }
  }
  for (let k = 0; k < n; k++){
    console.log(k);
  }
}
logItem6(8);

// o(1) constant time
// number of operations does not change as n changes.

function addItem(n) {
  return n + n + n;
}
console.log(addItem(11));

// o(log n)
// we use devide and conqure in this
// [1 , 2 , 3, 4, 5, 6, 7, 8]
// [1, 2, 3, 4] [5, 6, 7, 8]
// [1, 2] [3, 4]
// [1] [2]
// [1]