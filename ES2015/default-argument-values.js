"use strict";

// DEFAULT ARGUMENT VALUES
function withDefaults (a, b, c = "c") { // <--- c has a default value of "c"
  console.log(a, b, c);
}

withDefaults(); // undefined undefined 'c'
withDefaults("a", "b"); // a b c
withDefaults("one", "two", "three"); // one two three
withDefaults(null, null, null); // null null null <---- null will NOT be overridden by default

// the default can even be a function call (any expression, really)
function withFunctionCall(first, second = Math.floor(Math.random() * 1000)) {
  console.log(first, second);
}

withFunctionCall("random number: "); // "random number: ???"