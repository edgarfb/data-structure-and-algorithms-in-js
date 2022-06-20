function insertionSort(unSortedArr) {
  let start = new Date().getTime();
  let arr = [...unSortedArr];

  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];
    let j = i;
    while (j > 0 && arr[j - 1] >= arr[j]) {
      arr[j] = arr[j - 1];
      j--;
      arr[j] = current;
    }
  }
  let end = new Date().getTime();
  console.log(`Insertion Sort Time with ${arr.length}: ${end - start}ms`);
  return arr;
}

module.exports = insertionSort;
