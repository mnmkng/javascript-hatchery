"use strict";

// enhance default Object (which is a function)
Object.O1="O1";
// enhance its prototype property
// that is used to construct
// new object instances
Object.prototype.Op1="OP1";

// enhance Function (which is also a function)
Function.F1 = "F1";
// and its .prototype property (not its prototype)
Function.prototype.Fp1 = "FP1";

// create a function
const Cat = function(){};

// add a property to the function
Cat.C1 = "C1";

// add a property to the functions .prototype property
Cat.prototype.Cp1 = "CP1";

// construct an object using the Cat function
const mycat = new Cat();

// construct a plain object using the Object function
const o = {};
debugger; // because you can't easily console.log prototypes