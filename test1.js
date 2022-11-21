// Zadatak 1
function divisibleSumPairs(n, k, ar) {
  var numberOfPairs = 0;
  for (var i = 0; i < ar.length - 1; i++) {
    for (var j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        numberOfPairs++;
      }
    }
  }
  return numberOfPairs;
}

// Zadatak 2
function checkElementInSubArr(subArr, num) {
  var isOk = true;
  for (var k = 0; k < subArr.length; k++) {
    if (Math.abs(subArr[k] - num) > 1) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

function pickingNumbers(a) {
  var lengthOfLongestSubarray = 0;
  for (var i = 0; i <= a.length - 1; i++) {
    var subArr = [];
    subArr.push(a[i]);
    for (var j = 0; j <= a.length - 1; j++) {
      if (i === j) {
        continue;
      }
      var isNumOk = checkElementInSubArr(subArr, a[j]);
      if (isNumOk === true) {
        subArr.push(a[j]);
      }
    }
    if (subArr.length > lengthOfLongestSubarray) {
      lengthOfLongestSubarray = subArr.length;
    }
  }
  return lengthOfLongestSubarray;
}
