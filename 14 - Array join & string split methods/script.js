var arr = ["Muhamed", "Haris", "Davud", "Mustafa"];

// var result = "";
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (i !== 0) {
//     result = result + "-" + arr[i];
//   } else {
//     result = result + arr[i];
//   }
// }

console.log(arr.join(".")); // pretvara niz u string

var text = "Muhamed.Haris.Davud.Mustafa";

console.log(text.split(".")); // pretvara string u niz
console.log(" ========================== ");

var loremIpsumText =
  "Integer commodo lacus non consectetur gravida. Donec velit nisl, tempor vel rutrum id, gravida sit amet arcu. Aenean lobortis est sed nisi vehicula, ut pellentesque elit tempus. Aenean tristique nisl erat. Sed sit amet dapibus erat. Nam ac purus ante. Nunc non dapibus ligula. Nunc fermentum pharetra consequat. Morbi in nulla metus. Donec sagittis lacinia enim. Cras pulvinar laoreet hendrerit. Sed est mi, viverra vel pellentesque euismod, varius eu mauris. Ut rutrum ipsum dui, a sodales justo porttitor ut. Integer pulvinar est vitae nisl sodales, eu interdum ligula ultricies. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos";

var recenice = loremIpsumText.split("."); // niz
var reci = loremIpsumText.split(" "); // niz

console.log("Recenice", recenice);
console.log("Reci", reci);

console.log("Dati tekst ima " + recenice.length + " recenica");
console.log("Dati tekst ima " + reci.length + " reci");

// array metoda "join" pretvara array u string
// string metoda "split" pretvara string u array

////////////////////
// TEKST ZADATKA //
/*
Naci broj slova iz datog teksta (loremIpsumText)
*/

// 1. Izdvojiti iz teksta sve karaktere
var charactersInText = loremIpsumText.split(""); // niz svih karaktera u tekstu (ukljucujuci tacku, zarez i razmak)
// console.log(charactersInText);

// 2. Filtrirati niz i iz njega izbaciti tacke, zareze, razmake i prazne stringove
// if(slovo !== '' && slovo !== ' ' && slovo !== '.' && slovo !== ',')
// 3. Izbrojati koliko taj dobijeni niz ima elemenata
