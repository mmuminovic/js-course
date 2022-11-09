/* 
Napisati program koji će svaki neparan broj u nizu kvadrirati
a svaki paran korenovati

a^2 = a * a

Kvadratni koren
ako je 5*5 = 25
kvadratni koren od 25 je 5

*/

var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];

// for (var i = 0; i <= niz.length - 1; i++) {
//   if (niz[i] % 2 === 0) {
//     niz[i] = Math.sqrt(niz[i]); // square root - kvadratni koren
//     // } else if(niz[i] % 2 === 1) {
//   } else {
//     // niz[i] = Math.pow(niz[i], 2);
//     niz[i] = niz[i] * niz[i];
//   }
// }

var resultDiv = document.getElementById("result");

for (var i = 0; i <= niz.length - 1; i++) {
  var el = document.createElement("p");
  if (niz[i] % 2 === 0) {
    el.textContent = "paran";
  } else {
    el.textContent = "neparan";
  }
  niz[i] = el; // html element
}

for (i = 0; i <= niz.length - 1; i++) {
  resultDiv.appendChild(niz[i]);
}

console.log(niz);
