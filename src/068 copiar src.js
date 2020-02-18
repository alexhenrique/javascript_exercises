const fs = require('fs');
const path = require('path');
const bookOrder = {
  genesis: 1,
  exodo: 2,
  levitico: 3,
  numeros: 4,
  deuteronomio: 5,
  josue: 6,
  juizes: 7,
  rute: 8,
  '1 samuel': 9,
  '2 samuel': 10,
  '1 reis': 11,
  '2 reis': 12,
  '1 cronicas': 13,
  '2 cronicas': 14,
  esdras: 15,
  neemias: 16,
  ester: 17,
  jo: 18,
  salmos: 19,
  proverbios: 20,
  eclesiastes: 21,
  cantares: 22,
  isaias: 23,
  jeremias: 24,
  lamentacoes: 25,
  ezequiel: 26,
  daniel: 27,
  oseias: 28,
  joel: 29,
  amos: 30,
  obadias: 31,
  jonas: 32,
  miqueias: 33,
  naum: 34,
  habacuque: 35,
  sofonias: 36,
  ageu: 37,
  zacarias: 38,
  malaquias: 39,
  mateus: 40,
  marcos: 41,
  lucas: 42,
  joao: 43,
  atos: 44,
  romanos: 45,
  '1 corintios': 46,
  '2 corintios': 47,
  galatas: 48,
  efesios: 49,
  filipenses: 50,
  colossenses: 51,
  '1 tessalonicenses': 52,
  '2 tessalonicenses': 53,
  '1 timoteo': 54,
  '2 timoteo': 55,
  tito: 56,
  filemom: 57,
  hebreus: 58,
  tiago: 59,
  '1 pedro': 60,
  '2 pedro': 61,
  '1 joao': 62,
  '2 joao': 63,
  '3 joao': 64,
  judas: 65,
  apocalipse: 66,
};

function copyPassageImage(passage) {
  if (!bookOrder[passage.book]) {
    console.error(`O livro "${passage.book}" não foi encontrado na lista de livros.`);
    return;
  }
  const bookPath = path.join(__dirname, `${bookOrder[passage.book].toString()} ${passage.book}`);
  if (!fs.existsSync(bookPath)) {
    console.error(`A pasta do livro "${bookPath}" não foi encontrada.`);
    return;
  }
  const chapterPath = path.join(bookPath, `${passage.book} ${passage.chapter.toString()}`);
  if (!fs.existsSync(chapterPath)) {
    console.error(`A pasta do capítulo "${chapterPath}" não foi encontrada.`);
    return;
  }
  const imagePath = path.join(chapterPath, `${passage.book} ${passage.chapter.toString()} ${passage.verse.toString()}.jpg`);
  if (!fs.existsSync(imagePath)) {
    console.error(`A imagem "${imagePath}" não foi encontrada.`);
    return;
  }
  const destPath = path.join(__dirname, '../../versicopy');
  if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
  }
  const destImage = path.join(destPath, `${passage.book} ${passage.chapter} ${passage.verse}.jpg`);
  console.log(destImage);
  fs.copyFileSync(imagePath, destImage);
}


function createPassagesMap(filePath) {
  const fileContent = fs.readFileSync(filePath).toString();
  const lines = fileContent.split('\n');
  const passages = [];
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim().toLowerCase()
    .replace(/[áàãâä]/g, 'a')
    .replace(/[éèêë]/g, 'e')
    .replace(/[íìîï]/g, 'i')
    .replace(/[óòõôö]/g, 'o')
    .replace(/[úùûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n');
    let regex = /^((?!:).)*-((?!:).)*$/m;
    if (line === '' || (regex.test(line))) {
      continue;
    }
    const match = line.match(/(.*?)([a-z]+)(.*)/);
    const before = match[1].trim();
    const after = match[3].trim();
    let bookName = `${before} ${match[2]}`;
    let bookVerse = `${after}\n`;
    const ifen = bookVerse.match(/-/);
    let [chapter, verse] = bookVerse.split(':').map(s => parseInt(s, 10));
    const book = bookName.trim().toLowerCase();
    if (ifen) {
      const [, howmuch] = bookVerse.split('-').map(s => parseInt(s, 10));
      for (; verse < howmuch; verse++) {
        passages.push({ book, chapter, verse });
      }
    }
    passages.push({ book, chapter, verse });
  }
  return passages;
}
const filePath = './passsagens.txt';
const passages = createPassagesMap(filePath);
passages.forEach((passage) => {
  copyPassageImage(passage);
});
