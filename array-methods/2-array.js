var words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot'
];
//Write a function findLongestWord that takes an array of words and returns the longest one.
//If there are 2 with the same length, it should return the first occurrence.
function longestString(words) {
  return words.sort((a, b) => {
    return b.length - a.length
  })[0];
}
longestString(words)
[0] // returns the first 0 index of strong in longest one


var numbers1 = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];
// Create a sumArray function that takes an array of numbers1 as a parameter, and calculate the sum of all its numbers
function sumArray(numbers1) {
  sum = 0;
  numbers1.forEach(element => {
    sum = sum + element;
  });
  return sum;
}
sumArray(numbers1)
// Use reduce method of array
numbers1.reduce((val, current) => val + current, 0);
// Use the above sum and calculate the average.
var grandTotal = numbers1.reduce((val, current) => val + current, 0);
let average = grandTotal / numbers1.length;
console.log(average);


var numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];
//Write a function averageNumbers that receives an array of numbers2 and calculate the average of the numbers
function avgArray(numbers2) {
  sum = 0;
  numbers2.forEach(element => {
    sum = sum + element;
  });
  var avg = sum / numbers2.length;
  return sum;
}
avgArray(numbers2);



var words2 = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace'
];
//Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words2) {
  var wordAvg = words2.sort((a, b) => {
    return b.length - a.length
  })[0];
  var avg = wordAvg.length / wordAvg.length
  return avg;
}
averageWordLength(words2);


