"use strict";

/**
 * PROMISES
 * Even now with async / await, it is absolutely essential
 * to understand Promises in the JavaScript world.
 */

// util.promisify is a useful function that turns any
// function that accepts an error first callback as the
// last argument into a promise returning function
const { promisify } = require("util");
const { readFile } = require("fs");
const { get } = require("../helpers/fakeApi");

// let's enhance callback style readfile and fakeApi
const rf = promisify(readFile);
const api = promisify(get);
// rf and api now return a promise

// simple example that logs the content of this file
// __filename is a shorthand to get its path
// (1)
rf(__filename).then(data => {
  const string = data.toString(); // fs.readFile returns a Buffer
  console.log(string.split("\n")[ 0 ]); // PROMISES;
});

// .then() returns a promise, so they can be chained
// (2)
rf(__filename)
  .then(data => {
    const string = data.toString().split("\n")[ 0 ];
    console.log("FIRST HANDLER: ", string); // "use strict";
    return string;
  }) // return value becomes the "data" passed into the next then handler
  .then(data => console.log("SECOND HANDLER: ", data.toUpperCase())); // "USE STRICT";

// error handling is similar to .then()
// (3)
rf("/nonexistentfile").catch(err => console.error(err.message)); // ENOENT: no such file or directory, open '/nonexistentfile'

// this is probably the most common way to use promises
// if you run it multiple times, you will see the message change
// (4)
api()
  .then(data => console.log("STATUS:", data.status))
  .catch(err => console.error(err.message));

// A great thing about promise handlers is that
// you can throw errors inside and the resulting
// promise will automatically reject.
// (5)
rf(__filename)
  .then(() => {
    throw new Error("Error from Promise handler.")
  })
  .catch(e => console.error(e.message));

/**
 * Let's look into creating your own Promises.
 */
// (6)
const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Hello World!"), 500);
});

// The promise is pending immediately after creation.
// This will also always be the first console.log (not error)
// Do you know why?
console.log("I am not done yet!", promise);

// The .then() handler doesn't have to be attached immediately.
// As long as you do it in the current synchronous execution,
// you will be fine.
// (7)
promise.then(data => console.log(data));

// You can also attach the handler asynchronously later,
// or even after the promise has already resolved.
// (8)
setTimeout(() => {
  promise.then(data => console.log(data + " from Timeout"))
}, 100);
setTimeout(() => {
  promise.then(data => console.log(data + " after promise resolved."))
}, 1000);

// And now let's try wrapping a callback function
// into a promise.
// (9)
const wrapper = new Promise((resolve, reject) => {
  get((err, data) => {
    if (err) return reject(err);
    return resolve(data);
  })
});

// and use it (with some destructuring)
wrapper
  .then(({ data }) => console.log("Yay! The wrapper received data:", data.name, data.surname))
  .catch(({ message }) => console.error("Yay! The wrapper's call failed:", message));