var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = parseInt(lines[0]);
let pi = 3.14159;
let esfera = ((4/3)* Math.pow(raio,3) * pi).toFixed(3);
console.log(`VOLUME = ${esfera}`);