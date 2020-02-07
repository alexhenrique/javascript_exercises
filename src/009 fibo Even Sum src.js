/*Problema 2: Apenas números pares da sequência de Fibonacci
Cada novo número na sequência de Fibonacci é gerado pela soma dos dois números anteriores. 
Ao começar com 1 e 2, os primeiros 10 números serão:
1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
Considerando os números na sequência de Fibonacci cujos valores não excedem fibo, 
encontre a soma dos números pares.
*/

function fiboEvenSum(num) {         //
  let rst = [1, 1];                 // Primeiros itens no array devem ser dois 'uns'.
  let final = 0;                    // Variável que retornará a soma dos items pares. 
  for (let i = 1; i < num; i++) {   //
    rst.push(rst[i - 1] + rst[i]);  // Acrescenta no array a soma dos dois itens anteriores.
    if (rst[i] % 2 === 0) {         // Se o item atual no 'i' for par,
      final += rst[i];              // adicional ao final.
    }                               //
    if (rst[i] >= num) {            // Condição de parada do algoritmo é:
      break;                        // item atual da sequência de fibonacci ser maior que 'num.
    }                               //
  }                                 //
  return final;                     //
}                                   //
console.log(fiboEvenSum(34));       // fiboEvenSum(34) deve retornar 44.
                                    // fiboEvenSum(10) deve retornar 10.
                                    // fiboEvenSum(60) deve retornar 44.
                                    // fiboEvenSum(1000) deve retornar 798.
                                    // fiboEvenSum(100000) deve retornar 60696.
                                    // fiboEvenSum(4000000) deve retornar 4613732.
                                    