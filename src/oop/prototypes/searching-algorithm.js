let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

// 1. Use __proto__ to assign prototypes in a way that any property lookup will follow the path: pockets → bed → table → head

pockets.__proto__ = bed;
bed.__proto__ = table;
table.__proto__ = head;

// 2. Answer the question: is it faster to get glasses as pockets.glasses or head.glasses? Benchmark if needed.
// There is no difference in modern browsers.
