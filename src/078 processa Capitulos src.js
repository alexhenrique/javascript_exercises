const fs = require('fs'); // importa a biblioteca File System

// lê o arquivo "indce.txt"
fs.readFile('indce.txt', 'utf-8', (err, data) => {
  if (err) throw err; // lança um erro caso haja problemas na leitura do arquivo

  const linhas = data.split('\n'); // divide o conteúdo do arquivo em linhas

  let novoConteudo = '';

  // percorre todas as linhas do arquivo original e adiciona ao novo conteúdo
  for (let linha of linhas) {
    const referencia = linha.replace('_', ''); // remove o caractere _ da linha
    const partes = referencia.split(' '); // divide a linha em partes: livro, capítulo e versículo
    const livro = partes.shift(); // remove o livro do início do array e retorna o seu valor
    const capituloVersiculo = partes.join(' '); // junta o restante da linha em uma string
    const numVersiculos = parseInt(capituloVersiculo.split(':')[1]); // obtém o número de versículos do capítulo

    for (let i = 1; i <= numVersiculos; i++) {
      const novaLinha = `${livro} ${capituloVersiculo.split(':')[0]}:${i}\n`; // cria a nova linha com o número do versículo
      novoConteudo += novaLinha; // adiciona a nova linha ao novo conteúdo
    }
  }

  // salva o novo conteúdo no arquivo "indiceBiblia.txt"
  fs.writeFile('indiceBiblia.txt', novoConteudo, 'utf-8', (err) => {
    if (err) throw err; // lança um erro caso haja problemas na escrita do arquivo
    console.log('Arquivo salvo com sucesso!');
  });
});
