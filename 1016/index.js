var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const primeiroValor = parseInt(lines.shift());
const distancia = primeiroValor * 2;
console.log(`${distancia} minutos`);