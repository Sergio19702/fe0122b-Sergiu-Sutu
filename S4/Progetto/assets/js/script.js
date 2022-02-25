function numero(dato){ 
    document.getElementById("calcolatrice").value+=dato;
 }
 
 function operazione() { 
 document.getElementById("calcolatrice").value=eval(document.getElementById("calcolatrice").value); 
 }
 
 function cancella() { 
  document.getElementById("calcolatrice").value="";
 }
