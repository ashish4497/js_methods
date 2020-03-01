// Use below arrays to make questions for yourself and practice the methods like
// map
// forEach
// filter
// splics
// reduce
// etc ..

// Write atleast 10 different question for every method.

var pizzas = [
  "Deep Dish",
  "Peperoni",
  "Hawaiian",
  "Meatzza",
  "Spicy Mama",
  "Margherita"
];
// map 
pizzas.map((val) => {
  return val;
})

//for each
pizzas.forEach((val) => {
  console.log(val);
});

// filter 
pizzas.filter((val) => {
  return val;
});

var cuts = [
  "Chuck",
  "Brisket",
  "Shank",
  "Rib",
  "Plate",
  "Flank",
  "Short Loin",
  "Tenderloin",
  "Sirloin",
  "Round"
];

// map 
cuts.map((val) => {
  return val;
})

//for each
cuts.forEach((val) => {
  console.log(val);
});

// filter 
cuts.filter((val) => {
  return val;
});

var numbers = [1, 2, 3, 4, 5, 6, 23, 121, 345, 33, 23, 12, 435, 642, 66, 23];

//map 
numbers.map((val, id, arr) => {
  return val * 5;
});

//for each 
numbers.forEach((val, id) => {
  if (val >= 23) {
    console.log(val)
  }
});

//filter
numbers.forEach((val, id) => {
  if (id >= 4) {
    console.log(val)
  }
});

let users = [
  { id: 1, name: "John" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Mary" },
  { id: 4, name: "Roy" },
  { id: 5, name: "Rust" }
];

// map 
users.map((val) => {
  return val;
});

//for each
users.forEach((val) => {
  console.log(val);
});

// filter 
users.filter((val, id) => {
  if (id >= 3) {
    return (`${val}`);
  }
});

let arr = ['Bilbo', 'Gandalf', 'Nazgul'];
// map 
arr.map((val) => {
  return val;
})

//for each
arr.forEach((val) => {
  console.log(val);
});

// filter 
arr.filter((val) => {
  return val;
});

var color = ["red", "green", "gray", "yellow", "black"];

//map
color.map((val, id) => {
  return (`color Name ${val} color id_(${id})`);
});

//for each
color.forEach((val) => {
  console.log(val);
});

// filter 
color.filter + ((val) => {
  console.log(val);
});

var student = ["Arun", "Arun", "Raman", "Amit"];

//map
student.map((val, id) => {
  return (`student Name ${val} student id_(${id})`);
});

//for each
student.forEach((val) => {
  console.log(val);
});

// filter 
student.filter + ((val) => {
  console.log(val)
});