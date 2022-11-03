var arr = [];

function pushNumber() {
  var num = +document.getElementById("num").value;
  arr.push(num);
  document.getElementById("num").value = "";
}

document.getElementById("num").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    pushNumber();
    console.log(arr);
  }
});

document.getElementById("sortASC").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] < arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

document.getElementById("sortDESC").addEventListener("click", function () {
  for (var i = 0; i <= arr.length - 2; i++) {
    for (var j = i + 1; j <= arr.length - 1; j++) {
      if (arr[j] > arr[i]) {
        var pom = arr[i];
        arr[i] = arr[j];
        arr[j] = pom;
      }
    }
  }
  console.log(arr);
});

// NACI NAJVECI BROJ U NIZU
//   var max;
//   max = arr[0];
//   for (var i = 1; i <= arr.length - 1; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   console.log(max, "max");

// SORTIRANJE NIZA KORAK PO KORAK
// var niz = [6, 3, 1, 7, 8, 9, 3, 1];

// [6, 3, 1, 7, 8, 9, 3, 1]
// // i = 0
// // j = 1
// [3, 6, 1, 7, 8, 9, 3, 1]

// // i = 0
// // j = 2
// [1, 6, 3, 7, 8, 9, 3, 1]

// // i = 0
// // j = 3
// [1, 6, 3, 7, 8, 9, 3, 1]

// // i = 0
// // j = 4
// [1, 6, 3, 7, 8, 9, 3, 1]

// // i = 0
// // j = 5
// [1, 6, 3, 7, 8, 9, 3, 1]

// // i = 0
// // j = 6
// [1, 6, 3, 7, 8, 9, 3, 1]

// // i = 0
// // j = 7
// [1, 6, 3, 7, 8, 9, 3, 1]

// ///
// // i = 1
// // j = 2
// [1, 3, 6, 7, 8, 9, 3, 1]

// // i = 1
// // j = 3
// [1, 3, 6, 7, 8, 9, 3, 1]

// // i = 1
// // j = 4
// [1, 3, 6, 7, 8, 9, 3, 1]

// // i = 1
// // j = 5
// [1, 3, 6, 7, 8, 9, 3, 1]

// // i = 1
// // j = 6
// [1, 3, 6, 7, 8, 9, 3, 1]

// // i = 1
// // j = 7
// [1, 1, 6, 7, 8, 9, 3, 3]

// // i = 2
// // j = 3
// [1, 1, 6, 7, 8, 9, 3, 3]

// // i = 2
// // j = 4
// [1, 1, 6, 7, 8, 9, 3, 3]

// // i = 2
// // j = 5
// [1, 1, 6, 7, 8, 9, 3, 3]

// // i = 2
// // j = 6
// [1, 1, 3, 7, 8, 9, 6, 3]

// // i = 2
// // j = 6
// [1, 1, 3, 7, 8, 9, 6, 3]

// // i = 3
// // j = 4
// [1, 1, 3, 7, 8, 9, 6, 3]
// [1, 1, 3, 6, 8, 9, 7, 3]
// [1, 1, 3, 3, 8, 9, 7, 6]
