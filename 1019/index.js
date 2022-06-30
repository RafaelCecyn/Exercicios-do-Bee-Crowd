var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

var numero = parseInt(lines[0]);
const hora = Math.floor(numero / 3600);
const restoDaHora = numero % 3600;
const minutos = Math.floor(restoDaHora / 60);
const restoDoMinuto = restoDaHora % 60;
const segundos = restoDoMinuto;

console.log(`${hora}:${minutos}:${segundos}`);