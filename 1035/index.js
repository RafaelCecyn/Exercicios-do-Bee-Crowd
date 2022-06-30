var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const separado = lines[0];
const separadoEmArray = separado.split(' ');
const primeiroValor = parseInt(separadoEmArray[0]);
const segundooValor = parseInt(separadoEmArray[1]);
const terceiroValor = parseInt(separadoEmArray[2]);
const quartoValor = parseInt(separadoEmArray[3]);

if ( segundooValor > terceiroValor && quartoValor > primeiroValor && (terceiroValor+quartoValor) > (primeiroValor+segundooValor) && 
    terceiroValor > 0 && quartoValor > 0 && primeiroValor % 2 ===0 ) {
        console.log("Valores aceitos");
    } else {
        console.log("Valores nao aceitos");
    }
