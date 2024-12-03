/*
Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
Non è necessario provvedere alla validazione delle email.
NON POTETE UTILIZZARE NESSUN METODO COME:
- includes
- indexOf
- find
- search
*/


//creo una lista di contatti
//1. chiedo all'utente la sua mail
//stampa un messaggio appropriato sull’esito del controllo.

const SavedMail = ['Matteo@gmail.com', 'Sara@gmail.com', 'Mirko@gmail.com', 'Simone@gmail.com']
const mailToFind = prompt('inserisci la tua mail😉');
let mailInList = false;

for(let i = 0; i < SavedMail; i++){
    if(SavedMail[i] === mailToFind){
        mailInList = true
    }
}

if (mailInList = true) {
    alert("la sua mail è valida😎")
} else {
    alert("La sua mail non è valida🤔")
}