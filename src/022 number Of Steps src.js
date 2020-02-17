function numberOfSteps(n) {
  let cnt = 0;
  while (n != 0) {
    if (n % 2 == 0) {
      n /= 2;
    } else {
      n -= 1;
    }
    cnt++;
  }
  return cnt;
}

console.log(numberOfSteps(8));
