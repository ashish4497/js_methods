// Arrays to work on
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6];
var strings = ["this", "is", "a", "collection", "of", "words"];

// Use the above two arrays and practice array methods

// Find largest number in numbers
var shortArray = numbers.sort((a, b) => {
  return a - b;
});
shortArray[shortArray.length - 1]

// Find longest string in strings
function longestString(stringArr) {
  return stringArr.sort((a, b) => {
    return b.length - a.length
  })[0];
}
longestString(strings)


console.log(longestString(words));
// Find all the even numbers
numbers.filter((val) => {
  if (val % 2 == 0) {
    return val;
  }
})
// Find all the odd numbers
numbers.filter((val) => {
  if (val % 2 !== 0) {
    return val;
  }
})

// Find all the words that contain 'is' use string method 'includes'
strings.includes("is")

// Find all the words that contain 'is' use string method 'indexOf'
strings.indexOf("is")
// Check if all the numbers in numbers array are divisible by three use array method (every)
function isDivisible(val, id, array) {
  return (2 % val !== 0);
}
numbers.every(isDivisible)

//  Sort Array from smallest to largest
numbers.sort((a, b) => {
  return a - b;
});
// Remove the last word in strings
strings.pop(strings.length - 1);
// Add a new word in the array
strings.push("new item add");
// Remove the first word in the array
strings.shift();
// Place a new word at the start of the array use (upshift)
strings.unshift("ashish")
// Make a subset of numbers array [18,9,7,11]
numbers.slice(3, 7)
// Make a subset of strings array ['a','collection']
strings.splice(2, 3);
// Replace 12 & 18 with 1221 and 1881
var i = numbers.indexOf(12)
numbers[i] = 1221;
var i = numbers.indexOf(18)
numbers[i] = 1818;
// Replace words with string in strings array
var i = numbers.indexOf(5)
numbers[i] = "strings";
// Customers Array
var customers = [
  { firstname: "Joe", lastname: "Blogs" },
  { firstname: "John", lastname: "Smith" },
  { firstname: "Dave", lastname: "Jones" },
  { firstname: "Jack", lastname: "White" }
];
// Find all customers whose firstname starts with 'J'

// Create new array with firstname and lastname

// Sort the array created above alphabetically
