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

// Boolean - tip podataka
// var uslov = true;
// var drugiUslov = false;

// if (uslov) {
//   console.log("Ovo se desilo");
// } else {
//   console.log("Zadati uslov nije zadovoljen");
// }

// var prviSabirak = 1;
// var drugiSabirak = 2;

// if (prviSabirak > drugiSabirak) {
//   console.log("Prvi sabirak je veci");
// } else {
//   console.log("Prvi sabirak nije veci");
// }

var a, b, rezultat;

// SABERI
document.getElementById("saberiButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a + b;
  document.getElementById("rezultat").textContent = rezultat;
  if (rezultat < 0) {
    document.getElementById("rezultat").style =
      "background-color: red; color: white;";
  } else if (rezultat === 0) {
    document.getElementById("rezultat").style =
      "background-color: orange; color: white";
  } else {
    document.getElementById("rezultat").style =
      "background-color: green; color: white;";
  }
});

// ODUZMI
document.getElementById("oduzmiButton").addEventListener("click", function () {
  a = document.getElementById("prviBroj").value; // string
  b = document.getElementById("drugiBroj").value; // string

  // if (a === "" || b === "") {
  //   alert("Proverite vasa polja, neko od njih je prazno");
  //   return;
  // }

  a = Number(a); // pretvaramo u broj
  b = Number(b); // pretvaramo u broj

  // var obaBrojaSuPozitivna = a > 0 && b > 0;

  // var nisuObaBrojaPozitivna = a <= 0 || b <= 0;
  // nisuObaBrojaPozitivna === !obaBrojaSuPozitivna

  // if (!obaBrojaSuPozitivna) {
  //   console.log("Nisu oba broja pozitivna!");
  // }

  rezultat = a - b;
  document.getElementById("rezultat").textContent = rezultat;
  if (rezultat < 0) {
    document.getElementById("rezultat").style =
      "background-color: red; color: white;";
  } else if (rezultat === 0) {
    document.getElementById("rezultat").style =
      "background-color: orange; color: white";
  } else {
    document.getElementById("rezultat").style =
      "background-color: green; color: white;";
  }
  // if (rezultat > 0) {
  //   console.log("Rezultat je veci od nule");
  // }

  // if (rezultat > 1) {
  //   console.log("Rezultat je veci od 1");
  // }

  // if (rezultat > 2) {
  //   console.log("Rezultat je veci od 2");
  // }

  // if (rezultat > 0) {
  //   console.log("Rezultat je veci od nule");
  // } else if (rezultat > 1) {
  //   console.log("Rezultat je veci od 1");
  // } else if (rezultat > 2) {
  //   console.log("Rezultat je veci od 2");
  // }
});

// PODELI
document.getElementById("podeliButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a / b;
  document.getElementById("rezultat").textContent = rezultat;
  if (rezultat < 0) {
    document.getElementById("rezultat").style =
      "background-color: red; color: white;";
  } else if (rezultat === 0) {
    document.getElementById("rezultat").style =
      "background-color: orange; color: white";
  } else {
    document.getElementById("rezultat").style =
      "background-color: green; color: white;";
  }
});

// POMNOZI
document.getElementById("pomnoziButton").addEventListener("click", function () {
  a = +document.getElementById("prviBroj").value;
  b = +document.getElementById("drugiBroj").value;
  rezultat = a * b;
  document.getElementById("rezultat").textContent = rezultat;
  if (rezultat < 0) {
    document.getElementById("rezultat").style =
      "background-color: red; color: white;";
  } else if (rezultat === 0) {
    document.getElementById("rezultat").style =
      "background-color: orange; color: white";
  } else {
    document.getElementById("rezultat").style =
      "background-color: green; color: white;";
  }
});
