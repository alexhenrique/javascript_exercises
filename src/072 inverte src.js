const { exec } = require('child_process');
const path = require('path');
const fs = require('fs');

const inputPath = 'color'; // pasta de entrada
const outputPath = 'invertida'; // pasta de saída

// Cria a pasta de saída, se não existir
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

// Função para processar uma imagem
function processImage(inputFile, outputFile) {
  // const command = `ffmpeg -i ${inputFile} -vf "negate, colorchannelmixer=.393:.769:.189:0:.349:.686:.168:0:.272:.534:.131" ${outputFile}`;
  // const command = `ffmpeg -i ${inputFile} -vf "scale=iw/10:-1,scale=iw*10:-1" ${outputFile}`;
  // const command = `ffmpeg -i ${inputFile} -vf "gblur=sigma=20" ${outputFile}`;
  const command = `ffmpeg -i ${inputFile} -vf "curves=preset=vintage, negate" ${outputFile}`;


  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao processar ${inputFile}: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`Erro ao processar ${inputFile}: ${stderr}`);
      return;
    }
    console.log(`Imagem processada: ${inputFile}`);
  });
}

// Função para processar todas as imagens de uma pasta
function processFolder(folder) {
  const files = fs.readdirSync(folder);

  for (const file of files) {
    const filePath = path.join(folder, file);
    const outputFilePath = path.join(outputPath, file);

    // Verifica se é um arquivo de imagem
    if (fs.statSync(filePath).isFile() && ['.jpg', '.jpeg', '.png', '.gif'].includes(path.extname(filePath).toLowerCase())) {
      processImage(filePath, outputFilePath);
    }

    // Verifica se é uma pasta e chama a função recursivamente
    if (fs.statSync(filePath).isDirectory()) {
      const subFolder = path.join(folder, file);
      processFolder(subFolder);
    }
  }
}

// Inicia o processamento da pasta de entrada
processFolder(inputPath);
