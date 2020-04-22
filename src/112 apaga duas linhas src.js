const fs = require('fs'); // Módulo para trabalhar com arquivos

// Lê o arquivo de texto
const inputText = fs.readFileSync('./txt/00013.txt', 'utf8');

// Separa as linhas do arquivo
const lines = inputText.split('\n');

// Processa cada linha
const processedLines = lines.map(line => {
  const trimmedLine = line.trim(); // Remove espaços em branco no início e fim da linha
  let newLine = '';

  // Percorre a linha e remove tudo após mais de dois espaços consecutivos
  let countSpaces = 0;
  for (let i = 0; i < trimmedLine.length; i++) {
    const char = trimmedLine.charAt(i);
    if (char === ' ') {
      countSpaces++;
    } else {
      countSpaces = 0;
    }

    if (countSpaces <= 2) {
      newLine += char;
    } else {
      break;
    }
  }

  return newLine;
});

// Salva o resultado em um novo arquivo de texto
fs.writeFileSync('call_of.txt', processedLines.join('\n'), 'utf8');
