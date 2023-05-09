const fs = require('fs');
const path = require('path');

// lista de nomes masculinos e femininos
const nomesMasculinos = ['John', 'Michael', 'David', 'Christopher', 'James', 'Robert', 'William', 'Richard', 'Joseph', 'Daniel', 'Matthew', 'Anthony', 'Mark', 'Steven', 'Thomas', 'Brian', 'Kevin', 'Jason', 'Eric', 'Jeffrey'];
const nomesFemininos = ['Emily', 'Emma', 'Olivia', 'Sophia', 'Ava', 'Mia', 'Isabella', 'Charlotte', 'Amelia', 'Harper', 'Abigail', 'Evelyn', 'Elizabeth', 'Sofia', 'Chloe', 'Ella', 'Avery', 'Makayla', 'Lila', 'Natalie'];

// leitura do arquivo de entrada
fs.readFile('texto.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // substituição dos nomes masculinos
  for (let nome of nomesMasculinos) {
    const novoNome = nomesMasculinos[Math.floor(Math.random() * nomesMasculinos.length)];
    data = data.replace(new RegExp(nome, 'g'), novoNome);
  }

  // substituição dos nomes femininos
  for (let nome of nomesFemininos) {
    const novoNome = nomesFemininos[Math.floor(Math.random() * nomesFemininos.length)];
    data = data.replace(new RegExp(nome, 'g'), novoNome);
  }

  // gravação do arquivo de saída
  const novoArquivo = path.join(__dirname, 'texto_novo.txt');
  fs.writeFile(novoArquivo, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('O arquivo foi processado com sucesso!');
  });
});
