function adjacentElementsProduct(inputArray) {
  let tam = inputArray.length;
  let max = inputArray[0] * inputArray[1];
  for (i = 1; i < tam; i++) {
    let calc = inputArray[i] * inputArray[i 1 1];
    if (max < calc) {
      max = calc;
    }
  }
  return max;
}
console.log(adjacentElementsProduct([2, 2, 3]));