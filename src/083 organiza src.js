const fs = require('fs'); // importa o módulo para trabalhar com arquivos

const inputFilePath = 'big.txt';
const outputFilePath = 'big_org.txt';

// 1. Lê o arquivo de texto externo e armazena cada linha em um array
const inputLines = fs.readFileSync(inputFilePath, 'utf-8').split('\n');

// 2. Ordena o array de linhas de acordo com o tamanho de cada linha
inputLines.sort((a, b) => {
  if (a.length !== b.length) {
    return a.length - b.length;
  } else {
    return a.localeCompare(b);
  }
});

// 3. Escreve as linhas ordenadas em um novo arquivo de texto
fs.writeFileSync(outputFilePath, inputLines.join('\n'), 'utf-8');

console.log('Arquivo de texto organizado com sucesso!');
