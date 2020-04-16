function bubbleSort(array) {
  for (let i = array.length - 1; i !== 0; i--) {
    for (let k = 1; k <= i; k++) {
      if (array[k - 1] > array[k]) {
        let tmp = array[k - 1];
        array[k - 1] = array[k];
        array[k] = tmp;
      }
    }
  }
  return array;
}

let frr = [10000, 3, 234, 920, 5, 2, 7, 4, 6, 1000, 10, 8, 9, 11];

console.log(bubbleSort(frr));