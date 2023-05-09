const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const colorPalette = [
  '#FFFFFF',//cor background en
  '#000000',//cor fonte en
  '#261C1C',//cor background br
  '#D9C8BF'//cor fonte br
];

const qual_imagem = 'en';
const backgroundsPath = 'backgrounds/';
const frasesFile = `frases_${qual_imagem}.txt`;
const outputPath = 'br_out/';

const width = 1024;
const height = 1024;

const fontSize = 100;
const font = 'Times New Roman';

fs.readdir(backgroundsPath, (err, files) => {
  if (err) throw err;

  const backgrounds = files.filter((file) => file.endsWith(`_${qual_imagem}.jpg`));

  fs.readFile(frasesFile, 'utf8', async (err, data) => {
    if (err) throw err;

    const lines = data.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const frase = lines[i];
      const backgroundIndex = i % backgrounds.length;
      const backgroundFilePath = `${backgroundsPath}${backgrounds[backgroundIndex]}`;
      const fileName = `${i.toString().padStart(4, '0')}_${qual_imagem}.jpg`;
      const outputFilePath = `${outputPath}${fileName}`;

      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');

      const image = await loadImage(backgroundFilePath);
      context.drawImage(image, 0, 0, width, height);

      context.fillStyle = qual_imagem === 'en' ? colorPalette[1] : colorPalette[3];
      context.font = `${fontSize}px ${font}`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';

      const words = frase.split(' ');
      const linesInFrase = [];
      let currentLineInFrase = words[0];

      for (let j = 1; j < words.length; j++) {
        const wordInFrase = words[j];
        const lineWidthInFrase =
          context.measureText(`${currentLineInFrase} ${wordInFrase}`).width;
        if (lineWidthInFrase < 900) {
          currentLineInFrase += ` ${wordInFrase}`;
        } else {
          linesInFrase.push(currentLineInFrase);
          currentLineInFrase = wordInFrase;
        }
      }
      linesInFrase.push(currentLineInFrase);

      const yPosition =
        height / 2 - ((linesInFrase.length - 1) * fontSize) / 2;

      linesInFrase.forEach((line, j) => {
        const xPosition = width / 2;
        context.fillText(line, xPosition, yPosition + j * fontSize);
      });

      const buffer = canvas.toBuffer('image/jpeg');
      fs.writeFileSync(outputFilePath, buffer);
    }
  });
});



























// // const fs = require('fs');
// // const im = require('imagemagick');
// // const inputPath = 'frases_br.txt';
// // const backgroundsPath = 'backgrounds/';
// // const outputPath = 'output4/';
// // fs.readdir(backgroundsPath, (err, files) => {
// //   if (err) throw err;
// //   const backgrounds = files.filter((file) => file.endsWith('_en.jpg'));
// //   fs.readFile(inputPath, 'utf8', (err, data) => {
// //     if (err) throw err;
// //     const lines = data.split('\n');
// //     lines.forEach((line, index) => {
// //       const backgroundIndex = index % backgrounds.length;
// //       const backgroundFilePath = `${backgroundsPath}${backgrounds[backgroundIndex]}`;
// //       const fileName = `${index.toString().padStart(4, '0')}_br.jpg`;
// //       const outputFilePath = `${outputPath}${fileName}`;
// //       im.convert([
// //         backgroundFilePath,
// //         '-resize', '1024x512^',
// //         '-gravity', 'center',
// //         '-extent', '1024x512',
// //         '-fill', 'black',
// //         '-font', 'Times-New-Roman',
// //         '-pointsize', '40',
// //         '-interline-spacing', '-10',
// //         '-gravity', 'center',
// //         '-annotate', '+0+0', line,
// //         outputFilePath
// //       ], (err) => {
// //         if (err) throw err;
// //       });
// //     });
// //   });
// // });
// // ///////////////////////////////////////////////
// const fs = require('fs');
// const im = require('imagemagick');
// const inputPath = 'frases_br.txt';
// const backgroundsPath = 'backgrounds/';
// const outputPath = './output4/';
// fs.readdir(backgroundsPath, (err, files) => {
//   if (err) throw err;
//   const backgrounds = files.filter((file) => file.endsWith('_en.jpg'));
//   fs.readFile(inputPath, 'utf8', (err, data) => {
//     if (err) throw err;
//     const lines = data.split('\n');
//     lines.forEach((line, index) => {
//       const backgroundIndex = index % backgrounds.length;
//       const backgroundFilePath = `${backgroundsPath}${backgrounds[backgroundIndex]}`;
//       const fileName = `${index.toString().padStart(4, '0')}_br.jpg`;
//       const outputFilePath = `${outputPath}${fileName}`;
//       im.convert([
//         backgroundFilePath,
//         '-resize', '1024x512^',
//         '-gravity', 'center',
//         '-extent', '1024x512',
//         '-fill', 'black',
//         '-font', 'Times-New-Roman',
//         '-pointsize', '40',
//         '-interline-spacing', '-10',
//         '-gravity', 'center',
//         '-size', '1024x512',
//         '-annotate', '+0+0', line,
//         `caption:${line}`,
//         '+repage',
//         '-composite',
//         outputFilePath
//       ], (err) => {
//         if (err) throw err;
//       });
//     });
//   });
// });