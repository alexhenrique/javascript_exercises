const fs = require('fs');



const text = fs.readFileSync('arquivo_sem_repeticao.txt', 'utf-8');
const regex = /\b[A-Z][a-z]+\b\s[A-Z][a-z]+/g; // Expressão regular para encontrar nomes próprios em inglês
const outputText = text.replace(regex, ''); // Remove as linhas que contêm nomes próprios
const lines = outputText.split('\n');
const wordsSet = new Set();

for (let i = 0; i < lines.length; i++) {
  const words = lines[i].split(' ');
  const maxLengthWords = words.sort((a, b) => b.length - a.length).slice(0, 10);
  const newWords = maxLengthWords
    .map(word => word.toLowerCase())
    .map(word => word.replace(/[^a-zA-Z0-9'´`’-]/g, ''))
    .filter(word => word.length > 3)
    .filter(word => !wordsSet.has(word))
    .slice(0, 2);
  const line_length = lines[i].length;
  if (line_length < 10 || line_length > 150 || newWords.length < 1) {
    lines[i] = undefined;
    continue;
  }
  wordsSet.add(...newWords);
  lines[i] += ' [' + newWords.join('] [') + ']';
}

const teq = lines.join('\n');

// Divide a string em um array de linhas
let lines2 = teq.split('\n');

// Filtra as linhas vazias
lines2 = lines2.filter(line => line.trim() !== '');

// Une as linhas restantes com um caractere de nova linha
text2 = lines2.join('\n');

// Salva o conteúdo atualizado de volta no arquivo
fs.writeFileSync('arquivo_sem_repeticao_frases.txt', text2);




