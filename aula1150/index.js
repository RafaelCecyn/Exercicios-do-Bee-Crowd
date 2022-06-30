var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let primeiroNumero = parseInt(lines[0]);
let segundoNumero = parseInt(lines[1]);
let terceiroNumero = parseInt(lines[2]);
let soma = 0;
let variavel = 1;


while (soma < terceiroNumero) {
    let valor = primeiroNumero;
    let outro = primeiroNumero + 1;
    outro++;
    valor = soma;
    soma = valor + outro;

    
    variavel++;

}
console.log(variavel);

