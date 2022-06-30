var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let num1 = lines[0];
let num1separado = num1.split(' ');
let primeiroNumero = parseInt(num1separado[0]);
let segundoNumero = parseInt(num1separado[1]);
let terceiroNumero = parseFloat(num1separado[2]);
let valorPagoPrimeiro = segundoNumero * terceiroNumero;
let num2 = lines[1];
let num2separado = num2.split(' ');
let primeiroNumeroDois = parseInt(num2separado[0]);
let segundoNumeroDois = parseInt(num2separado[1]);
let terceiroNumeroDois = parseFloat(num2separado[2]);
let valorPagoSegundo = segundoNumeroDois * terceiroNumeroDois;
let valorPago = valorPagoPrimeiro + valorPagoSegundo;
console.log(`VALOR A PAGAR: R$ ${valorPago}`)