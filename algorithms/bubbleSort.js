let swap = require("../utils/swap");
let unSortedNumbers = require("../utils/randomNumbers");

function bubbleSort(unsortedArr) {
  let start = new Date().getTime();
  let arr = [...unsortedArr];
  let length = arr.length;

  for (let i = 0; i < length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
      }
    }
  }

  let end = new Date().getTime();
  console.log(`Bubble Sort Time with ${arr.length}: ${end - start}ms`);
  return arr;
}

module.exports = bubbleSort;
