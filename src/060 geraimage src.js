const COLOR_OPTIONS = [
  '#FFFFFF', // branco - 0
  '#F0F8FF', // azul claro - 1
  '#90EE90', // verde claro - 2
  '#FFFF00', // amarelo - 3
  '#D3D3D3', // cinza claro - 4
  '#00FFFF', // ciano - 5
  '#FFC0CB', // rosa claro - 6
  '#ADD8E6', // azul claro - 7
  '#EEE8AA', // amarelo claro - 8
  '#87CEFA', // azul claro - 9
  '#7FFFD4', // turquesa - 10
  '#00FF00', // verde - 11
  '#FFD700', // dourado - 12
  '#FF69B4', // rosa - 13
  '#808080', // cinza - 14
  '#800080', // roxo - 15
  '#8B0000', // vermelho escuro - 16
  '#0000FF', // azul - 17
  '#FF8C00', // laranja escuro - 18
  '#696969', // cinza escuro - 19
  '#DC143C', // vermelho escuro - 20
  '#800000', // marrom escuro - 21
  '#FF00FF', // magenta - 22
  '#00008B', // azul escuro - 23
  '#000000', // preto - 24
  '#BF1932', // Pantone 2002 True Red - 0
  '#F7D1D0', // Pantone 2003 Fuchsia Pink - 1
  '#D2C2AC', // Pantone 2004 Cerulean Blue - 2
  '#0066A8', // Pantone 2005 Blue Iris - 3
  '#C8B1B4', // Pantone 2006 Raspberry - 4
  '#7A9DCC', // Pantone 2007 Pantone Blue 286C - 5
  '#BC4E55', // Pantone 2008 Pantone Red 186C - 6
  '#AD5C51', // Pantone 2009 Pantone Warm Red - 7
  '#BFD3D1', // Pantone 2010 Pantone Turquoise - 8
  '#E6D5B8', // Pantone 2011 Honeysuckle - 9
  '#87AECB', // Pantone 2012 Tangerine Tango - 10
  '#B3446C', // Pantone 2013 Emerald - 11
  '#955251', // Pantone 2014 Radiant Orchid - 12
  '#A67B5B',  // Pantone 2015 Marsala - 13
  '#955251', // Pantone 2014 Radiant Orchid - 12
  '#B3446C', // Pantone 2013 Emerald - 11
  '#87AECB', // Pantone 2012 Tangerine Tango - 10
  '#E6D5B8', // Pantone 2011 Honeysuckle - 9
  '#BFD3D1', // Pantone 2010 Pantone Turquoise - 8
  '#AD5C51', // Pantone 2009 Pantone Warm Red - 7
  '#BC4E55', // Pantone 2008 Pantone Red 186C - 6
  '#7A9DCC', // Pantone 2007 Pantone Blue 286C - 5
  '#C8B1B4', // Pantone 2006 Raspberry - 4
  '#0066A8', // Pantone 2005 Blue Iris - 3
  '#D2C2AC', // Pantone 2004 Cerulean Blue - 2
  '#C3447A', // Pantone 2003 Fuchsia Rose - 1
  '#BF1932', // Pantone 2002 True Red - 2
  '#F7D1D0', // Pantone 2001 Fuchsia Pink - 3
  '#D2C2AC', // Pantone 2000 Cerulean Blue - 4
  '#0066A8', // Pantone 1999 Blue Iris - 5
  '#C8B1B4', // Pantone 1998 Raspberry - 6
  '#7A9DCC', // Pantone 1997 Pantone Blue 286C - 7
  '#BC4E55', // Pantone 1996 Pantone Red 186C - 8
  '#AD5C51', // Pantone 1995 Pantone Warm Red - 9
  '#BFD3D1', // Pantone 1994 Pantone Turquoise - 10
  '#E6D5B8', // Pantone 1993 Pantone Sand - 11
  '#96AAB4', // Pantone 1992 Pantone Blue Jay - 12
  '#DD8499', // Pantone 1991 Pantone Pink - 13
  '#DDA751', // Pantone 1990 Pantone Orange 021C - 14
  '#CF8F00', // Pantone 1989 Pantone Orange 021C - 15
  '#B3509E', // Pantone 1988 Pantone Magenta - 16
  '#FD5E53', // Pantone 1987 Pantone Red 485C - 17
  '#00AACC', // Pantone 1986 Pantone Blue 300C - 18
  '#BF4F51', // Pantone 1985 Pantone Red 186C - 19
  '#0085CA', // Pantone 1984 Pantone Blue 286C - 20
  '#5F4C3A', // Pantone 1983 Pantone Brown 463C - 21
  '#4F2A1D', // Pantone 1982 Pantone Maroon 202C - 22
  '#674C47', // Pantone 1981 Pantone Mocha Brown - 23
  '#7F8486', // Pantone 1980 Pantone Slate Gray - 24
];
// console.log(COLOR_OPTIONS.length);//73
const TEXT_COLOR = COLOR_OPTIONS[70];
const FONT_OPTIONS = [
  'Arial', // índice 0
  'Helvetica', // índice 1
  'Times New Roman', // índice 2
  'Courier New', // índice 3
  'Verdana', // índice 4
  'Georgia', // índice 5
  'Comic Sans MS', // índice 6
  'Impact', // índice 7
  'Lucida Sans Unicode', // índice 8
  'Tahoma', // índice 9
  'Palatino Linotype', // índice 10
  'Book Antiqua', // índice 11
  'Arial Black', // índice 12
  'Garamond', // índice 13
  'Cambria', // índice 14
  'Century Gothic', // índice 15
  'Franklin Gothic Medium', // índice 16
  'Rockwell', // índice 17
  'Trebuchet MS', // índice 18
  'Consolas', // índice 19
  'Copperplate', // índice 20
  'Baskerville', // índice 21
  'Futura', // índice 22
  'Didot', // índice 23
  'Optima' // índice 24
];
const BACKGROUND_COLOR = COLOR_OPTIONS[0];
const FONT_FAMILY = FONT_OPTIONS[24];
const FONT_SIZE = 120;
const FONT_STYLE = 'bold';
const width = 1024;
const height = 1024;
const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');
const backgroundsPath = 'backgrounds/';
const frasesFile = `frases.txt`;
const outputPath = 'br_out/';
fs.readdir(backgroundsPath, (err, files) => {
  if (err) throw err;
  const backgrounds = files.filter((file) => file.endsWith(`.jpg`));
  fs.readFile(frasesFile, 'utf8', async (err, data) => {
    if (err) throw err;
    const lines = data.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const frase = lines[i];
      const backgroundIndex = i % backgrounds.length;
      const backgroundFilePath = `${backgroundsPath}${backgrounds[backgroundIndex]}`;
      const fileName = `${i.toString().padStart(4, '0')}.jpg`;
      const outputFilePath = `${outputPath}${fileName}`;
      console.log(fileName);
      const canvas = createCanvas(width, height);
      const context = canvas.getContext('2d');
      const image = await loadImage(backgroundFilePath);
      context.drawImage(image, 0, 0, width, height);
      context.fillStyle = TEXT_COLOR;
      context.font = `${FONT_STYLE} ${FONT_SIZE}px ${FONT_FAMILY}`;
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      const words = frase.split(' ');
      const linesInFrase = [];
      let currentLineInFrase = words[0];
      for (let j = 1; j < words.length; j++) {
        const wordInFrase = words[j];
        const lineWidthInFrase =
          context.measureText(`${currentLineInFrase} ${wordInFrase}`).width;
        if (lineWidthInFrase < (width - 40)) {
          currentLineInFrase += ` ${wordInFrase}`;
        } else {
          linesInFrase.push(currentLineInFrase);
          currentLineInFrase = wordInFrase;
        }
      }
      linesInFrase.push(currentLineInFrase);
      const yPosition = height / 2 - ((linesInFrase.length - 1) * FONT_SIZE) / 2;
      linesInFrase.forEach((line, j) => {
        const xPosition = width / 2;
        context.fillText(line, xPosition, yPosition + j * FONT_SIZE);
      });
      const buffer = canvas.toBuffer('image/jpeg');
      fs.writeFileSync(outputFilePath, buffer);
    }
  });
});