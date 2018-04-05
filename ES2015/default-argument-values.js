"use strict";

// DEFAULT ARGUMENT VALUES
function withDefaults (a, b, c = "c") { // <--- c has a default value of "c"
  console.log(a, b, c);
}

withDefaults(); // undefined undefined 'c'
withDefaults("a", "b"); // a b c
withDefaults("one", "two", "three"); // one two three
withDefaults(null, null, null); // null null null <---- null will NOT be overridden by default