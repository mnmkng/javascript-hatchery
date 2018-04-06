const SECRET_KEY = Symbol("secret_key");

const data = {
  status: 200,
  data: {
    name: "John",
    surname: "Doe",
    age: 43,
    secretKey: SECRET_KEY
  },
};

module.exports = {
  get (callback) {
    const isSuccess = Boolean(Math.round(Math.random()));

    if (isSuccess) {
      setImmediate(callback, null, data);
    } else {
      setImmediate(callback, new Error("The API request failed."));
    }
  },
  post (data, callback) {
    if (data === SECRET_KEY) {
      setImmediate(callback, null, "Some Super Secret Stuff!");
    } else {
      setImmediate(callback, new Error("Invalid secret key."));
    }
  }
}


