"use strict";

// ARRAY SPREAD
// Array spread and rest operators are defined in ES2015

// MERGE ARRAYS
const arr1 = [ 1, 2 ];
const arr2 = [ 3, 4 ];
console.log([ ...arr1, ...arr2 ]); // [ 1, 2, 3, 4 ]
console.log([ 2, ...arr2, 5, ...arr1 ]); // [ 2, 3, 4, 5, 1, 2 ]

// SPREAD ARRAYS INTO FUNCTION ARGUMENTS
function sumThree (a, b, c) {
  return a + b + c;
}

const params = [ 4, 3, 3 ];
let result = sumThree(...params); // spread the array
console.log(result); // 10


// ARRAY REST
// COLLECT ALL FUNCTION ARGUMENTS
function sumAll (...args) {
  return args.reduce((sum, param) => sum + param, 0);
  // if you are not familiar with reduce,
  // it's essentially the same as
  // let sum = 0;
  // args.forEach(param => {
  //   sum += param;
  // });
  // return sum;
}

result = sumAll(4, 3, 3); // parameters are collected into array
console.log(result); // 10

// COLLECT SOME FUNCTION ARGUMENTS
function motherAndKids (name, age, ...kids) { // rest
  return { name, age, kids }
}

result = motherAndKids("Jane", 34, "Paul", "Martin", "Laura");
console.log(result); // { name: 'Jane', age: 34, kids: [ 'Paul', 'Martin', 'Laura' ] }

// OBJECT SPREAD
// Object spread/rest operators are a Stage 4 proposal (not yet in spec)

const obj1 = { one: 1, two: 2 };
const obj2 = { three: 3, four: 4 };
// MERGE USING ES2015
console.log(Object.assign(obj1, obj2)); // { one: 1, two: 2, three: 3, four: 4 }

// MERGE USING SPREAD
console.log({ ...obj1, ...obj2 }); // { one: 1, two: 2, three: 3, four: 4 }

// last one wins
const strings = { two: "two", three: "three" };
console.log({ ...obj1, ...strings, ...obj2 }); // { one: 1, two: 'two', three: 3, four: 4 }

// OBJECT REST
// No ES2015 equivalent

// mostly useful with destructuring, see destructuring.js

const person = {
  name: "John",
  surname: "Doe",
  age: 24,
  kids: [ "Jane", "Julia" ]
};

const { name, surname, ...rest } = person;
console.log(name, surname, "--->", rest); // John Doe ---> { age: 24, kids: [ 'Jane', 'Julia' ] }