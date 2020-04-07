function Rabbit2() {}
Rabbit2.prototype = {
  eats: true
};

let rabbit2 = new Rabbit2();

// alert( rabbit2.eats ); // true

// 1.
function Rabbit3() {}
Rabbit3.prototype = {
  eats: true
};

let rabbit3 = new Rabbit3();

Rabbit3.prototype = {};

// alert( rabbit3.eats ); // true because existing instances are not affected

// 2.

function Rabbit4() {}
Rabbit4.prototype = {
  eats: true
};

let rabbit4 = new Rabbit4();

Rabbit4.prototype.eats = false;

// alert( rabbit4.eats ); // false

// 3.

function Rabbit5() {}
Rabbit5.prototype = {
  eats: true
};

let rabbit5 = new Rabbit5();

delete rabbit5.eats;

// alert( rabbit5.eats ); // true

// 4.
function Rabbit6() {}
Rabbit6.prototype = {
  eats: true
};

let rabbit6 = new Rabbit6();

delete Rabbit6.prototype.eats;

// alert( rabbit6.eats ); // undefined