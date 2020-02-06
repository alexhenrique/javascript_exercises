function invert(array) {
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] - (array[i] * 2));
  }
  return newArray;
}

console.log(invert([1, 2, 3, 4, 5]))//[-1,-2,-3,-4,-5])//
console.log(invert([1, -2, 3, -4, 5]))//[-1,2,-3,4,-5])//
console.log(invert([]))//[])//
console.log(invert([0]))//[-0])//