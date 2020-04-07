let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat('apple');
// alert( speedy.stomach ); // apple

// This one also has it, why? fix please.
// alert( lazy.stomach ); // apple

// stomach is the reference type and both lazy and stomach share the same array and push in the same array;

// Fix:

let hamster1 = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy1 = {
  stomach: [],
  __proto__: hamster,
};

let lazy1 = {
  stomach: [],
  __proto__: hamster,
};

speedy1.eat('apple');
// alert(speedy1.stomach); // apple
// alert(lazy1.stomach); // apple
