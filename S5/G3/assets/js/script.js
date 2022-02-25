//1. creare una funzione che si avvii al click


document.querySelector('#add').addEventListener('click', function(){
//2. selezionare il valore dell'input
let valore= document.querySelector('#testo').value;
//2.1 se il valore è vuoto blocca la funzione sfruttando return
if(!valore)
return

//3. mostrare il valore di input a schermo
    //3.1 creare un elemento con createElement
    let li = document.createElement('li')
    let button = document.createElement('button')
    li.append(button)
    button.innerText = 'Elimina'
    //3.2 inserire il valore dentro l'elemento
    li.innerText = valore;
    //3.3 scrivere l'elemento 
    document.querySelector('#lista').append(li)
    //3.4 svuota l'input
    document.querySelector('#testo').value = ''

//4. far si che se si clicca su uno degli elementi questo scompaia
li.addEventListener('click', function(){
        li.remove()
        elimina(valore)
})
salva(valore);
})
//5. salva gli elementi in localstorage 
//5.1 recupera dati da localstorage
function salva(testo){
    let elementiSalvati = localStorage.getItem('lista')
    //5.2 verifica che i dati esistano, in caso contrario crea un array vuoto, in caso positivo fai il parse dei dati, ottenendo un array
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    //5.3 aggiungi il nuovo testo all'array appena ottenuto
    db.push(testo)
    //5.4 aggiorna il local storage
    localStorage.setItem('lista', JSON.stringify(db))
}

//6. far si che al reload della pagina gli elementi riappaiano
function creaHTML(){
    let elementiSalvati = localStorage.getItem('lista')
    let db = elementiSalvati == null ? []: JSON.parse(elementiSalvati)

    db.forEach(function(elemento){
        let li = document.createElement('li')
        li.innerText = elemento
        document.querySelector('#lista').append(li)
        li.addEventListener('click', function(){
            li.remove()

            elimina(li)
        })
        
    })
}
creaHTML()
//7. far si che in fase di eliminazione di un elemento, questo scompaia anche dal localstorage

function elimina(testo){
    let elementiSalvati =localStorage.getItem('lista')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    let indice = db.indexOf(testo)
    db.splice(indice, 1)
    localStorage.setItem('lista', JSON.stringify(db))
}