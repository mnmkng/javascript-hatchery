"use strict";

/**
 * This is the same example as before,
 * yet it throws an error. Why?
 */
function prevExample() {
  const obj = {
    data: "MONEY!",
    outer() {
      console.log("OUTER: ", this.data); // MONEY!
      function inner() {
        console.log(this.data) // undefined
      }
      setTimeout(function timer() {
        console.log("TIMER:", this.data) // undefined
      }, 500);
      inner();
    }
  };

  obj.outer();

// and if we disconnect the function from obj...
  const func = obj.outer;
  console.log(">>>>>>>>>>>>>FUNC<<<<<<<<<<<");
  func(); // everything undefined
}

prevExample()


function solo() {
  console.log("His name is: ", this.name);
}

const wars = {
  name: "Han"
};

try {
  solo();
} catch (e) {
  console.error(e)
}

wars.solo = solo;

wars.solo();
