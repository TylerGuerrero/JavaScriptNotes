// activate strict mode,
// best practice to use in all JS files at the top
"use strict";

// ** use strict
// catches Uncaught References, without it the browser willnot catch the error
// catches when code has current or future reserved key words used as a variable

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// const interface = "Audio";
// const private = 543;
// const if = 23;

function logger() {
  console.log("My name is Jonas");
}

// calling // running // invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  console.log(apples, oranges);
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;

  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);
console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

// functions are values as well, just like strings booleans, and numbers

calcAge1();
// function declarations,
// you can invoke function declarations before they are defined in your code
function calcAge1(birthYear) {
  const age = 2037 - birthYear;
  return age;
}

const calculatedAge = calcAge1(1991);
console.log(calculatedAge);

// function expressions, anonymous function
const calcAg2 = function (birthYear) {
  return 2037 - birthYear;
};
console.log(calcAg2(1991));

// arrow functions, they work like function expressions
// they dont get access to the 'this' keyword, functions decalarations and express do
const calcAge3 = (birthYear) => 2037 - birthYear;
const age = calcAge3(1991);
console.log(age);

const yearsUntilRetirmnet = (birthYear, firstName) => {
  const age = 2037 - birthYear;
  const retirment = 65 - age;
  return `${firstName} retires in ${retirment} years`;
};

console.log(yearsUntilRetirmnet(1991, "Jonas"));
console.log(yearsUntilRetirmnet(1981, "Tyler"));

function cutFruitPieces(fruit) {
  return fruit * 4;
}

function fruitProcessorAlt(apples, oranges) {
  const applePieces = cutFruitPieces(apples);
  const orangePieces = cutFruitPieces(oranges);

  const juice = `Juice with ${applePieces} apples and ${orangePieces} oranges.`;
  return juice;
}

console.log(fruitProcessorAlt(2, 3));

const friend1 = "Micheal";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Micheal", "Steven", "Peter"];
console.log(friends);

//* */
// const only primitive values are immutable,
// with const arrays and object are mutable
// years = ['Bob', 'Alice'], cannot create new array/object can only mutate
const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);

// arrays can have any type of values in them, doesnt have to be consistent
const firstName = "Jonas";
const jonas = [firstName, "Schmedtamnn", 2037 - 1991, "teacher", friends];
console.log(jonas);

// Exercise
const calcAge = function (birthYear) {
  return 2037 - birthYear;
};

const years2nd = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years2nd)); // Nan, not a number

const age1 = calcAge(years2nd[0]);
const age2 = calcAge(years2nd[1]);
const age3 = calcAge(years2nd[years2nd.length - 1]);
console.log(age1, age2, age3);

const ages = [
  calcAge(years2nd[0]),
  calcAge(years2nd[2]),
  calcAge(years2nd[years2nd[years2nd.length - 1]]),
];

console.log(ages);

const friends2nd = ["Micheal", "Steven", "Peter"];
const newLength = friends2nd.push("Jay"); // adds value to the back of the array, returns the new length of the array
console.log(friends2nd);
console.log(newLength);

friends2nd.unshift("John"); // adds element the the front of the array and returns the new length of the array
console.log(friends2nd);

friends2nd.pop(); // removes the element at the back of the array, returns removed element
const popped = friends2nd.pop();

console.log(popped);
console.log(friends2nd);

friends2nd.shift(); // remove element from the start of the array, returns the element
console.log(friends2nd);

console.log(friends2nd.indexOf("Steven")); // returns index where element is first seen
console.log(friends2nd.indexOf("Bob")); // return -1

friends2nd.push(23);
console.log(friends2nd.includes("Steven")); // returns true if element is in array, false if not
console.log(friends2nd.includes("Bob")); // returns false
console.log(friends2nd.includes(23));

if (friends.includes("Peter")) console.log("Friends peter in array");

// Objects, key value pair objects
const jonasArray = [
  "Jonas",
  "Schmedtann",
  2037 - 1991,
  ["Micheal", "Peter", "Steven"],
];

// object literal syntax
const jonasObj = {
  firstName: "Jonas",
  lastName: "Schmedtann",
  age: 2037 - 1991,
  job: "teacher",
  friends: ["Micheal", "Peter", "Steven"],
};
console.log(jonasObj);

// dot notations, canont use expressions, only use keys defined
console.log(jonasObj.lastName);

const nameKey = "Name";
// square bracket notation, can put any expression
console.log(jonasObj["first" + nameKey]);
console.log(jonasObj["last" + nameKey]);
console.log(jonasObj["lastName"]);

// console.log(jonas.'last' + nameKey); // cant do that

const insterestedIn = prompt(
  "What do you want know about jonas ?, bewteen firstName, lastName, age, job, and friends"
);
// console.log(jonas.insterestedIn); // undefined
console.log(jonas[insterestedIn]);

if (jonas[insterestedIn]) {
  console.log(jonas[insterestedIn]);
} else {
  console.log("Wrong request");
}

// add properties
jonas.location = "Orlando";
jonas["twitter"] = "@hello";
console.log(jonas);

// Challenge
// Jonas has 3 friends, and his best friends is called Micheal
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friends is called ${jonas.friends[0]}`
);

const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtann",
  birthYear: 1991,
  job: "teacher",
  hasDriverLicense: true,
  // method
  // calcAge: function () {
  //   console.log(this);
  //   return 2037 - this.birthYear; // this points to the object in this context
  // },
  calcAge: function () {
    this.age = 2037 - this.birthYear; // add property to object
    return this.age;
  },
  getSummary: function () {
    return `${this.firstName} is a ${this.calaAge()}-year old ${
      jonas.job
    }, and he has ${this.hasDriverLicense ? "a" : "no"} drivers license`;
  },
};

console.log(jonas.calcAge());
console.log(jonas["calcAge"]());
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);
console.log(jonas.age);

console.log(jonas.getSummary());
