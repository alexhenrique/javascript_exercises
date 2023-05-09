const fs = require('fs'); // módulo para ler/escrever arquivos

// ler o arquivo de texto
const fileContent = fs.readFileSync('arquivo.txt', 'utf-8');

// separar o conteúdo do arquivo em linhas
const lines = fileContent.split('\n');

// percorrer cada linha do arquivo
const newLines = lines.filter(line => {
  // verificar se a linha está vazia
  if (line.length < 3) {
    return false;
  }
  // verificar se a linha tem somente um caractere que não é maiúscula
  if (line.length === 1 && line !== line.toUpperCase()) {
    return false;
  }
  // verificar se a primeira letra é maiúscula e se o resto da linha é minúsculo
  const firstChar = line.charAt(0);
  const isUpperCase = firstChar === firstChar.toUpperCase();
  const restOfLine = line.slice(1);
  const isLowerCase = restOfLine === restOfLine.toLowerCase();
  // se a linha atender aos critérios, mantê-la; caso contrário, remover
  return isUpperCase && isLowerCase;
});

// salvar as linhas mantidas em um novo arquivo
fs.writeFileSync('novo-arquivo.txt', newLines.join('\n'));
