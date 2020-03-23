const fs = require('fs');

const originalFilename = 'big_org.txt';
const newFilename = 'big_org_uniq.txt';

// Passo 1: Ler o arquivo original
const originalText = fs.readFileSync(originalFilename, 'utf8');

// Passo 2: Limpar as linhas e armazená-las em um array
const cleanedLines = originalText.split('\n').map(line =>
  line.replace(/[^\w\s]/gi, '').toLowerCase().trim()
);

// Passo 3: Criar um objeto Map para armazenar as linhas únicas
const uniqueLines = new Map();

// Passo 4: Adicionar linhas únicas ao objeto Map
cleanedLines.forEach(line => {
  if (!uniqueLines.has(line)) {
    uniqueLines.set(line, true);
  }
});

// Passo 5: Percorrer o array original para reconstruir as linhas com a formatação original
let newFileContent = '';
originalText.split('\n').forEach(line => {
  const cleanedLine = line.replace(/[^\w\s]/gi, '').toLowerCase().trim();
  if (uniqueLines.has(cleanedLine)) {
    newFileContent += line + '\n';
    uniqueLines.delete(cleanedLine); // remove a linha limpa do objeto Map para evitar duplicatas
  }
});

// Passo 6: Salvar a string resultante em um novo arquivo
fs.writeFileSync(newFilename, newFileContent);
