module.exports = function fakeApi (callback) {

  const data = {
    status: 200,
    data: {
      name: "John",
      surname: "Doe",
      age: 43
    }
  };

  const isSuccess = Boolean(Math.round(Math.random()));

  if (isSuccess) {
    setImmediate(callback, null, data);
  } else {
    setImmediate(callback, new Error("The API request failed."));
  }
};


