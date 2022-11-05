var niz = [1, 2, 3, 3, 3, 3, 3, 4, 4, 4, 6, 7, 8, 8, 9];
var filtriraniNiz = [];

for (var i = 0; i <= niz.length - 1; i++) {
  if (!filtriraniNiz.includes(niz[i])) {
    filtriraniNiz.push(niz[i]);
  }
}

console.log(filtriraniNiz);
