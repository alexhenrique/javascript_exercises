const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

const convertToBW = (file) => {
  const inputPath = path.resolve(file);
  const outputPath = path.join(__dirname, 'preto e branco', path.basename(file));

  exec(`magick convert "${inputPath}" -colorspace Gray "${outputPath}"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`File converted: ${outputPath}`);
  });
};

const processFolder = (folderPath) => {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error(`Error reading folder: ${folderPath}`);
      console.error(err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(folderPath, file);
      fs.stat(filePath, (err, stats) => {
        if (err) {
          console.error(`Error reading file: ${filePath}`);
          console.error(err);
          return;
        }

        if (stats.isDirectory()) {
          processFolder(filePath);
        } else if (stats.isFile() && path.extname(file).toLowerCase() === '.jpg') {
          convertToBW(filePath);
        }
      });
    });
  });
};

processFolder(__dirname);
