const fs = require('fs');

const EN_FILE_PATH = '7K_en.txt';
const DE_FILE_PATH = '7K_de.txt';
const GERMAN_FILE_PATH = 'german7k_org.txt';

const fileData = fs.readFileSync(GERMAN_FILE_PATH, 'utf-8');
const lines = fileData.split('\n');

let enLines = '';
let deLines = '';

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const tabIdx = line.indexOf('\t');

  if (tabIdx !== -1) {
    enLines += line.slice(0, tabIdx) + '\n';
    deLines += line.slice(tabIdx + 1) + '\n';
  }
}

fs.writeFileSync(EN_FILE_PATH, enLines);
fs.writeFileSync(DE_FILE_PATH, deLines);
