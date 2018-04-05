"use strict";

// VAR
// var declarations are function scoped,
// they don`t care about blocks at all
function functionScoped () {
  var say = "Hello";
  if (true) {
    var say = "World"; // overwrites previous declaration
  }
  console.log(say);
}

functionScoped(); // "World"

// var declarations are hoisted to the top of scope
function hoisted () {
  console.log(say); // does not throw error
  var say = "Bye";
}

hoisted(); // undefined

// LET & CONST
// let & const declarations are block scoped
function blockScoped () {
  let say = "Hello";
  if (true) {
    let say = "World"; // separate variable
  }
  console.log(say);
}

blockScoped(); // "Hello"

// let & const do not hoist,
// but throw an error instead
function referenceError () {
  console.log(say); // throws ReferenceError "say is not defined"
  let say = "Bye";
}

_handleError(referenceError);

// const defines a constant
function constant () {
  const say = "Hello";
  say = "World"; // throws TypeError "Assignment to constant variable"
}

_handleError(constant);

// it only prevents assignment to the variable though
// you can still easily mutate any underlying object
function notConstant () {
  const obj = { one: "one" };
  obj.one = "two"; // does not throw error
  console.log(obj);
}

notConstant(); // { one: 'two' }

// error handling helper
// note that the function definition is hoisted
function _handleError (func) {
  try {
    func();
  } catch (e) {
    console.log(e);
  }
}