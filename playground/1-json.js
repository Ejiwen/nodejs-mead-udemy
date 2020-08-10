const fs = require('fs');

const readFile = fs.readFileSync('./1-json.json');
const st = readFile.toString();
const objjs = JSON.parse(st);
objjs.name = 'Cheikhay';
objjs.age = 34;

fs.writeFileSync("1-json.json", JSON.stringify(objjs));
//console.log(objjs);