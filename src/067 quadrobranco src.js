const fs = require('fs');
const sharp = require('sharp');
const { createCanvas, loadImage } = require('canvas');

const imageWidth = 1080;
const imageHeight = 1920;
const textWidth = 980;
const textHeight = 580;
const textTop = 450;
const textLeft = 50;

const inputImagePath = '0001.jpg';
const inputTextPath = 'frases_deen.txt';
const outputFolder = 'outputfrases';

const lines = fs.readFileSync(inputTextPath, 'utf-8').split('\n');

if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

async function generateImage(line) {
  const canvas = createCanvas(imageWidth, imageHeight);
  const context = canvas.getContext('2d');

  const image = await loadImage(inputImagePath);
  context.drawImage(image, 0, 0);

  context.fillStyle = '#ffffff';
  context.fillRect(textLeft, textTop, textWidth, textHeight);

  context.fillStyle = '#000000';
  context.font = '24px Arial';
  context.textAlign = 'left';
  context.textBaseline = 'top';

  const words = line.split(' ');
  let currentLine = '';
  let y = textTop;
  for (const word of words) {
    const testLine = currentLine + word + ' ';
    const metrics = context.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > textWidth) {
      context.fillText(currentLine, textLeft, y);
      currentLine = word + ' ';
      y += 30;
    } else {
      currentLine = testLine;
    }
  }
  context.fillText(currentLine, textLeft, y);

  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(`${outputFolder}/${line}.jpg`, buffer);
}

async function run() {
  for (const line of lines) {
    await generateImage(line);
  }
}

run();
