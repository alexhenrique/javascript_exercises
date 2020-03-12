const COLOR_OPTIONS = [
  '#FFFFFF', // branco - 0
  '#F0F8FF', // azul claro - 1
  '#90EE90', // verde claro - 2
  '#FFFF00', // amarelo - 3
  '#D3D3D3', // cinza claro - 4
  '#00FFFF', // ciano - 5
  '#FFC0CB', // rosa claro - 6
  '#ADD8E6', // azul claro - 7
  '#EEE8AA', // amarelo claro - 8
  '#87CEFA', // azul claro - 9
  '#7FFFD4', // turquesa - 10
  '#00FF00', // verde - 11
  '#FFD700', // dourado - 12
  '#FF69B4', // rosa - 13
  '#808080', // cinza - 14
  '#800080', // roxo - 15
  '#8B0000', // vermelho escuro - 16
  '#0000FF', // azul - 17
  '#FF8C00', // laranja escuro - 18
  '#696969', // cinza escuro - 19
  '#DC143C', // vermelho escuro - 20
  '#800000', // marrom escuro - 21
  '#FF00FF', // magenta - 22
  '#00008B', // azul escuro - 23
  '#000000' // preto - 24
];
const FONT_OPTIONS = [
  'Arial', // índice 0
  'Helvetica', // índice 1
  'Times New Roman', // índice 2
  'Courier New', // índice 3
  'Verdana', // índice 4
  'Georgia', // índice 5
  'Comic Sans MS', // índice 6
  'Impact', // índice 7
  'Lucida Sans Unicode', // índice 8
  'Tahoma', // índice 9
  'Palatino Linotype', // índice 10
  'Book Antiqua', // índice 11
  'Arial Black', // índice 12
  'Garamond', // índice 13
  'Cambria', // índice 14
  'Century Gothic', // índice 15
  'Franklin Gothic Medium', // índice 16
  'Rockwell', // índice 17
  'Trebuchet MS', // índice 18
  'Consolas', // índice 19
  'Copperplate', // índice 20
  'Baskerville', // índice 21
  'Futura', // índice 22
  'Didot', // índice 23
  'Optima' // índice 24
];

const TEXT_COLOR = COLOR_OPTIONS[0]; 
const FONT_FAMILY = FONT_OPTIONS[4];
const FONT_SIZE = 70;
const FONT_STYLE = 'bold';
const width = 1024;
const height = 1024;
const image_color = COLOR_OPTIONS[18];
// const image_color = '';
console.log(image_color);
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const backgroundsPath = 'backgrounds/';
const frasesFile = `frases.txt`;
const outputPath = 'br_out/';


fs.readdir(backgroundsPath, (err, files) => {
  if (err) throw err;

  const backgrounds = files.filter((file) => file.endsWith(`.jpg`));

  fs.readFile(frasesFile, 'utf8', async (err, data) => {
    if (err) throw err;

    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {

      const frase = lines[i];
      const backgroundIndex = i % backgrounds.length;
      const backgroundFilePath = `${backgroundsPath}${backgrounds[backgroundIndex]}`;
      const fileName = `${i.toString().padStart(4, '0')}.jpg`;
      const outputFilePath = `${outputPath}${fileName}`;
      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');      
      // Verifica se image_color é uma cor sólida ou um caminho de arquivo de imagem
      let background;
      if (image_color.startsWith('#')) {
        // Se for uma cor sólida, cria um novo objeto de cor com o valor de image_color
        context.fillStyle = image_color;
        context.fillRect(0, 0, width, height);
      } else {
        // Se for um caminho de arquivo de imagem, carrega a imagem
        context.fillStyle = TEXT_COLOR;
        const image = await loadImage(backgroundFilePath);
        background = image;
        context.drawImage(background, 0, 0, width, height);      
      }      
      // Desenha a imagem de fundo ou cor sólida
      context.font = `${FONT_STYLE} ${FONT_SIZE}px ${FONT_FAMILY}`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const words = frase.split(' ');
      const linesInFrase = [];
      let currentLineInFrase = words[0];
      for (let j = 1; j < words.length; j++) {
        const wordInFrase = words[j];
        const lineWidthInFrase =
          context.measureText(`${currentLineInFrase} ${wordInFrase}`).width;
        if (lineWidthInFrase < (width-40)) {
          currentLineInFrase += ` ${wordInFrase}`;
        } else {
          linesInFrase.push(currentLineInFrase);
          currentLineInFrase = wordInFrase;
        }
      }
      linesInFrase.push(currentLineInFrase);
      const yPosition =
        height / 2 - ((linesInFrase.length - 1) * FONT_SIZE) / 2;
      linesInFrase.forEach((line, j) => {
        const xPosition = width / 2;
        context.fillText(line, xPosition, yPosition + j * FONT_SIZE);
      });
      const buffer = canvas.toBuffer('image/jpeg');
      fs.writeFileSync(outputFilePath, buffer);
    }
  });
});
