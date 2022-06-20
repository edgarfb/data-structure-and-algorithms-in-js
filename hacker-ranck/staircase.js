function staircase(n) {
  // Write your code here
  let whiteSpaces = n - 1;
  for (let i = 1; i <= n; i++) {
    console.log(
      stringSums(i !== n ? " " : "", whiteSpaces--) + stringSums("#", i)
    );
  }
}

function stringSums(strIn, amout) {
  let str = strIn;
  for (let i = 1; i < amout; i++) {
    str += strIn;
  }
  return str;
}

// console.log(stringSums(" . ", 5));
