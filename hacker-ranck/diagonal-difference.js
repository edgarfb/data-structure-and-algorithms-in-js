let nums = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let oppositeIndex = arr.length - 1;
  let absolute = 0;
  // sumDiagonal[0]  === left-to-right
  // sumDiagonal[1]  === right-to-left
  let sumDiagonal = [0, 0];
  for (let i = 0; i < arr.length; i++) {
    sumDiagonal[0] += arr[i][i];
    sumDiagonal[1] += arr[i][oppositeIndex--];
  }
  absolute = Math.abs(sumDiagonal[0] - sumDiagonal[1]);
  return absolute;
}

console.log(diagonalDifference(nums));
