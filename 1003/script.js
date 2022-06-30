var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let num1 = parseInt(lines[0]);
let num2 = parseInt(lines[1]);
let num3 = num1 + num2;

console.log(`SOMA = ${num3}`)