// TEMPLATE LITERALS
// essentially interpolated strings defined using BACK-TICKS
const person1 = "Martin";
const person2 = "Julia";

// simple interpolation
console.log(`Hello ${person1} and ${person2}!`); // Hello Martin and Julia!

// can be nested
console.log(`Hello ${person1} and ${`beautiful ${person2}`}!`); // Hello Martin and beautiful Julia!

// can take a function call
console.log(`This is a random number: ${Math.floor(Math.random() * 100)}`); // This is a random number: ???

// they use .toString() to determine content
const obj = {
  toString() {
    return "My nice String";
  }
};

console.log(`Stringified obj: ${obj}`); // Stringified obj: My nice String;

// support modification by functions
// modifed TL's are called TAGGED TEMPLATE LITERALS
function foo(strings, ...values) {
  console.log(strings);
  console.log(values);
  return _rebuildTemplateLiteral(strings, values);
}

const food = "PBJ Sandwich";
const drink = "Cold Brew";

// tagged TL, the strings and arguments are passed to foo before evaluating
let evaluated = foo`Insanely awesome ${food} and ${drink}. Oh yeah!`;
// strings: [ 'Insanely awesome ', ' and ', '. Oh yeah!' ]
// values: [ 'PBJ Sandwich', 'Cold Brew' ]

// whatever foo returns will become the TL
console.log(evaluated); // Insanely awesome PBJ Sandwich and Cold Brew. Oh yeah!


// helper function to reconstruct the broken down template literal
function _rebuildTemplateLiteral(strings, values) {
  return strings.reduce((s, v, i) => {
    return s + (i > 0 ? values[i - 1] : "") + v
  }, "");
}