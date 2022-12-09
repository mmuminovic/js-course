/* 
Napisati program koji će svaki neparan broj u nizu kvadrirati
a svaki paran korenovati

a^2 = a * a

Kvadratni koren
ako je 5*5 = 25
kvadratni koren od 25 je 5

*/

var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];

var resultDiv = document.getElementById("result");

// for (var i = 0; i <= niz.length - 1; i++) {
//   var el = document.createElement("p");
//   if (niz[i] % 2 === 0) {
//     el.textContent = "paran";
//   } else {
//     el.textContent = "neparan";
//   }
//   niz[i] = el; // html element
// }
var htmlElements = niz.map(function (item, index) {
  var el = document.createElement("p");
  if (item % 2 === 0) {
    el.textContent = "paran";
  } else {
    el.textContent = "neparan";
  }
  return el; // html element
});

// for (i = 0; i <= htmlElements.length - 1; i++) {
//   resultDiv.appendChild(niz[i]);
// }
htmlElements.forEach(function (item, index) {
  resultDiv.appendChild(item);
});

console.log(niz);
