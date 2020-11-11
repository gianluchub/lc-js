// Inserisci due parole, quale è la piu lunga?

// chiedi all'utente parola 1
var parola1 = prompt("Inserisci la prima parola");
console.log(parola1);
// chiedi all'utente parola 2
var parola2 = prompt("Inserisci la seconda parola");
console.log(parola2);
// verifica parola più lunga tra le due
var lunghezzaParola1 = parola1.length;
console.log(lunghezzaParola1);
var lunghezzaParola2 = parola2.length;
console.log(lunghezzaParola2);

if (lunghezzaParola1 > lunghezzaParola2) {
  // blocco istruzioni 1
  document.getElementById('messaggio').innerHTML = "Parola 1 vince";
} else if(lunghezzaParola1 < lunghezzaParola2) {
  // blocco istruzioni 2
  document.getElementById('messaggio').innerHTML = "Parola 2 vince";
} else {
  // blocco istruzioni 3
  document.getElementById('messaggio').innerHTML = "Pareggio";
}
