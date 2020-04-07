function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

// alert( a instanceof B ); // true because they are sharing one prototype