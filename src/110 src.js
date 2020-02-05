const fs = require('fs');
const path = require('path');

// Função que percorre recursivamente a pasta e lê o conteúdo dos arquivos
function readDirectoryRecursive(directoryPath) {
  const files = fs.readdirSync(directoryPath);
  let content = '';
  
  files.forEach(file => {
    const filePath = path.join(directoryPath, file);
    
    if (fs.statSync(filePath).isDirectory()) {
      content += readDirectoryRecursive(filePath);
    } else if (path.extname(file) === '.txt') {
      content += fs.readFileSync(filePath, 'utf-8');
    }
  });
  
  return content;
}

// Caminho da pasta a ser lida
const directoryPath = './esse/';

// Lê todo conteúdo dos arquivos de texto
const allTextContent = readDirectoryRecursive(directoryPath);

// Salva o conteúdo no arquivo todos.txt
fs.writeFileSync('tbbt.txt', allTextContent);
