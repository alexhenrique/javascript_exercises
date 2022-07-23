/*
100 portas

Há 100 portas seguidas que estão todas fechadas inicialmente. Você faz 100 passagens pelas portas. A primeira vez que passar, visite todas as portas e 'alterne' a porta (se a porta estiver fechada, abra-a; se estiver aberta, feche-a). Na segunda vez, só visite as portas pares (ou seja, as porta 2, 4, 6, ...) e alterne-as. Na terceira vez, visite as portas de 3 em 3 (por exemplo, as portas 3, 6, 9, ...), até que você só visite a porta 100.

Implemente uma função para determinar o estado das portas após a último passagem. Retorne o resultado final em um array, com o número da porta incluído no array apenas se ela estiver aberta.

*/

function getFinalOpenedDoors(numDoors) {
  let doors = [];
  //visita todas as portas
  //não há porta zero
  for (let i = 1; i <= numDoors; i++) {     
    for (let k = i; k <= numDoors; k += i) {
      if (doors[k] !== true) { //alterna a situação das portas
        doors[k] = true;//abre a porta
      } else {
        doors[k] = false;//fecha a porta
      }
    }
  }
  let result = [];
  //adiciona no array result somente as portas abertas
  for (let i = 1; i <= numDoors; i++) {
    if (doors[i] === true) {
      result.push(i);
    }
  }
  return result;
}

console.log(getFinalOpenedDoors(100));

