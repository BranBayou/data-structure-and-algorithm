// Bubble sort

function bubbleSort(array) {
  for(let i = array.length - 1; i > 0; i--) {
    for(let j = 0; j < array.length; j++) {
      if(array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([3,6,1,4,2,5]));