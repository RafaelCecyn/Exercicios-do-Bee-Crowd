var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nota1 = parseInt(lines[0]);
let nota2 = parseInt(lines[1]);
let nota3 = parseInt(lines[2]);
let nota4 = parseInt(lines[3]);
let diferenca = ((nota1 * nota2) - (nota3 * nota4));

console.log(`DIFERENCA = ${diferenca}`);