function encodeRailFenceCipher(str, nRails) {
  let arr = [], arrFinal = [];
  for (let i = 0; i < nRails; i++) arr.push([]);                /* enche o arr com arrays vazios conforme numero de Rails */
  let rZigZag = 0, upDown = 1;           /* rZigZag coloca caracteres nos sub arrays, subindo ou descendo conforme upDown */
  for (let i = 0; i < str.length; i++) {
    arr[rZigZag].push(str[i]);                    /* vai espalhando os caracteres da string descriptografada nos sub arrays*/
    upDown ? rZigZag++ : rZigZag--;                                           /* sobe ou desce ZigZag de acordo com upDown */
    if (rZigZag === nRails) { upDown = 0, rZigZag -= 2; }                                 /* bateu no topo, precisa descer */
    if (rZigZag === -1) { upDown = 1, rZigZag += 2; }                                       /* bateu embaixo, precisa subir */
  }
  for (let i = 0; i < nRails; i++) { arrFinal.push(arr[i].join("")); }                  /* junta os sub arrays num array só */ 
  return arrFinal.join("");
}
console.log(encodeRailFenceCipher("marcelo", 2));

function decodeRailFenceCipher(str, nRails) {
  let arr = [], arrFinal = [], i = 0, rZigZag = 0, upDown = 1, cap = 0,  rAtual = 0, ind = 0;
  for (; i < nRails; i++) arr.push(0);
  for (i = 0; i < str.length; i++) {        /* calcula quantos caracteres ficam em cada sub array, armazenado valores em arr */
    arr[rZigZag] += 1; 
    upDown ? rZigZag++ : rZigZag--;                                             /* sobe ou desce ZigZag de acordo com upDown */
    if (rZigZag === nRails) { upDown = 0; rZigZag -= 2;                                     /* bateu no topo, precisa descer */
    } else if (rZigZag === -1) { upDown = 1; rZigZag += 2; }                                 /* bateu embaixo, precisa subir */
  }
  upDown = 1, rZigZag = 0, i = 0;                                                                          /* reseta valores */
  while ( ind < str.length ) {
    if (rZigZag === nRails) { upDown = 0; rZigZag -= 2; }                                   /* bateu no topo, precisa descer */
    if (rZigZag === -1) { upDown = 1; rZigZag += 2; }                                        /* bateu embaixo, precisa subir */
    if (cap === arr[rAtual]) { rAtual++; cap = 0; upDown = 1; rZigZag = 0; i = 0; }
    if (rZigZag === rAtual) { arrFinal[i] = str[ind]; cap++; ind++; }                 /* faz captura do caracter no arrFinal */
    upDown ? rZigZag++ : rZigZag--;                                             /* sobe ou desce ZigZag de acordo com upDown */
    i++;
  }
  return arrFinal.join("");
}
console.log(decodeRailFenceCipher("mreoacl", 2));






// function encodeRailFenceCipher(string, numRails) {
//   let arr = [], rslt = [];
//   for (let i = 0; i < numRails; i++) arr.push([]);
//   let rZigZag = 0, sobeDesce = 1;
//   for (let i = 0; i < string.length; i++) {
//     arr[rZigZag].push(string[i]);
//     if (sobeDesce) rZigZag++;
//     else rZigZag--;
//     if (rZigZag === numRails) {
//       sobeDesce = 0;
//       rZigZag -= 2;
//     }
//     if (rZigZag === -1) {
//       sobeDesce = 1;
//       rZigZag += 2;
//     }
//   }
//   for (let i = 0; i < numRails; i++) rslt.push(arr[i].join(""));
//   return rslt.join("");
// }
// function decodeRailFenceCipher(string, numRails) {
//   let arr = [];
//   for (let i = 0; i < numRails; i++) arr.push(0);
//   let rZigZag = 0,
//     sobeDesce = 1;
//   for (let i = 0; i < string.length; i++) {
//     arr[rZigZag] += 1;
//     if (sobeDesce) rZigZag++;
//     else rZigZag--;
//     if (rZigZag === numRails) {
//       sobeDesce = 0;
//       rZigZag -= 2;
//     } else if (rZigZag === -1) {
//       sobeDesce = 1;
//       rZigZag += 2;
//     }
//   }
//   let capturado = 0;
//   let rslt = [];
//   let rAtual = 0;
//   rZigZag = 0;
//   sobeDesce = 1;
//   let i = 0;
//   let ind = 0;
//   let total = 0;
//   while (ind < string.length) {
//     if (rZigZag === numRails) {
//       sobeDesce = 0;
//       rZigZag -= 2;
//     }
//     if (rZigZag === -1) {
//       sobeDesce = 1;
//       rZigZag += 2;
//     }
//     if (capturado === arr[rAtual]) {
//       rAtual++;
//       capturado = 0;
//       sobeDesce = 1;
//       rZigZag = 0;
//       i = 0;
//     }
//     if (rZigZag === rAtual) {
//       rslt[i] = string[ind];
//       capturado++;
//       ind++;
//     }
//     if (sobeDesce) rZigZag++;
//     else rZigZag--;
//     i++;
//     total++;
//   }
//   return rslt.join("");
// }

// //https://www.codewars.com/kata/58c5577d61aefcf3ff000081/train/javascript
