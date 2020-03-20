const fs = require('fs');

const inputFilePath = 'salmos.txt';
const outputFilePath = 'salmos_saida.txt';

const inputLines = fs.readFileSync(inputFilePath, 'utf-8').split('\n');

const outputLines = inputLines.map(line => {
  let newLine = '';
  let isDigit = false;

  for (let i = 0; i < line.length; i++) {
    if (/\d/.test(line[i])) {
      isDigit = true;
      newLine += line[i];
    } else {
      if (isDigit) {
        if (newLine !== '' && newLine[newLine.length - 1] !== '\n') {
          newLine += '\n';
        }
        isDigit = false;
      }
      newLine += line[i];
    }
  }

  if (isDigit && newLine !== '' && newLine[newLine.length - 1] !== '\n') {
    newLine += '\n';
  }

  return newLine;
});

fs.writeFileSync(outputFilePath, outputLines.join(''), 'utf-8');

console.log('Arquivo de texto processado com sucesso!');
