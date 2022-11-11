// var arr = [1, 2, 3, 4, 5, 8, 2, -84]; // n, 100000
// var parniBrojevi = [];

// for (var i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     parniBrojevi.push(i);
//   }
//   if (parniBrojevi.length === 5) {
//     break;
//   }
// }

// console.log(parniBrojevi);

// for (var i = 0; i <= arr.length - 2; i++) {
//   for (var j = i + 1; j <= arr.length - 1; j++) {
//     if (arr[i] + arr[j] === 10) {
//       indeksi.push(i)
//       indeksi.push(j)
//       break;
//     }
//   }
//   if (indeksi.length === 2) {
//     break;
//   }
// }

//////////////////////////////////
/// OVO DVOJE JE ISTO

// var i = 0;
// while (i < 100) {
//   console.log(i);
// }

// for (var i = 0; i < 100; i++) {
//   console.log(i);
// }

//////////////////////////////////

// var text = "";

// while (text.length < 100) {
//   text = text + "Muhamed ";
// }

// console.log(text);

//////////////////////////////////

var i = 1;
var fizBuzzFound = false;

while (!fizBuzzFound) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i, "FizzBuzz");
    fizBuzzFound = true;
    // break; ---- i sa keywordom "break" se moze prekinuti while loop
  } else {
    console.log(i);
  }
  i++;
}
