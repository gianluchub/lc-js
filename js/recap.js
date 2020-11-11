// Chiedi all’utente il suo nome,
var nome = prompt("Inserisci qui il tuo nome.");
console.log("Il tuo nome è: " + nome);
// poi chiedi il suo cognome,
var cognome = prompt("Inserisci qui il tuo cognome.");
console.log(cognome);
// poi chiedi il suo colore preferito
var colore = prompt("Inserici qui il tuo colore preferito.");
console.log(colore);
// Infine scrivi sulla pagina nomecognomecolorepreferito19
var numero = "19";
var password = nome + cognome + colore + numero;
console.log(password);

document.getElementById("passwordElement").innerHTML = password;
