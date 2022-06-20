let nums = [1, 2, 3, 4, 5];
// let nums = [1, 3, 5, 7, 9];

function miniMaxSum(arr) {
  // Write your code here
  let minMax = [0, 0];
  let sorted = arr.sort((a, b) => a - b);
  minMax[0] = sorted.slice(0, 4).reduce((acc, curr) => acc + curr);
  minMax[1] = sorted.slice(arr.length - 4).reduce((acc, curr) => acc + curr);
  console.log(minMax.toString().split(",").join(" "));
  return minMax;
}

console.log(miniMaxSum(nums));
