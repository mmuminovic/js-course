function isSortedAndHow(arr) {
  // rastuce - [1,2,3,4]
  // opadajuce - [4,3,2,1]
  // nesortiran - [2,3,1,4]
  let order;

  if (arr[0] > arr[1]) {
    order = "yes, descending";
  } else if (arr[0] < arr[1]) {
    order = "yes, ascending";
  }

  for (let i = 1; i <= arr.length - 2; i++) {
    if (arr[i] < arr[i + 1] && order === "yes, ascending") {
      order = "no";
      break;
    }
    if (arr[i] > arr[i + 1] && order === "yes, descending") {
      order = "no";
      break;
    }
  }

  return order;
}


// const arr = [{text: 'bla', likes: 5}, {text: 'bla', likes: 6}]
// arr.sort((a,b) => a.likes - b.likes)