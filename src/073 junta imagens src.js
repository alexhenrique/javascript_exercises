const fs = require('fs');
const { createCanvas, loadImage } = require('canvas');

const inputDir = './pares/';
const outputDir = './saida/';

// Busca por imagens com numeração de quatro dígitos, com sufixos "_en" e "_br"
const imageRegex = /^\d{4}_(en|br)\.jpg$/;

// Lê o diretório de entrada
fs.readdir(inputDir, (err, files) => {
  if (err) {
    console.error(`Error reading directory ${inputDir}: ${err}`);
    return;
  }

  console.log(`Processing images in ${inputDir}`);
  const imagePairs = findImagePairs(files);
  console.log(`Found ${imagePairs.length} image pairs`);

  if (imagePairs.length === 0) {
    console.warn(`No image pairs found in ${inputDir}`);
    return;
  }

  // Cria a pasta de saída se não existir
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
  }

  // Processa cada par de imagens encontrado
  for (const pair of imagePairs) {
    const [enPath, brPath] = pair;
    const outputPath = `${outputDir}${enPath.slice(0, 4)}_bren.jpg`;

    // Carrega as imagens usando a biblioteca Canvas
    Promise.all([loadImage(`${inputDir}${enPath}`), loadImage(`${inputDir}${brPath}`)])
      .then(([enImage, brImage]) => {
        // Cria o canvas para unir as imagens
        const canvas = createCanvas(enImage.width, enImage.height + brImage.height);
        const ctx = canvas.getContext('2d');

        // Desenha as imagens no canvas
        ctx.drawImage(enImage, 0, 0);
        ctx.drawImage(brImage, 0, enImage.height);

        // Salva a imagem resultante
        const outStream = fs.createWriteStream(outputPath);
        const stream = canvas.createJPEGStream({ quality: 1 });
        stream.pipe(outStream);
        console.log(`Saved ${outputPath}`);
      })
      .catch((err) => {
        console.error(`Error processing image pair ${enPath} and ${brPath}: ${err}`);
      });
  }
});

// Encontra pares de imagens com numeração de quatro dígitos e sufixos "_en" e "_br"
function findImagePairs(files) {
  const pairs = [];

  for (const file of files) {
    if (imageRegex.test(file)) {
      const prefix = file.slice(0, 4);
      const enPath = `${prefix}_en.jpg`;
      const brPath = `${prefix}_br.jpg`;

      if (files.includes(enPath) && files.includes(brPath)) {
        pairs.push([enPath, brPath]);
      }
    }
  }

  return pairs;
}
