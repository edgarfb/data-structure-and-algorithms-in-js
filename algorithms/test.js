let swap = require("./../utils/swap");
let unSortedNumbers = require("./../utils/randomNumbers");

let selectionSort = require("./selectionSort");
let bubbleSort = require("./bubbleSort");
let insertionSort = require("./insertionSort");

let unOrderArray = unSortedNumbers(10000);
console.log("Elements in the array: ", unOrderArray.length);

let bubbleSortedArray = bubbleSort(unOrderArray);
let selectionSortedArray = selectionSort(unOrderArray);
let insertionSortedArray = insertionSort(unOrderArray);
