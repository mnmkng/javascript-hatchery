"use strict";

/**
 * async/Await is an amazing feature of ES2017.
 */

// first we need some API that returns a promise
const { promisify } = require("util");
const fakeApi = require("../helpers/fakeApi");
const get = promisify(fakeApi.get);
const post = promisify(fakeApi.post);

/**
 * One of the important caveats is that you can only
 * use await inside of an async function.
 */
async function main () {

  // a simple function that gets data from a function
  // that returns a promise
  async function getData () {
    try {
      let result = await get();
      console.log(result.status);
    } catch (e) {
      console.error(e.message);
    }
  }

  getData();

  // you can use await multiple times
  // to pass the result of one into another
  // I'm skipping error handling inside the function
  // to show that any error will be catch-able
  // using a try/catch around the function invocation.
  async function twoRequests () {
    const { data } = await get();
    return await post(data.secretKey); // this await is not really necessary since we're awaiting the function invocation
  }

  try {
    console.log(await twoRequests());
  } catch (e) {
    console.error(e.message)
  }


  // you can of course build much more complicated functions
  async function bruteForce () {

    // this function is an await-able timeout
    // which is essentially a non-blocking sleep function
    function wait (ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
    }

    // retry just tries to get the data until the limit is reached
    // and waits 200ms between retries
    async function retry (operation, limit) {
      while (limit) {
        try {
          return await operation();
        } catch (e) {
          console.error(`Operation failed. Retries left: ${--limit}`);
          await wait(200);
        }
      }
      // this will produce an unhandled promise rejection, try lowering the limit
      throw new Error("Operation failed. No retries left.")
    }

    const { data } = await retry(get, 5);

    // let's assume we have no idea which of the keys holds the secretKey
    // so we have to brute force the API. In parallel.
    const promises =
      Object.values(data).map(
        async key => {
          try {
            return await post(key);
          } catch (e) {
            // unhandled, the promise would reject with error
            // this way it will resolve with false
            // and will not break Promise.all() below
            return false;
          }
        });

    // The loop populates an array with pending promises
    // because each post(key) returns a promise.
    // Promise.all waits until all the promises resolve (or one rejects)
    await Promise.all(promises);
    return promises.reduce((secret, result) => result ? result : secret)
  }

  // console.log("I FOUND:", await bruteForce());

}

main();