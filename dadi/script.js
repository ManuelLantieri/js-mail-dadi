// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


//1 lista con numeri da 1 a 6
//chiedere all'utente di scegiere un numero da 1 a 6
//fai in modo che il computer scelga un numero da 1 a sei
//confrontando i due risultati determina il numero più alto
//stampare il vincitore che ha scelto il numero più alto

const numeriDado = [1, 2, 3, 4, 5, 6];

const scletaComputer = Math.round(Math.random()*5)+1;
console.log(scletaComputer)

let sceltaUtente;
alert("gioco dei dadi: il gioco consiste nel scegliere un numero più grande rispetto a quello scelto dal computer. Buona fortuna🍀🍀")
do {
    sceltaUtente = parseFloat(prompt("scegli un numero da 1 a 6🧐"))
} while(sceltaUtente < 1 || sceltaUtente >6);

alert(`nel frattempo il computer ha scelto il numero:${scletaComputer}😜`)


if (sceltaUtente > scletaComputer){
    alert(`complimenti hai vinto🎉🎉`);
} else if (scletaComputer > sceltaUtente) {
    alert(`il computer vince🤕🤕`)
} else {
    alert(`avete scelto entrambi lo stesso numero quindi nessuno vince🤦‍♂️`)
}



