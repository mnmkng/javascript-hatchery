"use strict";

// SYMBOLS, a new primitive type
// the main point of a symbol is to create a string-like
// value that cannot collide with any other value

// the identifier is just a name, it has no relevance to the actual symbol's value;
const ONE = Symbol("identifier");
const OTHER = Symbol("identifier");
console.log(ONE == OTHER); // false
console.log(ONE === OTHER); // false

// symbols can be created, stored and retrieved from a global store
const MY_SYM = Symbol.for("my_symbol");
const OTHER_SYM = Symbol.for("my_symbol");
console.log(MY_SYM === OTHER_SYM); // true

// most importantly, symbols can be used as keys in Objects
const obj = {
  [ MY_SYM ]: "stuff"
};

console.log(obj[ MY_SYM ]); // stuff

// while not appearing in the object's keys
console.log(Object.keys(obj)); // []

// they can be retrieved this way
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(my_symbol) ]


// FOR-OF-LOOP and Symbol.iterator
// all arrays natively have a function property under the Symbol.iterator key
const arr = [ 1, 2, 3 ];
console.log(arr[ Symbol.iterator ]); // [Function: values]

// this function is used to iterate over the array using a FOR-OF loop
for (const num of arr) {
  console.log(num); // 1 2 3 on new lines
}

// this function handles how the array should be iterated
arr[ Symbol.iterator ] = () => {
}; // replace with no-op function
try {
  for (const num of arr) {
    console.log(num);
  }
} catch (e) {
  console.log(e) // TypeError: Result of the Symbol.iterator method is not an object
}

// objects are not iterable by default
const object = { key: "value" };
try {
  for (const k of object) {
    console.log(k);
  }
} catch (e) {
  console.log(e) // TypeError: object is not iterable
}

// Maps and Sets are iterable
const map = new Map();
map.set("one", "first");
map.set("two", "second");
for (const k of map) {
  console.log(k); // [ 'one', 'first' ] [ 'two', 'second' ] on new lines
}

const set = new Set([11, 22, 33]);
for (const k of set) {
  console.log(k); // 11, 22, 33 on new lines
}