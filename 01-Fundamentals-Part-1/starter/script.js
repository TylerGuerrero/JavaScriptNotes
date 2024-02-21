let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log("Jonas");
console.log(23);

// standard way to write veribales in JavaScript is to use camel case
// let firstName = "Jonas";
// let first = "jonas";

// let 3years = 3; // variable name cant start with a number
// let jonas&matilda = 'JM' & not allowed for varibale names
// let function = 2; shouldnt use function because its a reserved key word
// let name = 'Jonas should avoid using variable name 'name' can casue bugs cause its a reserved word
let $function = 2; // can start variable names with '$'

// let Person = 'jonas' should only start your variable with a uppercase if its a object
let PI = 3.1415; // if its a hard coded immutable value the convenstion is to use uppercase for the whole variable name

// 7 Primitive Data Types

// 1) Number: Floating point numbers, ex) let age = 23
// 2) String: sequence of characters, ex) let firstName = 'Jonas'
// 3) Boolean: Logical type that can only be true or false, ex) let fullAge = true
// 4) Undefined: Value taken by a variable that is not yet defined, ex) let children
// 5) Null: means 'empty value' let a = nulls
// 6) Symbol: value that is unique
// 7) BigInt: Large integers than the Number type can hold

// ** JavaScript has dynamic typing: We do not need to manualy define the data type
// of the value stored in a variable. Instead, data types are determined automatically
// Value has type, not variable

true;
let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof checks what primite type of value you have
console.log(typeof true); // boolean
console.log(typeof javascriptIsFun); // boolean
console.log(typeof 23); // number
console.log(typeof "Jonas"); // string

javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null); // object, bug in JavaScript, its not suppose to be an object, developers for JavaScript wont fix it for legacy reasons

// blocked scoped
let age = 30;
age = 31; // let allows us to reassign/mutate  values

const birthYear = 1991; // const cannot reassign values, an immutable variable

// const job; // since const is immutable cant make empty const variables

// best to use const by default unless you need to reassign values use let
// this helps with reducing bugs this approach, because you cant reassign values

// function scoped
var job = "programmer"; // very similar to let
job = "teacher";

// doesnt create variable in the current scope
// JavaScript with assign this property to the global object
lastName = "Guerrero";
console.log(lastName);

// Math operators
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);
// 2 ** 3 means to the power of 3 which is (2 * 2 * 2)

const firstName = "Jonas";
const lastName = "Guerrero";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

// Assignment operators
// let x = 10 + 5;
// x += 10; // x = x + 10
// x *= 4; // x = x * 4
// x++; // x = x + 1, post-increment
// x--; // x = x - 1, post decrement
// console.log(x);

// Comparisio operators produce boolean values
console.log(ageJonas > ageSarah); // >, <, >=, <=
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// math operators usually go before comparison operators
console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, y = 10
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);

const firstName2nd = "Tyler";
const job2nd = "engineer";
const birthYear2nd = 1991;
const year2nd = 2037;

// uses type coersion to convert number to string
const tyler =
  "I'm " +
  firstName2nd +
  ", a " +
  (year2nd - birthYear) +
  " years old " +
  job +
  "!";

console.log(tyler);

// templates strings, makes it easier syntactially to concatenate strings
const tylerNew = `I'm ${firstName}, a ${
  year2nd - birthYear2nd
} year old ${job2nd}`;
console.log(tylerNew);

console.log(`Just a regaular String`);
console.log(`
  String with \n\
  multiple lines \n\
  Hello
`);

const age2nd = 19;

// control structure - allows to have control over
// the way the code is executed, if/else statement
if (age2nd >= 18) {
  console.log("Sarah can start driving license");
} else {
  const yearsLeft = 19 - age2nd;
  console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
}

const birthYear3rd = 1991;

// variables defined in if/else statement are in code blocks
// the variables in the code block are scoped to the code block
// which means you can only access those variables in the block

let century;
if (birthYear3rd <= 2000) {
  century = 20;
} else {
  century = 21;
}

console.log(century);

// type conversion, explicitly changes the type manually
// **type coeorsion, Javascript automatically changes the type behind the scenes for us
const inputYear = "1991";
console.log(Number(inputYear), inputYear); // type conversion
console.log(Number(inputYear) + 18); // type conversion
console.log(inputYear + 18); // type coersion
console.log(Number("Jonas")); // NaN (Not A Number), cant convert this string to a number
console.log(typeof NaN); // number
console.log(String(23), 23); // '23', 23

// **JavaScript can only convert to Three types: Number, String, Boolean

// type coersion, JavaScript will behind the scenes convert
// the values type to match the other values types so they
// can be the same type
console.log(`I am ` + 23 + `years old`); // gets convert to a string, + operator changes values to strings
console.log(`I am ` + String(23) + `years old`);
console.log(`23` - "10" - 3); // 10, // converted strings to numbers, minus operator changes values to numbers
console.log("23" * "2"); // 46 // *, converted strings to numbers, * operator converts strings to numbers
console.log("23" / "2"); // 11.5

let n = "1" + 1; // 11, + operator will convert numbers to strings with type coersion
n = n - 1; // 10 // * operator with type coersion will convert strings to numbers
console.log(n); // 10

// ****
// falsy values are values that arent false but
// when converted can become false
// falsy values: undefined, null, NaN, 0, ''
// truthy values: everything else
console.log(Boolean(0)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean("Jonas")); // true
console.log(Boolean({})); // true
console.log(Boolean("")); // false

// javasript will try to convert the value passed into
// if statement into a boolean value
const money = 0;
if (money) {
  console.log("Dont spend it all :)");
} else {
  console.log("You should get a job!");
}

let height;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

const age3rd = 18;
if (age3rd === 18) console.log("You just became an adult");

// ***
// 18 === 18, true, will use strict equality operator, check if the values and types are the exact same, will not use type coersion
// '18' == 18, true, will use loose equality operator, only checks if the values are the same using type coersion
// '18' === 18, false

// best to always use strict equality operator to avoid bugs

const favorite = prompt("Whats your favorite number");
console.log(favorite);
console.log(typeof favorite); // string

if (favorite === 23) console.log("Cool! 23 is an amazing number");
else if (favorite === 7) console.log(`7 is also cool number`);
else if (favorite === 9) console.log("9 is also a cool number");
else console.log("Number is not 23 or 7");

if (favorite !== 23) console.log("Why not 23?");

const hasDriverLicense = true;
const hasGoodVision = false;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

// if (shouldDrive && hsaGoodDrive) console.log("Sarah is able to drive");
// else console.log("Someone else should drive");

const isTired = true;
console.log((hasDriverLicense && hasGoodVision) || isTired);

if (hasDriverLicense && hasGoodVision && !isTired)
  console.log("Sarah is able to drive");
else console.log("Someone else should drive....");

const day = "Monday";

switch (day) {
  case "Monday": // uses strict equality, // day === "monday"
    console.log("Plan course structure");
    console.log("Go to coding metting ");
    break; // without the break code keeps executing
  case "Tuesday":
    console.log("Prepare theory videos");
    break;
  case "Wednseday":
  case "Thurseday":
    console.log("Write code examples");
    break;
    break;
  case "Friday":
    console.log("Record Videos");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Enjoy the weekend");
    break;
  default:
    console.log("Not a valid day");
}

if (day === "Monday") {
  console.log("Plan course structure");
  console.log("Go to coding metting ");
} else if (day === "Tuesday") {
  console.log("Prepare theory videos");
} else if (day === "Wednseday" || day === "Thurseday") {
  console.log("Write code examples");
} else if (day === "Friday") {
} else if (day === "Saturday" || day === "Sunday") {
  console.log("Enjoy the weekend");
} else {
  console.log("Not a valid day");
}

// experssions, piece of code that produces a value
3 + 4;
1971;

true && false && !false;

// statement, doesnt preoduces a value, usually ends with a semicolon
if (23 > 10) {
  const str = "23 is bigger";
}

const me = "Tyler";
console.log(`I'm ${2037 - 1991} years old ${me}`);

const age4th = 23;
age4th >= 18 ? console.log("Can drink now") : console.log("Can not drink");

const drink = age4th >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age4th >= 18) {
  drink2 = "wine";
} else {
  drink2 = "water";
}

console.log(drink2);

console.log(`I like to drink ${age4th >= 18 ? "wine" : "water"}`);
