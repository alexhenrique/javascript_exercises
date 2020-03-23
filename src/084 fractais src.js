const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const Chance = require('chance');
const chance = new Chance();

const TOTAL_IMAGES = 50;
const OUTPUT_DIRECTORY = 'output/';

if (!fs.existsSync(OUTPUT_DIRECTORY)) {
  fs.mkdirSync(OUTPUT_DIRECTORY);
}

for (let i = 0; i < TOTAL_IMAGES; i++) {
  const canvas = createCanvas(1024, 1024);
  const ctx = canvas.getContext('2d');
  const outputFilePath = `${OUTPUT_DIRECTORY}${i.toString().padStart(4, '0')}.jpg`;

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

  // desenha linhas em tons de cinza e cores
  for (let j = 0; j < 10000; j++) {
    const x1 = chance.integer({ min: 0, max: 1023 });
    const y1 = chance.integer({ min: 0, max: 1023 });
    const x2 = chance.integer({ min: 0, max: 1023 });
    const y2 = chance.integer({ min: 0, max: 1023 });
    const lineWidth = chance.integer({ min: 1, max: 5 });
    const grey = chance.integer({ min: 0, max: 255 });
    const color = `rgba(${grey},${grey},${grey},${chance.floating({ min: 0.2, max: 0.5 })})`;
    ctx.beginPath();
    if (grey > 100) {
      ctx.strokeStyle = color;
    } else {
      ctx.strokeStyle = `rgb(${grey},${grey},${grey})`;
    }
    ctx.lineWidth = lineWidth;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
  }

  // desenha círculos
  for (let j = 0; j < 2000; j++) {
    const circle = getRandomCircle();
    ctx.globalCompositeOperation = 'color-dodge';
    ctx.beginPath();
    ctx.fillStyle = circle.color;
    ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputFilePath, buffer);
}