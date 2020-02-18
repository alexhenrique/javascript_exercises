const fs = require('fs');

function removerNumerosLinha(arquivoEntrada, arquivoSaida) {
  const texto = fs.readFileSync(arquivoEntrada, 'utf8'); // ler o arquivo de entrada

  const linhas = texto.split('\n');
  let resultado = '';

  for (let i = 0; i < linhas.length; i++) {
    const linha = linhas[i].trim();
    const linhaSemTags = removerTagsHTML(linha);
    const tst = /[^\x00-\x7F]/.test(linhaSemTags)
    const comecaComNumero = /^\d/.test(linhaSemTags);
    const terminaComNumero = /\d$/.test(linhaSemTags);

    if ((comecaComNumero && terminaComNumero) || (linhaSemTags.startsWith('<') && linhaSemTags.endsWith('>')) || tst) {

    }
    else {
      resultado += linha + '\n';
    }
  }

  fs.writeFileSync(arquivoSaida, resultado.trim()); // salvar o resultado no arquivo de saída
}

function removerTagsHTML(frase) {
  return frase.replace(/<\/?[^>]+(>|$)/g, '');
}
// Exemplo de uso:
removerNumerosLinha('tbbt.txt', 'tbbt_saida.txt');

