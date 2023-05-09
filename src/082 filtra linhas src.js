const fs = require('fs');

const fileName = 'big_org.txt';
let fileContent = '';

// Lendo o conteúdo do arquivo linha por linha
const fileLines = fs.readFileSync(fileName, 'utf-8').split('\n');

// Unindo todas as linhas em uma única linha, com espaços entre elas
fileContent = fileLines.join(' ');

// Separando a única linha em várias linhas com base nos sinais .?!
const sentences = fileContent.split(/([.?!]+)/);

// Removendo os espaços extras entre as frases e adicionando os sinais .?! ao final de cada frase
let currentSentence = '';
const result = [];

for (let i = 0; i < sentences.length; i++) {
  const sentencePart = sentences[i].trim();
  
  // Se a parte atual for um sinal de pontuação, adiciona-o à frase atual
  if (/^[.?!]+$/.test(sentencePart)) {
    currentSentence += sentencePart;
    
  // Se a parte atual não for um sinal de pontuação, divide-a em frases completas
  } else {
    const sentenceParts = sentencePart.split(/[.?!]+/);
    
    for (let j = 0; j < sentenceParts.length; j++) {
      const part = sentenceParts[j].trim();
      
      // Se a parte atual não estiver vazia, adiciona-a à lista de frases
      if (part.length > 0) {
        const completeSentence = currentSentence + ' ' + part;
        
        // Adiciona a frase completa à lista de frases e limpa a frase atual
        if (completeSentence.trim().length > 0) {
          result.push(completeSentence);
          currentSentence = '';
        }
      }
    }
  }
}


fs.writeFileSync('big_org_proc.txt', result.join('\n'), 'utf8');
// console.log(result);








// const fs = require('fs');

// // Lê o arquivo de texto
// const text = fs.readFileSync('filtrar.txt', 'utf8');

// // Divide o texto em linhas
// const lines = text.split('\n');

// // Variável para armazenar as linhas processadas
// let processedLines = [];

// // Itera sobre cada linha
// for (let i = 0; i < lines.length; i++) {
//   const currentLine = lines[i].trim();
//   const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';

//   // Verifica se a linha atual termina sem pontuação e a próxima começa com letra minúscula
//   if (!/[.,;:?!]$/.test(currentLine) && /^[a-z]/.test(nextLine)) {
//     // Une as duas linhas em uma só
//     processedLines[processedLines.length - 1] += ' ' + currentLine;
//   } else {
//     // Adiciona a linha atual sem modificações à lista de linhas processadas
//     processedLines.push(currentLine);
//   }
// }

// // Variável para armazenar as frases completas
// let completeSentences = [];

// // Itera sobre as linhas processadas
// for (let i = 0; i < processedLines.length; i++) {
//   const currentLine = processedLines[i];

//   const sentences = currentLine.split(/[\.\?!…]/);

//   for (let j = 0; j < sentences.length; j++) {
//     const currentSentence = sentences[j].trim();

//     if (/^[A-Z]/.test(currentSentence)) {
//       completeSentences.push(currentSentence);
//     } else if (completeSentences.length > 0) {
//       completeSentences[completeSentences.length - 1] += ' ' + sentences[j];
//     }
//   }
// }
// // Escreve as frases completas em um novo arquivo
// fs.writeFileSync('arquivo_processado.txt', completeSentences.join('\n'), 'utf8');









// const fs = require('fs');

// // Lê o arquivo de texto
// const text = fs.readFileSync('filtrar.txt', 'utf8');

// // Divide o texto em linhas
// const lines = text.split('\n');

// // Variável para armazenar as linhas processadas
// let processedLines = [];

// // Itera sobre cada linha
// for (let i = 0; i < lines.length; i++) {
//   const currentLine = lines[i].trim();
//   const nextLine = lines[i + 1] ? lines[i + 1].trim() : '';

//   // Verifica se a linha atual termina sem pontuação e a próxima começa com letra minúscula
//   if (!/[.,;:?!]$/.test(currentLine) && /^[a-z]/.test(nextLine)) {
//     // Une as duas linhas em uma só
//     processedLines[processedLines.length - 1] += ' ' + currentLine;
//   } else {
//     // Verifica se a linha atual é uma frase completa
//     const lastChar = currentLine.slice(-1);
//     if (/^[A-Z]/.test(currentLine) && /[.?!…]$/.test(lastChar)) {
//       // Adiciona a frase completa à lista de linhas processadas
//       processedLines.push(currentLine);
//     } else {
//       // Adiciona a linha atual sem modificações à lista de linhas processadas
//       processedLines.push(currentLine);
//     }
//   }
// }

// // Escreve as linhas processadas em um novo arquivo
// fs.writeFileSync('arquivo_processado.txt', processedLines.join('\n'), 'utf8');
