// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// readline.question("enter a string \n", (str) => {
//   try {
//     console.log(isPositive(str));
//   } catch (error) {
//     console.log(error);
//     console.log(`Number:  ${str}`);
//   }
// });
class Polygon {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
}

let poli = new Polygon(10, 20);

console.log(poli.width);
