const fs = require('fs');
const path = require('path');

const SOURCE_DIR = './imagensinsta';
const DEST_DIR = './organizadas';

// Cria uma nova pasta numerada na pasta "outpt"
function createNewFolder(folderNum) {
  const folderName = folderNum.toString().padStart(4, '0');
  const folderPath = path.join(DEST_DIR, folderName);
  fs.mkdirSync(folderPath);
  return folderPath;
}

// Move as imagens para a pasta numerada
function moveImages(sourcePath, folderPath, images) {
  images.forEach(image => {
    const sourceImage = path.join(sourcePath, image);
    const destImage = path.join(folderPath, image);
    fs.renameSync(sourceImage, destImage);
  });
}

// Percorre a pasta "imag" e move as imagens para as pastas numeradas
function processImages() {
  let folderNum = 1;
  let images = [];
  const sourcePath = path.resolve(SOURCE_DIR);

  fs.readdirSync(sourcePath).forEach(image => {
    if (path.extname(image).toLowerCase() === '.jpg') {
      images.push(image);

      if (images.length === 6) {
        const folderPath = createNewFolder(folderNum++);
        moveImages(sourcePath, folderPath, images);
        images = [];
      }
    }
  });

  // Move as imagens restantes para a última pasta criada
  if (images.length > 0) {
    const folderPath = createNewFolder(folderNum++);
    moveImages(sourcePath, folderPath, images);
  }
}

// Executa a função principal
processImages();
