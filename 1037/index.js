var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [numero] = lines[0].split(' ');
const numeroInteiro = parseFloat(numero);

if ( numeroInteiro < 0 || numeroInteiro > 100) {
    console.log("Fora de intervalo");
} else if ( numeroInteiro >= 0 && numeroInteiro <= 25) {
    console.log(`Intervalo [0,25]`);
} else if (numeroInteiro > 25 && numeroInteiro <=50) {
    console.log(`Intervalo (25,50]`);
} else if (numeroInteiro > 50 && numeroInteiro <=75) {
    console.log(`Intervalo (50,75]`);
} else if (numeroInteiro > 75 && numeroInteiro <=100) {
    console.log(`Intervalo (75,100]`);
}