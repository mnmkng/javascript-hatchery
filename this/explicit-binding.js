"use strict";

function prevExample() {
  const obj = {
    data: "MONEY!",
    outer() {

      const self = this;

      console.log("OUTER: ", this.data); // MONEY!
      function inner() {
        console.log(this.data) // undefined
      }
      setTimeout(function timer() {
        console.log("TIMER:", self.data) // undefined
      }, 500);
      inner.call(this);
    }
  };

  obj.outer();

// and if we disconnect the function from obj...
  const func = obj.outer.bind(obj);
  console.log(">>>>>>>>>>>>>FUNC<<<<<<<<<<<");
  func(); // everything undefined
}

prevExample();