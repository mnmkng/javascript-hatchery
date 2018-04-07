"use strict";

const fs = require("fs");
const path = require("path");

/**
 * Let's start with a simple file read and write
 * with some changes to the data.
 */
fs.readFile(__filename, (err, data) => {
  if (err) throw err; // this cannot be try/catched, but I actually want to kill the process on error

  // data are in a Buffer
  let newData = data.toString().toUpperCase();

  // where to save?
  const saveTo = path.join(__dirname, "temp", path.basename(__filename) + "_uppercased");

  fs.writeFile(saveTo, newData, (err) => {
    if (err) return console.error(err);
    console.log("Finished writing file asynchronously!")
  })
});

/**
 * Of course you could do something like this,
 * but remember, synchronous operations block execution
 * of all your JavaScript, including your server operations,
 * listeners etc. It is an absolute anti-pattern and
 * you should never use synchronous methods
 * while your application is running.
 *
 * Feel free to use the sync methods in server startup
 * though, where the operation will only run once
 * to load some data, get configuration etc.
 */
const fileName = "http.js";
const source = path.join(__dirname, fileName);
const dest = path.resolve(".", "temp", fileName + "_lowercased")
const data = fs.readFileSync(source);
const lowercased = data.toString().toLowerCase();
fs.writeFileSync(dest, lowercased);

// This will log before the async file finishes writing.
// Not because the synchronous write is faster,
// but, as you already know, all synchronous operations
// have to finish before async operations are given a chance.
// The sync write above essentially blocks all other writes
// from taking place.
console.log("Finished writing file synchronously \u{1F4A9}");

/**
 * Finally, let's try it with streams.
 */
const pkg = "package.json";
const pkgPath = path.resolve("..", pkg);
const destPath = path.resolve("temp", pkg);

// Take a stream, pipe it into another stream
// and attach a listener to get notified
// when done. Easy! (but! no modification to the file!)
fs.createReadStream(pkgPath)
  .pipe(
    fs.createWriteStream(destPath)
      .on("finish", () => console.log("Finished piping a file into a file!")
      )
  )
;

// to modify the data, we need to try something else
const wrS = fs.createWriteStream(destPath + "_crazy")
  .on("finish", () => console.log("Finished writing a stream manually!")
  )
;

let counter = 0;
fs.createReadStream(pkgPath, { highWaterMark: 16 }) // only adding the watermark so we se more chunks
  .on("data", (chunk) => {

    // this writing technique is not entirely correct,
    // because it doesn't handle backpressure,
    // but that's outside of scope of this Hatchery
    if (counter % 2 === 0) {
      wrS.write(chunk.toString().toUpperCase())
    } else {
      wrS.write(chunk.toString().toLowerCase())
    }
    counter++;
    console.log(`${counter} chunks written to file.`)
  })
  .on("end", () => {
    wrS.end();
  })
;
