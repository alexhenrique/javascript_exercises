const fs = require('fs');
const { createCanvas } = require('canvas');

const inputFile = 'frases.txt';

// Leitura do arquivo de entrada
fs.readFile(inputFile, 'utf8', function (err, data) {
  if (err) throw err;

  // Quebra o texto em linhas
  const lines = data.trim().split('\n');

  // Loop pelas linhas
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Cria um novo canvas com tamanho 1024 x 1024
    const canvas = createCanvas(1024, 1024);
    const ctx = canvas.getContext('2d');

    // Define a cor de fundo e preenche o canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Adiciona o texto ao canvas
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 40px Arial';
    const maxWidth = 900;
    const lineHeight = 50;
    const words = line.split(' ');
    let currentLine = '';
    let y = 100;
    for (let j = 0; j < words.length; j++) {
      const word = words[j];
      if (word.startsWith('[') && word.endsWith(']')) {
        // Se a palavra estiver entre colchetes, adiciona no canto inferior esquerdo com tamanho dobrado
        const text = word.slice(1, -1);
        ctx.font = 'bold 80px Arial';
        ctx.fillText(text, 50, 1024 - y);
        ctx.font = 'bold 40px Arial';
      } else {
        // Se a palavra não estiver entre colchetes, adiciona normalmente
        const width = ctx.measureText(currentLine + ' ' + word).width;
        if (width < maxWidth) {
          currentLine += ' ' + word;
        } else {
          ctx.fillText(currentLine, 100, y);
          currentLine = word;
          y += lineHeight;
        }
      }
    }
    ctx.fillText(currentLine, 100, y);

    // Salva o canvas como imagem
    const outputFile = i + 1 + '.jpg';
    const out = fs.createWriteStream(outputFile);
    const stream = canvas.createJPEGStream({ quality: 0.8 });
    stream.pipe(out);
    out.on('finish', function () {
      console.log(`Imagem ${outputFile} criada.`);
    });
  }
});
