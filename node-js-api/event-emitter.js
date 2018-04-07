"use strict";

/**
 * Trivial showcase of EventEmitter.
 * @type {EventEmitter}
 */
const events = require('events');

// eventEmitter could be just about any EventEmitter
const eventEmitter = new events.EventEmitter();

// this is what we want to do when the event fires
function ringBell() {
  console.log('ring ring ring');
}
// this is how we attach the handler to the event
eventEmitter.on('doorOpen', ringBell);

// And now, whenever the eventEmitter emits
// the "doorOpen" event, our function will invoke.
// This is done by the EventEmitter implementers.
// Us, consumers, just use .on() and wait.
eventEmitter.emit('doorOpen');



/**
 * Let's read a file!
 */
const fs = require("fs");

// don't worry about how the emitter is created
const emitter = fs.createReadStream(__filename, {highWaterMark: 32}); // try playing with the size

// just focus on its use
emitter.on("data", d => console.log("READ A CHUNK OF DATA:\n", d.toString()));
emitter.on("end", () => console.log("FINISHED READING FILE"));