const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const width = 1024;
const height = 1024;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

const numCircles = 500;
for (let i = 0; i < numCircles; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const radius = Math.floor(Math.random() * 50) + 5;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

const out = fs.createWriteStream('output.jpg');
const stream = canvas.createJPEGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log('Image saved!');
});


const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const width = 1024;
const height = 1024;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.globalCompositeOperation = 'color-dodge'; // Define o modo de mesclagem para 'add color'

const numCircles = 200;
for (let i = 0; i < numCircles; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  const radius = Math.floor(Math.random() * 10) + 1;
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

const out = fs.createWriteStream('output.jpg');
const stream = canvas.createJPEGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log('Image saved!');
});

const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');

const width = 1024;
const height = 1024;

const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

ctx.globalCompositeOperation = 'color-dodge'; // Define o modo de mesclagem para 'add color'

const numCircles = 5000;
for (let i = 0; i < numCircles; i++) {
  const x = Math.floor(Math.random() * width);
  const y = Math.floor(Math.random() * height);
  let radius = Math.floor(Math.random() * 15) + 5; // Define o tamanho dos círculos aleatoriamente
  if (Math.random() > 0.8) { // Círculos maiores aparecem com uma frequência menor
    radius *= 2;
  }
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.fill();
}

const out = fs.createWriteStream('output.jpg');
const stream = canvas.createJPEGStream();
stream.pipe(out);
out.on('finish', () => {
  console.log('Image saved!');
});


const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const Chance = require('chance');
const chance = new Chance();
const canvas = createCanvas(1024, 1024);
const ctx = canvas.getContext('2d');

const outputFilePath = 'fractal.jpg';

const getRandomCircle = () => {
  const x = chance.integer({ min: 0, max: 1023 });
  const y = chance.integer({ min: 0, max: 1023 });
  const radius = chance.integer({ min: 1, max: 10 });
  const hue = chance.integer({ min: 0, max: 360 });
  const saturation = chance.integer({ min: 50, max: 100 });
  const lightness = chance.integer({ min: 0, max: 50 });
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return { x, y, radius, color };
};

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 1024, 1024);

for (let i = 0; i < 5000; i++) {
  const circle = getRandomCircle();
  ctx.globalCompositeOperation = 'color-dodge';
  ctx.beginPath();
  ctx.fillStyle = circle.color;
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fill();
}

const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(outputFilePath, buffer);
console.log('Imagem salva com sucesso!');






const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const Chance = require('chance');
const chance = new Chance();
const canvas = createCanvas(1024, 1024);
const ctx = canvas.getContext('2d');

const outputFilePath = 'fractal.jpg';

const getRandomCircle = () => {
  const x = chance.integer({ min: 0, max: 1023 });
  const y = chance.integer({ min: 0, max: 1023 });
  const radius = chance.integer({ min: 1, max: 10 });
  const hue = chance.integer({ min: 0, max: 360 });
  const saturation = chance.integer({ min: 50, max: 100 });
  const lightness = chance.integer({ min: 0, max: 50 });
  const color = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
  return { x, y, radius, color };
};

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, 1024, 1024);

for (let i = 0; i < 100000; i++) {
  const x1 = chance.integer({ min: 0, max: 1023 });
  const y1 = chance.integer({ min: 0, max: 1023 });
  const x2 = chance.integer({ min: 0, max: 1023 });
  const y2 = chance.integer({ min: 0, max: 1023 });
  const lineWidth = chance.integer({ min: 1, max: 5 });
  const lightness = chance.integer({ min: 0, max: 100 });
  const color = `hsl(0, 0%, ${lightness}%)`;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = lineWidth;
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

for (let i = 0; i < 5000; i++) {
  const circle = getRandomCircle();
  ctx.globalCompositeOperation = 'color-dodge';
  ctx.beginPath();
  ctx.fillStyle = circle.color;
  ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
  ctx.fill();
}

const buffer = canvas.toBuffer('image/jpeg');
fs.writeFileSync(outputFilePath, buffer);
console.log('Imagem salva com sucesso!');
