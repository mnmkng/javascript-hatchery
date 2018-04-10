/**
 * Trivial IIFE examples.
 */

var a = 2;

(function IIFE() {

  var a = 3;
  console.log(a); // 3

})();

console.log(a); // 2


x = 2;

(function IIFE(globalObject) {

  var x = 3;
  console.log(x); // 3
  console.log(globalObject.x); // 2

})(global);

console.log(x); // 2


/**
 * A short example of a module.
 */
function CoolModule() {
  // those variables are effectively
  // hidden from outside scope
  const something = "cool";
  const another = [1, 2, 3];

  function doSomething() {
    console.log(something);
  }

  function doAnother() {
    console.log(another.join(" ! "));
  }

  // exporting the inner functions,
  // essentially creating an API
  return {
    doSomething,
    doAnother
  }
}
// "requiring" the module
const foo = CoolModule();

// using its API
foo.doSomething();
foo.doAnother();