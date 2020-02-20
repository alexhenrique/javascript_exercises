const ffmpeg = require('ffmpeg');

// Caminho para o arquivo SRT contendo as legendas
const subtitlesPath = '/hat.srt';

// Caminho para a imagem preta que será usada como o vídeo de fundo
const backgroundPath = '/fraserender.jpg';

// Caminho de saída do arquivo de vídeo com as legendas
const outputPath = '/output.mp4';

// Configuração do clipe de vídeo
const video = new ffmpeg()
  .input(backgroundPath)
  .inputOptions('-loop 1') // Faz a imagem preta repetir indefinidamente
  .inputOptions('-framerate 30') // Define a taxa de quadros para 30 fps

// Configuração das legendas
video
  .addOption('-vf', `subtitles=${subtitlesPath}`) // Adiciona as legendas usando o filtro "subtitles"
  .output(outputPath)
  .on('end', function() {
    console.log('Vídeo com legendas criado com sucesso!');
  })
  .on('error', function(err) {
    console.error('Erro ao criar o vídeo com legendas: ' + err.message);
  })
  .run();
