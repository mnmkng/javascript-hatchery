"use strict";


/**
 * To showcase streams, let"s try compressing
 * this file using the Node.js zlib module.
 */
const fs = require("fs");
const zlib = require("zlib");

const file = __filename;

// we create a Readable stream that internally
// reads from the provided file
fs.createReadStream(file)

  // then we pipe it to zlib for compression
  .pipe(zlib.createGzip())
  // and finally we write the compressed data into a file
  .pipe(fs.createWriteStream(file + ".gz"))
  // we also attach a listener to the finish event to be notified when done
  // remember, Streams are EventEmitters
  .on("finish", () => console.log("File successfully compressed"))
;

/**
 * HTTP request and response are also streams
 */
const http = require("http");

http.createServer((req, res) => {
  req.pipe(res);
}).listen(1234, () => console.log("Listening"));