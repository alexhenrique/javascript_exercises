const fs = require('fs');

const fileName = 'proverbs2.txt';
const outputFile = 'proverbs2_uniq.txt';

fs.readFile(fileName, 'utf8', function (err, data) {
  if (err) {
    return console.log(err);
  }

  const lines = data.split('\n');
  const uniqueLines = {};

  for (const line of lines) {
    const cleanLine = line.toLowerCase().replace(/[^a-z]/g, '');
    if (cleanLine.length === 0) {
      // Ignora linhas em branco ou que não contenham letras minúsculas
      continue;
    }
    if (!uniqueLines[cleanLine]) {
      // Linha ainda não foi encontrada, adiciona no objeto com a chave sendo a linha limpa
      uniqueLines[cleanLine] = true;
      // Adiciona a linha com formatação no arquivo de saída
      fs.appendFileSync(outputFile, line + '\n');
    }
  }

  console.log(`Arquivo ${outputFile} gerado com sucesso!`);
});


// const fs = require('fs');

// const fileName = 'linhas_clean_org.txt';
// const outputFile = 'arquivo_sem_repeticao.txt';

// fs.readFile(fileName, 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }

//   const lines = data.split('\n');
//   const uniqueLines = new Set();

//   for (const line of lines) {
//     const cleanLine = line.toLowerCase().replace(/[^a-z]/g, '');
//     if (cleanLine.length === 0) {
//       // Ignora linhas em branco ou que não contenham letras minúsculas
//       continue;
//     }
//     if (uniqueLines.has(cleanLine)) {
//       // Linha já encontrada anteriormente, adiciona a linha com formatação no arquivo de saída
//       fs.appendFileSync(outputFile, line + '\n');
//       // Remove a linha sem formatação do Set
//       uniqueLines.delete(cleanLine);
//     } else {
//       // Adiciona a linha sem formatação ao Set
//       uniqueLines.add(cleanLine);
//     }
//   }

//   // Concatena as linhas restantes em uma string e escreve no arquivo de saída
//   const uniqueContent = Array.from(uniqueLines).join('\n');
//   fs.appendFileSync(outputFile, uniqueContent);

//   console.log(`Arquivo ${outputFile} gerado com sucesso!`);
// });





// const fs = require('fs');

// const fileName = 'linhas_clean_org.txt';
// const outputFile = 'arquivo_sem_repeticao.txt';

// fs.readFile(fileName, 'utf8', function (err, data) {
//   if (err) {
//     return console.log(err);
//   }

//   // Separa o conteúdo do arquivo em linhas
//   const lines = data.split('\n');

//   // Armazena as linhas únicas em um Set
//   const uniqueLines = new Set(lines);

//   // Concatena as linhas únicas em uma string
//   const uniqueContent = Array.from(uniqueLines).join('\n');

//   // Escreve o conteúdo sem repetição em um novo arquivo
//   fs.writeFile(outputFile, uniqueContent, 'utf8', function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log(`Arquivo ${outputFile} gerado com sucesso!`);
//   });
// });
