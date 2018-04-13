"use strict";

/**
 * Let's see constructor binding in practice.
 */
function Dog (name, breed) {
  this.name = name;
  this.breed = breed;

  this.greet = function greet () {
    console.log(`Woof, I am ${this.name} and I'm a ${this.breed}`)
  }
}

// here we make an "instance" of Dog?
// not really, we just get the object
// referred to as "this" from the function
// call
const dog = new Dog("Brok", "Dobrman");
dog.greet();

// what happens when we call the function
// without the new keyword?
try {
  const withoutNew = Dog("No", "Dog");
  console.log(withoutNew)
} catch (e) {
  console.error(e)
}

const obj = {
  some: "Param"
}

const boundDog = Dog.bind(obj);
const brokTwo = new boundDog("BrokTwo", "Puppy");
brokTwo.greet();
// we should get "Param", right?
console.log(brokTwo.some); // undefined

const brokThree = Dog.call(obj);
console.log(brokThree); // undefined