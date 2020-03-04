const fs = require('fs');
const { createCanvas } = require('canvas');
const Chance = require('chance');
const chance = new Chance();

const colors = {
  red: '#FF0000',
  yellow: '#FFFF00',
  blue: '#0000FF',
  black: '#000000',
  white: '#FFFFFF',
  gray: '#808080',
};

const width = 1920;
const height = 1080;

const framesX = 19; // número de quadros na horizontal
const framesY = 10; // número de quadros na vertical

const generateImage = (colors) => {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  const frameWidth = width / framesX;
  const frameHeight = height / framesY;

  for (let x = 0; x < framesX; x++) {
    for (let y = 0; y < framesY; y++) {
      const colorKeys = Object.keys(colors);
      const randomColor = colors[colorKeys[Math.floor(Math.random() * colorKeys.length)]];

      ctx.fillStyle = randomColor;
      ctx.fillRect(x * frameWidth, y * frameHeight, frameWidth, frameHeight);
    }
  }

  return canvas;
};

const saveImage = (canvas, filename) => {
  const out = fs.createWriteStream(`output/${filename}.jpg`);
  const stream = canvas.createJPEGStream({ quality: 0.95, chromaSubsampling: true });

  stream.pipe(out);
  out.on('finish', () => console.log(`Image ${filename}.jpg saved.`));
};

const numImages = 5; // número de imagens a serem geradas

for (let i = 1; i <= numImages; i++) {
  const filename = `image${i.toString().padStart(4, '0')}`;
  const image = generateImage(colors);
  saveImage(image, filename);
}
