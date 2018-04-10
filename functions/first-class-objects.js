"use strict";

/**
 * Let's examine the fact that functions
 * are also objects.
 */

// you can reference a function from within
// by its name
(function foo () {
  console.log(foo.name)
})();

const bar = function () {
  console.log(bar.toString())
  // throw new Error()
};
bar();


// to some this may be surprising, but it's true
// functions are objects and can have properties attached
function fooBar (hello, world) {
  console.log(arguments);
}

fooBar.myProp = "prop"; // no error

// let's examine the function object
console.log(">>>>>>>>fooBar Properties<<<<<<<<<<");
console.log(Object.getOwnPropertyDescriptors(fooBar));
fooBar("hello", "world");

// we can also examine the function's prototype
console.log(">>>>>>>>fooBar Prototype<<<<<<<<<<");
const funcProt = Object.getPrototypeOf(fooBar);
console.log(Object.getOwnPropertyDescriptors(funcProt));
