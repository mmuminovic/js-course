const min = (arr, toReturn) => {
  let result;
  if (toReturn === "value") {
    const sortedArr = arr.sort((a, b) => a - b);
    result = sortedArr[0];
  } else if (toReturn === "index") {
    const arrOfNumbers = [...arr]; // kopija niza arr
    const sortedArr = arrOfNumbers.sort((a, b) => a - b);
    const minNumber = sortedArr[0];
    result = arr.indexOf(minNumber);
  }
  console.log(result, toReturn);
  return result;
};

min([3, 1, 2, 0, 4, 5], "index");
min([3, 1, 2, 0, 4, 5], "value");
