/**
 * Let's showcase how this works with
 * default binding.
 */
globalVar = "Hi!";

function defaultB() {
  console.log(this.globalVar) // Hi!
}
defaultB();

function strictDefault() {
  "use strict"; // use strict can also be specified for a single function, don't do it
  console.log(this) // undefined
}
strictDefault();

// the above examples don't really
// showcase the problem though
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