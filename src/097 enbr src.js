const fs = require('fs');
const { exec } = require('child_process');

const file = './frases.txt';
const outputFolder = './imagens/';

// Verifica se a pasta de saída existe, senão a cria
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Lê o arquivo de frases
fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Divide as frases em um array
  const lines = data.trim().split('\n');

  // Loop pelas linhas do arquivo
  lines.forEach((line, index) => {
    // Cria um comando ffmpeg para gerar a imagem
    const command = `ffmpeg -y -f lavfi -i color=s=1024x512:r=30 -vf drawtext="fontfile=/path/to/font.ttf:text='${line}':fontcolor=black:fontsize=48:x=(w-tw)/2:y=(h-th)/2" ${outputFolder}${index}.png`;

    // Executa o comando ffmpeg
    exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao gerar a imagem da linha ${index}: ${error.message}`);
        return;
      }

      if (stderr) {
        console.error(`Erro ao gerar a imagem da linha ${index}: ${stderr}`);
        return;
      }

      console.log(`Imagem da linha ${index} gerada com sucesso.`);
    });
  });
});
