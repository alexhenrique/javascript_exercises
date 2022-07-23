/*Problema 1: Múltiplos de 3 e 5
Se listarmos todos os números naturais abaixo de 10 que são múltiplos de 3 ou 5, obteremos 3, 5, 6 e 9.
A soma destes múltiplos é 23.
Calcule a soma de todos os múltiplos de 3 ou 5 menor que o parâmetro number.
https://www.freecodecamp.org/portuguese/learn/coding-interview-prep/project-euler/problem-1-multiples-of-3-and-5
*/

multiplesOf3and5 = (n) => {
  let s = 0;
  for (let i = 0; i < n; i++) s += i % 3 ? (i % 5 ? 0 : i) : i;
  return s;
};

// function multiplesOf3and5(number) {
//     let total = 0;
//     for (let i = 1; i < number; i++){
//         if (i % 3 == 0 || i % 5 == 0){
//             total += i;
//         }
//     }
//     return total;
//   }

//   const multiplesOf3and5 = (number) => {
//     return Array.apply(null, {length: number}).map((v, i) => i).reduce((sum, i) => {
//         return (i % 3 === 0 || i % 5 === 0) ? sum + i : sum;
//     }, 0);
// }

console.log(multiplesOf3and5(1000));
