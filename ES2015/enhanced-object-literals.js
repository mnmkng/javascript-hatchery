"use strict";
const assert = require("assert");

// SHORTHAND SYNTAX
const name = "joe", surname = "doe", age = 34;

// whenever you would type:
const obj = {
  name: name,
  surname: surname,
  age: age
};

// you can just use the shorthand syntax:
const short = {
  name,
  surname,
  age
};

// for short objects, don't fear to inline it
const inline = { name, surname, age };

// asserts pass
assert.deepEqual(obj, short);
assert.deepEqual(short, inline);

// SHORTHAND FUNCTION DECLARATIONS
// similarly to properties, even functions may me defined using shorthands
const wrapper = {
  shorthandMethod (a, b) {
    return a + b;
  },
  regularSyntaxMethod: function (a, b) {
    return a + b;
  },
  ofCourse: "you can add some data too"
};

console.log(wrapper.shorthandMethod(3, 5)); // 8
console.log(wrapper.regularSyntaxMethod(3, 5)); // 8

// GETTERS AND SETTERS
// using the keywords GET and SET, one may define
// getter and setter functions that will behave
// similar to data properties
const fakeClass = {
  _stuff: "Awesome Stuff", // the underscore is a convention for private properties
  get stuff () {
    return this._stuff.toUpperCase();
  },
  set stuff (value) {
    this._oldStuff.push(this._stuff);
    this._stuff = value;
  },
  _oldStuff: [],
  get oldStuff () { // defining only a getter throws on attempt to set the property
    return this._oldStuff.join(", ");
  }
};

console.log(fakeClass.stuff); // AWESOME STUFF
console.log(fakeClass._stuff); // Awesome Stuff
fakeClass.stuff = "Not so Awesome Stuff";
console.log(fakeClass.stuff); // NOT SO AWESOME STUFF
console.log(fakeClass._stuff); // Not so Awesome Stuff
fakeClass.stuff = "Some more stuff";
console.log(fakeClass.oldStuff); // Awesome Stuff, Not so Awesome Stuff
try {
  fakeClass.oldStuff = "FAIL";
} catch (e) {
  console.error(e); // TypeError: Cannot set property oldStuff of #<Object> which has only a getter
}

// COMPUTED PROPERTY NAMES
// keys must always be strings, but the value may be dynamically computed
const one = "one";
const two = "two";

function generateId () {
  return Math.floor(Math.random() * 1000)
}

const computed = {
  [ one + two ]: "concatenated",
  [ generateId() ]: "is my ID"
};

console.log(computed); // { 'RANDOM_NUMBER': 'is my ID', onetwo: 'concatenated' }