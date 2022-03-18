var giocatore1: number = Math.floor(Math.random()*(100-1)+1);
let giocatore2: number = Math.floor(Math.random()*(100-1)+1);
console.log('Il numero del giocatore 1: '+ giocatore1);
console.log('Il numero del giocatore 2: '+giocatore2);
var numero = Math.floor(Math.random()*(100-1)+1);
console.log(numero)
var ciak= giocatore1-numero;
var si_gira = giocatore2-numero;
if(ciak == 0){
    console.log('Giocatore 1 ha indovinato il numero')
}else if(si_gira==0){
    console.log('Giocatore 2 a ha indovinato il numero')
}
if(Math.abs(giocatore1- numero) < Math.abs(giocatore2-numero)){
    console.log('G1 ha vinto');
}
else{
    console.log('G2 ha vinto');
}