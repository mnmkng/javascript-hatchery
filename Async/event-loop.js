"use strict";

// WORKING WITH ASYNCHRONY
// The program output is a mess. Try to run the functions
// one by one and understand what's going on.

// Synchronous code executes first, then the async callbacks
function timeout500 () {
  console.log("FIRST");
  setTimeout(() => console.log("THIRD"), 500);
  console.log("SECOND");
}

timeout500();

// Setting the timeout to 0 works the same.
// Synchronous code always executes first.
// Only afterwards do the callbacks from the
// event loop get a chance to execute.
function timeout0 () {
  console.log("FIRST");
  setTimeout(() => console.log("SECOND?"), 0);
  console.log("THIRD?");
}

timeout0();

function postpone () {
  console.log("FIRST");
  setImmediate(() => console.log("THIRD"));
  console.log("SECOND");
}

postpone();

function defer () {
  console.log("FIRST");
  process.nextTick(() => console.log("THIRD"));
  console.log("SECOND");
}

defer();

// Let's make it an even bigger mess
const err1 = new Error("first error");
const err2 = new Error("second error");
console.log(err1);
console.error(err2);
// What's happening? console.log and console.error
// are actually asynchronous, but they use buffers
// to keep messages in correct order.
// The buffer is not shared though, so if you use both
// of them at the same time, they will both try to
// output to the STDOUT and STDERR (aka Terminal)
// and the lines will sometimes interleave.