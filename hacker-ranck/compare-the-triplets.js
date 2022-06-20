let a = [5, 6, 7];
let b = [3, 6, 10];

function compareTriplets(a, b) {
  // Write your code here
  let points = [0, 0];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      points[0] += 1;
    } else if (a[i] < b[i]) {
      points[1] += 1;
    }
  }

  return points;
}

console.log("points", compareTriplets(a, b));
