const { exec } = require('child_process');
const fs = require('fs');
const numImagens = 20;
const tamanhoQuadrado = 128;
const numQuadradosX = 1024 / tamanhoQuadrado;
const numQuadradosY = 1024 / tamanhoQuadrado;
const efeitosEscolhidos = ['Desfocado'];
const efeitos = [
  ['Sépia', '-sepia-tone 80%'],
  ['Desbotado', '-modulate 120,50,100'],
  ['Descolorido', '-colorspace Gray'],
  ['Negativo', '-negate'],
  ['Arranhado', '-charcoal 2'],
  ['Rasgado', '-wave 5x80'],
  ['Vinhetado', '-vignette 0x60'],
  ['Amarelado', '-colorize 60,30,10'],
  ['Escurecido', '-brightness -50%'],
  ['Desgastado', '-emboss 1x1'],
  ['Preto e branco', '-colorspace Gray'],
  ['Tom pastel', '-posterize 2'],
  ['Alto contraste', '-contrast'],
  ['Brilho aumentado', '-brightness +50%'],
  ['Ajuste de saturação', '-modulate 100,150,100'],
  ['Desfocado', '-blur 0x3'],
  ['Aquarela', '-watercolor'],
  ['Polarizado', '-polaroid'],
  ['Pop art', '-color-threshold 50%'],
  ['Distorcido', '-swirl 180'],
  ['Esboço', '-sketch 0x50+120'],
  ['Frio', '-colorize 30,30,100'],
  ['Estilo desenho a lápis', '-charcoal 5x5+10'],
  ['Contornos', '-edge 2'],
  ['Aumento de nitidez', '-unsharp 0x2'],
  ['Vintage', '-sepia-tone 60% -gamma 1.2 -contrast'],
  ['Esferizar', '-implode 0.5'],
  ['Ruido de TV', '-noise 2 -monochrome -blur 0x1 -contrast-stretch 0%'],
  ['Estilo Grunge', '-paint 5 -contrast'],
  ['Ajuste de matiz', '-modulate 120,100,100'],
  ['foto_velha', '-sepia-tone 80% -gamma 0.8 -modulate 120,50,100 -noise 2 -contrast'],
  ['lavada', '-colorspace Gray -blur 0x1 -level 30%,70% -colorize 60,30,10' ]
];

try {
  if (!fs.existsSync('output')) {
    fs.mkdirSync('output');
  }
} catch (error) {
  console.error(`Erro ao criar a pasta de saída: ${error}`);
  process.exit(1);
}
for (const i of Array(numImagens).keys()) {
  const numString = (i + 1).toString().padStart(4, '0');
  const nomeArquivo = `output/${numString}_br.jpg`;
  let imagemComando = '-size 1024x1024 xc:black';
  for (let y = 0; y < numQuadradosY; y++) {
    for (let x = 0; x < numQuadradosX; x++) {
      // const corR = Math.floor(Math.random() * 20);
      // const corG = Math.floor(Math.random() * 20);
      // const corB = Math.floor(Math.random() * 22);
      const corR = Math.floor(Math.random() * (255 - 208)) + 208
      const corG = Math.floor(Math.random() * (255 - 208)) + 208
      const corB = Math.floor(Math.random() * (255 - 208)) + 208


      const corQuadrado = `rgb(${corR}, ${corG}, ${corB})`;
      const posicaoX = x * tamanhoQuadrado;
      const posicaoY = y * tamanhoQuadrado;
      const quadradoComando = `-fill "${corQuadrado}" -draw "rectangle ${posicaoX},${posicaoY} ${posicaoX + tamanhoQuadrado - 1},${posicaoY + tamanhoQuadrado - 1}"`;
      imagemComando += ` ${quadradoComando}`;
    }
  }

  const criarImagemComando = `convert ${imagemComando} ${nomeArquivo}`;
  exec(criarImagemComando, (error, stdout, stderr) => {
    if (error || stderr) {
      console.error(`Erro ao criar a imagem: ${error || stderr}`);
      process.exit(1);
    }
  });
  for (const efeitoEscolhido of efeitosEscolhidos) {
    const indexEfeito = efeitos.findIndex(efeito => efeito[0] === efeitoEscolhido);
    const efeitoComando = efeitos[indexEfeito][1];
    const comando = `convert ${nomeArquivo} ${efeitoComando} ${nomeArquivo}`;
    console.log(comando);
    exec(comando, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro ao modificar a imagem: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Erro ao modificar a imagem: ${stderr}`);
        return;
      }
      console.log(`Imagem modificada com sucesso: ${nomeArquivo}`);
    });
  }
}










// const { exec } = require('child_process');
// const fs = require('fs');

// const numImagens = 5;
// const tamanhoQuadrado = 256;
// const numQuadradosX = 1024 / tamanhoQuadrado;
// const numQuadradosY = 512 / tamanhoQuadrado;

// const efeitosEscolhidos = ['Sépia'];
// const efeitos = [
//   ['Sépia', '-sepia-tone 80%'],
//   ['Desbotado', '-modulate 120,50,100'],
//   ['Descolorido', '-colorspace Gray'],
//   ['Negativo', '-negate']
// ];

//   // 'Grão de filme': '-noise 3',
//   // 'Arranhado': '-charcoal 2',
//   // 'Rasgado': '-wave 5x80',
//   // 'Vinhetado': '-vignette 0x60',
//   // 'Amarelado': '-colorize 60,30,10',
//   // 'Escurecido': '-brightness -50%',
//   // 'Desgastado': '-emboss 1x1',
//   // 'Preto e branco': '-colorspace Gray',
//   // 'Tom pastel': '-posterize 2',
//   // 'Alto contraste': '-contrast',
//   // 'Brilho aumentado': '-brightness +50%',
//   // 'Ajuste de saturação': '-modulate 100,150,100',
//   // 'Desfocado': '-blur 0x3',
//   // 'Aquarela': '-watercolor',
//   // 'Polarizado': '-polaroid',
//   // 'Pop art': '-color-threshold 50%',
//   // 'Distorcido': '-swirl 180',
//   // 'Esboço': '-sketch 0x50+120',
//   // 'Frio': '-colorize 30,30,100',
//   // 'Estilo desenho a lápis': '-charcoal 5x5+10',
//   // 'Contornos': '-edge 2',
//   // 'Aumento de nitidez': '-unsharp 0x2',
//   // 'Vintage': '-sepia-tone 60% -gamma 1.2 -contrast',
//   // 'Esferizar': '-implode 0.5',
//   // 'Ruido de TV': '-noise 2 -monochrome -blur 0x1 -contrast-stretch 0%',
//   // 'Estilo Grunge': '-paint 5 -contrast',
//   // 'Ajuste de matiz': '-modulate 120,100,100'

// // Cria a pasta de saída, se ela não existir
// if (!fs.existsSync('output')) {
//   fs.mkdirSync('output');
// }

// for (let i = 1; i <= numImagens; i++) {
//   const numString = i.toString().padStart(4, '0');
//   const nomeArquivo = `output/${numString}_br.jpg`;

//   let imagemComando = '-size 1024x512 xc:black';
//   for (let y = 0; y < numQuadradosY; y++) {
//     for (let x = 0; x < numQuadradosX; x++) {
//       const corR = Math.floor(Math.random() * 128);
//       const corG = Math.floor(Math.random() * 128);
//       const corB = Math.floor(Math.random() * 128);
//       const corQuadrado = `rgb(${corR}, ${corG}, ${corB})`;
//       const posicaoX = x * tamanhoQuadrado;
//       const posicaoY = y * tamanhoQuadrado;
//       const quadradoComando = `-fill "${corQuadrado}" -draw "rectangle ${posicaoX},${posicaoY} ${posicaoX + tamanhoQuadrado - 1},${posicaoY + tamanhoQuadrado - 1}"`;
//       imagemComando += ` ${quadradoComando}`;
//     }
//   }

//   let comando = `convert ${imagemComando} ${nomeArquivo}`;
//   console.log(comando)
//   exec(comando, (error, stdout, stderr) => {
//     if (error) {
//       // console.error(`Erro ao criar a imagem: ${error.message}`);
//       return;
//     }
//     if (stderr) {
//       // console.error(`Erro ao criar a imagem: ${stderr}`);
//       return;
//     }
//     // console.log(`Imagem criada com sucesso: ${nomeArquivo}`);
//   });

//   for (let i = 0; i < efeitosEscolhidos.length; i++) {
//     let indexEfeito = efeitos.findIndex(efeito => efeito[0] === efeitosEscolhidos[i]);
//     let efeitoComando = efeitos[indexEfeito][1];
//     const comando = `convert ${efeitoComando} ${nomeArquivo}`;
//     console.log(comando);
//     exec(comando, (error, stdout, stderr) => {
//       if (error) {
//         console.error(`Erro ao modificar a imagem: ${error.message}`);
//         return;
//       }
//       if (stderr) {
//         console.error(`Erro ao modificar a imagem: ${stderr}`);
//         return;
//       }
//       console.log(`Imagem modificada com sucesso: ${nomeArquivo}`);
//     });
//   }
// }