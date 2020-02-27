// Exemplo de texto com linhas contendo símbolos de programação
const texto = `Esta é uma linha de texto normal.
Esta linha contém uma seta -> e será removida.
Esta linha contém colchetes [] e também será removida.
Esta linha contém um parêntese ( ) e será removida.
Esta linha contém chaves {} e será removida.
Esta linha contém uma exclamação ! e será removida.
Esta linha contém uma barra vertical | e será removida.
Esta linha contém um chapéu ^ e será removida.
Esta linha contém uma barra invertida / e também será removida.
Esta linha contém um arteristico * e também será removida.
Esta linha contém uma outra seta <=> e será removida.`;

// Expressão regular que corresponde a símbolos usados em linguagens de programação
const regex = /[><|\\[\]^{}()!/*]/;

// Separa o texto em linhas e filtra as linhas que não contêm a expressão regular
const linhasFiltradas = texto.split("\n").filter(linha => !regex.test(linha));

// Junta as linhas novamente em uma string
const novoTexto = linhasFiltradas.join("\n");

// Exibe o novo texto sem as linhas contendo símbolos de programação
console.log(novoTexto);





// const fs = require('fs');

// // Lê o arquivo de entrada
// const arquivoEntrada = 'arquivo-de-entrada.txt';
// const texto = fs.readFileSync(arquivoEntrada, 'utf-8');

// // Expressão regular que corresponde a símbolos usados em linguagens de programação
// const regex = /[><|\\[\]^()!]/;

// // Separa o texto em linhas e filtra as linhas que não contêm a expressão regular
// const linhasFiltradas = texto.split("\n").filter(linha => !regex.test(linha));

// // Junta as linhas novamente em uma string
// const novoTexto = linhasFiltradas.join("\n");

// // Salva o novo texto em um arquivo de saída
// const arquivoSaida = 'arquivo-de-saida.txt';
// fs.writeFileSync(arquivoSaida, novoTexto, 'utf-8');

// console.log(`As linhas contendo símbolos de programação foram removidas do arquivo ${arquivoEntrada} e salvas em ${arquivoSaida}.`);
