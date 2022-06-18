// 1) Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

class Grades {
  grades = [];
  addGrade = (grade) => {
    this.grades.push(grade);
  };
  displayGrades = () => {
    let average =
      this.grades.reduce((acc, cur) => acc + cur) / this.grades.length;
    console.log("The average is: ", average);
    return average.toFixed();
  };
}

let g = new Grades();

g.addGrade(55, 444);
g.addGrade(45);
g.addGrade(7, 333);
g.addGrade(53);
g.addGrade(59);

g.displayGrades();

//   Works!

// 2) Store a set of words in an array and display the contents both forward and backward.

let strArray =
  "Store a set of words in an array and display the contents both forward and backward".split(
    " "
  );

console.log(strArray);
