var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const numero = parseInt(lines[0]);
const ano = Math.floor(numero / 365);
const restoDoAno = numero % 365;
const mes = Math.floor(restoDoAno/30);
const restoDoMes = restoDoAno % 30;
const dias = restoDoMes;
console.log(`${ano} ano(s)`);
console.log(`${mes} mes(es)`);
console.log(`${dias} dia(s)`);
