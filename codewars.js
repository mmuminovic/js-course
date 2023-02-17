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

// https://www.codewars.com/kata/5a3dd29055519e23ec000074
function checkExam(correctAnswers, studentAnswers) {
  var points = 0;
  for (var i = 0; i <= correctAnswers.length - 1; i++) {
    if (studentAnswers[i] === "") {
      continue;
    }
    if (correctAnswers[i] === studentAnswers[i]) {
      points = points + 4;
    } else {
      points = points - 1;
    }
  }
  if (points < 0) {
    return 0;
  }
  return points;
}

// https://www.codewars.com/kata/580a4734d6df748060000045
function isSortedAndHow(array) {
  // "ascending" - rastuce, "descending" - opadajuce, "no" - nije sortiran
  // [1,3,6,9,6,11,16]
  var typeOfSort;
  if (array[0] < array[1]) {
    typeOfSort = "yes, ascending";
  } else if (array[0] > array[1]) {
    typeOfSort = "yes, descending";
  } else {
    typeOfSort = "no";
    return typeOfSort;
  }
  for (var i = 1; i <= array.length - 1; i++) {
    if (typeOfSort === "yes, ascending" && array[i - 1] > array[i]) {
      typeOfSort = "no";
      break;
    }
    if (typeOfSort === "yes, descending" && array[i - 1] < array[i]) {
      typeOfSort = "no";
      break;
    }
  }
  return typeOfSort;
}

// https://www.codewars.com/kata/539ee3b6757843632d00026b
var capitals = function (word) {
  var letters = word.split("");
  // "book".split('') ===> ["b", "o", "o", "k"]
  var indexesOfUpperCase = [];
  for (var i = 0; i <= letters.length - 1; i++) {
    if (letters[i] === letters[i].toUpperCase()) {
      indexesOfUpperCase.push(i);
    }
  }
  return indexesOfUpperCase;
};

// https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers) {
  let sum = 0;
  //     for(let i=0; i<= numbers.length - 1; i++){
  //       sum = sum + numbers[i]*numbers[i]
  //     }

  //     for(const number of numbers){
  //       sum = sum + number*number;
  //     }

  //     numbers.forEach(function(item,index){})
  numbers.forEach((item, index) => {
    sum = sum + item * item;
  });

  return sum;
}

// https://www.codewars.com/kata/559d2284b5bb6799e9000047
function addLength(str) {
  // str -> niz
  // niz.map -> 'word' + ' ' + word.length
  // "Hello world".split(' ') ==> ['Hello', 'world']
  // ['Hello', 'world'].map((item) => item + ' ' + item.length)
  const words = str.split(" ");
  const wordsWithLength = words.map((item, index) => {
    return item + " " + item.length;
  });
  return wordsWithLength;
}

// https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
function removeChar(str) {
  // 'str'.split('') ---> ['s', 't', 'r'];
  const newArr = str.split("");
  newArr.pop();
  newArr.shift();
  return newArr.join("");
}

// https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
function repeatStr(n, s) {
  // a = ''
  // '' + 'Hello' => 'Hello'
  let str = "";
  for (let i = 1; i <= n; i++) {
    str = str + s;
  }
  return str;
}

// https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
function isPalindrome(x) {
  // 'ana', 'oko', 'kuk'
  // const palindrome = x.split('').reverse().join('').toLowerCase()
  // return x.toLowerCase() === palindrome;
  const characters = x.split("");
  const charactersReverse = characters.reverse();
  const reversedWord = charactersReverse.join();
  return x.toLowerCase() === reversedWord.toLowerCase();
}
