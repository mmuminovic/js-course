// Napisati skriptu koja ce u konzoli ispisati tablicu mnozenja
var i, j;

var tablica = document.getElementById("tablica"); // html element
for (i = 1; i <= 10; i++) {
  var row = document.createElement("tr"); // html element koji smo kreirali
  var th = document.createElement("th"); // html element koji cemo dodati u row
  th.textContent = i;
  row.appendChild(th);

  for (j = 1; j <= 10; j++) {
    var proizvod = i * j;
    var td = document.createElement("td");
    td.textContent = proizvod;
    row.appendChild(td);
    console.log(i + "x" + j + "=" + proizvod);
  }

  tablica.appendChild(row);
}
