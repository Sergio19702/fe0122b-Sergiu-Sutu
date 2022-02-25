



document.querySelector('#add').addEventListener('click', function(){
let valore= document.querySelector('#testo').value;

if(!valore)
return

    let div = document.createElement('div')
    let button = document.createElement('button')
    div.append(button)
    button.innerText = 'Elimina'
    
    div.innerText = valore;
     
    document.querySelector('#container').append(div)
    
    document.querySelector('#testo').value = ''

div.addEventListener('click', function(){
        div.remove()
        elimina(valore)
})
salva(valore);
})

function salva(testo){
    let elementiSalvati = localStorage.getItem('postit')
    
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    
    db.push(testo)
    
    localStorage.setItem('postit', JSON.stringify(db))
}

function creaHTML(){
    let elementiSalvati = localStorage.getItem('postit')
    let db = elementiSalvati == null ? []: JSON.parse(elementiSalvati)

    db.forEach(function(elemento){
        let div = document.createElement('div')
        div.innerText = elemento
        document.querySelector('#container').append(div)
        div.addEventListener('click', function(){
            div.remove()

            elimina(div)
        })
        
    })
}
creaHTML()

function elimina(testo){
    let elementiSalvati =localStorage.getItem('postit')
    let db = elementiSalvati == null ? [] : JSON.parse(elementiSalvati)
    let indice = db.indexOf(testo)
    db.splice(indice, 1)
    localStorage.setItem('postit', JSON.stringify(db))
}