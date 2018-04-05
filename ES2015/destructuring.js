"use strict";

// ARRAY DESTRUCTURING
const numbers = [ 1, 2, 3, 4, 5 ];

// simple
const [ one, two ] = numbers;
console.log(one, two); // 1 2

// using array rest
let [ first, second, ...rest ] = numbers;
console.log(first, second); // 1 2
console.log(rest); // [ 3, 4, 5 ]

// assigning to existing variables
[ first, second ] = numbers;
console.log(first, second); // 1 2

// swapping variables
let a = 1, b = 2;
[ a, b ] = [ b, a ];
console.log(a, b); // 2 1

// default values (first and second are already defined, but def is not)
let def;
[ first, second, def = "hello" ] = numbers.slice(0, 2); // [ 1, 2 ]
console.log(first, second, def); // 1 2 'hello'

// OBJECT DESTRUCTURING
const person = {
  name: "John",
  surname: "Doe",
  age: 24,
  dog: {
    breed: "Bulldog",
    weight: 20,
  }
};

// with rest and defaults
let { name, surname, mother = "Jane", ...other } = person;
console.log(name, surname, mother, "--->", other); // John Doe Jane ---> { age: 24, friend: { name: 'Maria', surname: 'Poe', age: 28 } }

// deep destructuring
let { dog: { breed } } = person;
console.log(breed); // Bulldog

// key renaming
let { name: firstname } = person;
console.log(firstname); // John

// destructuring function arguments with renaming
function getMeasurements ({ length: l, width: w }) {
  return [ l, w ];
}

const item = {
  id: 1,
  type: "box",
  length: 20,
  width: 40,
  price: 5
};

console.log(...getMeasurements(item)); // 20 40 (not [ 20, 40 ], see the spread)