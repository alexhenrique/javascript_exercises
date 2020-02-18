// const fs = require('fs');

const texto = `
Este TEXTO é um EXEMPLO de como REMOVER frases com MAIS de UMA palavra em maiúscula.\n
Esta é outra LINHA com uma PALAVRA em maiúscula.\n
Essa linha não tem nenhuma palavra em maiúscula.\n
Esta LINHA tem DUAS palavras em maiúscula e deve ser REMOVIDA.\n
Esta linha tem apenas uma PALAVRA em maiúscula e deve ser PRESERVADA.\n
`;
const tex = `Este é um TEXTO com várias PALAVRAS em MAIÚSCULO.
Algumas dessas PALAVRAS são MAIS importantes do que outras.
Mas TODAS as PALAVRAS em MAIÚSCULO devem ser encontradas.`;

const regex = /\b[A-Z]+\b/g;
const palavrasMaiusculas = tex.match(regex);
const txt = texto.split('\n');

const newArray = txt.filter(function(element) {
  return element !== '' && element !== null && element !== undefined;
});

console.log(newArray); 



// console.log(textoFiltrado);



/*
function removeFrasesComMaisDeUmaMaiuscula(texto) {
  const frases = texto.split('. '); // separa o texto em frases

  const frasesFiltradas = frases.filter(frase => {
    const palavras = frase.split(' '); // separa a frase em palavras
    const maiusculas = palavras.filter(palavra => palavra === palavra.toUpperCase()); // seleciona as palavras em maiúsculo

    return maiusculas.length <= 1; // retorna true para frases com uma ou nenhuma palavra em maiúsculo
  });

  return frasesFiltradas.join('. '); // junta as frases filtradas em um novo texto
}



function filterFile(inputFilePath, outputFilePath, blacklist) {
  // Lê o arquivo de entrada
  const input = fs.readFileSync(inputFilePath, 'utf8');

  const tmp = input.replace(/([.!?])\s+/g, "$1\n");
  // Divide o arquivo em linhas
  const lines = tmp.split('\n');

  // Filtra as linhas que não contêm palavras da black list
  const filteredLines = lines.filter(line => {
    for (const word of blacklist) {
      if (line.includes(word)) {
        return false;
      }
    }
    return true;
  });


  const tmp2 = filteredLines.filter(line => line.length > 30 && line.length < 120);

  // Junta as linhas em um novo conteúdo
  const output = tmp2.join('\n');

  // Escreve o novo conteúdo no arquivo de saída
  fs.writeFile(outputFilePath, output, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Arquivo filtrado com sucesso!');
    }
  });
}

const blacklist = ['Bíblia', 'Gênesis', 'Êxodo', 'Levítico', 'Números', 'Deuteronômio', 'Josué', 'Juízes', 'Rute', '1 Samuel', '2 Samuel', '1 Reis', '2 Reis', '1 Crônicas', '2 Crônicas', 'Esdras', 'Neemias', 'Ester', 'Jó', 'Salmos', 'Salmo', 'Provérbios', 'Eclesiastes', 'Cânticos', 'Isaías', 'Jeremias', 'Lamentações', 'Ezequiel', 'Daniel', 'Oseias', 'Joel', 'Amós', 'Obadias', 'Jonas', 'Miquéias', 'Naum', 'Habacuque', 'Sofonias', 'Ageu', 'Zacarias', 'Malaquias', 'Mateus', 'Marcos', 'Lucas', 'João', 'Atos', 'Romanos', '1 Coríntios', '2 Coríntios', 'Gálatas', 'Efésios', 'Filipenses', 'Colossenses', 'Tessalonicenses', 'Timóteo', 'Tito', 'Filemom', 'Hebreus', 'Tiago', '1 Pedro', '2 Pedro', '1 João', '2 João', '3 João', 'Judas', 'Apocalipse', 'Revelação', 'bíblicos', 'Jeová', 'Jesus', 'Deus', 'TESTEMUNHAS DE JEOVÁ', 'bíblia', 'gênesis', 'êxodo', 'levítico', 'números', 'deuteronômio', 'josué', 'juízes', 'rute', '1 samuel', '2 samuel', '1 reis', '2 reis', '1 crônicas', '2 crônicas', 'esdras', 'neemias', 'ester', 'jó', 'salmos', 'salmo', 'provérbios', 'eclesiastes', 'cânticos', 'isaías', 'jeremias', 'lamentações', 'ezequiel', 'daniel', 'oseias', 'joel', 'amós', 'obadias', 'jonas', 'miquéias', 'naum', 'habacuque', 'sofonias', 'ageu', 'zacarias', 'malaquias', 'mateus', 'marcos', 'lucas', 'joão', 'atos', 'romanos', '1 coríntios', '2 coríntios', 'gálatas', 'efésios', 'filipenses', 'colossenses', '1 tessalonicenses', '2 tessalonicenses', '1 timóteo', '2 timóteo', 'tito', 'filemom', 'hebreus', 'tiago', '1 pedro', '2 pedro', '1 joão', '2 joão', '3 joão', 'judas', 'apocalipse', 'revelação', 'jeová', 'jesus', 'deus', 'Testemunhas de Jeová', 'Watch Tower', 'Torre de Vigia', 'JW', 'bíblico', 'Despertai', 'Watchtower', 'Bíblicos', 'Bíblicas', 'TERMOS DE USO', 'BÍBLICAS'];








filterFile('texto.txt', 'saida.txt', blacklist);

*/