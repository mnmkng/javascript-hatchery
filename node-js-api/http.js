"use strict";

const http = require("http");

/**
 * A very BASIC http server!
 */
const PORT = 1234;

const basicServer = http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();

    response.on('error', (err) => {
      console.error(err);
    });

    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');

    const responseBody = { headers, method, url, body };

    response.write(JSON.stringify(responseBody));
    response.end();

  });
});

basicServer.listen(PORT, () => {
  console.log("Basic server listening on port: ", PORT)
});

/**
 * A better way to make servers.
 */
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json({ type: "*/*" }));

app.get("/", (req, res) => {
  const { headers, method, url, body } = req;
  res.json({ headers, method, url, body });
});

app.listen(2234, () => {
  console.log("Express server listening on port 2234.")
});