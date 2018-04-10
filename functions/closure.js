"use strict";

/**
 * Closure is an absolutely intuitive thing.
 * You just have to stop thinking too hard
 * about it.
 */


// nothing too surprising here
function foo () {
  const a = 2;

  function bar () {
    // bar has access to "a" in the scope
    // of the enclosing function
    console.log(a);
  }

  bar();
}

foo();

// here it gets a little interesting
function one () {
  const a = 2;

  function two () {
    console.log(a);
  }

  // returning the function object
  // not invoking two
  return two;
}

// saving the return value of one
// (which is the function "two" object)
// to a variable
const three = one();
// and now, bear witness to a closure
three(); // 2

// it will work in any way you can imagine
(function outer () {
  const a = 2;

  function inner () {
    console.log(a);
  }

  // defined below
  hoisted(inner);
})();

function hoisted (fn) {
  fn();
}

/**
 * Now to some "real world" examples!
 */
function wait (message) {
  setTimeout(function timer () {
    console.log(message);
  }, 100);
}

wait("It's a closure!");


// what do you think will happen?
// try invoking the function
function varLoop() {
  for (var i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log("V1: ", i);
    }, i * 200)
  }
}
// varLoop();

// and here?
function varLoop2() {
  for (var j = 1; j <= 5; j++) {
    (function timeout() {
      var k = j;
      setTimeout(() => {
        console.log("V2: ", k);
      }, k * 200)
    })();
  }
}
// varLoop2();

function letLoop() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log("L: ", i);
    }, i * 200)
  }
}
// letLoop();


