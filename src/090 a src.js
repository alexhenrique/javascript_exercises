const fs = require('fs');
const path = require('path');

const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth() + 1;

// Função para criar uma pasta com base na data
function createFolder(date) {
  const folderName = date.toLocaleDateString().split('/').reverse().join('-');
  const folderPath = path.join(__dirname, folderName);
  
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }

  return folderPath;
}

// Função para mover as imagens para a pasta criada
function moveImages(images, folderPath) {
  if (images.length === 0) {
    return;
  }
  
  const image = images.shift();
  const imagePath = path.join(__dirname, image);
  const newImagePath = path.join(folderPath, image);
  
  fs.rename(imagePath, newImagePath, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log(`Imagem ${image} movida para a pasta ${folderPath}`);
    }
    
    moveImages(images, folderPath);
  });
}

// Função para buscar as imagens na pasta atual
function findImages() {
  const files = fs.readdirSync(__dirname);
  const jpgImages = files.filter(file => path.extname(file) === '.jpg');
  
  return jpgImages.slice(0, 6);
}

// Função principal
function main() {
  for (let i = 1; i <= 30; i++) {
    const folderDate = new Date(currentYear, currentMonth - 1, new Date().getDate() + i);
    const folderPath = createFolder(folderDate);
    const images = findImages();
    
    moveImages(images, folderPath);
  }
}

main();
