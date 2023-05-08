const fs = require('fs');
const path = require('path');
const readline = require('readline');

const fullPath = path.join(__dirname, 'container.txt');
let writableStream = fs.createWriteStream(fullPath);
process.stdout.write('Здравствуйте, введите ваше сообщение ')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.on('line', (line) => {
  let line1 = line;
  line1 = line;
  if (line !== 'exit') {
  writableStream.write(line1, "utf8", () => {});
  }
  else {
  writableStream.end('', "utf8", () => {
    console.log("Всего хорошего!");
  })};
});



