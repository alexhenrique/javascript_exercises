const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

const audioFile = 'assets/music.mp3';
const imageFiles = fs.readdirSync('assets').filter(file => file.endsWith('.jpg'));
const videoFile = path.join('output', path.parse(audioFile).name + '.mp4');

console.log(`audioFile: ${audioFile}`);
console.log(`imageFiles: ${imageFiles}`);
console.log(`videoFile: ${videoFile}`);

const ffmpegArgs = [
  '-y',
  '-loop', '1',
  '-i', imageFiles[0],
  '-i', audioFile,
  '-c:v', 'libx264',
  '-tune', 'stillimage',
  '-c:a', 'aac',
  '-b:a', '192k',
  '-pix_fmt', 'yuv420p',
  '-shortest',
  '-vf', `scale=1024:1024`,
  videoFile
];

console.log(`ffmpegArgs: ${ffmpegArgs}`);

const ffmpegProcess = spawn('ffmpeg', ffmpegArgs);

ffmpegProcess.stdout.on('data', data => {
  console.log(data.toString());
});

ffmpegProcess.stderr.on('data', data => {
  console.error(data.toString());
});

ffmpegProcess.on('close', code => {
  console.log(`child process exited with code ${code}`);
});