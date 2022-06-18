function unSortedNumbers(amount) {
  let nums = [];

  for (let i = 0; i < amount; i++) {
    let ranNum = Math.floor(Math.random() * 100);
    nums[i] = ranNum;
  }
  return nums;
}

module.exports = unSortedNumbers;
