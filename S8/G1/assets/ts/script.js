var giocatore1 = Math.floor(Math.random() * (100 - 1) + 1);
var giocatore2 = Math.floor(Math.random() * (100 - 1) + 1);
console.log('Il numero del giocatore 1: ' + giocatore1);
console.log('Il numero del giocatore 2: ' + giocatore2);
var numero = Math.floor(Math.random() * (100 - 1) + 1);
console.log(numero);
if (Math.abs(giocatore1 - numero) < Math.abs(giocatore2 - numero)) {
    console.log('G1 ha vinto');
}
else {
    console.log('G2 ha vinto');
}
