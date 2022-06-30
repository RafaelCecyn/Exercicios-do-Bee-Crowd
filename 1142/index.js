const { arrayBuffer } = require('stream/consumers');

var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let numero = parseInt(lines[0]);
let array = []
for (let i = 1; i<=numero*4;i++) {
    if (i % 4 === 0) {
          array.push("PUM")
     } else {
        array.push(i)
     }
    if (array.length === 4) {
        console.log(array);
        array = []
    }
   
}
// let value = 0
// for (let a = 4; a<=numero*4;a +=4){
//     let primeiroTermo = array.slice(value,a).join(" ");
//     value = a;
//     console.log(primeiroTermo);

// }
