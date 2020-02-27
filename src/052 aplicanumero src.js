async function applyNumberToImage(filePath, number, position, fontColor, frameColor) {
  const img = await loadImage(filePath);

  const canvas = createCanvas(img.width, img.height);
  const ctx = canvas.getContext('2d');

  ctx.drawImage(img, 0, 0);

  const fontSize = Math.round(img.width / 5);
  ctx.font = `${fontSize}px Arial`;
  ctx.fillStyle = fontColor;

  const numberText = parseInt(number, 10).toString();
  const textWidth = ctx.measureText(numberText).width;

  let x, y;
  switch (position) {
    case 'top':
      x = img.width / 2 - textWidth / 2;
      y = fontSize;
      break;
    case 'center':
      x = img.width / 2 - textWidth / 2;
      y = img.height / 2 + fontSize / 2;
      break;
    case 'bottom':
      x = img.width / 2 - textWidth / 2;
      y = img.height - fontSize;
      break;
    case 'left':
      x = fontSize;
      y = img.height / 2 + fontSize / 2;
      break;
    case 'middle':
      x = img.width / 2 - textWidth / 2;
      y = img.height / 2 + fontSize / 2;
      break;
    case 'right':
      x = img.width - textWidth - fontSize;
      y = img.height / 2 + fontSize / 2;
      break;
    default:
      throw new Error(`Invalid position "${position}"`);
  }

  ctx.fillText(numberText, x, y);

  if (frameColor) {
    const frameWidth = Math.round(img.width / 50);
    ctx.strokeStyle = frameColor;
    ctx.lineWidth = frameWidth;
    ctx.strokeRect(frameWidth / 2, frameWidth / 2, img.width - frameWidth, img.height - frameWidth);
  }

  const outputFilePath = path.join(path.dirname(filePath), `${numberText}.jpg`);
  const output = fs.createWriteStream(outputFilePath);
  const stream = canvas.createJPEGStream({ quality: 0.95, chromaSubsampling: false });
  stream.pipe(output);

  return new Promise((resolve, reject) => {
    output.on('finish', resolve);
    output.on('error', reject);
  });
}
