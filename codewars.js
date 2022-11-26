// https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
function sortByLength(array) {
  // array => niz stringova
  // ["hello", "world", "bye", "welcome"]
  for (var i = 0; i <= array.length - 1; i++) {
    for (var j = 0; j <= array.length - 1; j++) {
      if (array[i].length < array[j].length) {
        var pom = array[i];
        array[i] = array[j];
        array[j] = pom;
      }
    }
  }
  return array;
}

// https://www.codewars.com/kata/5813d19765d81c592200001a
function dontGiveMeFive(start, end) {
  var count = 0;

  for (var i = start; i <= end; i++) {
    var numString = "" + i; // 123 => "123", String(i)
    if (!numString.includes("5")) {
      count++;
    }
  }

  return count;
}

// https://www.codewars.com/kata/544a54fd18b8e06d240005c0

// min([1,2,3,4,5], 'value') // => 1
// min([1,2,3,4,5], 'index') // => 0

function min(arr, toReturn) {
  var minimum = arr[0];
  var minIndex = 0;
  for (var i = 1; i <= arr.length - 1; i++) {
    if (arr[i] < minimum) {
      minimum = arr[i];
      minIndex = i;
    }
  }
  if (toReturn === "index") {
    return minIndex;
  } else if (toReturn === "value") {
    return minimum;
  }
}

// wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

// https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
function wave(str) {
  var wavedStrings = [];
  for (var i = 0; i <= str.length - 1; i++) {
    var word = str.toLowerCase(); // sva slova u stringu pretvara u mala slova
    var letters = word.split(""); // "hello".split("") ===> ["h", "e", "l", "l", "o"]
    // split => "hey hello world".split(" ") === ["hey", "hello", "world"]
    if (letters[i] === " ") {
      continue;
    }
    letters[i] = letters[i].toUpperCase(); // pretvara sva slova u velika slova
    // za i=0 ===> letters = ["H", "e", "l", "l", "o"]
    // za i=1 ===> letters = ["h", "E", "l", "l", "o"]
    word = letters.join("");
    wavedStrings.push(word);
  }
  return wavedStrings;
}

/*
var myName = "Muhamed"

var nameLetters = myName.split('');
console.log(nameLetters);
var reversedLetters = nameLetters.reverse()
console.log(reversedLetters);
var reversedName = reversedLetters.join('');

console.log(reversedName);
*/
