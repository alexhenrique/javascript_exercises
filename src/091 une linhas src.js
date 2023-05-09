const fs = require('fs');

function filterFile(inputFile, outputFile) {
  const data = fs.readFileSync(inputFile, 'utf8');
  const cleanData = data.replace(/\r/g, '');
  const lines = cleanData.split('\n');
  const filteredLines = [];
  let prevLine = '';

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const isPrevIncomplete = prevLine && !/[\.\!\?]$/.test(prevLine);
    const words = line.split(' ');
    const lastWord = words[words.length - 1];
    const endsWithPunctuation = lastWord.endsWith('.') || lastWord.endsWith('!') || lastWord.endsWith('?') || lastWord.endsWith(',')
    if (isPrevIncomplete && endsWithPunctuation) {
      filteredLines[filteredLines.length - 1] += ' ' + line;
    } else {
      filteredLines.push(line);
    }
    prevLine = line;
  }

  const alines = filteredLines;
  const afilteredLines = [];
  for (let i = 0; i < alines.length; i++) {
    const aline = alines[i];
    const words = aline.split(' ');
    const lastWord = words[words.length - 1];
    const endsWithPunctuation = lastWord.endsWith('.') || lastWord.endsWith('!') || lastWord.endsWith('?');
    if (endsWithPunctuation) {
      afilteredLines.push(aline);
    }
  }
  const afilteredData = afilteredLines.join('\n');

  fs.writeFileSync(outputFile, afilteredData);
}
filterFile('todos_saida.txt', 'limpa_linhas.txt');





