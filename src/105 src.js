const fs = require('fs');

// Função que processa cada linha do arquivo de entrada
function processLine(line) {
  // Remove espaços em branco do início e fim da linha
  line = line.trim();

  // Verifica se a linha contém os caracteres < e >
  if (line.includes('<') && line.includes('>')) {
    // Se sim, retorna uma string vazia para remover a linha inteira
    return '';
  }

  // Remove o conteúdo dos parênteses, colchetes e chaves
  line = line.replace(/[\[\(\{][^\]\)\}]*[\]\)\}]/g, '');

  // Retorna a linha processada
  return line;
}

// Função principal que lê o arquivo de entrada, processa cada linha e grava em um novo arquivo
function processFile(inputFile, outputFile) {
  // Lê o conteúdo do arquivo de entrada
  const input = fs.readFileSync(inputFile, 'utf8');

  // Divide o conteúdo em um array de linhas
  const lines = input.split('\n');

  // Processa cada linha do arquivo de entrada
  const processedLines = lines.map(processLine);

  // Filtra as linhas vazias
  const nonEmptyLines = processedLines.filter(line => line.length > 0);

  // Junta as linhas em um único string
  const output = nonEmptyLines.join('\n');

  // Grava o conteúdo no arquivo de saída
  fs.writeFileSync(outputFile, output);
}

// Exemplo de uso: processa o arquivo input.txt e grava o resultado em output.txt
processFile('limpa_linhas.txt', 'linhas_clean.txt');
