var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0]);

for (let i = 1; i<=numero;i++) {
    numeroAoQuadrado = Math.pow(i,2);
    numeroAoCubo = Math.pow(i,3);
    console.log(i, numeroAoQuadrado,numeroAoCubo);
    console.log(i, numeroAoQuadrado+1,numeroAoCubo+1);
}
