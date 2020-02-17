function findOdd(numb) {
  numb.sort(function (a, b) {
    return a - b;
  });
  let resposta;
  let i = 0;
  do {
    i++;
    if (numb[i] === numb[i - 1]) {
      numb[i] = null;
      numb[i - 1] = null;
    } else if (numb[i - 1] !== null) {
      resposta = numb[i - 1];
    }
  } while (i < numb.length);
  return resposta;
}
const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];

console.log(findOdd(arr));
