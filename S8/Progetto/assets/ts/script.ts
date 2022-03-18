fetch('abbigliamento.json')
.then(response => response.json())
.then(vestiti =>{
    vestiti.forEach((item: Abbigliamento)=> {
        console.log(item);        
        let vestito = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoIvaEsclusa, item.prezzoIvaInclusa, item.disponibile, item.saldo)
        
    });
})
class Abbigliamento {
    id:number;
    codprod:number;
    collezione:string;
    capo:string;
    modello:number;
    quantita:number;
    colore:string;
    prezzoIvaEsclusa:number;
    prezzoIvaInclusa:number;
    disponibile:string;
    saldo:number;

    constructor(id:number, codprod:number, collezione:string, capo:string, modello:number, quantita:number, colore:string, prezzoIvaEsclusa:number,prezzoIvaInclusa:number, disponibile:string, saldo:number){
        this.id = id;
        this.codprod = codprod;
        this.collezione=collezione;
        this.capo=capo;
        this.modello=modello;
        this.quantita=quantita;
        this.colore=colore;
        this.prezzoIvaEsclusa= prezzoIvaEsclusa;
        this.prezzoIvaInclusa= prezzoIvaInclusa;
        this.disponibile=disponibile;
        this.saldo=saldo;
    };
    getsaldocapo():number{

        return (this.prezzoIvaInclusa *this.saldo) /100;
    }
    getacquistocapo():number{
        return this.prezzoIvaInclusa - ((this.prezzoIvaInclusa* this.saldo)/100)
    }
}
let prova= new Abbigliamento(6, 1033, "autunno", "felpa",4320, 10, "rosso", 120, 146.4, "in magazzino",30);
console.log("Lo sconto applicato prevede una diminuzione di: "+prova.getsaldocapo()+" euro")
console.log("quindi il prezzo finale del capo da lei selezionato è di: " + prova.getacquistocapo() +" euro")
document.createElement('th').innerText