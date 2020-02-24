// const Jimp = require('jimp');
// const path = require('path');
// const fs = require('fs');

// const sourceFolder = './input';
// const targetFolder = './output';
// const desiredAspectRatio = 0.5625; // por exemplo, 3:2

// async function cropImages() {
//   const files = fs.readdirSync(sourceFolder);
//   for (let file of files) {
//     const imagePath = path.join(sourceFolder, file);
//     const image = await Jimp.read(imagePath);
    
//     const originalWidth = image.bitmap.width;
//     const originalHeight = image.bitmap.height;
//     const originalAspectRatio = originalWidth / originalHeight;

//     // Verifica se a imagem precisa ser cortada na horizontal ou vertical
//     let newWidth, newHeight, x, y;
//     if (originalAspectRatio > desiredAspectRatio) { // precisa cortar na horizontal
//       newWidth = originalHeight * desiredAspectRatio;
//       newHeight = originalHeight;
//       x = (originalWidth - newWidth) / 2;
//       y = 0;
//     } else { // precisa cortar na vertical
//       newWidth = originalWidth;
//       newHeight = originalWidth / desiredAspectRatio;
//       x = 0;
//       y = (originalHeight - newHeight) / 2;
//     }

//     // Redimensiona e recorta a imagem
//     const croppedImage = await image.contain(newWidth, newHeight, Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_MIDDLE)
//       .crop(x, y, newWidth, newHeight);

//     // Salva a imagem na pasta de destino com um novo nome
//     const newFileName = `${file.replace(/\.[^/.]+$/, "")}_cropped.jpg`; // remove a extensão original e adiciona o sufixo
//     const newImagePath = path.join(targetFolder, newFileName);
//     await croppedImage.writeAsync(newImagePath);
//   }
// }

// cropImages();



const fs = require('fs');
const sharp = require('sharp');

const inputDir = './input'; // pasta de entrada
const outputDir = './output'; // pasta de saída
const targetWidth = 1080; // largura desejada
const targetHeight = 1920; // altura desejada

async function resizeImages(dir) {
  const files = await fs.promises.readdir(dir);

  for (const file of files) {
    const inputPath = `${dir}/${file}`;
    const outputPath = `${outputDir}/${file}`;

    // Verifica se o arquivo é uma imagem
    if (file.match(/\.(jpg|jpeg|png)$/)) {
      const image = sharp(inputPath);
      const metadata = await image.metadata();

      // Calcula as novas dimensões da imagem para manter o aspect ratio
      const aspectRatio = metadata.width / metadata.height;
      let width = targetWidth;
      let height = Math.round(width / aspectRatio);
      if (height < targetHeight) {
        height = targetHeight;
        width = Math.round(height * aspectRatio);
      }
      console.log(width, height);

      // Faz o crop a partir do centro para manter o aspect ratio
      const left = Math.floor((width - targetWidth) / 2);
      const top = Math.floor((height - targetHeight) / 2);
      image.extract({ left, top, width: targetWidth, height: targetHeight });

      // Faz o redimensionamento para as dimensões desejadas
      await image.resize(targetWidth, targetHeight).toFile(outputPath);
      console.log(`Imagem redimensionada: ${inputPath} -> ${outputPath}`);
    } else if ((await fs.promises.lstat(inputPath)).isDirectory()) {
      // Se o arquivo é uma pasta, chama a função recursivamente
      await resizeImages(inputPath);
    }
  }
}

resizeImages(inputDir).catch(console.error);
