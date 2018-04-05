"use strict";
const assert = require("assert");

// ARROW FUNCTIONS
// a simple function declaration
function add (a, b) {
  return a + b;
}

// may also be defined as an expression
const addExp = function (a, b) {
  return a + b;
};

// equal arrow function
const addArrow = (a, b) => a + b;

// single argument arrow functions may omit parentheses
const getName = obj => obj.name;

console.log(getName({ name: "Marty" })); // Marty

// multiline blocks need brackets {}
const logName = obj => {
  obj.name += " the Dude";
  console.log(obj.name);
};
logName({ name: "Johnny" }); // Johnny the Dude

// arrow functions are especially useful as callbacks
const arr = [ "pie", "pork", "cabbage" ];
arr.forEach(i => console.log(i)); // pie pork cabbage (on newlines)

// THIS BINDING
// regular functions have a dynamic THIS binding based on their execution context
// arrow functions have a lexically bound THIS which means
// that it will always refer to the THIS binding of their enclosing scope


// the THIS will be undefined because of "use strict"
// otherwise, it would point to the global object
function returnThis () {
  const arrowReturnThis = () => this; // it just returns its own THIS binding
  return [ this, arrowReturnThis() ]; // returns both the THIS of regular and arrow functions
}

// assert will pass both with and without use strict
// because the arrow function is bound to the THIS
// of its lexical scope, whatever it actually is
assert.deepEqual(...returnThis());

// You could assume that both method's THIS and func's THIS
// would be the same, but it is not the case.
const object = {
  data: "some stuff",
  method: () => this.data,
  func: function () {
    return this.data;
  }
};

// the THIS binding is evidently not the same
assert.throws(() => assert.deepEqual(object.method(), object.func()));


// ARGUMENTS OBJECT
// arrow functions have no arguments object
function logArgs () {
  console.log(arguments.length, arguments); // all "functions" have an arguments array-like object
}

logArgs("first", "second", "third"); // 3 { '0': 'first', '1': 'second', '2': 'third' }

// Arrow functions do not bind their own arguments object
// that does not mean there isn't any.
// Using arguments variable in an arrow function
// will look up the arguments of the enclosing scope.
const logArgsArrow = () => {
  return arguments;
};

// comparing arrow function arguments and global (module)
// level arguments show that they are equal
assert.deepEqual(arguments, logArgsArrow(1, 2, 3));


// changing the lexical scope of the arrow function
// definition correctly changes the arguments lookup
function gimmeArguments (first, second) {
  const inside = () => {
    return arguments;
  };
  return inside();
}

console.log(gimmeArguments("hello", "world")); // { '0': 'hello', '1': 'world' }