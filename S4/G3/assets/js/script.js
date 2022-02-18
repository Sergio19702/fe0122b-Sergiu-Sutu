function sottrazione(corrente, passato , destinazione){
    var data= document.getElementById(corrente).value*1;
    var data2= document.getElementById(passato).innerHTML*1;
    data2= data- data2 ;
    document.getElementById(destinazione).innerHTML = (data2);
}
