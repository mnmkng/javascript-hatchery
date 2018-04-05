// DEFAULT ARGUMENT VALUES

function withDefaults (a, b, c = "c") {
  console.log(a, b, c);
}

withDefaults(); // undefined undefined 'c'
withDefaults("a", "b"); // a b c
withDefaults("one", "two", "three"); // one two three
withDefaults(null, null, null); // null null null <---- null will NOT be overriden by default