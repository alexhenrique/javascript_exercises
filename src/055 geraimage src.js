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

const TEXT_COLOR = COLOR_OPTIONS[21]; // Cor do texto - preto (#000000)
const BACKGROUND_COLOR = COLOR_OPTIONS[10]; // Cor do fundo - branco (#FFFFFF)
const FONT_FAMILY = FONT_OPTIONS[16];
const WIDTH = 1024;
const HEIGHT = 1024;
const FONT_SIZE = 60;
const FONT_STYLE = 'bold';
const TEXT_FILE_PATH = './fraseleitura.txt';
const OUTPUT_FILE_PATH = './fraserender.jpg';
function generateImage() {
  const Canvas = require('canvas');
  const canvas = Canvas.createCanvas(WIDTH, HEIGHT);
  const context = canvas.getContext('2d');
  // Define cor de fundo
  context.fillStyle = BACKGROUND_COLOR;
  context.fillRect(0, 0, WIDTH, HEIGHT);
  // Define fonte
  context.font = `${FONT_STYLE} ${FONT_SIZE}px ${FONT_FAMILY}`;
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  // Lê texto do arquivo
  const fs = require('fs');
  const TEXT = fs.readFileSync(TEXT_FILE_PATH, 'utf8').trim();
  // Divide texto em linhas menores
  const words = TEXT.split(' ');
  const lines = [];
  let currentLine = words[0];
  for (let i = 1; i < words.length; i++) {
    const word = words[i];
    const lineWidth = context.measureText(currentLine + ' ' + word).width;
    if (lineWidth < WIDTH * 0.8) {
      currentLine += ' ' + word;
    } else {
      lines.push(currentLine);
      currentLine = word;
      if (context.measureText(currentLine).width >= WIDTH * 0.8) {
        currentLine = currentLine.slice(0, -1);
        lines.push(currentLine);
        if (lines.length >= 3) {
          break;
        }
        currentLine = word;
      }
    }
  }
  lines.push(currentLine);
  // Escreve texto em linhas menores
  const lineSpacing = FONT_SIZE * 1.2;
  const x = WIDTH / 2;
  let y = (HEIGHT - lineSpacing * (lines.length - 1)) / 2;
  lines.forEach(line => {
    context.fillStyle = TEXT_COLOR;
    context.fillText(line, x, y);
    y += lineSpacing;
  });
  // Salva imagem
  const out = fs.createWriteStream(OUTPUT_FILE_PATH);
  const stream = canvas.createJPEGStream({ quality: 0.95, chromaSubsampling: true });
  stream.pipe(out);
  out.on('finish', () => console.log('Imagem salva em', OUTPUT_FILE_PATH));
}
generateImage();