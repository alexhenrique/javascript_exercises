const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
// Definição dos padrões de cores

const colorPalette = [
  '#FFFFFF',//cor background en
  '#000000',//cor fonte en
  '#261C1C',//cor background br
  '#D9C8BF'//cor fonte br
];
const qual_imagem = 'en';
// Definição dos arquivos de texto
const frasesFile = `frases_${qual_imagem}.txt`;

// Definição das cores de fundo e das letras
const backgroundColor = qual_imagem === 'en' ? colorPalette[0] : colorPalette[2];
const fontColor = qual_imagem === 'en' ? colorPalette[1] : colorPalette[3];

const width = 1024;
const height = 512;

const fontSize = 45;
const font = 'Times New Roman';

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

const frases = fs.readFileSync(frasesFile, 'utf8').split('\n');

frases.forEach(async (frase, index) => {
  context.fillStyle = backgroundColor;
  context.fillRect(0, 0, width, height);
  context.fillStyle = fontColor;
  context.font = `${fontSize}px ${font}`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';

  const words = frase.split(' ');
  const lines = [];
  let currentLine = words[0];

  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const lineWidth = context.measureText(`${currentLine} ${word}`).width;
    if (lineWidth < 900) {
      currentLine += ` ${word}`;
    } else {
      lines.push(currentLine);
      currentLine = word;
    }
  }
  lines.push(currentLine);

  const y = height / 2 - (lines.length / 2) * fontSize;

  lines.forEach((line, i) => {
    const x = width / 2;
    const yPosition = y + i * fontSize;
    context.fillText(line, x, yPosition);
  });

  const buffer = canvas.toBuffer('image/jpeg');
  let filename;
  if (qual_imagem === 'br') {
    filename = `00${index}`.slice(-4) + '_br.jpg';
  } else {
    filename = `00${index}`.slice(-4) + '_en.jpg';
  }
  const subpasta = './input/';
  const caminhoArquivo = path.join(subpasta, filename);
  fs.writeFileSync(caminhoArquivo, buffer);
});





