let swap = require("./../utils/swap");
let unSortedNumbers = require("./../utils/randomNumbers");

let nums = unSortedNumbers(5);

function insertionSort(unOrderArray) {
  let start = new Date().getTime();
  let arr = [...unOrderArray];
  for (let i = 1; i < arr.length; i++) {
    let key = i;
    while (key > 0) {
      if (arr[key] < arr[key - 1]) {
        swap(arr, key - 1, key);
      }
      key--;
    }
  }
  let end = new Date().getTime();
  console.log(`Insertion Sort Time: ${end - start}`);
  return arr;
}

module.exports = insertionSort;
