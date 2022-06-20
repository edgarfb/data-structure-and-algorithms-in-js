let swap = require("./../utils/swap");
let unSortedNumbers = require("./../utils/randomNumbers");

// The selection sort works finding the lesser number of the inner loop and save
// its index  in the "min" variable and in the end of the current loop it swap with the element of the  outer loop

function selectionSort(unOrderArray) {
  let start = new Date().getTime();

  let arr = [...unOrderArray];

  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    swap(arr, i, min);
  }

  let end = new Date().getTime();
  console.log(
    `Selection Sort Time with ${arr.length} elements: ${end - start}ms`
  );
  return arr;
}

module.exports = selectionSort;
