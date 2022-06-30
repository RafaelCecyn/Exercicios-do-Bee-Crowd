var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numeros = lines[0];
let numerosSeparados = numeros.split(' ')

let primeiroValor = parseFloat(numerosSeparados[0]);
let segundoValor = parseFloat(numerosSeparados[1]);
let terceiroValor = parseFloat(numerosSeparados[2]);
let pi = 3.14159
let areaTriangulo = ((primeiroValor * terceiroValor) / 2).toFixed(3);
let areaCirculo = ((pi*Math.pow(terceiroValor,2))).toFixed(3);
let areaTrapezio = ((((primeiroValor+segundoValor)/2) * terceiroValor)).toFixed(3);
let areaQuadrado = ((segundoValor * segundoValor)).toFixed(3);
let areaRetangulo = ((primeiroValor * segundoValor)).toFixed(3);
console.log(`TRIANGULO: ${areaTriangulo}`);
console.log(`CIRCULO: ${areaCirculo}`);
console.log(`TRAPEZIO: ${areaTrapezio}`);
console.log(`QUADRADO: ${areaQuadrado}`);
console.log(`RETANGULO: ${areaRetangulo}`);