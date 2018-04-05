// ARRAY DESTRUCTURING
const numbers = [ 1, 2, 3, 4, 5 ];

// simple
const [ one, two ] = numbers;
console.log(one, two); // 1 2

// using array rest
let [ first, second, ...rest ] = numbers;
console.log(first, second); // 1 2
console.log(rest); // [ 3, 4, 5 ]

// assigning to existing variables
[ first, second ] = numbers;
console.log(first, second); // 1 2

// default values
[ first, second, def = "hello" ] = numbers.slice(0, 2); // [ 1, 2 ]
console.log(first, second, def); // 1 2 'hello'

// OBJECT DESTRUCTURING
const person = {
  name: "John",
  surname: "Doe",
  age: 24,
  dog: {
    breed: "Bulldog",
    weight: 20,
  }
};

// with rest and defaults
let { name, surname, mother = "Jane", ...other } = person;
console.log(name, surname, mother, "--->", other); // John Doe Jane ---> { age: 24, friend: { name: 'Maria', surname: 'Poe', age: 28 } }

// deep destructuring
let { dog: { breed } } = person;
console.log(breed); // Bulldog

// key renaming
let {name: firstname} = person;
console.log(firstname); // John