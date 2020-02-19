const fs = require('fs');

// Leitura do arquivo "frases.txt"
const content = fs.readFileSync('frases.txt', 'utf8');

// Separar as linhas em um array
const lines = content.split('\n');

// Percorrer todas as linhas e separar as frases
for (let i = 0; i < lines.length; i++) {
  const frase = lines[i].split(/\s{4}/);

  // Escrever a primeira frase em "frases_en.txt" e a segunda frase em "frases_br.txt"
  fs.writeFileSync('frases_en.txt', frase[0] + '\n', { flag: 'a' });
  fs.writeFileSync('frases_br.txt', frase[1] + '\n', { flag: 'a' });
}

console.log('As frases foram salvas em "frases_en.txt" e "frases_br.txt"');
