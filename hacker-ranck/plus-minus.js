let nums = [-4, 3, -9, 0, 4, 1];

function plusMinus(arr) {
  // Write your code here
  let length = arr.length;
  let positives = 0;
  let negatives = 0;
  let zeros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positives++;
    } else if (arr[i] < 0) {
      negatives++;
    } else {
      zeros++;
    }
  }
  console.log("positives: ", (positives / length).toFixed(6));
  console.log("negatives: ", (negatives / length).toFixed(6));
  console.log("zeros: ", (zeros / length).toFixed(6));
}

console.log(plusMinus(nums));
