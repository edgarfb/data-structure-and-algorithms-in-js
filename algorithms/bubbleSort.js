let swap = require("../utils/swap");
let unSortedNumbers = require("../utils/randomNumbers");

let unOrderArray = unSortedNumbers(100);

function bubbleSort(unsortedArr) {
  let start = new Date().getTime();
  let arr = [...unsortedArr];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - 1; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j - 1, j);
      }
    }
  }
  let end = new Date().getTime();
  console.log(`Bubble Sort Time: ${end - start}`);
  return arr;
}

module.exports = bubbleSort;
