var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const distancia = parseInt(lines.shift());
const combustivelGasto = parseFloat(lines.shift());
const consumoMedia = (distancia / combustivelGasto).toFixed(3);
console.log(`${consumoMedia} km/l`);