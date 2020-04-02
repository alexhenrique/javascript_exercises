const fs = require('fs');

function filterAndFormatProverbs(inputPath, outputPath) {
  const text = fs.readFileSync(inputPath, 'utf-8');
  const lines = text.split('\n');
  const wordsSet = new Set();
  const filteredLines = [];

  for (let i = 0; i < lines.length; i++) {
    const words = lines[i].split(' ');
    const maxLengthWords = words.sort((a, b) => b.length - a.length).slice(0, 10);
    const newWords = maxLengthWords
      .map(word => word.toLowerCase())
      .map(word => word.replace(/[^a-zA-Z0-9'´`’-]/g, ''))
      .filter(word => word.length > 3) 
      .filter(word => !wordsSet.has(word))
      .slice(0, 1);

    const lineLength = lines[i].length;
    if (lineLength < 15 || lineLength > 150 || newWords.length < 1) {
      continue;
    }

    wordsSet.add(...newWords);
    const newLine = lines[i] + ' [' + newWords.join('] [') + ']';
    filteredLines.push(newLine);
  }

  const outputText = filteredLines.join('\n').trim();
  fs.writeFileSync(outputPath, outputText);
}

// Example usage:
filterAndFormatProverbs('big_org_uniq.txt', '1989.txt');
