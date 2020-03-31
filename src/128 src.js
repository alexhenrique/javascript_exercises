const fs = require('fs');

const palavras = ['merge', 'girl', 'speak', 'Mary'];
const frases = fs.readFileSync('frases.txt', 'utf-8').split('\n');

const maxFrasesPorPalavra = 3;
const frasesGeradas = {};
for (let i = 0; i < palavras.length; i++) {
  const palavraAtual = palavras[i];
  frasesGeradas[palavraAtual] = [];
  let numFrases = 0;
  for (let j = 0; j < frases.length && numFrases < maxFrasesPorPalavra; j++) {
    const fraseAtual = frases[j];

    if (fraseAtual.includes(palavraAtual)) {
      const novaFrase = fraseAtual.replace(/palavra/g, palavraAtual);
      frasesGeradas[palavraAtual].push(novaFrase);
      numFrases++;
    }
  }
}
fs.writeFileSync('exemplos.txt', JSON.stringify(frasesGeradas));
