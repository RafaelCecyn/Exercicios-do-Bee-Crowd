var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let nome = lines[0];
let salarioFixo = parseFloat(lines[1]);
let totalVendas = parseFloat(lines[2]);
let parteDasVendas = parseFloat(totalVendas * 0.15);
let salario = (salarioFixo + parteDasVendas);
let salarioFixado = salario.toFixed(2);
console.log(`TOTAL = R$ ${salarioFixado}`);