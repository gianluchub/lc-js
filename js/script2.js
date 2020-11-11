// var condizione = true;
// var x = 4;
// console.log(x);
// var y = 3;
// console.log(y);

var x = parseInt(prompt("Inserisci X"));
var y = parseInt(prompt("Inserisci Y"));
console.log("#1" + x);
console.log("#2" + y);
console.log("#3");
console.log(!isNaN(x) && !isNaN(y));
// console.log(isNaN(x));
// verifica da fare solo se sono entrambi dei numeri
if (!isNaN(x) && !isNaN(y)) {

  // blocco di istruzioni 1
  if ((x * y) > 10) {
    // blocco di istruzioni 1
    console.log("La condizione è vera!");
    document.getElementById('condizione').innerHTML = "La condizione è vera!";
    // alert("vero");
  } else {
    // blocco di istruzioni 2
    console.log("La condizione è falsa");
    document.getElementById('condizione').innerHTML = "La condizione è falsa!";
    // alert("falso");
  }

}
