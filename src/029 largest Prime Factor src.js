function largestPrimeFactor(number) {
  let fusivel = true;
  for (let i = 2; i < Math.sqrt(number); i++) {
    if (number % i === 0) {
      fusivel = false;//houve uma divisão exata por algum número que não seja um ou o próprio número,
      break;//logo não é número primo
    }
  }
  if (fusivel) return number;//não há como quebrar em fatores primos um número primo
  let listaPrimos = [];//gera uma lista com números primos de 2 até máximo 7000
  for (let i = 2; i < 7000; i++) {//até teto com 7000 é um valor que funcionou no freecodecamp
    let divisores = 0;
    for (let k = 1; k <= i ; k++) {
      if (i % k === 0) {
        divisores++;
        if (divisores === 3) break;//mais de dois divisores exatos configura número não primo
      }
    }
    if (divisores === 2) {// se tem dois divisores exatos somente é pq é um número primo, logo
      listaPrimos.push(i);// deve ser inserido no array de primos 
    }
  }
  let k = 0;
  let rpst = [];
  while (number > 2) {
    //se houve uma divisão sem resto por algum número presente no array de números primos,
    //então podemos ir quebrando o valor original com números primos
    if (number % listaPrimos[k] === 0) {
      number /= listaPrimos[k];
      rpst.push(listaPrimos[k])//insere valor usado para quebrar número original na opção de retorno com lista de fatores primos
    } else {
      k++;//sobe no array de número primos, fatoração começa do menor para maior
    }
  }
  // return listaPrimos[k]; //opção de retorno maior valor número primo que usado para quebrar o número original 
  return rpst; //opção de retorno com lista de fatores primos
}
console.log(largestPrimeFactor(1000));

