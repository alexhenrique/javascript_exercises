const fs = require('fs');
const text = fs.readFileSync('novo-arquivo.txt', 'utf-8');
const lines = text.split('\n');
const wordsSet = new Set();

for (let i = 0; i < lines.length; i++) {
  const words = lines[i].split(' ');
  const maxLengthWords = words.sort((a, b) => b.length - a.length).slice(0, 10);
  const newWords = maxLengthWords
    .map(word => word.toLowerCase())
    .filter(word => !wordsSet.has(word))
    .map(word => word.replace(/[^a-zA-Z0-9'´`’-]/g, ''))
    .filter(word => word.length > 3) 
    .slice(0, 2);
  const line_length = lines[i].length;
  if (line_length < 15 || line_length > 100 || newWords.length < 2) {
    lines[i] = undefined;
    continue;
  }
  wordsSet.add(...newWords);
  lines[i] += ' [' + newWords.join('] [') + ']';
}

fs.writeFileSync('5839_frases.txt', lines.join('\n'));

// Lê o arquivo de texto para uma string
let text2 = fs.readFileSync('5839_frases.txt', 'utf-8');

// Divide a string em um array de linhas
let lines2 = text2.split('\n');

// Filtra as linhas vazias
lines2 = lines2.filter(line => line.trim() !== '');

// Une as linhas restantes com um caractere de nova linha
text2 = lines2.join('\n');

// Salva o conteúdo atualizado de volta no arquivo
fs.writeFileSync('5839_frases.txt', text2);