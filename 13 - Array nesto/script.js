var arr = [1, 2, true, "test", undefined, 5, "test 1234", false];

var numbers = [];
var strings = [];
var booleans = [];

// typeof ===> "number" | "string" | "boolean" | "undefined"

for (var i = 0; i <= arr.length - 1; i++) {
  var izabraniElement = arr[i];
  if (typeof izabraniElement === "number") {
    numbers.push(izabraniElement);
  } else if (typeof izabraniElement === "string") {
    strings.push(izabraniElement);
  } else if (typeof izabraniElement === "boolean") {
    booleans.push(izabraniElement);
  } else if (typeof izabraniElement === "undefined") {
    console.log("Element niza sa indeksom " + i + " je undefined");
  }
}

console.log(numbers);
console.log(booleans);
console.log(strings);
