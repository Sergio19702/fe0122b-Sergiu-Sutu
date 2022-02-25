
function Budgetdec(){
    var budget = 1000;
    var decremento;
    console.log(budget)
    while(budget>0){
        decremento= Math.round(Math.random()*10);
        if(decremento> budget){
            /*OUTPUT il budget disponibile è tot:*/
            decremento = budget;
            console.log('Non hai denaro a disposizione') 
        }
        if(decremento== budget){}
        budget -= decremento;
        console.log(' decremento '+ decremento)
        console.log(budget);
        
    }
}
Budgetdec()