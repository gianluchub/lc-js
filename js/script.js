// console.log(document.getElementById('title2'));
// document.getElementById('title').innerHTML = "Hello World!";

// var testoTitolo;
// console.log(testoTitolo);
// testoTitolo = "Ciao";
// console.log(testoTitolo);
//
// testoTitolo = 8;
// console.log(testoTitolo);
// testoTitolo = '8';
// console.log(testoTitolo);
// var primaParola = "Hello";
// var secondaParola = " World scritto utilizzando le variabili!";
//
// // testoTitolo = "Hello" + " World";
// // console.log(testoTitolo);
//
// testoTitolo = primaParola + secondaParola;
// document.getElementById('title').innerHTML = testoTitolo;
// // alert(testoTitolo);
// console.log(testoTitolo);
// var tagNonEsistente = document.getElementById('title2');
// console.log(tagNonEsistente);

// testoTitolo = "Ciao ";
// var nome = prompt("Come ti chiami?");
// document.getElementById("title").innerHTML = testoTitolo + nome;

// var somma1 = 4 + 6;
// console.log(somma1);
//
// var somma2 = 9 + 7;
// console.log(somma2);
//
// var somma = somma1 + somma2;
//
// var sottr = somma - 3;
// console.log(sottr);
//
// var divisione = sottr / 2;
// console.log(divisione);
//
// var molt = divisione * somma;
// console.log(molt);
//
// document.getElementById("title").innerHTML = molt;

var anniStringa = prompt("Quanti anni hai?");
// var anni = "38";
console.log(anniStringa);
var anniNumero = parseInt(anniStringa);
console.log(anniNumero);

var annoCorrente = 2020;
console.log(annoCorrente);

var annoNascita = annoCorrente - anniNumero;
console.log(annoNascita);

document.getElementById("anni").innerHTML = anniStringa;
document.getElementById("anno-nascita").innerHTML = annoNascita;
