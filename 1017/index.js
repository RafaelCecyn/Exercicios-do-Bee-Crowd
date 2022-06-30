var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const horas = parseInt(lines.shift());
const velocidadeMedia = parseInt(lines.shift());
const distancia = horas * velocidadeMedia;
const gasto = 12;
const quantidadeDeLitros = (distancia / gasto).toFixed(3);
console.log(quantidadeDeLitros);
