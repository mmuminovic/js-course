/*

SABIRANJE BROJEVA I UNOS PREKO PROMPT PROZORA

var prviBroj, drugiBroj, zbir;
prviBroj = +prompt("Unesite prvi broj");
drugiBroj = +prompt("Unesite drugi broj");

prviBroj = parseInt(prviBroj);
drugiBroj = parseInt(drugiBroj);

prviBroj = Number(prviBroj);
drugiBroj = Number(drugiBroj);

zbir = prviBroj + drugiBroj; // 11

// zbir++;
// zbir = zbir + 1;
// Nova vrednost za variijablu "zbir" je stara vrednost varijable zbir + 1
document.write(zbir);
*/

var a, b, rezultat;

// SABERI
document.getElementById("saberiButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a + b;
  document.getElementById("rezultat").textContent = rezultat;
});

// ODUZMI
document.getElementById("oduzmiButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a - b;
  document.getElementById("rezultat").textContent = rezultat;
});

// PODELI
document.getElementById("podeliButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a / b;
  document.getElementById("rezultat").textContent = rezultat;
});

// POMNOZI
document.getElementById("pomnoziButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a * b;
  document.getElementById("rezultat").textContent = rezultat;
});
