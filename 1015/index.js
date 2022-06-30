var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [x1, y1] = lines[0].split(" ");
const [x2, y2] = lines[1].split(" ");

// const linhaUm = lines.shift();
// const linhaDois = lines.shift();
// const item1 = linhaUm.split('');
// const item2 = linhaDois.split('');
// const primeiroValor = parseFloat(item1[0]);
// const segundoValor = parseFloat(item1[4]);
// const terceiroValor = parseFloat(item2[0]);
// const quartoValor = parseFloat(item2[4]);

const distancia = Math.pow((Math.pow((x2-x1),2) + Math.pow((y2-y1),2)),0.5).toFixed(4)
console.log(distancia);