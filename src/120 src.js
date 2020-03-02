const fs = require('fs');
const text = fs.readFileSync('qqq.txt', 'utf-8');
const lines = text.split('\n');
const wordsSet = new Set();
for (let i = 0; i < lines.length; i++) {
  const words = lines[i].split(' ');
  const maxLengthWords = words.sort((a, b) => b.length - a.length).slice(0, 10);
  const newWords = maxLengthWords
    .map(word => word.toLowerCase())
    .filter(word => !wordsSet.has(word))
    .map(word => word.replace(/[^a-zA-Z0-9'´`’-]/g, ''))
    .filter(word => word.length > 3) 
    .slice(0, 2);
  const line_length = lines[i].length;
  if (line_length < 15 || line_length > 200 || newWords.length < 1) {
    lines[i] = undefined;
    continue;
  }
  wordsSet.add(...newWords);
  lines[i] += ' [' + newWords.join('] [') + ']';
}
fs.writeFileSync('5839_frases.txt', lines.join('\n'));
let text2 = fs.readFileSync('5839_frases.txt', 'utf-8');
let lines2 = text2.split('\n');
lines2 = lines2.filter(line => line.trim() !== '');
text2 = lines2.join('\n');
fs.writeFileSync('1989.txt', text2);


