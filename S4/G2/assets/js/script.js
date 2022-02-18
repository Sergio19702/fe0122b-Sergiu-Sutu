alert("Questa è una rappresentazione delle funzioni in JS")
function somma(param1, param2, param3, param4){
    var datiUno= document.getElementById(param1).innerHTML*1;
    datiUno+= document.getElementById(param2).innerHTML*1;
    datiUno+=document.getElementById(param3).innerHTML*1;
    document.getElementById(param4).innerHTML= (datiUno);
}
somma('dato1','dato4','dato7','dato10');
somma('dato2', 'dato5', 'dato8','dato11');
somma('dato3', 'dato6', 'dato9','dato12');

function sottrazione(){
    var numero= document.getElementById('dato12').innerHTML*1;
    numero -= document.getElementById('dato10').innerHTML*1;
    if(numero>0){
    document.getElementById('differenza').innerHTML = "La differenza è di " + (numero) + " ore in più per geometria";
    }
    else{
    document.getElementById('differenza').innerHTML = "La differenza è di " + (numero) + " ore in meno per geometria";
    }

}