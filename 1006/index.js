var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines[0]) * 2;
let nota2 = parseFloat(lines[1]) * 3;
let nota3 = parseFloat(lines[2]) * 5;
let media = (nota1 + nota2 + nota3) / 10;
let mediaFixada = media.toFixed(1);

console.log(`MEDIA = ${mediaFixada}`);