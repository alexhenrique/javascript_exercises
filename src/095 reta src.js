const fs = require('fs');
const path = require('path');
const gm = require('gm').subClass({ imageMagick: true });

const folderPath = './output/'; // caminho para a pasta com as imagens

fs.readdir(folderPath, function(err, files) {
  if (err) throw err;

  files.forEach(function(file) {
    const filePath = path.join(folderPath, file);
    const extension = path.extname(file);

    // Verifica se o arquivo é uma imagem JPEG
    if (extension === '.jpg' || extension === '.jpeg') {
      // Aplica o efeito de adicionar retângulos grafite em todos os cantos
      gm(filePath)
        .fill('gray')
        .drawRectangle(0, 0, 50, 50)
        .drawRectangle(0, 974, 50, 1024)
        .drawRectangle(974, 0, 1024, 50)
        .drawRectangle(974, 974, 1024, 1024)
        .write(filePath, function(err) {
          if (err) throw err;
          console.log(`Efeito aplicado em ${file}`);
        });
    }
  });
});
