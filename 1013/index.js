var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines[0];
let numerosSeparados = numeros.split(' ')
let primeiroNumero = parseInt(numerosSeparados[0]);
let segundoNumero = parseInt(numerosSeparados[1]);
let terceiroNumero = parseInt(numerosSeparados[2]);
let maiorValor = Math.max(primeiroNumero,segundoNumero,terceiroNumero);
console.log(`${maiorValor} eh o maior`);