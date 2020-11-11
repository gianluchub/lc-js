// Gioco: pari o dispari?

// chiediamo all'utente se sceglie pari o dispari
var pariODispariUtente = prompt("Scegli pari o dispari");
// chiediamo un numero compreso tra 1 e 9 all'utente
var numeroUtente = parseInt(prompt("Inserisci un numero compreso tra 1 e 9"));
console.log(numeroUtente);
// generiamo un numero casuale compreso tra 1 e 9
var numeroPC = Math.floor(Math.random() * 9) + 1;
console.log(numeroPC);
// sommiamo i due numeri
var somma = numeroUtente + numeroPC;
console.log(somma);
// valutiamo se la somma è pari o dispari
console.log(somma % 2);

// % (modulo) = resto della divisione intera
var pariODispariPC = "";
if(somma % 2 == 0) {
  pariODispariPC = "pari";
} else {
  pariODispariPC = "dispari";
}

console.log("Scelta Utente: " + pariODispariUtente);
console.log("Risultato PC: " + pariODispariPC);

// se la somma è pari e l'utente ha scelto pari, ha vinto
// se la somma è dispari e l'utente ha scelto dispari, ha vinto
// negli altri casi ha perso
if(pariODispariUtente == pariODispariPC) {
  alert("Hai vinto!");
} else {
  alert("Hai perso!");
}
