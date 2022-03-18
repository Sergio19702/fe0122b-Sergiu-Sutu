fetch('abbigliamento.json')
    .then(function (response) { return response.json(); })
    .then(function (vestiti) {
    vestiti.forEach(function (item) {
        console.log(item);
        var vestito = new Abbigliamento(item.id, item.codprod, item.collezione, item.capo, item.modello, item.quantita, item.colore, item.prezzoIvaEsclusa, item.prezzoIvaInclusa, item.disponibile, item.saldo);
    });
});
var Abbigliamento = /** @class */ (function () {
    function Abbigliamento(id, codprod, collezione, capo, modello, quantita, colore, prezzoIvaEsclusa, prezzoIvaInclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIvaEsclusa = prezzoIvaEsclusa;
        this.prezzoIvaInclusa = prezzoIvaInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    ;
    Abbigliamento.prototype.getsaldocapo = function () {
        return (this.prezzoIvaInclusa * this.saldo) / 100;
    };
    Abbigliamento.prototype.getacquistocapo = function () {
        return this.prezzoIvaInclusa - ((this.prezzoIvaInclusa * this.saldo) / 100);
    };
    return Abbigliamento;
}());
var prova = new Abbigliamento(6, 1033, "autunno", "felpa", 4320, 10, "rosso", 120, 146.4, "in magazzino", 30);
console.log("Lo sconto applicato prevede una diminuzione di: " + prova.getsaldocapo() + " euro");
console.log("quindi il prezzo finale del capo da lei selezionato è di: " + prova.getacquistocapo() + " euro");
document.createElement('th').innerText;
