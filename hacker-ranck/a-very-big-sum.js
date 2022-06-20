let randomNumbers = require("../utils/randomNumbers");

let nums = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];
// let nums = randomNumbers(5, 1000000000);

function aVeryBigSum(ar) {
  // Write your code here
  let total = 0;
  for (let i = 0; i < ar.length; i++) {
    total += ar[i];
  }
  return total;
}

console.log(aVeryBigSum(nums));
