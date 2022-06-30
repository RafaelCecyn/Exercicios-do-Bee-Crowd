var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines[0];
let numerosSeparados = numeros.split(' ');
let primeiroValor = parseInt(numerosSeparados[0]);
let segundoValor = parseInt(numerosSeparados[1]);
let array = []
for (let i = 1; i<=segundoValor;i++) {
    array.push(i) 
    if (array.length === 3) {
        console.log(array.join(' '));
        array = []
    }
}