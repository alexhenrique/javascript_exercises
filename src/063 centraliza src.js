const Jimp = require('jimp');

async function centralizaImagens() {
  const img1 = await Jimp.read('./junta/0001.jpg');
  const img2 = await Jimp.read('./junta/0002.jpg');
  const img3 = await Jimp.read('./junta/0003.jpg');

  const w1 = img1.bitmap.width;
  const h1 = img1.bitmap.height;
  const w2 = img2.bitmap.width;
  const h2 = img2.bitmap.height;
  const w3 = img3.bitmap.width;
  const h3 = img3.bitmap.height;

  const ww1 = w1;
  const ww2 = h1;
  console.log(ww1, ww2);
  const finalImg = new Jimp(w1, h1);

  finalImg.composite(img1, 0, 0);
  finalImg.composite(img2, Math.floor((w1 - w2) / 2), 350, { mode: Jimp.BLEND_DARKEN });
  finalImg.composite(img3, Math.floor((w1 - w3) / 2), h2 + 50 + 350, { mode: Jimp.BLEND_DARKEN });

  await finalImg.resize(1080, 1920).writeAsync('./junta/0004.jpg');
}

centralizaImagens();
