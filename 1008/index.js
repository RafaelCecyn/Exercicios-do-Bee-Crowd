var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0]);
let horasTrabalhadas = parseInt(lines[1]);
let valorPorHora = parseFloat(lines[2]);
let salario = parseFloat(horasTrabalhadas * valorPorHora);
let salarioFixado = salario.toFixed(2);
console.log(`NUMBER = ${numero}`);
console.log(`SALARY = U$ ${salarioFixado}`);