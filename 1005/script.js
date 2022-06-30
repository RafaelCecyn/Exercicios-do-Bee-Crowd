var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseFloat(lines[0]) * 3.5;
let nota2 = parseFloat(lines[1]) * 7.5;
let media = (nota1 + nota2) / 11;
let mediaFixada = media.toFixed(5);

console.log(`MEDIA = ${mediaFixada}`);