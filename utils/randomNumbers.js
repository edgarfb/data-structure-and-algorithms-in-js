function unSortedNumbers(amount, howLong = 100) {
  let nums = [];

  for (let i = 0; i < amount; i++) {
    let ranNum = Math.floor(Math.random() * howLong);
    nums[i] = ranNum;
  }
  return nums;
}

module.exports = unSortedNumbers;
