const fs = require('fs');

function separateContent(filePath) {
  // Lê o conteúdo do arquivo e divide em linhas
  const fileContent = fs.readFileSync(filePath).toString();
  const lines = fileContent.split('\n');

  // Cria os arquivos de saída
  const file1 = fs.createWriteStream('output1.txt');
  const file2 = fs.createWriteStream('output2.txt');

  // Percorre as linhas do arquivo
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (line === '') {
      continue;
    }

    // Separa os conteúdos antes e depois do conjunto exclusivo de letras
    const match = line.match(/(.*?)([a-z]+)(.*)/);
    console.log(match)
    if (match) {
      const before = match[1].trim();
      const after = match[3].trim();
      file1.write(`${before} ${match[2]}\n`);
      file2.write(`${after}\n`);
    } else {
      file1.write(`${line}\n`);
    }
  }

  // Fecha os arquivos de saída
  file1.end();
  file2.end();
}

// Exemplo de uso
separateContent('passsagens.txt');

