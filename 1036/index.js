var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c] = lines[0].split(" ");
const aNumber = parseFloat(a);
const bNumber = parseFloat(b);
const cNumber = parseFloat(c);

const delta = Math.pow(bNumber,2)- 4*aNumber*cNumber;

if ( delta < 0 || aNumber === 0) {
    console.log('Impossivel calcular');
} else {
    const primeiraRaiz = (- bNumber + Math.sqrt(delta)) / (2 * aNumber);
    const segundaRaiz = (- bNumber - Math.sqrt(delta)) / (2 * aNumber);
    const primeiraRaizArrend = primeiraRaiz.toFixed(5);
    const segundaRaizArrend = segundaRaiz.toFixed(5);
    console.log(`R1 = ${primeiraRaizArrend}`);
    console.log(`R2 = ${segundaRaizArrend}`);
}


