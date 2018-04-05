// ARRAY DESTRUCTURING
// simple
const numbers = [ 1, 2, 3, 4, 5 ];
const [ one, two ] = numbers;
console.log(one, two); // 1 2

// using array rest
const [ first, second, ...rest ] = numbers;
console.log(first, second); // 1 2
console.log(rest); // [ 3, 4, 5 ]

// separate declaration
let a, b;
[ a, b ] = numbers;
console.log(a, b); // 1 2

// default values
