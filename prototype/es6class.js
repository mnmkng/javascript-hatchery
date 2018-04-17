

class Animal {

  constructor (name) {
    this._name = name
  }

  isAnimal() {
    return true
  }

  get name() {
    return this._name;
  }

}

const zebra = new Animal("Zebra");
console.log("AM I AN ANIMAL",zebra.isAnimal())
console.log("NAME: ", zebra.name)

// const fn = zebra.name;
// console.log(fn);


class Dog extends Animal {

  constructor (name, breed) {
    super(name);
    this._breed = breed;
  }

  isAnimal() {
    return "No, I AM A DOG"
  }

  get breed () {
    return this._breed
  }
}

const dog = new Dog("Alík", "Pinč");

console.log(dog.name);