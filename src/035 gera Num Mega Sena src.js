function sorteia(arr) {
  while (1) {
    let num = Math.floor(Math.random() * 60) + 1;
    if (!arr.includes(num)) {
      return num;
    }
  }
}

function geraAposta(numeros) {
  let reslt = [];

  for (let i = 0; i < numeros; i++) {
    let tmp = sorteia(reslt);
    reslt.push(tmp);
  }
  return reslt.sort(function (a, b) {
    return a - b;
  });
}

function geraMegaSena(apostas, num) {
  let apos = [];
  for (let i = 0; i < apostas; i++) {
    apos.push(geraAposta(num));
  }
  return apos;
}

console.log(geraMegaSena(50, 6));
