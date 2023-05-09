const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const blendModes = [
  Jimp.BLEND_MULTIPLY,
  Jimp.BLEND_SCREEN,
  Jimp.BLEND_OVERLAY,
  Jimp.BLEND_DARKEN,
  Jimp.BLEND_HARDLIGHT,
  Jimp.BLEND_SOURCE_OVER
];
const qualmetodo = 5;

async function centralizaImagens() {
  const folder = './fraserender';
  const outputFolder = './fraserender/unidas';
  const files = fs.readdirSync(folder);
  const backFiles = files.filter(file => file.includes('_back.jpg'));
  const topFiles = files.filter(file => file.includes('_en.jpg'));
  const bottonFiles = files.filter(file => file.includes('_de.jpg'));
  const count = Math.max(topFiles.length, bottonFiles.length);
  let backcount = 0;

  for (let i = 0; i < count; i++) {
    const backFile = backFiles[i % backFiles.length];
    const topFile = topFiles[i % topFiles.length];
    const bottonFile = bottonFiles[i % bottonFiles.length];
    const { bitmap: { width: w1, height: h1 } } = await Jimp.read(path.join(folder, backFile));
    const { bitmap: { width: w2, height: h2 } } = await Jimp.read(path.join(folder, topFile));
    const { bitmap: { width: w3, height: h3 } } = await Jimp.read(path.join(folder, bottonFile));
    const finalImg = new Jimp(w1, h1);  
    finalImg.composite(await Jimp.read(path.join(folder, backFile)), 0, 0);
    finalImg.composite(await Jimp.read(path.join(folder, topFile)), Math.floor((w1 - w2) / 2), 350, { mode: blendModes[qualmetodo] });
    finalImg.composite(await Jimp.read(path.join(folder, bottonFile)), Math.floor((w1 - w3) / 2), h2 + 50 + 350, { mode: blendModes[qualmetodo] });  
    const outputFile = path.join(outputFolder, topFile.replace('_en.jpg', '_unidas.jpg'));
    await finalImg.resize(1080, 1920).writeAsync(outputFile);    
  }
}

centralizaImagens();
