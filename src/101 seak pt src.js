// Importe o módulo fs para trabalhar com arquivos
const fs = require('fs');

// Leia o conteúdo do arquivo 'todos_saida'
const fileContent = fs.readFileSync('todos_saida.txt', 'utf-8');

// Separe o conteúdo do arquivo em linhas
const lines = fileContent.split('\n');

// Crie um novo array para armazenar as linhas possivelmente escritas em português
const portugueseLines = [];

// Percorra cada linha do arquivo e verifique se ela contém caracteres que podem ser usados em palavras em português
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const regex = /[à-úãêç]/i;
  if (regex.test(line)) {
    portugueseLines.push(line);
  }
}

// Crie um novo arquivo chamado 'todos_saida_pt.txt' e escreva as linhas possivelmente escritas em português nele
fs.writeFileSync('todos_saida_pt.txt', portugueseLines.join('\n'));
